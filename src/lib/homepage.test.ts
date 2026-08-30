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

  it("uses one complete reviewed strengths paragraph in both locales", () => {
    expect(profile.strengths[0].en).toContain("pre-training");
    expect(profile.strengths[0].en).toContain("Context and Harness Engineering");
    expect(profile.strengths[0].zh).toContain("Pre-training");
    expect(profile.strengths[0].zh).toContain("Context / Harness Engineering");
  });
});
