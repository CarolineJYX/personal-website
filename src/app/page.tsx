import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { HomeEducationResearchToggle } from "@/components/home-education-research-toggle";
import { LocalizedText } from "@/components/localized-text";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Home",
  description: "Caroline Xia's AI product manager portfolio, covering experience, selected work, education, and research."
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="stage-glow bg-stage-black pb-20 pt-32 text-text-primary md:pb-28 md:pt-40">
        <div className="site-shell grid min-h-[72svh] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_420px] xl:grid-cols-[minmax(0,1fr)_460px]">
          <Reveal className="flex max-w-4xl flex-col items-start gap-8">
            <div>
              <h1 className="text-balance font-display text-[52px] font-medium leading-[0.98] text-text-primary md:text-[80px]">
                <LocalizedText transform={(value) => value.toUpperCase()} value={profile.name} />
              </h1>
              <p className="mt-3 font-display text-3xl text-text-secondary">
                <LocalizedText value={profile.role} />
              </p>
            </div>
            <div className="max-w-2xl space-y-4">
              <p className="text-xl leading-8 text-text-primary">
                <LocalizedText value={profile.statement} />
              </p>
              <p className="text-base leading-7 text-text-secondary">
                <LocalizedText value={profile.extendedStatement} />
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <ButtonLink external href={profile.linkedin}>
                LinkedIn
              </ButtonLink>
              <ButtonLink external href={profile.github} variant="secondary">
                GitHub
              </ButtonLink>
              {profile.resumeUrl ? (
                <ButtonLink href={profile.resumeUrl} variant="secondary">
                  <LocalizedText value={{ en: "Read Resume", zh: "查看简历" }} />
                </ButtonLink>
              ) : null}
            </div>
          </Reveal>
          <Reveal className="w-full max-w-[360px] justify-self-center sm:max-w-[400px] lg:max-w-none lg:justify-self-end">
            <div className="relative aspect-[3/4] overflow-hidden rounded border border-line-dark bg-stage-surface">
              <Image
                alt="Caroline Xia portrait / 夏静远头像"
                className="object-cover object-[50%_18%]"
                fill
                priority
                sizes="(min-width: 1280px) 460px, (min-width: 1024px) 420px, min(90vw, 400px)"
                src="/images/profile-caroline-xia.jpg"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-programme-ivory py-16 text-ink md:py-28">
        <div className="site-shell space-y-12">
          <Reveal>
            <SectionHeader
              eyebrow={{ en: "Experience", zh: "经历" }}
              theme="programme"
              title={{ en: "Internship Experience", zh: "实习经历" }}
            />
          </Reveal>
          <Reveal>
            <ExperienceTimeline compact items={experiences} />
          </Reveal>
          <div className="flex justify-center">
            <ButtonLink className="text-ink" href="/experience" variant="text">
              <LocalizedText value={{ en: "View Full Internship Experience", zh: "查看完整实习经历" }} />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-stage-black py-16 text-text-primary md:py-24">
        <div className="site-shell space-y-12">
          <Reveal>
            <SectionHeader
              eyebrow={{ en: "Projects", zh: "项目" }}
              title={{ en: "Selected Work", zh: "精选项目" }}
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-12">
            {featuredProjects.map((project, index) => (
              <Reveal className={index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5" : "md:col-span-12"} key={project.slug}>
                <ProjectCard project={project} size={index === 1 ? "regular" : "large"} />
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

      <section className="bg-programme-ivory py-16 text-ink md:py-28">
        <div className="site-shell space-y-12">
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

      <section className="bg-stage-black py-20 text-text-primary md:py-32">
        <div className="site-shell flex flex-col items-center gap-8 text-center">
          <h2 className="text-balance font-display text-4xl font-medium leading-tight md:text-6xl">
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
          <Link className="font-mono text-xs uppercase tracking-[0.14em] text-text-secondary hover:text-muted-gold" href="/contact">
            <LocalizedText value={{ en: "Contact Page", zh: "联系页面" }} /> →
          </Link>
        </div>
      </section>
    </main>
  );
}
