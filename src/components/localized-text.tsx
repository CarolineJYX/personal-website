import type { LocalizedValue } from "@/lib/i18n";
import { isLocalizedString } from "@/lib/i18n";

type LocalizedTextProps = {
  value: LocalizedValue;
  transform?: (value: string) => string;
};

export function LocalizedText({ value, transform }: LocalizedTextProps) {
  if (!isLocalizedString(value)) {
    return <>{transform ? transform(value) : value}</>;
  }

  return (
    <>
      <span data-i18n="en">{transform ? transform(value.en) : value.en}</span>
      <span data-i18n="zh">{transform ? transform(value.zh) : value.zh}</span>
    </>
  );
}
