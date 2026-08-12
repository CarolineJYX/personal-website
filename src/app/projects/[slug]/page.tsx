import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { LocalizedText } from "@/components/localized-text";
import { Reveal } from "@/components/reveal";
import { StatusBadge } from "@/components/status-badge";
import { getLocalizedText, localizedKey, type LocalizedValue } from "@/lib/i18n";
import { getNextProject, getProjectBySlug, getProjectCaseHref, getProjectSlugs } from "@/lib/projects";

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project"
    };
  }

  return {
    title: getLocalizedText(project.title),
    description: getLocalizedText(project.subtitle)
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(project.slug);
  const summaryMeta: { label: LocalizedValue; value?: LocalizedValue }[] = [
    { label: { en: "Date", zh: "时间" }, value: project.dateRange ?? project.year },
    { label: { en: "Role", zh: "角色" }, value: project.role },
    { label: { en: "Organization", zh: "组织" }, value: project.organization },
    { label: { en: "Status", zh: "状态" }, value: project.confidential ? { en: "Public summary", zh: "公开摘要" } : project.status }
  ];

  return (
    <main id="main-content">
      <section className="bg-stage-black pb-16 pt-32 text-text-primary md:pb-24 md:pt-40">
        <div className="site-shell space-y-10">
          <Reveal>
            <div className="space-y-8">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div />
                <StatusBadge confidential={project.confidential} status={project.status} />
              </div>
              <div className="max-w-5xl">
                <h1 className="text-balance font-display text-5xl font-normal leading-none md:text-7xl">
                  <LocalizedText value={project.title} />
                </h1>
                <p className="mt-5 max-w-3xl font-display text-2xl font-light leading-snug text-text-secondary md:text-3xl">
                  <LocalizedText value={project.subtitle} />
                </p>
              </div>
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-secondary">
                  {[project.organization, project.year].filter(Boolean).join(" · ")}
                </p>
                {project.externalUrl ? (
                  <ButtonLink external href={project.externalUrl}>
                    <LocalizedText value={{ en: "Visit Live Site", zh: "访问网站" }} />
                  </ButtonLink>
                ) : null}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line-light bg-programme-ivory py-16 text-ink md:py-24">
        <div className="site-shell grid gap-10 lg:grid-cols-[280px_1fr]">
          <Reveal>
            <h2 className="font-display text-4xl font-medium">
              <LocalizedText value={{ en: "Project Snapshot", zh: "项目摘要" }} />
            </h2>
          </Reveal>
          <Reveal>
            <dl className="grid gap-4 md:grid-cols-2">
              {summaryMeta.map(({ label, value }) =>
                value ? (
                  <div className="border-b border-line-light pb-4" key={localizedKey(label)}>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink/50">
                      <LocalizedText value={label} />
                    </dt>
                    <dd className="mt-2 text-base font-medium text-ink">
                      <LocalizedText value={value} />
                    </dd>
                  </div>
                ) : null
              )}
            </dl>
          </Reveal>
        </div>
      </section>

      {project.sections.length > 0 ? (
        <section className="bg-stage-black py-16 text-text-primary md:py-24">
          <div className="site-shell space-y-10">
            {project.sections.map((section) => (
              <Reveal key={section.id}>
                <article className="grid gap-8 border-t border-line-dark pt-8 lg:grid-cols-[280px_1fr]">
                  <h2 className="font-display text-4xl font-medium">
                    <LocalizedText value={section.title} />
                  </h2>
                  <div className="space-y-4">
                    {section.body.map((paragraph) => (
                      <p className="text-sm leading-7 text-text-secondary md:text-base" key={localizedKey(paragraph)}>
                        <LocalizedText value={paragraph} />
                      </p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {nextProject ? (
        <section className="bg-stage-black py-16 text-text-primary md:py-24">
          <div className="site-shell space-y-8">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-gold">
              <LocalizedText value={{ en: "Next Project", zh: "下一个项目" }} /> →
            </p>
            <Link
              className="block border-y border-line-dark py-8 transition hover:border-muted-gold"
              href={getProjectCaseHref(nextProject)}
            >
              <h2 className="font-display text-4xl font-normal md:text-6xl">
                <LocalizedText value={nextProject.title} />
              </h2>
            </Link>
            <ButtonLink href="/projects" variant="text">
              <LocalizedText value={{ en: "Back to Archive", zh: "返回档案" }} />
            </ButtonLink>
          </div>
        </section>
      ) : null}
    </main>
  );
}
