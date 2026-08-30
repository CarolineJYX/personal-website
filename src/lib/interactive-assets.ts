export type ImageHotspot = {
  id: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

export type LayerPose = { x: number; y: number; scale: number };

export type ContinuousStoryLayer = {
  id: string;
  src: string;
  alt?: string;
  persistent?: boolean;
  enterStart: number;
  holdStart: number;
  holdEnd: number;
  exitEnd: number;
  depth: number;
  from: LayerPose;
  to: LayerPose;
  out: LayerPose;
};

const still = { x: 0, y: 0, scale: 1 };

export const continuousStoryLayers: ContinuousStoryLayer[] = [
  { id: "world", src: "/images/interactive/entry-background.png", persistent: true, enterStart: 0, holdStart: 0, holdEnd: 1, exitEnd: 1, depth: 0, from: still, to: still, out: still },
  { id: "entry-speech", src: "/images/interactive/entry-speech.png", enterStart: 0, holdStart: .01, holdEnd: .13, exitEnd: .24, depth: 6, from: { x: -8, y: 4, scale: .995 }, to: still, out: { x: -26, y: -5, scale: .97 } },
  { id: "entry-caroline", src: "/images/interactive/entry-caroline.png", alt: "Caroline Xia waves hello", enterStart: 0, holdStart: .01, holdEnd: .12, exitEnd: .23, depth: 8, from: { x: 8, y: 3, scale: 1.005 }, to: still, out: { x: 34, y: 8, scale: .97 } },
  { id: "guide-point-work", src: "/images/interactive/continuous/guide-point.png", enterStart: .12, holdStart: .19, holdEnd: .28, exitEnd: .37, depth: 10, from: { x: 34, y: 8, scale: .97 }, to: { x: 8, y: 0, scale: 1 }, out: { x: 28, y: 4, scale: .97 } },
  { id: "work-heading", src: "/images/interactive/continuous/work-heading.png", enterStart: .14, holdStart: .21, holdEnd: .35, exitEnd: .45, depth: 5, from: { x: -22, y: 2, scale: .98 }, to: still, out: { x: -20, y: -8, scale: .96 } },
  ...[1, 2, 3].map((number, index): ContinuousStoryLayer => ({
    id: `work-card-${number}`,
    src: `/images/interactive/continuous/work-card-${number}.png`,
    enterStart: .16 + index * .035,
    holdStart: .22 + index * .035,
    holdEnd: .35 + index * .025,
    exitEnd: .52,
    depth: 4 + index,
    from: { x: -18 + index * 18, y: 18, scale: .96 },
    to: still,
    out: { x: -12 + index * 12, y: -18, scale: .94 }
  })),
  { id: "guide-place-card", src: "/images/interactive/continuous/guide-place-card.png", enterStart: .34, holdStart: .41, holdEnd: .49, exitEnd: .57, depth: 12, from: { x: 30, y: 14, scale: .97 }, to: still, out: { x: 18, y: -8, scale: .98 } },
  { id: "build-book", src: "/images/interactive/continuous/build-book.png", enterStart: .43, holdStart: .5, holdEnd: .62, exitEnd: .72, depth: 7, from: { x: 0, y: 14, scale: .96 }, to: still, out: { x: 0, y: 2, scale: .98 } },
  { id: "guide-turn-page", src: "/images/interactive/continuous/guide-turn-page.png", enterStart: .56, holdStart: .63, holdEnd: .7, exitEnd: .78, depth: 12, from: { x: 26, y: 10, scale: .98 }, to: still, out: { x: 18, y: -6, scale: .98 } },
  { id: "learn-book", src: "/images/interactive/continuous/learn-book.png", enterStart: .64, holdStart: .71, holdEnd: .8, exitEnd: .91, depth: 7, from: { x: 0, y: 4, scale: .98 }, to: still, out: { x: -16, y: -12, scale: .94 } },
  { id: "guide-point-contact", src: "/images/interactive/continuous/guide-point.png", enterStart: .76, holdStart: .82, holdEnd: .87, exitEnd: .93, depth: 10, from: { x: 32, y: 8, scale: .97 }, to: { x: 10, y: -2, scale: .99 }, out: { x: 32, y: 5, scale: .96 } },
  { id: "contact-caroline", src: "/images/interactive/continuous/contact-caroline.png", alt: "Caroline Xia offers a contact postcard", enterStart: .84, holdStart: .92, holdEnd: 1, exitEnd: 1.01, depth: 9, from: { x: 30, y: 10, scale: .97 }, to: still, out: still }
];

export const contactHotspots: ImageHotspot[] = [
  { id: "email", left: 27.8, top: 47.8, width: 38, height: 6.7 },
  { id: "linkedin", left: 27.8, top: 54.7, width: 38, height: 6.7 },
  { id: "github", left: 27.8, top: 61.6, width: 38, height: 6.7 }
];

export const projectPosterAssets = [
  "/images/interactive/projects/final/tonight-wish-card.png",
  "/images/interactive/projects/final/petsona.png",
  "/images/interactive/projects/final/global-top-star.png",
  "/images/interactive/projects/final/loom.png",
  "/images/interactive/projects/final/living-chronicles.png",
  "/images/interactive/projects/final/curious-conch.png"
] as const;
