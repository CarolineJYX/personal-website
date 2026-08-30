import Image from "next/image";
import { LocaleLink } from "@/components/locale-link";
import type { Project } from "@/data/types";
import { cn } from "@/lib/cn";
import { getProjectCaseHref } from "@/lib/projects";
import { LocalizedText } from "./localized-text";
import { MediaPlaceholder } from "./media-placeholder";
import { StatusBadge } from "./status-badge";

type ProjectCardProps = {
  project: Project;
  size?: "large" | "regular";
};

export function ProjectCard({ project, size = "regular" }: ProjectCardProps) {
  const wide = size === "large";

  return (
    <LocaleLink
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded border border-line-dark bg-stage-elevated transition duration-medium ease-enter hover:border-muted-gold",
        wide ? "md:col-span-7" : "md:col-span-5"
      )}
      href={getProjectCaseHref(project)}
    >
      {project.coverImage ? (
        <div className="relative aspect-[3/2] min-h-[250px] overflow-hidden border-b border-line-dark md:min-h-[320px]">
          <Image
            alt={project.coverAlt?.en ?? project.title.en}
            className="object-cover transition duration-medium group-hover:scale-[1.02] group-hover:brightness-110"
            fill
            sizes={wide ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 768px) 42vw, 100vw"}
            src={project.coverImage}
          />
        </div>
      ) : (
        <MediaPlaceholder
          className="aspect-auto h-[250px] rounded-none border-0 border-b border-line-dark transition duration-medium group-hover:brightness-110 md:aspect-[3/2] md:h-auto md:min-h-[320px]"
          label={project.title}
          ratio="3:2"
        />
      )}
      <div className="flex flex-1 flex-col gap-5 p-6 md:p-7">
        <div className="flex items-start justify-end gap-4 font-mono text-[11px] uppercase tracking-[0.1em]">
          <StatusBadge confidential={project.confidential} status={project.status} />
        </div>
        <div className="space-y-2">
          <h3 className="font-display text-3xl font-medium leading-tight text-text-primary">
            <LocalizedText value={project.title} />
          </h3>
          <p className="text-sm leading-6 text-text-secondary">
            <LocalizedText value={project.subtitle} />
          </p>
        </div>
        <div className="mt-auto flex flex-col gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-secondary">
            {project.role ? (
              <>
                <LocalizedText value={project.role} />
                {project.organization ? " / " : null}
              </>
            ) : null}
            {project.organization}
          </p>
          <div className="flex items-center justify-between border-t border-line-dark pt-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted-gold">
              <LocalizedText value={{ en: "View Case", zh: "查看案例" }} />
            </span>
            <span
              aria-hidden="true"
              className="inline-flex size-8 items-center justify-center rounded-full bg-stage-surface text-text-primary transition group-hover:translate-x-1 group-hover:text-muted-gold"
            >
              →
            </span>
          </div>
        </div>
      </div>
    </LocaleLink>
  );
}

export function ProjectArchiveCard({ project, index }: { project: Project; index: number }) {
  return <ProjectCard project={project} size={index % 3 === 1 ? "regular" : "large"} />;
}
