"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { LocalizedText } from "@/components/localized-text";
import type { InteractiveZone } from "@/lib/interactive";

const PencilGalleryWorld = dynamic(() => import("./interactive-scene").then((module) => module.PencilGalleryWorld), {
  ssr: false,
  loading: () => <div className="interactive-paper-loading absolute inset-0" aria-hidden="true" />
});

type Props = {
  zones: InteractiveZone[];
};

const chapterStops = [0.03, 0.25, 0.47, 0.7, 0.93];

function PanelLink({ panel }: { panel: InteractiveZone["panels"][number] }) {
  const content = (
    <>
      <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#858a86]">{panel.id.replaceAll("-", " ")}</span>
      <strong className="mt-2 block font-display text-2xl font-medium leading-none text-[#252825]"><LocalizedText value={panel.title} /></strong>
      <span className="mt-3 line-clamp-3 block text-[11px] leading-5 text-[#666b67]"><LocalizedText value={panel.subtitle} /></span>
      {panel.href ? <span className="mt-4 inline-block font-mono text-[8px] uppercase tracking-[0.12em] text-[#3d6872]"><LocalizedText value={{ en: "Open record", zh: "打开档案" }} /> ↗</span> : null}
    </>
  );

  return panel.href ? (
    <Link
      className="interactive-archive-sheet"
      href={panel.href}
      rel={panel.external ? "noreferrer" : undefined}
      target={panel.external ? "_blank" : undefined}
    >
      {content}
    </Link>
  ) : (
    <div className="interactive-archive-sheet">{content}</div>
  );
}

export function InteractiveExperience({ zones }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const reducedMotion = Boolean(useReducedMotion());
  const [progress, setProgress] = useState(0);
  const [activeZone, setActiveZone] = useState(0);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [localeNotice, setLocaleNotice] = useState(false);

  useEffect(() => {
    const previousLocale = document.documentElement.dataset.locale;
    const previousLang = document.documentElement.lang;
    document.documentElement.dataset.locale = "en";
    document.documentElement.lang = "en";
    return () => {
      if (previousLocale) document.documentElement.dataset.locale = previousLocale;
      else delete document.documentElement.dataset.locale;
      document.documentElement.lang = previousLang;
    };
  }, []);

  const updateProgress = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;
    const rect = root.getBoundingClientRect();
    const travel = Math.max(1, root.offsetHeight - window.innerHeight);
    const next = Math.min(1, Math.max(0, -rect.top / travel));
    setProgress(next);

    let nearest = 0;
    chapterStops.forEach((stop, index) => {
      if (Math.abs(stop - next) < Math.abs(chapterStops[nearest] - next)) nearest = index;
    });
    setActiveZone(nearest);
  }, []);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateProgress);
    };
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateProgress]);

  useEffect(() => {
    setArchiveOpen(false);
  }, [activeZone]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setArchiveOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const goToChapter = (index: number) => {
    const root = rootRef.current;
    if (!root) return;
    const travel = root.offsetHeight - window.innerHeight;
    window.scrollTo({ top: root.offsetTop + travel * chapterStops[index], behavior: "instant" as ScrollBehavior });
    setActiveZone(index);
  };

  return (
    <main className="interactive-paper-page relative h-[650svh] bg-[#f7f7f3] text-[#282b29]" id="main-content" ref={rootRef}>
      <div className="sticky top-0 h-svh overflow-hidden">
        <PencilGalleryWorld activeZone={activeZone} progress={progress} reducedMotion={reducedMotion} zones={zones} />
        <div className="interactive-paper-grain pointer-events-none absolute inset-0" aria-hidden="true" />

        <section aria-hidden={activeZone !== 0} aria-labelledby="interactive-entry-title" className="sr-only">
          <h1 id="interactive-entry-title"><LocalizedText value={zones[0].title} /></h1>
          <p><LocalizedText value={zones[0].panels[0].title} /></p>
          <p><LocalizedText value={zones[0].description} /></p>
        </section>

        <div className="pointer-events-none fixed inset-x-0 top-0 z-30">
          <div className="flex items-start justify-between px-4 pt-4 md:px-7 md:pt-6">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#343735]">Caroline Xia · Pencil Gallery</p>
              <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-[#858a86]">
                {zones[activeZone].index} / 05 · <LocalizedText value={zones[activeZone].label} />
              </p>
            </div>
            <div className="pointer-events-auto flex items-center gap-2">
              <div aria-label="Language switcher" className="interactive-image-language" role="group">
                <button aria-label="English comic" aria-pressed="true" type="button">EN</button>
                <button aria-label="Chinese comic coming soon" aria-pressed="false" onClick={() => setLocaleNotice(true)} type="button">中</button>
              </div>
              <button
                aria-expanded={archiveOpen}
                className="interactive-gallery-control"
                onClick={() => setArchiveOpen((value) => !value)}
                type="button"
              >
                <LocalizedText value={{ en: "Archive", zh: "档案" }} /> +
              </button>
              <Link className="interactive-gallery-control" href="/">
                <LocalizedText value={{ en: "Exit", zh: "退出" }} /> ↗
              </Link>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {localeNotice ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="interactive-language-notice"
              exit={{ opacity: 0, y: -8 }}
              initial={{ opacity: 0, y: -8 }}
              role="status"
              transition={{ duration: reducedMotion ? 0.01 : 0.18 }}
            >
              <span>Chinese comic version is coming soon.</span>
              <button aria-label="Close language notice" onClick={() => setLocaleNotice(false)} type="button">×</button>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {archiveOpen ? (
            <motion.aside
              animate={{ opacity: 1, x: 0 }}
              aria-label="Current gallery chapter archive"
              className="interactive-paper-page fixed inset-y-0 right-0 z-40 flex w-full max-w-md flex-col border-l border-[#666b67]/40 bg-[#f9f9f5]/[0.98] text-[#282b29] shadow-[-14px_0_40px_rgba(50,54,51,.12)]"
              exit={{ opacity: 0, x: "100%" }}
              initial={{ opacity: 0, x: "100%" }}
              role="dialog"
              transition={{ duration: reducedMotion ? 0.01 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-[#777c78]/30 px-6 py-5">
                <p className="interactive-pencil-label">{zones[activeZone].index} · <LocalizedText value={zones[activeZone].label} /></p>
                <button aria-label="Close archive" className="interactive-gallery-control" onClick={() => setArchiveOpen(false)} type="button">×</button>
              </div>
              <div className="flex-1 overflow-y-auto px-6 py-8 md:px-8">
                <h2 className="font-display text-5xl font-medium leading-[0.9]"><LocalizedText value={zones[activeZone].title} /></h2>
                <p className="mt-6 text-xs leading-6 text-[#666b67]"><LocalizedText value={zones[activeZone].description} /></p>
                <div className="mt-9 grid gap-4">
                  {zones[activeZone].panels.map((panel) => <PanelLink key={panel.id} panel={panel} />)}
                </div>
              </div>
            </motion.aside>
          ) : null}
        </AnimatePresence>

        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30">
          <div className="flex items-end justify-between px-4 pb-4 md:px-7 md:pb-6">
            <motion.div animate={{ opacity: progress < 0.08 ? 1 : 0 }} className="max-w-[190px]">
              <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#555a57]"><LocalizedText value={{ en: "Scroll to enter", zh: "滚动进入画廊" }} /></p>
              <p className="mt-2 text-[10px] leading-4 text-[#858a86]"><LocalizedText value={{ en: "One chapter, one focal piece.", zh: "每一章，只保留一个视觉重点。" }} /></p>
            </motion.div>

            <nav aria-label="Gallery chapters" className="pointer-events-auto ml-auto flex items-end gap-1.5">
              {zones.map((zone, index) => (
                <button
                  aria-current={index === activeZone ? "step" : undefined}
                  aria-label={`Go to chapter ${index + 1}`}
                  className={`interactive-chapter-tick group flex min-h-11 flex-col items-center justify-end gap-2 px-1.5 ${index === activeZone ? "text-[#252825]" : "text-[#999d99] hover:text-[#4d524e]"}`}
                  key={zone.id}
                  onClick={() => goToChapter(index)}
                  type="button"
                >
                  <span className="hidden max-w-20 font-mono text-[7px] uppercase tracking-[0.08em] md:block"><LocalizedText value={zone.label} /></span>
                  <span className={`interactive-chapter-tick-line block h-px transition-all ${index === activeZone ? "w-10 bg-[#2d302e]" : "w-4 bg-[#aeb2ae] group-hover:w-7"}`} />
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}
