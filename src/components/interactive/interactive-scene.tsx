"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { getLocalizedText } from "@/lib/i18n";
import {
  contactHotspots,
  continuousStoryLayers,
  projectPosterAssets,
  type ContinuousStoryLayer,
  type LayerPose
} from "@/lib/interactive-assets";
import type { InteractiveZone } from "@/lib/interactive";

type WorldProps = {
  progress: number;
  activeZone: number;
  reducedMotion: boolean;
  zones: InteractiveZone[];
};

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const smoothstep = (value: number) => {
  const ratio = clamp(value);
  return ratio * ratio * (3 - 2 * ratio);
};
const lerp = (from: number, to: number, amount: number) => from + (to - from) * amount;

export function getLayerOpacity(layer: ContinuousStoryLayer, progress: number) {
  if (layer.persistent) return 1;
  if (progress < layer.enterStart || progress > layer.exitEnd) return 0;
  if (progress <= layer.holdStart) {
    if (layer.enterStart === 0) return 1;
    return smoothstep((progress - layer.enterStart) / (layer.holdStart - layer.enterStart));
  }
  if (progress <= layer.holdEnd) return 1;
  return 1 - smoothstep((progress - layer.holdEnd) / (layer.exitEnd - layer.holdEnd));
}

function getLayerPose(layer: ContinuousStoryLayer, progress: number, reducedMotion: boolean): LayerPose {
  if (reducedMotion || layer.persistent) return layer.to;
  if (progress <= layer.holdStart) {
    const amount = smoothstep((progress - layer.enterStart) / Math.max(.001, layer.holdStart - layer.enterStart));
    return { x: lerp(layer.from.x, layer.to.x, amount), y: lerp(layer.from.y, layer.to.y, amount), scale: lerp(layer.from.scale, layer.to.scale, amount) };
  }
  if (progress <= layer.holdEnd) return layer.to;
  const amount = smoothstep((progress - layer.holdEnd) / Math.max(.001, layer.exitEnd - layer.holdEnd));
  return { x: lerp(layer.to.x, layer.out.x, amount), y: lerp(layer.to.y, layer.out.y, amount), scale: lerp(layer.to.scale, layer.out.scale, amount) };
}

function StoryLayer({ layer, progress, reducedMotion }: { layer: ContinuousStoryLayer; progress: number; reducedMotion: boolean }) {
  const opacity = getLayerOpacity(layer, progress);
  const pose = getLayerPose(layer, progress, reducedMotion);
  return (
    <Image
      alt={layer.alt ?? ""}
      aria-hidden={layer.alt ? undefined : true}
      className="interactive-continuous-layer"
      fill
      priority={layer.id === "world" || layer.id.startsWith("entry-")}
      sizes="100vw"
      src={layer.src}
      style={{
        opacity,
        transform: `translate3d(${pose.x}px, ${pose.y}px, 0) scale(${pose.scale})`,
        zIndex: layer.depth
      }}
    />
  );
}

function ProjectAlbum({ active, progress, reducedMotion, zone }: { active: boolean; progress: number; reducedMotion: boolean; zone: InteractiveZone }) {
  const [selected, setSelected] = useState(0);
  const dragStart = useRef<number | null>(null);
  const previous = () => setSelected((value) => Math.max(0, value - 1));
  const next = () => setSelected((value) => Math.min(zone.panels.length - 1, value + 1));
  const opacity = progress < .41 ? smoothstep((progress - .38) / .08) : progress > .66 ? 1 - smoothstep((progress - .66) / .08) : 1;

  return (
    <div aria-hidden={!active} className="interactive-continuous-projects" style={{ opacity, pointerEvents: active ? "auto" : "none" }}>
      <div
        className="interactive-image-poster-track"
        onPointerDown={(event) => { dragStart.current = event.clientX; event.currentTarget.setPointerCapture(event.pointerId); }}
        onPointerUp={(event) => {
          if (dragStart.current === null) return;
          const distance = event.clientX - dragStart.current;
          if (distance > 48) previous();
          if (distance < -48) next();
          dragStart.current = null;
        }}
      >
        {zone.panels.map((panel, index) => {
          const offset = index - selected;
          const isActive = index === selected;
          return (
            <Link
              aria-label={`Open ${getLocalizedText(panel.title, "en")}`}
              className="interactive-image-poster"
              href={panel.href ?? "/projects"}
              key={panel.id}
              style={{
                opacity: isActive ? 1 : Math.abs(offset) > 2 ? 0 : .3,
                transform: `translate3d(calc(-50% + ${offset * 242}px), ${isActive && !reducedMotion ? -12 : 20}px, 0) rotate(${offset * 1.2}deg) scale(${isActive ? 1 : .78})`,
                zIndex: isActive ? 8 : 4 - Math.min(3, Math.abs(offset))
              }}
              tabIndex={active && isActive ? 0 : -1}
            >
              <Image alt="" fill priority={index === 0} sizes="300px" src={projectPosterAssets[index]} />
            </Link>
          );
        })}
      </div>
      <div className="interactive-project-controls">
        <button aria-label="Previous project" disabled={selected === 0} onClick={previous} type="button">←</button>
        <span>{String(selected + 1).padStart(2, "0")} / {String(zone.panels.length).padStart(2, "0")}</span>
        <button aria-label="Next project" disabled={selected === zone.panels.length - 1} onClick={next} type="button">→</button>
      </div>
    </div>
  );
}

function ContactLinks({ active, progress, zone }: { active: boolean; progress: number; zone: InteractiveZone }) {
  const layer = continuousStoryLayers.find((item) => item.id === "contact-caroline")!;
  const opacity = getLayerOpacity(layer, progress);
  return (
    <div aria-hidden={!active} className="interactive-continuous-hotspots" style={{ opacity, pointerEvents: active ? "auto" : "none" }}>
      {contactHotspots.map((hotspot) => {
        const panel = zone.panels.find((item) => item.id === hotspot.id);
        if (!panel?.href) return null;
        return (
          <Link
            aria-label={getLocalizedText(panel.title, "en")}
            className="interactive-image-hotspot"
            href={panel.href}
            key={hotspot.id}
            rel={panel.external ? "noreferrer" : undefined}
            style={{ height: `${hotspot.height}%`, left: `${hotspot.left}%`, top: `${hotspot.top}%`, width: `${hotspot.width}%` }}
            tabIndex={active ? 0 : -1}
            target={panel.external ? "_blank" : undefined}
          />
        );
      })}
    </div>
  );
}

export function PencilGalleryWorld({ activeZone, progress, reducedMotion, zones }: WorldProps) {
  const routeProgress = Math.min(100, Math.max(0, progress * 112));
  return (
    <div className="interactive-story-world" data-active-zone={activeZone}>
      {continuousStoryLayers.map((layer) => <StoryLayer key={layer.id} layer={layer} progress={progress} reducedMotion={reducedMotion} />)}
      <div aria-hidden="true" className="interactive-blue-route" style={{ clipPath: `inset(0 ${100 - routeProgress}% 0 0)` }}>
        <Image alt="" fill priority sizes="100vw" src="/images/interactive/continuous/blue-route.png" />
      </div>
      <ProjectAlbum active={activeZone === 2} progress={progress} reducedMotion={reducedMotion} zone={zones[2]} />
      <ContactLinks active={activeZone === 4} progress={progress} zone={zones[4]} />
    </div>
  );
}
