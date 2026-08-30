import { describe, expect, it } from "vitest";
import {
  buildLocaleSwitchHref,
  DEFAULT_ROUTE_LOCALE,
  getLocaleFromPathname,
  localizePath,
  replacePathLocale,
  stripLocaleFromPathname
} from "./i18n";

describe("locale routes", () => {
  it("uses Chinese as the default route locale", () => {
    expect(DEFAULT_ROUTE_LOCALE).toBe("zh");
  });

  it("detects only supported locale prefixes", () => {
    expect(getLocaleFromPathname("/en/projects/loom")).toBe("en");
    expect(getLocaleFromPathname("/zh")).toBe("zh");
    expect(getLocaleFromPathname("/fr/projects")).toBeUndefined();
    expect(getLocaleFromPathname("/english/projects")).toBeUndefined();
  });

  it("adds and replaces locale prefixes", () => {
    expect(localizePath("/", "zh")).toBe("/zh");
    expect(localizePath("/projects/petsona", "zh")).toBe("/zh/projects/petsona");
    expect(replacePathLocale("/zh/projects/loom", "en")).toBe("/en/projects/loom");
  });

  it("preserves query parameters and fragments when switching languages", () => {
    expect(buildLocaleSwitchHref("/zh/projects/loom", "en", "from=home", "#demo")).toBe(
      "/en/projects/loom?from=home#demo"
    );
  });

  it("strips locale prefixes without changing unprefixed paths", () => {
    expect(stripLocaleFromPathname("/zh/projects")).toBe("/projects");
    expect(stripLocaleFromPathname("/en")).toBe("/");
    expect(stripLocaleFromPathname("/projects")).toBe("/projects");
  });

  it("does not prefix external links, mail links, or static assets", () => {
    expect(localizePath("https://example.com", "zh")).toBe("https://example.com");
    expect(localizePath("mailto:hello@example.com", "zh")).toBe("mailto:hello@example.com");
    expect(localizePath("/resume/caroline-xia-resume-zh.pdf", "zh")).toBe("/resume/caroline-xia-resume-zh.pdf");
  });
});
