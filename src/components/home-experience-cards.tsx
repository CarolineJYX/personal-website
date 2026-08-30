import type { Experience } from "@/data/types";
import { localizedKey } from "@/lib/i18n";
import { LocalizedText } from "./localized-text";

type HomeExperienceCardsProps = {
  items: Experience[];
};

export function HomeExperienceCards({ items }: HomeExperienceCardsProps) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <article className="rounded border border-line-light bg-programme-white p-5 programme-shadow md:p-6" key={item.id}>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-gold">
                <LocalizedText value={{ en: "Internship", zh: "实习" }} />
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink">
                <LocalizedText value={item.company} />
              </h2>
              {item.division ? (
                <p className="mt-1 text-sm text-ink/55">
                  <LocalizedText value={item.division} />
                </p>
              ) : null}
              <p className="mt-3 text-lg font-semibold text-ink">
                <LocalizedText value={item.role} />
              </p>
            </div>
            <div className="font-mono text-xs text-ink/70 md:text-right">
              <p>{item.period}</p>
              <p className="mt-1 font-semibold text-wine">
                <LocalizedText value={item.location} />
              </p>
            </div>
          </div>

          {item.highlights?.length ? (
            <div className="mt-5 space-y-3 border-t border-line-light pt-5">
              {item.highlights.map((highlight) => (
                <p className="max-w-5xl text-sm leading-6 text-ink/80" key={localizedKey(highlight)}>
                  <LocalizedText value={highlight} />
                </p>
              ))}
            </div>
          ) : (
            <p className="mt-5 max-w-5xl border-t border-line-light pt-5 text-sm leading-6 text-ink/80">
              <LocalizedText value={item.description} />
            </p>
          )}
        </article>
      ))}
    </div>
  );
}
