import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
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
    expect(projects.find((project) => project.slug === "petsona")?.dateRange).toBe("2026.02-2026.06");
    expect(projects.find((project) => project.slug === "global-top-star")?.title.zh).toContain("你一定要成为全球顶流");
    expect(projects.find((project) => project.slug === "global-top-star")?.dateRange).toBe("2026.06-2026.07");
    expect(projects.find((project) => project.slug === "curious-conch")?.dateRange).toBe("2026.02-2026.05");
  });
});
