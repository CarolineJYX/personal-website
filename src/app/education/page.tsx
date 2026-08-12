import type { Metadata } from "next";
import { AwardRows, EducationList, ResearchCard } from "@/components/education-list";
import { LocalizedText } from "@/components/localized-text";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { awards, educationItems, researchItems } from "@/data/education";

export const metadata: Metadata = {
  title: "Education & Research",
  description: "Caroline Xia's education and research background, including NUS, Shanghai Theatre Academy, University of Leeds Exchange Programme, and video object tracking research."
};

export default function EducationPage() {
  return (
    <main id="main-content">
      <section className="bg-stage-black pb-16 pt-32 text-text-primary md:pb-20 md:pt-40">
        <div className="site-shell space-y-8">
          <Reveal>
            <SectionHeader
              eyebrow={{ en: "Education", zh: "教育" }}
              title={{ en: "Education & Research", zh: "教育与研究" }}
            />
          </Reveal>
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-muted-gold">
            <LocalizedText value={{ en: "Academic Timeline: 2020—Present", zh: "学术时间线：2020—至今" }} />
          </p>
        </div>
      </section>

      <section className="bg-programme-ivory py-16 text-ink md:py-24">
        <div className="site-shell space-y-12">
          <Reveal>
            <SectionHeader eyebrow={{ en: "Degrees", zh: "学位" }} theme="programme" title={{ en: "Academic Foundation", zh: "学术基础" }} />
          </Reveal>
          <EducationList items={educationItems} />
        </div>
      </section>

      <section className="bg-stage-black py-16 text-text-primary md:py-24">
        <div className="site-shell space-y-12">
          <Reveal>
            <SectionHeader eyebrow={{ en: "Research", zh: "研究" }} title={{ en: "Selected Research", zh: "研究项目" }} />
          </Reveal>
          {researchItems.map((item) => (
            <Reveal key={item.id}>
              <ResearchCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      {awards.length > 0 ? (
        <section className="bg-stage-black py-16 text-text-primary md:py-24">
          <div className="site-shell space-y-10">
            <Reveal>
              <SectionHeader eyebrow={{ en: "Credentials", zh: "资质" }} title={{ en: "Awards & Honours", zh: "奖项荣誉" }} />
            </Reveal>
            <Reveal>
              <AwardRows awards={awards} />
            </Reveal>
          </div>
        </section>
      ) : null}
    </main>
  );
}
