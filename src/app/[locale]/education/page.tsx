import EducationPage from "@/app/education/page";
import { isLocale } from "@/lib/i18n";
import { buildLocalizedMetadata, pageMetadata } from "@/lib/metadata";

export function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "zh";

  return buildLocalizedMetadata({ locale, pathname: "/education", ...pageMetadata.education });
}

export default EducationPage;
