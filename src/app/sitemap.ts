import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const routes = ["", "/experience", "/projects", "/education", "/contact", "/interactive"];
  const projectRoutes = getProjectSlugs().map((slug) => `/projects/${slug}`);

  return [...routes, ...projectRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date("2026-07-27"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
