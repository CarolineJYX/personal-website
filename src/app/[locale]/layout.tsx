import { notFound } from "next/navigation";
import { LocaleProvider } from "@/components/locale-provider";
import { LocalizedText } from "@/components/localized-text";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale, LOCALES } from "@/lib/i18n";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default function LocalizedLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  return (
    <LocaleProvider locale={params.locale}>
      <a className="skip-link" href="#main-content">
        <LocalizedText value={{ en: "Skip to content", zh: "跳到正文" }} />
      </a>
      <SiteHeader />
      {children}
      <SiteFooter />
    </LocaleProvider>
  );
}
