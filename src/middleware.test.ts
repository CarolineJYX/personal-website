import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";
import { middleware } from "./middleware";

describe("locale middleware", () => {
  it("permanently redirects the root URL to Chinese", () => {
    const response = middleware(new NextRequest("https://www.jingyuanxia.com/"));

    expect(response.status).toBe(308);
    expect(response.headers.get("location")).toBe("https://www.jingyuanxia.com/zh");
  });

  it("permanently redirects legacy routes to the matching Chinese path", () => {
    const response = middleware(new NextRequest("https://www.jingyuanxia.com/projects/petsona?from=legacy"));

    expect(response.status).toBe(308);
    expect(response.headers.get("location")).toBe("https://www.jingyuanxia.com/zh/projects/petsona?from=legacy");
  });

  it("does not redirect localized routes", () => {
    const response = middleware(new NextRequest("https://www.jingyuanxia.com/en/projects/loom"));

    expect(response.status).toBe(200);
    expect(response.headers.get("location")).toBeNull();
  });
});
