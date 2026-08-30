"use client";

import { useEffect, useState } from "react";
import { DEFAULT_LOCALE, isLocale, LANGUAGE_STORAGE_KEY, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/cn";

function applyLocale(locale: Locale) {
  document.documentElement.dataset.locale = locale;
  document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
}

export function LanguageToggle({ variant = "default", onLocaleChange }: { variant?: "default" | "paper"; onLocaleChange?: (locale: Locale) => void }) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    const initialLocale = isLocale(saved) ? saved : DEFAULT_LOCALE;
    setLocale(initialLocale);
    applyLocale(initialLocale);
    onLocaleChange?.(initialLocale);
  }, [onLocaleChange]);

  function selectLocale(nextLocale: Locale) {
    setLocale(nextLocale);
    applyLocale(nextLocale);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLocale);
    onLocaleChange?.(nextLocale);
  }

  function renderButton(value: Locale, label: string, ariaLabel: string) {
    return (
      <button
        aria-label={ariaLabel}
        aria-pressed={locale === value}
        className={cn(
          "min-h-11 min-w-11 px-3 transition",
          variant === "paper"
            ? locale === value
              ? "bg-[#303331] text-white"
              : "text-[#5c615e] hover:bg-[#ecece7] hover:text-[#232624]"
            : locale === value
              ? "bg-muted-gold text-stage-black"
              : "text-text-secondary hover:text-text-primary"
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
      className={cn(
        "inline-flex min-h-11 items-center overflow-hidden font-mono text-[11px] uppercase tracking-[0.12em]",
        variant === "paper" ? "border border-[#777c78]/45 bg-[#fafaf7]/90" : "rounded-sm border border-line-dark bg-line-dark"
      )}
      role="group"
    >
      {renderButton("en", "EN", "Switch to English")}
      {renderButton("zh", "中", "切换到中文")}
    </div>
  );
}
