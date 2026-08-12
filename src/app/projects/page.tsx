import type { Metadata } from "next";
import { LocalizedText } from "@/components/localized-text";
import { ProjectArchiveCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Caroline Xia's AI product project archive, including consumer AI, education, interactive media, and community projects."
};

export default function ProjectsPage() {
  return (
    <main className="bg-stage-black pb-24 pt-32 text-text-primary md:pb-32 md:pt-40" id="main-content">
      <div className="site-shell space-y-12">
        <Reveal>
          <header className="space-y-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-6">
              <h1 className="font-display text-6xl font-normal leading-none md:text-7xl">
                <LocalizedText value={{ en: "Work Archive", zh: "作品档案" }} />
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-muted-gold" />
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-secondary">
                <LocalizedText value={{ en: "A curated collection of AI product work · 2023–2026", zh: "AI 产品作品精选合集 · 2023–2026" }} />
              </p>
            </div>
          </header>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-12">
          {projects.map((project, index) => (
            <Reveal className={index % 3 === 1 ? "md:col-span-5" : "md:col-span-7"} key={project.slug}>
              <ProjectArchiveCard index={index} project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
