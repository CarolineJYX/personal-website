"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { useLocale } from "@/components/locale-provider";
import { localizePath } from "@/lib/i18n";

type LocaleLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: React.ReactNode;
  };

export function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const locale = useLocale();
  const localizedHref = typeof href === "string" ? localizePath(href, locale) : href;

  return <Link href={localizedHref} {...props} />;
}
