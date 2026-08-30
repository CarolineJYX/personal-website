import type { Metadata } from "next";
import { InteractiveExperience } from "@/components/interactive/interactive-experience";
import { getInteractiveZones } from "@/lib/interactive";

export const metadata: Metadata = {
  title: "Interactive",
  description: "Walk through Caroline Xia's work in a hand-drawn scrolling gallery."
};

export default function InteractivePage() {
  return <InteractiveExperience zones={getInteractiveZones()} />;
}
