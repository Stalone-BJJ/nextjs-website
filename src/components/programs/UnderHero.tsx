"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SectionHeading from "../home/SectionHeading";
import SectionWithImage from "../SectionWithImage";

const programLinks = [
  {
    id: "adults-classes" as const,
    title: "Adults",
    description:
      "Fundamentals, advanced, competition, women’s classes — structured curriculum for every stage.",
    cta: "View adults",
  },
  {
    id: "childrens-classes" as const,
    title: "Kids & teens",
    description:
      "Age-appropriate classes that build discipline, confidence, and technique in a positive environment.",
    cta: "View kids",
  },
  {
    id: "private-classes" as const,
    title: "Private training",
    description:
      "One-to-one coaching tailored to your goals — competition prep, specific positions, or accelerated learning.",
    cta: "View private",
  },
];

export default function UnderHero() {
  const scrollToView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <SectionWithImage classNameRef="programs-under-hero">
      <div className="w-full max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Programs"
          subtitle="From first class to competition — we have a programme that fits. Jump to a section below or scroll for full details."
          title="Suitable for all levels"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {programLinks.map((p) => (
            <Card
              key={p.id}
              className="flex flex-col border-red-600 bg-card shadow-md transition-colors hover:border-red-600/50 hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {p.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-0">
                <Button
                  aria-label={`${p.cta} section`}
                  className="w-full"
                  variant="default"
                  onClick={() => scrollToView(p.id)}
                >
                  {p.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </SectionWithImage>
  );
}
