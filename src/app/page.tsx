import Hero from "@/components/home/Hero";
import UnderHero from "@/components/home/UnderHero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-950">
      <Hero />
      <UnderHero />
    </main>
  );
}
