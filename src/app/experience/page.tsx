import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { LocalizedText } from "@/components/localized-text";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { experiences } from "@/data/experience";

export const metadata: Metadata = {
  title: "Internship Experience",
  description: "Caroline Xia's internship experience across AI product, model products, AI hardware, automotive data products, business operations, and data analysis."
};

export default function ExperiencePage() {
  return (
    <main id="main-content">
      <section className="bg-stage-black pb-16 pt-32 text-text-primary md:pb-20 md:pt-40">
        <div className="site-shell space-y-12">
          <Reveal>
            <SectionHeader
              eyebrow={{ en: "Experience", zh: "经历" }}
              title={{ en: "Internship Experience", zh: "实习经历" }}
            />
          </Reveal>
          <Reveal>
            <div className="border-b border-line-dark pb-12">
              <p className="font-mono text-2xl font-bold text-text-primary">2023—Present</p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-gold">
                <LocalizedText value={{ en: "AI Product Management · Business Operations · Data Analysis", zh: "AI 产品管理 · 商业运营 · 数据分析" }} />
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-programme-ivory py-16 text-ink md:py-24">
        <div className="site-shell space-y-12">
          <Reveal>
            <SectionHeader eyebrow={{ en: "Timeline", zh: "时间线" }} theme="programme" title={{ en: "Internship Timeline", zh: "实习时间线" }} />
          </Reveal>
          <ExperienceTimeline items={experiences} />
        </div>
      </section>

      <section className="bg-stage-black py-20 text-text-primary md:py-28">
        <div className="site-shell flex flex-col items-center gap-8 text-center">
          <h2 className="font-display text-4xl font-normal md:text-5xl">
            <LocalizedText value={{ en: "Want the full picture?", zh: "想看完整作品脉络？" }} />
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/projects">
              <LocalizedText value={{ en: "View Projects", zh: "查看项目" }} />
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
