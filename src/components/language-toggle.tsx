"use client";

import { useEffect, useState } from "react";
import { DEFAULT_LOCALE, isLocale, LANGUAGE_STORAGE_KEY, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/cn";

function applyLocale(locale: Locale) {
  document.documentElement.dataset.locale = locale;
  document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
}

export function LanguageToggle() {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    const initialLocale = isLocale(saved) ? saved : DEFAULT_LOCALE;
    setLocale(initialLocale);
    applyLocale(initialLocale);
  }, []);

  function selectLocale(nextLocale: Locale) {
    setLocale(nextLocale);
    applyLocale(nextLocale);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLocale);
  }

  function renderButton(value: Locale, label: string, ariaLabel: string) {
    return (
      <button
        aria-label={ariaLabel}
        aria-pressed={locale === value}
        className={cn(
          "min-h-11 min-w-11 px-3 transition",
          locale === value ? "bg-muted-gold text-stage-black" : "text-text-secondary hover:text-text-primary"
        )}
        onClick={() => selectLocale(value)}
        type="button"
      >
        {label}
      </button>
    );
  }

  return (
    <div
      aria-label="Language switcher"
      className="inline-flex min-h-11 items-center overflow-hidden rounded-sm border border-line-dark bg-line-dark font-mono text-[11px] uppercase tracking-[0.12em]"
      role="group"
    >
      {renderButton("en", "EN", "Switch to English")}
      {renderButton("zh", "中", "切换到中文")}
    </div>
  );
}
