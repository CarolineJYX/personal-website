import { cn } from "@/lib/cn";

type TagProps = {
  children: React.ReactNode;
  tone?: "dark" | "light" | "accent";
};

export function Tag({ children, tone = "dark" }: TagProps) {
  const styles = {
    dark: "border-line-dark bg-stage-surface text-text-secondary",
    light: "border-line-light bg-programme-ivory text-muted-gold",
    accent: "border-muted-gold bg-transparent text-muted-gold"
  };

  return (
    <span className={cn("inline-flex min-h-7 items-center rounded-full border px-3 py-1 font-mono text-[11px] leading-none", styles[tone])}>
      {children}
    </span>
  );
}
