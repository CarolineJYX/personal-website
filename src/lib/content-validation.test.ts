import { describe, expect, it } from "vitest";
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { educationItems, researchItems } from "@/data/education";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { findForbiddenDisplayTerms, findForbiddenPrivateTerms, findIncompleteLocalizedStrings, findInvalidProjectMediaPaths, validateProjectSlugs } from "./content-validation";

describe("content validation", () => {
  it("does not expose forbidden placeholder terms", () => {
    expect(findForbiddenDisplayTerms()).toEqual([]);
  });

  it("does not render visible ACT labels in project and education surfaces", () => {
    const sourceFiles = [
      "src/components/project-card.tsx",
      "src/app/projects/[slug]/page.tsx",
      "src/components/education-list.tsx",
      "src/app/not-found.tsx"
    ];
    const forbiddenTerms = ["ACT I", "ACT II", "ACT III", "ACT IV", "Production Act", "ACT {", "This act is not in the programme"];

    const matches = sourceFiles.flatMap((file) => {
      const source = readFileSync(join(process.cwd(), file), "utf8");
      return forbiddenTerms.filter((term) => source.includes(term)).map((term) => `${file}: ${term}`);
    });

    expect(matches).toEqual([]);
  });

  it("does not expose private contact or demographic details", () => {
    expect(findForbiddenPrivateTerms()).toEqual([]);
  });

  it("provides both English and Chinese for localized content", () => {
    expect(findIncompleteLocalizedStrings()).toEqual([]);
  });

  it("uses unique URL-safe project slugs", () => {
    expect(validateProjectSlugs()).toBe(true);
  });

  it("uses local, web-safe project media paths", () => {
    expect(findInvalidProjectMediaPaths()).toEqual([]);
  });

  it("keeps Agentic video tracking as research with complete bilingual highlights", () => {
    const research = researchItems.find((item) => item.id === "agentic-video-tracking");

    expect(research).toBeDefined();
    expect(research?.highlights).toHaveLength(3);
    expect(research?.highlights?.every((highlight) => highlight.en.trim() && highlight.zh.trim())).toBe(true);
  });

  it("keeps experience periods aligned-friendly and separates durations", () => {
    const periodPattern = /^(\d{4}\.\d{2})(-(\d{4}\.\d{2}|Present))?$/;

    expect(experiences.map((experience) => experience.period).filter((period) => period.includes(" · "))).toEqual([]);
    expect(experiences.every((experience) => periodPattern.test(experience.period))).toBe(true);
    expect(experiences.find((experience) => experience.id === "shanghai-zhipu-film-business-operations")?.duration).toBe("2 mos");
    expect(experiences.find((experience) => experience.id === "agricultural-bank-business-operations")?.duration).toBe("2 mos");
    expect(experiences.find((experience) => experience.id === "pharmadeer-data-analyst")?.duration).toBe("1 mo");
  });

  it("publishes the latest bilingual Seed and TikTok timeline", () => {
    const seed = experiences.find((experience) => experience.id === "bytedance-seed-aigc");
    const advertising = experiences.find((experience) => experience.id === "tiktok-ai-advertising");
    const aigc = experiences.find((experience) => experience.id === "tiktok-aigc-model");

    expect(experiences.slice(0, 3).map((experience) => experience.id)).toEqual([
      "bytedance-seed-aigc",
      "tiktok-ai-advertising",
      "tiktok-aigc-model"
    ]);
    expect(seed?.period).toBe("2026.08-Present");
    expect(seed?.highlights?.[0].zh).toContain("保密协议");
    expect(seed?.highlights?.[0].en).toContain("confidentiality agreement");
    expect(advertising?.period).toBe("2026.06-2026.08");
    expect(advertising?.highlights).toHaveLength(5);
    expect(aigc?.highlights).toHaveLength(5);
  });

  it("keeps the latest education and research ordering", () => {
    expect(educationItems.map((item) => item.id)).toEqual(["nus-master", "leeds-exchange", "sta-bachelor"]);
    expect(educationItems.find((item) => item.id === "sta-bachelor")?.rank).toBe("1/40");
    expect(researchItems.find((item) => item.id === "agentic-video-tracking")?.period).toBe("2025.04-2025.09");
    expect(researchItems.find((item) => item.id === "faust-violence-nlp")?.period).toBe("2023.09-2024.04");
  });

  it("uses the latest project title and date ranges without adding a seventh case", () => {
    expect(projects).toHaveLength(6);
    expect(projects.map((project) => project.slug)).toEqual([
      "tonight-wish-card",
      "petsona",
      "global-top-star",
      "loom",
      "living-chronicles",
      "curious-conch"
    ]);
    expect(projects.find((project) => project.slug === "tonight-wish-card")?.title.zh).toBe(
      "今夜星愿卡：你的夜生活即时推荐助手"
    );
    expect(projects.find((project) => project.slug === "tonight-wish-card")?.dateRange).toBe("2026.07-2026.08");
    expect(projects.find((project) => project.slug === "petsona")?.dateRange).toBe("2026.02-2026.06");
    expect(projects.find((project) => project.slug === "global-top-star")?.title.zh).toBe("你一定要成为全球顶流：AI 互动影游");
    expect(projects.find((project) => project.slug === "global-top-star")?.dateRange).toBe("2026.06-2026.07");
    expect(projects.find((project) => project.slug === "loom")?.dateRange).toBe("2026");
    expect(projects.find((project) => project.slug === "curious-conch")?.dateRange).toBe("2026.02-2026.05");
  });

  it("keeps updated case studies complete and ordered", () => {
    const sectionOrder = ["overview", "role", "problem", "solution", "flow", "outcome"];

    for (const slug of ["tonight-wish-card", "petsona", "global-top-star", "loom", "living-chronicles"]) {
      const project = projects.find((candidate) => candidate.slug === slug);

      expect(project?.sections.map((item) => item.id)).toEqual(sectionOrder);
      expect(project?.sections.every((item) => item.body.every((paragraph) => paragraph.en && paragraph.zh))).toBe(true);
    }
  });

  it("publishes only approved external project links", () => {
    const externalLinks = projects.flatMap((project) => [project.externalUrl, ...(project.resources?.map((item) => item.href) ?? [])])
      .filter((href): href is string => Boolean(href))
      .filter((href) => /^https?:\/\//.test(href));

    expect(externalLinks).toEqual(["https://app.familyecho.sg"]);
  });

  it("references present media and separates view/download PDF actions", () => {
    const publicRoot = join(process.cwd(), "public");

    for (const project of projects) {
      for (const path of [project.coverImage, ...(project.gallery?.flatMap((media) => [media.src, media.poster]) ?? [])]) {
        if (path) {
          expect(existsSync(join(publicRoot, path))).toBe(true);
        }
      }

      const pdfResources = project.resources?.filter((resource) => resource.type === "pdf") ?? [];
      if (pdfResources.length) {
        expect(pdfResources.map((resource) => resource.behavior)).toEqual(["open", "download"]);
        expect(new Set(pdfResources.map((resource) => resource.href)).size).toBe(1);
        expect(existsSync(join(publicRoot, pdfResources[0].href))).toBe(true);
      }
    }
  });

  it("keeps videos web-compatible in size and metadata declarations", () => {
    const videos = projects.flatMap((project) => project.gallery?.filter((media) => media.type === "video") ?? []);

    expect(videos).toHaveLength(4);
    expect(videos.every((video) => video.src.endsWith(".mp4") && video.poster && video.preview)).toBe(true);
    expect(videos.every((video) => Math.max(video.width, video.height) <= 1280)).toBe(true);
    expect(videos.every((video) => statSync(join(process.cwd(), "public", video.src)).size < 45 * 1024 * 1024)).toBe(true);
  });

  it("publishes the approved status, roles, and resources", () => {
    const tonight = projects.find((project) => project.slug === "tonight-wish-card");
    const petsona = projects.find((project) => project.slug === "petsona");
    const globalTopStar = projects.find((project) => project.slug === "global-top-star");
    const loom = projects.find((project) => project.slug === "loom");
    const living = projects.find((project) => project.slug === "living-chronicles");

    expect(tonight?.role?.zh).toBe("产品经理");
    expect(tonight?.status).toBe("completed");
    expect(tonight?.gallery?.filter((media) => media.type === "video")).toHaveLength(3);
    expect(petsona?.status).toBe("public");
    expect(globalTopStar?.status).toBe("completed");
    expect(loom?.role?.zh).toBe("产品经理、前端开发");
    expect(loom?.launchStatus?.zh).toBe("已完成 Demo");
    expect(living?.status).toBe("public");
    expect(living?.launchStatus?.zh).toBe("已上线");
    expect(living?.externalUrl).toBe("https://app.familyecho.sg");
    expect(living?.externalLabel?.en).toBe("Family Echo Workshop");
  });
});
