import { Metadata } from "next/types";
import Hero from "@/components/history/Hero";
import UnderHero from "@/components/history/UnderHero";

export const metadata: Metadata = {
  title: "History",
  description:
    "History - Stalone BJJ - Brazilian Jiu-Jitsu in Chorley, Lancashire",
};

export default function History() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <UnderHero />
    </main>
  );
}
