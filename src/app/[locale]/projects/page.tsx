import ProjectsPage from "@/app/projects/page";
import { isLocale } from "@/lib/i18n";
import { buildLocalizedMetadata, pageMetadata } from "@/lib/metadata";

export function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : "zh";

  return buildLocalizedMetadata({ locale, pathname: "/projects", ...pageMetadata.projects });
}

export default ProjectsPage;
