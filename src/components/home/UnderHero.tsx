"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SectionHeading from "./SectionHeading";

const highlights = [
  {
    title: "Beginners welcome",
    body: "No experience needed. Our fundamentals programme builds confidence and technique step by step in a supportive room.",
  },
  {
    title: "Dedicated academy",
    body: "A purpose-built facility — not a shared gym — with mat space, changing rooms, and a full weekly timetable.",
  },
  {
    title: "All goals welcome",
    body: "Train for fitness, self-defence, or competition. Our coaches support hobbyists and competitors alike.",
  },
] as const;

export default function UnderHero() {
  const scrollToContactForm = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="w-full bg-background py-16 lg:py-24 relative z-10">
      <div className="container max-w-6xl">
        <SectionHeading
          eyebrow="Why Stalone"
          subtitle="Whether you want to get fit, learn self-defence, or compete, our team meets you where you are — and helps you grow."
          title="Jiu-Jitsu for everyone in Chorley"
        />
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {highlights.map((item) => (
            <Card
              key={item.title}
              className="border-red-600 bg-card shadow-md transition-colors hover:border-red-600/50"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {item.body}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button
            aria-label="Book your free trial"
            className="h-12 px-10 text-base font-semibold"
            variant="default"
            onClick={scrollToContactForm}
          >
            Book your free trial
          </Button>
        </div>
      </div>
    </section>
  );
}
