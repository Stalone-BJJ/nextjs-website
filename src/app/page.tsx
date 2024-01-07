import ContactSection from "@/components/home/ContactSection";
import Hero from "@/components/home/Hero";
import MeetTheTeam from "@/components/home/MeetTheTeam";
import SpecialOffer from "@/components/home/SpecialOffer";
import OurSchool from "@/components/home/OurSchool";
import UnderHero from "@/components/home/UnderHero";
import WhatWeOffer from "@/components/home/WhatWeOffer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <SpecialOffer />
      <UnderHero />
      <OurSchool />
      <WhatWeOffer />
      <MeetTheTeam />
      <ContactSection />
    </main>
  );
}
