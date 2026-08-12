import type { LinkItem } from "@/data/types";
import { isLocalizedString } from "@/lib/i18n";

const blockedLabels = new Set(["LINK PENDING", "PDF LINK PENDING", "VERIFICATION PENDING", "TBD", "PLACEHOLDER"]);

export function shouldRenderLink(link: LinkItem): boolean {
  if (!link.href) {
    return false;
  }

  const labels = isLocalizedString(link.label) ? [link.label.en, link.label.zh] : [link.label];

  return labels.every((label) => !blockedLabels.has(label.trim().toUpperCase()));
}

export function filterRenderableLinks(links: LinkItem[]): LinkItem[] {
  return links.filter(shouldRenderLink);
}

export function isExternalHref(href: string): boolean {
  return /^https?:\/\//.test(href);
}
