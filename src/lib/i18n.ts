export const DEFAULT_LOCALE = "en";
export const LANGUAGE_STORAGE_KEY = "jyx-language";
export const LOCALES = ["en", "zh"] as const;

export type Locale = (typeof LOCALES)[number];

export type LocalizedString = {
  en: string;
  zh: string;
};

export type LocalizedValue = string | LocalizedString;

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "zh";
}

export function isLocalizedString(value: unknown): value is LocalizedString {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<LocalizedString>;

  return typeof candidate.en === "string" && typeof candidate.zh === "string";
}

export function getLocalizedText(value: LocalizedValue, locale: Locale = DEFAULT_LOCALE): string {
  return typeof value === "string" ? value : value[locale];
}

export function localizedKey(value: LocalizedValue): string {
  return getLocalizedText(value, DEFAULT_LOCALE);
}
