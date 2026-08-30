"use client";

import { useRef } from "react";
import type { ProjectMedia } from "@/data/types";
import { getLocalizedText } from "@/lib/i18n";
import { useLocale } from "./locale-provider";

export function ProjectVideo({ media }: { media: ProjectMedia }) {
  const locale = useLocale();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canPreview = () =>
    media.preview === true &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const startPreview = () => {
    const video = videoRef.current;

    if (!video || !canPreview()) {
      return;
    }

    video.muted = true;
    void video.play().catch(() => undefined);
  };

  const stopPreview = () => {
    if (canPreview()) {
      videoRef.current?.pause();
    }
  };

  return (
    <div className="bg-black">
      <video
        aria-label={getLocalizedText(media.alt, locale)}
        className="mx-auto block h-auto max-h-[82svh] w-full object-contain"
        controls
        height={media.height}
        muted
        onBlur={stopPreview}
        onFocus={startPreview}
        onPointerEnter={startPreview}
        onPointerLeave={stopPreview}
        playsInline
        poster={media.poster}
        preload="metadata"
        ref={videoRef}
        width={media.width}
      >
        <source src={media.src} type="video/mp4" />
        {locale === "zh" ? "你的浏览器不支持视频播放。" : "Your browser does not support video playback."}
      </video>
      <div className="flex justify-end border-t border-line-dark px-5 py-3">
        <a
          className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-gold underline-offset-4 hover:underline"
          download
          href={media.src}
        >
          {getLocalizedText(
            media.downloadLabel ?? { en: "Download video fallback", zh: "下载视频备用文件" },
            locale
          )}
        </a>
      </div>
    </div>
  );
}
