import HomePage from "@/app/page";
import { isLocale } from "@/lib/i18n";
import { buildLocalizedMetadata, pageMetadata } from "@/lib/metadata";

export function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "zh";

  return buildLocalizedMetadata({ locale, pathname: "/", ...pageMetadata.home });
}

export default HomePage;
