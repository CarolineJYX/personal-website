import { cn } from "@/lib/cn";
import type { LocalizedValue } from "@/lib/i18n";
import { LocalizedText } from "./localized-text";

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
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden rounded border border-line-dark bg-stage-surface p-5 text-text-secondary",
        ratioClasses[ratio],
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(148,38,51,0.42),transparent_34%),linear-gradient(135deg,rgba(176,154,106,0.12),transparent_55%)]" />
      <div className="absolute inset-0 opacity-80">
        <div className="absolute -right-12 -top-16 size-64 rounded-full border border-muted-gold/25" />
        <div className="absolute -right-4 -top-8 size-48 rounded-full border border-muted-gold/20" />
        <div className="absolute -bottom-20 left-8 size-52 rotate-12 border border-wine/55" />
        <div className="absolute bottom-16 left-0 h-px w-2/3 bg-gradient-to-r from-transparent via-muted-gold/50 to-transparent" />
      </div>
      <div className="relative z-10 flex h-full flex-col justify-between">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-gold">
          AI Product Case
        </p>
        <div className="max-w-[85%]">
          <p className="font-display text-2xl font-medium leading-tight text-text-primary md:text-3xl">
            <LocalizedText value={label} />
          </p>
          <div className="mt-4 h-px w-16 bg-wine-bright" />
        </div>
      </div>
    </div>
  );
}
