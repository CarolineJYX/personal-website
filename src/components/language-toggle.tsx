"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { cn } from "@/lib/cn";
import { buildLocaleSwitchHref, type Locale } from "@/lib/i18n";

export function LanguageToggle({ variant = "default" }: { variant?: "default" | "paper" }) {
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  const query = searchParams.toString();

  function renderLink(value: Locale, label: string, ariaLabel: string) {
    const href = buildLocaleSwitchHref(pathname, value, query, hash);
    const selected = locale === value;

    return (
      <Link
        aria-current={selected ? "page" : undefined}
        aria-label={ariaLabel}
        className={cn(
          "min-h-11 min-w-11 px-3 py-[14px] text-center transition",
          variant === "paper"
            ? selected
              ? "bg-[#303331] text-white"
              : "text-[#5c615e] hover:bg-[#ecece7] hover:text-[#232624]"
            : selected
              ? "bg-muted-gold text-stage-black"
              : "text-text-secondary hover:text-text-primary"
        )}
        href={href}
        hrefLang={value === "zh" ? "zh-CN" : "en"}
        lang={value === "zh" ? "zh-CN" : "en"}
      >
        {label}
      </Link>
    );
  }

  return (
    <nav
      aria-label="Language switcher"
      className={cn(
        "inline-flex min-h-11 items-center overflow-hidden font-mono text-[11px] uppercase tracking-[0.12em]",
        variant === "paper" ? "border border-[#777c78]/45 bg-[#fafaf7]/90" : "rounded-sm border border-line-dark bg-line-dark"
      )}
    >
      {renderLink("en", "EN", "Switch to English")}
      {renderLink("zh", "中", "切换到中文")}
    </nav>
  );
}
