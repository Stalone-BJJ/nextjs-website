import ContactForm from "@/components/home/ContactForm";
import Hero from "@/components/home/Hero";
import OurSchool from "@/components/home/OurSchool";
import UnderHero from "@/components/home/UnderHero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <UnderHero />
      <OurSchool />
      <ContactForm />
    </main>
  );
}
