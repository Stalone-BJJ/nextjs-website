import Image from "next/image";

import SectionWithImage from "../SectionWithImage";
import { Card, CardHeader, CardTitle } from "../ui/card";

import SectionHeading from "./SectionHeading";

const offers = [
  { title: "Best in-class training", icon: "/gold-medal.svg", alt: "Gold medal" },
  {
    title: "Cognitive improvement",
    icon: "/brain.svg",
    alt: "Cognitive improvement",
  },
  {
    title: "Character development",
    icon: "/idea-man.svg",
    alt: "Character development",
  },
  { title: "Self defence", icon: "/shield.svg", alt: "Self defence" },
  { title: "Fitness", icon: "/weight-lifting.svg", alt: "Fitness" },
  { title: "Weight loss", icon: "/weight-loss.svg", alt: "Weight loss" },
  { title: "Respect", icon: "/handshake.svg", alt: "Respect" },
  { title: "Camaraderie", icon: "/group.svg", alt: "Camaraderie" },
  { title: "Confidence", icon: "/thumbs-up.svg", alt: "Confidence" },
] as const;

export default function WhatWeOffer() {
  return (
    <SectionWithImage classNameRef="home-what-we-offer">
      <SectionHeading
        eyebrow="Benefits"
        subtitle="What you build on the mats carries into everyday life — focus, resilience, and respect."
        title="What we offer"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full max-w-5xl mx-auto">
        {offers.map((item) => (
          <Card
            key={item.title}
            className="border-red-600 bg-card shadow-md transition-all hover:border-red-600/50"
          >
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 py-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-950/60 ring-1 ring-red-600/40">
                <Image alt={item.alt} height={28} src={item.icon} width={28} />
              </div>
              <CardTitle className="text-base font-semibold leading-snug">
                {item.title}
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </SectionWithImage>
  );
}
