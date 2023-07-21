import ContactForm from "@/components/home/ContactForm";
import Hero from "@/components/home/Hero";
import MeetTheTeam from "@/components/home/MeetTheTeam";
import OurSchool from "@/components/home/OurSchool";
import UnderHero from "@/components/home/UnderHero";
import WhatWeOffer from "@/components/home/WhatWeOffer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <UnderHero />
      <OurSchool />
      <WhatWeOffer />
      <MeetTheTeam />
      <ContactForm />
    </main>
  );
}
