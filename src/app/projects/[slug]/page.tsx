import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { LocaleLink } from "@/components/locale-link";
import { LocalizedText } from "@/components/localized-text";
import { ProjectVideo } from "@/components/project-video";
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
  const statusLabels = {
    public: { en: "Public case study", zh: "公开案例" },
    confidential: { en: "Confidential", zh: "保密" },
    draft: { en: "Draft", zh: "草稿" },
    planned: { en: "Planned", zh: "计划中" },
    completed: { en: "Completed", zh: "已完成" },
    "in-progress": { en: "In progress", zh: "进行中" }
  };
  const summaryMeta: { label: LocalizedValue; value?: LocalizedValue }[] = [
    { label: { en: "Date", zh: "时间" }, value: project.dateRange ?? project.year },
    { label: { en: "Role", zh: "角色" }, value: project.role },
    { label: { en: "Organization", zh: "组织" }, value: project.organization },
    {
      label: { en: "Status", zh: "状态" },
      value: project.confidential ? { en: "Public summary", zh: "公开摘要" } : statusLabels[project.status]
    },
    { label: { en: "Award", zh: "获奖" }, value: project.award },
    { label: { en: "Launch", zh: "上线状态" }, value: project.launchStatus }
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
                    <LocalizedText value={project.externalLabel ?? { en: "Visit Live Site", zh: "访问网站" }} />
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

      {project.gallery?.length || project.resources?.length ? (
        <section className="border-t border-line-dark bg-stage-surface py-16 text-text-primary md:py-24">
          <div className="site-shell space-y-10">
            <Reveal>
              <h2 className="font-display text-4xl font-medium md:text-5xl">
                <LocalizedText value={{ en: "Media & Resources", zh: "媒体资料" }} />
              </h2>
            </Reveal>
            {project.gallery?.length ? (
              <div className="grid gap-8">
                {project.gallery.map((media) => (
                  <Reveal key={media.src}>
                    <figure
                      className={`overflow-hidden rounded border border-line-dark bg-stage-black ${
                        media.height > media.width ? "mx-auto w-full max-w-3xl" : ""
                      }`}
                    >
                      {media.type === "image" ? (
                        <Image
                          alt={getLocalizedText(media.alt)}
                          className="mx-auto h-auto w-full object-contain"
                          height={media.height}
                          sizes="(min-width: 1280px) 1152px, 100vw"
                          src={media.src}
                          width={media.width}
                        />
                      ) : (
                        <ProjectVideo media={media} />
                      )}
                      {media.caption ? (
                        <figcaption className="border-t border-line-dark px-5 py-4 text-sm leading-6 text-text-secondary">
                          <LocalizedText value={media.caption} />
                        </figcaption>
                      ) : null}
                    </figure>
                  </Reveal>
                ))}
              </div>
            ) : null}
            {project.resources?.length ? (
              <Reveal>
                <div className="flex flex-wrap gap-4">
                  {project.resources.map((resource) => (
                    <ButtonLink
                      download={resource.behavior === "download" ? resource.downloadName ?? true : undefined}
                      external={resource.behavior !== "download"}
                      href={resource.href}
                      key={`${resource.href}-${resource.behavior ?? "open"}-${localizedKey(resource.label)}`}
                      variant="secondary"
                    >
                      <LocalizedText value={resource.label} />
                    </ButtonLink>
                  ))}
                </div>
              </Reveal>
            ) : null}
          </div>
        </section>
      ) : null}

      {nextProject ? (
        <section className="bg-stage-black py-16 text-text-primary md:py-24">
          <div className="site-shell space-y-8">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-gold">
              <LocalizedText value={{ en: "Next Project", zh: "下一个项目" }} /> →
            </p>
            <LocaleLink
              className="block border-y border-line-dark py-8 transition hover:border-muted-gold"
              href={getProjectCaseHref(nextProject)}
            >
              <h2 className="font-display text-4xl font-normal md:text-6xl">
                <LocalizedText value={nextProject.title} />
              </h2>
            </LocaleLink>
            <ButtonLink href="/projects" variant="text">
              <LocalizedText value={{ en: "Back to Archive", zh: "返回档案" }} />
            </ButtonLink>
          </div>
        </section>
      ) : null}
    </main>
  );
}
