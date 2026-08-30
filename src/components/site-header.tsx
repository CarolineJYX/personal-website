"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { LocalizedText } from "@/components/localized-text";
import { useLocale } from "@/components/locale-provider";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";
import { localizePath, stripLocaleFromPathname } from "@/lib/i18n";

const navItems = [
  { label: { en: "Internship Experience", zh: "实习经历" }, href: "/experience" },
  { label: { en: "Projects", zh: "项目经历" }, href: "/projects" },
  { label: { en: "Education & Research", zh: "教育与研究" }, href: "/education" },
  { label: { en: "Contact", zh: "联系" }, href: "/contact" }
];

function isCurrentPath(pathname: string, href: string): boolean {
  if (href === "/projects") {
    return pathname === href || pathname.startsWith("/projects/");
  }

  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const locale = useLocale();
  const contentPathname = stripLocaleFromPathname(pathname);
  const [isOpen, setIsOpen] = useState(false);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    firstMobileLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line-dark/80 bg-[rgba(10,9,8,0.92)] backdrop-blur-md">
      <div className="site-shell flex h-16 items-center justify-between md:h-20">
        <Link
          aria-label="Back to home"
          className="font-display text-xl font-semibold text-text-primary transition hover:text-muted-gold md:text-2xl"
          href={localizePath("/", locale)}
        >
          <LocalizedText value={profile.name} />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const current = isCurrentPath(contentPathname, item.href);
            return (
              <Link
                aria-current={current ? "page" : undefined}
                className={cn(
                  "font-body text-sm font-medium transition hover:text-text-primary",
                  current ? "text-text-primary" : "text-text-secondary"
                )}
                href={localizePath(item.href, locale)}
                key={item.href}
              >
                <LocalizedText value={item.label} />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center md:flex">
          <LanguageToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-line-dark text-text-primary"
            onClick={() => setIsOpen((value) => !value)}
            ref={menuButtonRef}
            type="button"
          >
            <span aria-hidden="true" className="flex h-4 w-5 flex-col justify-between">
              <span className={cn("h-px bg-current transition", isOpen ? "translate-y-[7px] rotate-45" : "")} />
              <span className={cn("h-px bg-current transition", isOpen ? "opacity-0" : "")} />
              <span className={cn("h-px bg-current transition", isOpen ? "-translate-y-[7px] -rotate-45" : "")} />
            </span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden",
          isOpen ? "pointer-events-auto border-t border-line-dark opacity-100" : "pointer-events-none h-0 overflow-hidden opacity-0"
        )}
        id="mobile-menu"
      >
        <nav aria-label="Mobile navigation" className="site-shell flex flex-col gap-2 py-6">
          {navItems.map((item, index) => {
            const current = isCurrentPath(contentPathname, item.href);
            return (
              <Link
                aria-current={current ? "page" : undefined}
                className={cn(
                  "min-h-11 border-b border-line-dark py-3 font-display text-3xl transition",
                  current ? "text-muted-gold" : "text-text-primary"
                )}
                href={localizePath(item.href, locale)}
                key={item.href}
                ref={index === 0 ? firstMobileLinkRef : undefined}
              >
                <LocalizedText value={item.label} />
              </Link>
            );
          })}
          {profile.resumeUrls[locale] ? (
            <Link className="mt-4 min-h-11 font-mono text-xs uppercase tracking-[0.12em] text-muted-gold" href={profile.resumeUrls[locale]}>
              <LocalizedText value={{ en: "Resume", zh: "简历" }} /> →
            </Link>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
