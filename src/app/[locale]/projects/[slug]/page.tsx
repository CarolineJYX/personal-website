import ProjectDetailPage from "@/app/projects/[slug]/page";
import { isLocale, LOCALES } from "@/lib/i18n";
import { buildLocalizedMetadata } from "@/lib/metadata";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";

type LocalizedProjectPageProps = {
  params: {
    locale: string;
    slug: string;
  };
};

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => getProjectSlugs().map((slug) => ({ locale, slug })));
}

export function generateMetadata({ params }: LocalizedProjectPageProps) {
  const locale = isLocale(params.locale) ? params.locale : "zh";
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return buildLocalizedMetadata({
      locale,
      pathname: `/projects/${params.slug}`,
      title: { en: "Project", zh: "项目" },
      description: { en: "Project not found.", zh: "未找到该项目。" }
    });
  }

  return buildLocalizedMetadata({
    locale,
    pathname: `/projects/${project.slug}`,
    title: project.title,
    description: project.subtitle
  });
}

export default function LocalizedProjectPage({ params }: LocalizedProjectPageProps) {
  return <ProjectDetailPage params={{ slug: params.slug }} />;
}
