import { awards, educationItems, researchItems } from "@/data/education";
import { experiences } from "@/data/experience";
import { contactLinks, profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { isLocalizedString } from "@/lib/i18n";

const forbiddenDisplayTerms = [
  "LINK PENDING",
  "RESULT PENDING",
  "PDF LINK PENDING",
  "VERIFICATION PENDING",
  "TBD",
  "PLACEHOLDER",
  "ACT I",
  "ACT II",
  "ACT III",
  "ACT IV",
  "PRODUCTION ACT"
];
const forbiddenPrivateTerms = ["18019428525", "女｜23岁", "女｜24岁", "24岁", "微信"];
const contentRoots = { projects, experiences, educationItems, researchItems, awards, profile, contactLinks };

function collectStrings(value: unknown, output: string[] = []): string[] {
  if (typeof value === "string") {
    output.push(value);
    return output;
  }

  if (Array.isArray(value)) {
    value.forEach((item) => collectStrings(item, output));
    return output;
  }

  if (value && typeof value === "object") {
    Object.values(value).forEach((item) => collectStrings(item, output));
  }

  return output;
}

function collectLocalizedStringIssues(value: unknown, path: string, output: string[] = []): string[] {
  if (isLocalizedString(value)) {
    if (!value.en.trim()) {
      output.push(`${path}.en`);
    }

    if (!value.zh.trim()) {
      output.push(`${path}.zh`);
    }

    return output;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => collectLocalizedStringIssues(item, `${path}[${index}]`, output));
    return output;
  }

  if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, item]) => collectLocalizedStringIssues(item, `${path}.${key}`, output));
  }

  return output;
}

export function findForbiddenDisplayTerms(): string[] {
  const strings = collectStrings(contentRoots);

  return strings.filter((value) => {
    const normalized = value.toUpperCase();
    return forbiddenDisplayTerms.some((term) => normalized.includes(term));
  });
}

export function findForbiddenPrivateTerms(): string[] {
  const strings = collectStrings(contentRoots);
  return strings.filter((value) => forbiddenPrivateTerms.some((term) => value.includes(term)));
}

export function findIncompleteLocalizedStrings(): string[] {
  return collectLocalizedStringIssues(contentRoots, "content");
}

export function validateProjectSlugs(): boolean {
  const slugs = projects.map((project) => project.slug);
  return new Set(slugs).size === slugs.length && slugs.every((slug) => /^[a-z0-9-]+$/.test(slug));
}

export function findInvalidProjectMediaPaths(): string[] {
  return projects.flatMap((project) => [
    project.coverImage,
    ...(project.gallery?.flatMap((media) => [media.src, media.poster]) ?? []),
    ...(project.resources?.map((resource) => resource.href) ?? [])
  ])
    .filter((path): path is string => Boolean(path))
    .filter(
      (path) =>
        !path.startsWith("/images/") &&
        !path.startsWith("/videos/") &&
        !path.startsWith("/documents/") &&
        !path.startsWith("https://")
    );
}
