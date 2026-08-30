"use client";

import { ButtonLink } from "@/components/button-link";
import { useLocale } from "@/components/locale-provider";
import { LocalizedText } from "@/components/localized-text";
import { profile } from "@/data/profile";

export function ResumeButton() {
  const locale = useLocale();
  const href = profile.resumeUrls[locale];

  if (!href) {
    return null;
  }

  return (
    <ButtonLink href={href} variant="secondary">
      <LocalizedText value={{ en: "Read Resume", zh: "查看简历" }} />
    </ButtonLink>
  );
}
