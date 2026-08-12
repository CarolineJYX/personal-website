"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { LocalizedText } from "@/components/localized-text";
import { educationItems, researchItems } from "@/data/education";
import { cn } from "@/lib/cn";

type HomeEducationTab = "education" | "research";

const tabLabels: Record<HomeEducationTab, { en: string; zh: string }> = {
  education: { en: "Education", zh: "教育" },
  research: { en: "Research", zh: "研究" }
};

export function HomeEducationResearchToggle() {
  const [activeTab, setActiveTab] = useState<HomeEducationTab>("education");
  const education = educationItems[0];
  const research = researchItems[0];

  function renderTab(value: HomeEducationTab) {
    const isActive = activeTab === value;

    return (
      <button
        aria-pressed={isActive}
        className={cn(
          "min-h-11 px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition",
          isActive ? "bg-wine text-programme-white" : "bg-programme-white text-ink/60 hover:text-ink"
        )}
        onClick={() => setActiveTab(value)}
        type="button"
      >
        <LocalizedText value={tabLabels[value]} />
      </button>
    );
  }

  return (
    <div className="space-y-8">
      <div
        aria-label="Education and research summary"
        className="inline-flex min-h-11 overflow-hidden rounded-sm border border-line-light bg-line-light"
        role="group"
      >
        {renderTab("education")}
        {renderTab("research")}
      </div>

      {activeTab === "education" ? (
        <article className="rounded border border-line-light bg-programme-white p-6 md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-gold">
                <LocalizedText value={{ en: "Education", zh: "教育" }} />
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
                <LocalizedText value={education.institution} />
              </h3>
              <p className="mt-2 text-lg font-semibold text-ink">
                <LocalizedText value={education.programme} />
              </p>
            </div>
            <div className="font-mono text-xs text-ink/70 md:text-right">
              <p>{education.period}</p>
              {education.result ? (
                <p className="mt-1 font-semibold text-wine">
                  <LocalizedText value={education.result} />
                </p>
              ) : null}
            </div>
          </div>
          {education.notes[0] ? (
            <p className="mt-6 max-w-3xl text-sm leading-6 text-ink/75">
              <LocalizedText value={education.notes[0]} />
            </p>
          ) : null}
        </article>
      ) : (
        <article className="rounded border border-line-light bg-programme-white p-6 md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-gold">
                <LocalizedText value={{ en: "Research", zh: "研究" }} />
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
                <LocalizedText value={research.title} />
              </h3>
              <p className="mt-2 text-sm text-ink/60">
                <LocalizedText value={research.type} />
              </p>
            </div>
            <div className="font-mono text-xs text-ink/70 md:text-right">
              <p>{research.period}</p>
              <p className="mt-1 font-semibold uppercase text-wine">{research.status}</p>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-ink/75">
            <LocalizedText value={research.description} />
          </p>
        </article>
      )}

      <div className="flex justify-center">
        <ButtonLink className="text-ink" href="/education" variant="text">
          <LocalizedText value={{ en: "View Full Education & Research", zh: "查看完整教育与研究" }} />
        </ButtonLink>
      </div>
    </div>
  );
}
