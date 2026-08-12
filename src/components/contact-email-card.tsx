"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { copyEmailToClipboard } from "@/lib/contact";
import { cn } from "@/lib/cn";
import type { LocalizedString } from "@/lib/i18n";
import { LocalizedText } from "./localized-text";

export function ContactEmailCard() {
  const [status, setStatus] = useState<LocalizedString | null>(null);

  async function onCopy() {
    try {
      const result = await copyEmailToClipboard(profile.email);
      setStatus(
        result === "success"
          ? { en: "Email address copied.", zh: "邮箱地址已复制。" }
          : { en: "Copy is unavailable. Select the address to copy it manually.", zh: "当前无法自动复制，请手动选择邮箱地址。" }
      );
    } catch {
      setStatus({ en: "Copy failed. Select the address to copy it manually.", zh: "复制失败，请手动选择邮箱地址。" });
    }
  }

  return (
    <section className="rounded border border-line-light bg-programme-ivory p-6 text-ink programme-shadow md:p-12" aria-labelledby="email-card-title">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 space-y-3">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-wine">
            <LocalizedText value={{ en: "Station // Direct Communication", zh: "联络站 // 直接沟通" }} />
          </p>
          <h2 className="break-words font-display text-3xl font-semibold leading-tight text-stage-black md:text-5xl" id="email-card-title">
            {profile.email}
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-sm bg-wine px-6 py-3 font-mono text-sm font-semibold text-programme-white transition hover:bg-wine-bright"
            href={`mailto:${profile.email}`}
          >
            <LocalizedText value={{ en: "Send Email", zh: "发送邮件" }} />
          </a>
          <button
            className={cn(
              "inline-flex min-h-11 items-center justify-center rounded-sm border border-ink px-6 py-3 font-mono text-sm font-semibold text-ink transition hover:border-wine hover:text-wine"
            )}
            onClick={onCopy}
            type="button"
          >
            <LocalizedText value={{ en: "Copy Address", zh: "复制邮箱" }} />
          </button>
        </div>
      </div>
      <p aria-live="polite" className="mt-4 min-h-5 font-mono text-xs text-wine">
        {status ? <LocalizedText value={status} /> : null}
      </p>
    </section>
  );
}
