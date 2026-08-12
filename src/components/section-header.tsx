import { LocalizedText } from "@/components/localized-text";
import { cn } from "@/lib/cn";
import type { LocalizedValue } from "@/lib/i18n";

type SectionHeaderProps = {
  eyebrow: LocalizedValue;
  title: LocalizedValue;
  description?: LocalizedValue;
  theme?: "stage" | "programme";
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, theme = "stage", className }: SectionHeaderProps) {
  const isStage = theme === "stage";

  return (
    <div className={cn("flex max-w-3xl flex-col gap-3", className)}>
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-gold">
        <LocalizedText value={eyebrow} />
      </p>
      <div className="h-px w-32 bg-muted-gold" />
      <div className="flex flex-col gap-2">
        <h2 className={cn("font-display text-4xl font-medium leading-tight md:text-5xl", isStage ? "text-text-primary" : "text-ink")}>
          <LocalizedText value={title} />
        </h2>
      </div>
      {description ? (
        <p className={cn("max-w-reading text-base leading-7 md:text-lg", isStage ? "text-text-secondary" : "text-ink/75")}>
          <LocalizedText value={description} />
        </p>
      ) : null}
    </div>
  );
}
