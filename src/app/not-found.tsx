import Link from "next/link";
import { LocalizedText } from "@/components/localized-text";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-stage-black px-5 pb-24 pt-32 text-text-primary" id="main-content">
      <div className="site-shell">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-gold">
          <LocalizedText value={{ en: "Page Missing", zh: "页面不存在" }} />
        </p>
        <h1 className="mt-4 font-display text-5xl">
          <LocalizedText value={{ en: "This page was not found.", zh: "页面不存在。" }} />
        </h1>
        <Link className="mt-8 inline-flex font-mono text-sm uppercase tracking-[0.12em] text-muted-gold hover:text-text-primary" href="/">
          <LocalizedText value={{ en: "Return Home", zh: "返回首页" }} /> →
        </Link>
      </div>
    </main>
  );
}
