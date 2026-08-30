import { describe, expect, it } from "vitest";
import { homepageExperiences } from "@/data/experience";
import { profile } from "@/data/profile";

describe("homepage content", () => {
  it("features only the two approved internship experiences", () => {
    expect(homepageExperiences.map((experience) => experience.id)).toEqual([
      "bytedance-seed-aigc",
      "tiktok-ai-advertising"
    ]);
  });

  it("keeps the structured strengths complete in both locales", () => {
    expect(profile.homeStrengths).toHaveLength(4);

    for (const strength of profile.homeStrengths) {
      expect(strength.title.en).toBeTruthy();
      expect(strength.title.zh).toBeTruthy();
      expect(strength.description.en).toBeTruthy();
      expect(strength.description.zh).toBeTruthy();
    }
  });
});
