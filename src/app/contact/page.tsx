import type { Metadata } from "next";
import { ContactEmailCard } from "@/components/contact-email-card";
import { LocaleLink } from "@/components/locale-link";
import { LocalizedText } from "@/components/localized-text";
import { Reveal } from "@/components/reveal";
import { Tag } from "@/components/tag";
import { profile } from "@/data/profile";
import { localizedKey } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Caroline Xia for AI product, agent systems, model evaluation, multimodal AI, and product collaboration conversations."
};

export default function ContactPage() {
  return (
    <main className="bg-stage-black pb-20 pt-32 text-text-primary md:pb-24 md:pt-40" id="main-content">
      <div className="site-shell space-y-14">
        <Reveal>
          <header>
            <div>
              <h1 className="text-balance font-display text-5xl font-medium leading-tight md:text-7xl">
                <LocalizedText
                  value={{
                    en: "Let's build the next intelligent experience.",
                    zh: "一起构建下一场智能体验。"
                  }}
                />
              </h1>
              <p className="mt-4 text-2xl font-light text-text-secondary">
                <LocalizedText
                  value={{
                    en: "The next stage starts with one conversation.",
                    zh: "下一场智能体验，从一次对话开始。"
                  }}
                />
              </p>
            </div>
          </header>
        </Reveal>

        <Reveal>
          <ContactEmailCard />
        </Reveal>

        <section className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <div className="space-y-6">
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-muted-gold">
                <LocalizedText value={{ en: "Links", zh: "链接" }} />
              </p>
              <div className="h-px bg-line-dark" />
              <div className="flex items-center justify-between gap-6 py-2">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-secondary">LinkedIn</p>
                  <LocaleLink className="mt-2 block text-base font-semibold underline hover:text-muted-gold" href={profile.linkedin} rel="noreferrer" target="_blank">
                    linkedin.com/in/jingyuan-xia
                  </LocaleLink>
                </div>
                <span className="rounded-sm bg-success/25 px-2 py-1 font-mono text-[10px] font-semibold uppercase text-[#8fd69e]">
                  <LocalizedText value={{ en: "Active", zh: "可用" }} />
                </span>
              </div>
              <div className="flex items-center justify-between gap-6 py-2">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-secondary">GitHub</p>
                  <LocaleLink className="mt-2 block text-base font-semibold underline hover:text-muted-gold" href={profile.github} rel="noreferrer" target="_blank">
                    github.com/CarolineJYX
                  </LocaleLink>
                </div>
                <span className="rounded-sm bg-success/25 px-2 py-1 font-mono text-[10px] font-semibold uppercase text-[#8fd69e]">
                  <LocalizedText value={{ en: "Active", zh: "可用" }} />
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-6">
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-muted-gold">
                <LocalizedText value={{ en: "Focus", zh: "方向" }} />
              </p>
              <div className="h-px bg-line-dark" />
              <div className="space-y-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-secondary">
                    <LocalizedText value={{ en: "Job Intention", zh: "求职意向" }} />
                  </p>
                  <p className="mt-2 text-base font-semibold text-text-primary">
                    <LocalizedText value={profile.jobIntent} />
                  </p>
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-secondary">
                  <LocalizedText value={{ en: "Current Focus Areas", zh: "当前关注方向" }} />
                </p>
                <div className="flex flex-wrap gap-2">
                  {profile.focusAreas.map((area) => (
                    <Tag key={localizedKey(area)} tone="accent">
                      <LocalizedText uppercase value={area} />
                    </Tag>
                  ))}
                </div>
                <div className="space-y-3 pt-2">
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-secondary">
                    <LocalizedText value={{ en: "Strengths", zh: "个人优势" }} />
                  </p>
                  {profile.strengths.map((strength) => (
                    <p className="text-sm leading-7 text-text-secondary" key={localizedKey(strength)}>
                      <LocalizedText value={strength} />
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <nav
          aria-label="Adjacent pages"
          className="flex flex-col justify-between gap-6 border-t border-line-dark pt-10 font-mono text-sm font-semibold uppercase tracking-[0.1em] md:flex-row"
        >
          <LocaleLink className="text-text-primary hover:text-muted-gold" href="/experience">
            ← <LocalizedText value={{ en: "View Internship Experience", zh: "查看实习经历" }} />
          </LocaleLink>
          <LocaleLink className="text-text-primary hover:text-muted-gold" href="/projects">
            <LocalizedText value={{ en: "View Selected Projects", zh: "查看精选项目" }} /> →
          </LocaleLink>
        </nav>
      </div>
    </main>
  );
}
