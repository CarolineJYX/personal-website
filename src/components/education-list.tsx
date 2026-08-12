import type { AwardItem, EducationItem, ResearchItem } from "@/data/types";
import { localizedKey } from "@/lib/i18n";
import { LocalizedText } from "./localized-text";
import { Tag } from "./tag";

export function EducationList({ items }: { items: EducationItem[] }) {
  return (
    <div className="flex flex-col gap-10">
      {items.map((item, index) => (
        <article className="grid gap-6 md:grid-cols-[280px_1fr]" key={item.id}>
          <div className="relative flex gap-4">
            <div className="w-16">
              <p className="font-mono text-sm font-bold text-muted-gold">{item.year}</p>
            </div>
            <div aria-hidden="true" className="relative flex w-4 justify-center">
              <span className="mt-8 size-2 rounded-sm bg-wine" />
              <span className="absolute bottom-0 top-10 w-px bg-line-light" />
            </div>
          </div>
          <div className="rounded border border-line-light bg-programme-white p-6 md:p-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div>
                <h2 className="font-display text-3xl font-semibold text-ink">
                  <LocalizedText value={item.institution} />
                </h2>
                {item.field ? (
                  <p className="text-sm text-ink/60">
                    <LocalizedText value={item.field} />
                  </p>
                ) : null}
              </div>
              <div className="font-mono text-xs text-ink/75 md:text-right">
                <p>{item.period}</p>
                {item.result ? (
                  <p className="font-semibold text-wine">
                    <LocalizedText value={item.result} />
                  </p>
                ) : null}
                {item.exchange ? (
                  <p className="mt-1 text-muted-gold">
                    <LocalizedText value={{ en: "EXCHANGE PROGRAMME", zh: "交换项目" }} />
                  </p>
                ) : null}
                {item.credentialNote ? (
                  <p className="mt-1 text-muted-gold">
                    <LocalizedText value={item.credentialNote} />
                  </p>
                ) : null}
              </div>
            </div>
            <div className="mt-5 w-fit border-b border-line-light pb-1">
              <p className="font-body text-lg font-semibold text-ink">
                <LocalizedText value={item.programme} />
              </p>
            </div>
            {item.notes.map((note) => (
              <p className="mt-5 max-w-4xl text-sm leading-6 text-ink/80" key={localizedKey(note)}>
                <LocalizedText value={note} />
              </p>
            ))}
            {item.coursework?.length ? (
              <div className="mt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink/45">
                  <LocalizedText value={{ en: "Coursework", zh: "主修课程" }} />
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.coursework.map((course) => (
                    <Tag key={localizedKey(course)} tone="light">
                      <LocalizedText value={course} />
                    </Tag>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <article className="rounded border border-line-dark bg-stage-surface p-6 md:p-10">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-sm bg-wine px-3 py-1 font-mono text-[11px] font-semibold uppercase text-programme-white">
            <LocalizedText value={{ en: "Featured Research", zh: "精选研究" }} />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted-gold">
            {item.status} · <LocalizedText value={item.type} />
          </span>
        </div>
        <p className="font-mono text-sm font-semibold text-text-primary">{item.period}</p>
      </div>
      <h2 className="mt-8 font-display text-4xl font-medium leading-tight text-text-primary">
        <LocalizedText value={item.title} />
      </h2>
      <p className="mt-3 text-lg text-text-secondary">
        <LocalizedText value={{ en: "Multimodal Agent System and Computer Vision", zh: "多模态智能体系统与计算机视觉" }} />
      </p>
      <div className="my-6 h-px bg-line-dark" />
      {item.highlights?.length ? null : (
        <p className="max-w-4xl text-base leading-7 text-text-secondary">
          <LocalizedText value={item.description} />
        </p>
      )}
      {item.highlights?.length ? (
        <div className="mt-6 space-y-3">
          {item.highlights.map((highlight) => (
            <p className="max-w-4xl text-sm leading-7 text-text-secondary" key={localizedKey(highlight)}>
              <LocalizedText value={highlight} />
            </p>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export function AwardRows({ awards }: { awards: AwardItem[] }) {
  return (
    <div className="border-t border-line-dark">
      {awards.map((award) => (
        <div className="grid gap-3 border-b border-line-dark py-4 md:grid-cols-[1fr_1fr_120px] md:items-center" key={award.id}>
          <p className="font-body text-sm font-semibold text-text-primary md:text-base">
            <LocalizedText value={award.title} />
          </p>
          <p className="text-sm text-text-secondary">{award.issuer}</p>
          <p className="font-mono text-sm font-semibold text-muted-gold md:text-right">{award.year}</p>
        </div>
      ))}
    </div>
  );
}
