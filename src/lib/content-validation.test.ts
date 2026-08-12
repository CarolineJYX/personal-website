import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { researchItems } from "@/data/education";
import { experiences } from "@/data/experience";
import { findForbiddenDisplayTerms, findForbiddenPrivateTerms, findIncompleteLocalizedStrings, validateProjectSlugs } from "./content-validation";

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
});
