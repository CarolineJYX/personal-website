export const DEFAULT_LOCALE = "en";
export const DEFAULT_ROUTE_LOCALE = "zh";
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

export function getLocaleFromPathname(pathname: string): Locale | undefined {
  const segment = pathname.split("/").filter(Boolean)[0];

  return isLocale(segment) ? segment : undefined;
}

export function stripLocaleFromPathname(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);

  if (!locale) {
    return pathname || "/";
  }

  const stripped = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), "");

  return stripped || "/";
}

export function localizePath(pathname: string, locale: Locale): string {
  if (!pathname.startsWith("/") || pathname.startsWith("//")) {
    return pathname;
  }

  const pathOnly = pathname.split(/[?#]/, 1)[0];

  if (/\.[a-z0-9]+$/i.test(pathOnly) || pathOnly.startsWith("/_next/") || pathOnly.startsWith("/api/")) {
    return pathname;
  }

  if (pathname === "/") {
    return `/${locale}`;
  }

  return `/${locale}${stripLocaleFromPathname(pathname)}`;
}

export function replacePathLocale(pathname: string, locale: Locale): string {
  return localizePath(pathname, locale);
}

export function buildLocaleSwitchHref(pathname: string, locale: Locale, query = "", hash = ""): string {
  const normalizedQuery = query ? `?${query.replace(/^\?/, "")}` : "";
  const normalizedHash = hash ? `#${hash.replace(/^#/, "")}` : "";

  return `${replacePathLocale(pathname, locale)}${normalizedQuery}${normalizedHash}`;
}
