"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";
import { contactLinks, profile } from "@/data/profile";
import { filterRenderableLinks, isExternalHref } from "@/lib/links";
import { localizedKey } from "@/lib/i18n";
import { LocalizedText } from "./localized-text";

export function SiteFooter() {
  const locale = useLocale();
  const resumeHref = profile.resumeUrls[locale];
  const links = filterRenderableLinks([
    ...contactLinks,
    ...(resumeHref ? [{ label: { en: "Resume", zh: "简历" }, href: resumeHref, external: false }] : [])
  ]);

  return (
    <footer className="border-t border-line-dark bg-stage-black py-12 text-text-secondary md:py-16">
      <div className="site-shell flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="space-y-2">
            <p className="font-display text-2xl font-semibold text-text-primary">
              <LocalizedText value={profile.name} />
            </p>
            <p className="text-sm text-text-secondary">
              <LocalizedText value={profile.role} />
            </p>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-10">
            {links.map((link) => (
              <Link
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] transition hover:text-muted-gold"
                href={link.href ?? "#"}
                key={localizedKey(link.label)}
                rel={link.external || (link.href && isExternalHref(link.href)) ? "noreferrer" : undefined}
                target={link.external || (link.href && isExternalHref(link.href)) ? "_blank" : undefined}
              >
                <LocalizedText value={link.label} />
                <span aria-hidden="true" className="transition group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-line-dark pt-6 font-mono text-[11px] uppercase tracking-[0.08em] md:flex-row">
          <p>
            <LocalizedText value={{ en: "© 2026 Caroline Xia. AI product portfolio.", zh: "© 2026 夏静远。AI 产品作品集。" }} />
          </p>
          <p>
            <LocalizedText value={profile.locationLine} />
          </p>
        </div>
      </div>
    </footer>
  );
}
