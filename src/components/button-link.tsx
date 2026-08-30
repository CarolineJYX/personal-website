import { LocaleLink } from "@/components/locale-link";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
  external?: boolean;
  download?: string | boolean;
};

export function ButtonLink({ href, children, variant = "primary", className, external, download }: ButtonLinkProps) {
  const base =
    "group inline-flex min-h-11 items-center justify-center gap-2 rounded-sm font-body text-sm font-semibold transition duration-medium ease-enter focus-visible:outline-muted-gold";
  const variants = {
    primary: "bg-wine px-6 py-3 text-programme-white hover:bg-wine-bright",
    secondary:
      "border border-current bg-transparent px-6 py-3 text-programme-white hover:border-muted-gold hover:text-muted-gold",
    text: "min-h-0 justify-start p-0 font-mono text-xs uppercase tracking-[0.12em] text-current underline-offset-4 hover:text-muted-gold"
  };

  return (
    <LocaleLink
      className={cn(base, variants[variant], className)}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={download}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="transition-transform duration-medium ease-enter group-hover:translate-x-1">
        →
      </span>
    </LocaleLink>
  );
}
