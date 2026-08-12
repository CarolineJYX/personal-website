import type { Experience } from "@/data/types";
import { localizedKey } from "@/lib/i18n";
import { LocalizedText } from "./localized-text";

type ExperienceTimelineProps = {
  items: Experience[];
  compact?: boolean;
};

export function ExperienceTimeline({ items, compact = false }: ExperienceTimelineProps) {
  if (compact) {
    return (
      <div className="border-y border-line-light">
        {items.slice(0, 3).map((item) => (
          <div className="grid gap-4 border-b border-line-light py-5 last:border-b-0 sm:grid-cols-[220px_1fr]" key={item.id}>
            <p className="whitespace-nowrap font-mono text-sm font-bold tabular-nums text-ink sm:text-right">{item.period}</p>
            <div>
              <p className="font-display text-xl font-semibold text-ink">
                <LocalizedText value={item.company} />
              </p>
              <p className="text-sm text-ink/65">
                <LocalizedText value={item.role} />
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      {items.map((item) => (
        <article className="grid gap-6 md:grid-cols-[280px_1fr]" key={item.id}>
          <div className="relative flex gap-4 md:min-h-full">
            <div className="w-[220px]">
              <p className="whitespace-nowrap font-mono text-sm font-bold tabular-nums text-muted-gold md:text-right">{item.period}</p>
              {item.duration ? <p className="mt-1 font-mono text-[11px] text-ink/45 md:text-right">{item.duration}</p> : null}
              <p className="font-mono text-[11px] text-ink/40 md:text-right">{item.season}</p>
            </div>
            <div aria-hidden="true" className="relative flex w-4 justify-center">
              <span className="mt-8 size-2 rounded-sm bg-wine" />
              <span className="absolute bottom-0 top-10 w-px bg-line-light" />
            </div>
          </div>
          <div className="rounded border border-line-light bg-programme-white p-6 programme-shadow md:p-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div>
                <h2 className="font-display text-3xl font-semibold text-ink">
                  <LocalizedText value={item.company} />
                </h2>
                {item.division ? (
                  <p className="text-sm text-ink/55">
                    <LocalizedText value={item.division} />
                  </p>
                ) : null}
              </div>
              <div className="font-mono text-xs text-ink/70 md:text-right">
                <p>
                  <LocalizedText value={item.location} />
                </p>
              </div>
            </div>
            <div className="mt-5 w-fit border-b border-line-light pb-1">
              <p className="font-body text-lg font-semibold text-ink">
                <LocalizedText value={item.role} />
              </p>
            </div>
            {item.highlights?.length ? (
              <div className="mt-6 space-y-3">
                {item.highlights.map((highlight) => (
                  <p className="max-w-4xl text-sm leading-6 text-ink/80" key={localizedKey(highlight)}>
                    <LocalizedText value={highlight} />
                  </p>
                ))}
              </div>
            ) : (
              <p className="mt-5 max-w-4xl text-sm leading-6 text-ink/80">
                <LocalizedText value={item.description} />
              </p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
