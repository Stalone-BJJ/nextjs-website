import { Metadata } from "next/types";
import Hero from "@/components/contact-us/Hero";
import UnderHero from "@/components/contact-us/UnderHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Us - Stalone BJJ - Brazilian Jiu-Jitsu in Chorley, Lancashire",
};

export default function ContactUs() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <Hero />
      <UnderHero />
    </main>
  );
}
