import { projects } from "@/data/projects";
import type { Project } from "@/data/types";

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectCaseHref(project: Project): string {
  return `/projects/${project.slug}`;
}

export function getNextProject(slug: string): Project | undefined {
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  if (currentIndex < 0 || projects.length === 0) {
    return undefined;
  }

  return projects[(currentIndex + 1) % projects.length];
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
