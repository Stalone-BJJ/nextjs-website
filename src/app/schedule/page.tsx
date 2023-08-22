import { Metadata } from "next/types";
import Hero from "@/components/schedule/Hero";
import UnderHero from "@/components/schedule/UnderHero";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "Schedule - Stalone BJJ - Brazilian Jiu-Jitsu in Chorley, Lancashire",
};

export default function Schedule() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero></Hero>
      <UnderHero></UnderHero>
    </main>
  );
}
