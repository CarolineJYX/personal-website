import type { ContentStatus } from "@/data/types";
import { cn } from "@/lib/cn";
import type { LocalizedString } from "@/lib/i18n";
import { LocalizedText } from "./localized-text";

const statusLabels: Record<ContentStatus, LocalizedString> = {
  public: { en: "PUBLIC CASE STUDY", zh: "公开案例" },
  confidential: { en: "CONFIDENTIAL", zh: "保密" },
  draft: { en: "DRAFT", zh: "草稿" },
  planned: { en: "PLANNED", zh: "计划中" },
  completed: { en: "COMPLETED", zh: "已完成" },
  "in-progress": { en: "IN PROGRESS", zh: "进行中" }
};

type StatusBadgeProps = {
  status: ContentStatus;
  confidential?: boolean;
  className?: string;
};

export function StatusBadge({ status, confidential, className }: StatusBadgeProps) {
  const label = confidential ? { en: "PUBLIC SUMMARY", zh: "公开摘要" } : statusLabels[status];

  return (
    <span
      className={cn(
        "inline-flex rounded-sm border border-wine-bright bg-wine px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-programme-white",
        className
      )}
    >
      <LocalizedText value={label} />
    </span>
  );
}
