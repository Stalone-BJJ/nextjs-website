import { Metadata } from "next/types";
import Hero from "@/components/about-us/Hero";
import UnderHero from "@/components/about-us/UnderHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Us - Stalone BJJ - Brazilian Jiu-Jitsu in Chorley, Lancashire",
};

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <UnderHero />
    </main>
  );
}
