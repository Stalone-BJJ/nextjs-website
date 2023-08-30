import { Metadata } from "next/types";
import Hero from "@/components/values/Hero";
import UnderHero from "@/components/values/UnderHero";

export const metadata: Metadata = {
  title: "Our Values",
  description:
    "Our Values - Stalone BJJ - Brazilian Jiu-Jitsu in Chorley, Lancashire",
};

export default function Values() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <UnderHero />
    </main>
  );
}
