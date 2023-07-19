import ContactForm from "@/components/home/ContactForm";
import Hero from "@/components/home/Hero";
import UnderHero from "@/components/home/UnderHero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <UnderHero />
      <ContactForm />
    </main>
  );
}
