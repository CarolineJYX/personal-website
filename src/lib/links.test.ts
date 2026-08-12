import { describe, expect, it } from "vitest";
import { filterRenderableLinks, shouldRenderLink } from "./links";

describe("link rendering", () => {
  it("hides links without href", () => {
    expect(shouldRenderLink({ label: "Resume" })).toBe(false);
  });

  it("filters unavailable link labels", () => {
    expect(shouldRenderLink({ label: "TBD", href: "https://example.com" })).toBe(false);
    expect(shouldRenderLink({ label: { en: "Resume", zh: "PLACEHOLDER" }, href: "https://example.com" })).toBe(false);
  });

  it("keeps confirmed links", () => {
    expect(filterRenderableLinks([{ label: "GitHub", href: "https://github.com/CarolineJYX", external: true }])).toHaveLength(1);
  });
});
