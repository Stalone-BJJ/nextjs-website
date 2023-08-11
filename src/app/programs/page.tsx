import { Metadata } from "next/types";
import Hero from "@/components/programs/Hero";
import UnderHero from "@/components/programs/UnderHero";
import Classes from "@/components/programs/Classes";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Programs - Stalone BJJ - Brazilian Jiu-Jitsu in Chorley, Lancashire",
};

export default function Programs() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <UnderHero />
      <Classes />
    </main>
  );
}
