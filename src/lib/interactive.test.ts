import { describe, expect, it } from "vitest";
import { getInteractiveZones } from "./interactive";

describe("interactive world data adapter", () => {
  it("builds the five ordered gallery chapters", () => {
    const zones = getInteractiveZones();

    expect(zones.map((zone) => zone.id)).toEqual(["entry", "experience", "projects", "education", "contact"]);
    expect(zones.every((zone) => zone.panels.length > 0)).toBe(true);
  });

  it("keeps project and contact destinations actionable", () => {
    const zones = getInteractiveZones();
    const projects = zones.find((zone) => zone.id === "projects");
    const contact = zones.find((zone) => zone.id === "contact");

    expect(projects?.panels).toHaveLength(6);
    expect(projects?.panels.every((panel) => panel.href?.startsWith("/projects/"))).toBe(true);
    expect(contact?.panels.some((panel) => panel.href?.startsWith("mailto:"))).toBe(true);
    expect(contact?.panels.filter((panel) => panel.external)).toHaveLength(2);
  });

  it("adapts education and research data into one actionable chapter", () => {
    const education = getInteractiveZones().find((zone) => zone.id === "education");

    expect(education?.panels.length).toBeGreaterThanOrEqual(5);
    expect(education?.panels.every((panel) => panel.href === "/education")).toBe(true);
  });
});
