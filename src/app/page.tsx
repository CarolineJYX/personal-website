import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { HomeEducationResearchToggle } from "@/components/home-education-research-toggle";
import { HomeExperienceCards } from "@/components/home-experience-cards";
import { LocalizedText } from "@/components/localized-text";
import { LocaleLink } from "@/components/locale-link";
import { ProjectCard } from "@/components/project-card";
import { ResumeButton } from "@/components/resume-button";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { homepageExperiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Home",
  description: "Caroline Xia's AI product manager portfolio, covering experience, selected work, education, and research."
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="stage-glow bg-stage-black pt-16 text-text-primary md:pt-20 lg:min-h-[90svh]">
        <div className="site-shell grid items-center gap-10 py-10 md:py-12 lg:min-h-[calc(90svh-5rem)] lg:grid-cols-[minmax(0,3fr)_minmax(320px,2fr)] lg:gap-14 xl:gap-16">
          <Reveal className="flex max-w-4xl flex-col items-start gap-6">
            <div>
              <h1 className="text-balance font-display text-[48px] font-medium leading-[0.98] text-text-primary md:text-[68px] xl:text-[76px]">
                <LocalizedText uppercase value={profile.name} />
              </h1>
              <p className="mt-2 font-display text-2xl text-text-secondary md:text-3xl">
                <LocalizedText value={profile.role} />
              </p>
            </div>
            <div className="max-w-3xl space-y-4">
              <p className="text-lg font-medium leading-7 text-text-primary md:text-xl md:leading-8">
                <LocalizedText value={profile.statement} />
              </p>
              <p className="text-base leading-7 text-text-secondary">
                <LocalizedText value={profile.strengths[0]} />
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink external href={profile.linkedin}>
                LinkedIn
              </ButtonLink>
              <ButtonLink external href={profile.github} variant="secondary">
                GitHub
              </ButtonLink>
              <ResumeButton />
            </div>
          </Reveal>
          <Reveal className="w-full max-w-[350px] justify-self-center sm:max-w-[380px] lg:max-w-[400px] lg:justify-self-end">
            <div className="relative aspect-[4/3] overflow-hidden rounded border border-line-dark bg-stage-surface sm:aspect-[4/5]">
              <Image
                alt="Caroline Xia portrait / 夏静远头像"
                className="object-cover object-[50%_18%]"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, min(90vw, 380px)"
                src="/images/profile-caroline-xia.jpg"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-programme-ivory py-14 text-ink md:py-20">
        <div className="site-shell space-y-10">
          <Reveal>
            <SectionHeader
              eyebrow={{ en: "Experience", zh: "经历" }}
              theme="programme"
              title={{ en: "Internship Experience", zh: "实习经历" }}
            />
          </Reveal>
          <Reveal>
            <HomeExperienceCards items={homepageExperiences} />
          </Reveal>
          <div className="flex justify-center">
            <ButtonLink className="text-ink" href="/experience" variant="text">
              <LocalizedText value={{ en: "View Full Internship Experience", zh: "查看完整实习经历" }} />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-stage-black py-14 text-text-primary md:py-20">
        <div className="site-shell space-y-10">
          <Reveal>
            <SectionHeader
              eyebrow={{ en: "Projects", zh: "项目" }}
              title={{ en: "Selected Work", zh: "精选项目" }}
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <Reveal className="min-w-0" key={project.slug}>
                <ProjectCard compact project={project} />
              </Reveal>
            ))}
          </div>
          <div className="flex justify-center">
            <ButtonLink href="/projects" variant="text">
              <LocalizedText value={{ en: "View Project Archive", zh: "查看项目档案" }} />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-programme-ivory py-14 text-ink md:py-20">
        <div className="site-shell space-y-10">
          <Reveal>
            <SectionHeader
              eyebrow={{ en: "Education", zh: "教育" }}
              theme="programme"
              title={{ en: "Education & Research", zh: "教育与研究" }}
            />
          </Reveal>
          <Reveal>
            <HomeEducationResearchToggle />
          </Reveal>
        </div>
      </section>

      <section className="bg-stage-black py-16 text-text-primary md:py-24">
        <div className="site-shell flex flex-col items-center gap-6 text-center">
          <h2 className="text-balance font-display text-4xl font-medium leading-tight md:text-5xl">
            <LocalizedText
              value={{
                en: "The next intelligent experience starts with one conversation.",
                zh: "下一场智能体验，从一次对话开始。"
              }}
            />
          </h2>
          <ButtonLink href={`mailto:${profile.email}`}>
            <LocalizedText value={{ en: "Send Email", zh: "发送邮件" }} />
          </ButtonLink>
          <LocaleLink className="font-mono text-xs uppercase tracking-[0.14em] text-text-secondary hover:text-muted-gold" href="/contact">
            <LocalizedText value={{ en: "Contact Page", zh: "联系页面" }} /> →
          </LocaleLink>
        </div>
      </section>
    </main>
  );
}
