import { describe, expect, it } from "vitest";
import { getLocalizedText } from "./i18n";
import { getNextProject, getProjectBySlug, getProjectCaseHref, getProjectSlugs } from "./projects";

describe("project lookup", () => {
  it("finds a project by slug", () => {
    const project = getProjectBySlug("petsona");

    expect(project ? getLocalizedText(project.title) : undefined).toBe("Petsona: A Social App for Your Pet's AI Persona");
  });

  it("links Petsona to its live site", () => {
    expect(getProjectBySlug("petsona")?.externalUrl).toBe("http://43.135.181.240/");
  });

  it("keeps Petsona case navigation internal", () => {
    const project = getProjectBySlug("petsona");

    expect(project ? getProjectCaseHref(project) : undefined).toBe("/projects/petsona");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getProjectBySlug("missing-project")).toBeUndefined();
  });

  it("does not expose internship-derived project slugs", () => {
    expect(getProjectBySlug("memora")).toBeUndefined();
    expect(getProjectBySlug("tiktok-dm-agent")).toBeUndefined();
    expect(getProjectBySlug("nebula-ai-short-drama")).toBeUndefined();
    expect(getProjectBySlug("agentic-video-tracking")).toBeUndefined();
  });

  it("cycles to the next project", () => {
    expect(getNextProject("living-chronicles")?.slug).toBe("curious-conch");
  });

  it("only includes independent project detail slugs", () => {
    expect(getProjectSlugs()).toEqual([
      "tonight-wish-card",
      "petsona",
      "global-top-star",
      "loom",
      "living-chronicles",
      "curious-conch"
    ]);
  });

  it("keeps Curious Conch last and features the first three projects", async () => {
    const { featuredProjects, projects } = await import("@/data/projects");

    expect(projects.at(-1)?.slug).toBe("curious-conch");
    expect(featuredProjects.map((project) => project.slug)).toEqual(["tonight-wish-card", "petsona", "global-top-star"]);
  });
});
