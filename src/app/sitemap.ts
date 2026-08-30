import type { MetadataRoute } from "next";
import { LOCALES, localizePath } from "@/lib/i18n";
import { getProjectSlugs } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const routes = ["", "/experience", "/projects", "/education", "/contact"];
  const projectRoutes = getProjectSlugs().map((slug) => `/projects/${slug}`);

  return LOCALES.flatMap((locale) =>
    [...routes, ...projectRoutes].map((route) => ({
      url: `${base}${localizePath(route || "/", locale)}`,
      lastModified: new Date("2026-08-30"),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
      alternates: {
        languages: {
          en: `${base}${localizePath(route || "/", "en")}`,
          "zh-CN": `${base}${localizePath(route || "/", "zh")}`
        }
      }
    }))
  );
}
