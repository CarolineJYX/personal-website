import { cn } from "@/lib/cn";
import type { LocalizedValue } from "@/lib/i18n";
import { getLocalizedText } from "@/lib/i18n";

type MediaPlaceholderProps = {
  label: LocalizedValue;
  ratio: "16:10" | "4:5" | "3:2" | "16:9" | "4:5-mobile";
  className?: string;
};

const ratioClasses = {
  "16:10": "aspect-[16/10]",
  "4:5": "aspect-[4/5]",
  "3:2": "aspect-[3/2]",
  "16:9": "aspect-video",
  "4:5-mobile": "aspect-[4/5]"
};

export function MediaPlaceholder({ label, ratio, className }: MediaPlaceholderProps) {
  return (
    <div
      aria-label={`${getLocalizedText(label)} visual`}
      className={cn(
        "relative overflow-hidden rounded border border-line-dark bg-stage-surface p-5 text-text-secondary",
        ratioClasses[ratio],
        className
      )}
      role="img"
    >
      <div className="absolute inset-0 opacity-70">
        <div className="absolute left-1/2 top-0 h-full w-px bg-line-dark" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-line-dark" />
        <div className="absolute -left-12 top-1/3 size-48 rounded-full border border-wine/40" />
        <div className="absolute right-8 top-10 h-28 w-40 rotate-[-8deg] border border-muted-gold/30" />
        <div className="absolute bottom-10 right-1/4 h-px w-48 bg-wine/60" />
      </div>
      <div aria-hidden="true" className="relative z-10 h-full" />
    </div>
  );
}
