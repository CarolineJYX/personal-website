"use client";

import type { LocalizedValue } from "@/lib/i18n";
import { getLocalizedText } from "@/lib/i18n";
import { useLocale } from "@/components/locale-provider";

type LocalizedTextProps = {
  value: LocalizedValue;
  uppercase?: boolean;
};

export function LocalizedText({ value, uppercase = false }: LocalizedTextProps) {
  const locale = useLocale();
  const text = getLocalizedText(value, locale);

  return <>{uppercase ? text.toUpperCase() : text}</>;
}
