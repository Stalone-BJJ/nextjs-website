import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[72vh] lg:min-h-[88vh] flex flex-col">
      <div className="absolute inset-0">
        <Image
          alt="Stalone BJJ students training on the mats"
          className="object-cover"
          fill
          priority
          src="/who_we_are.jpg"
        />
      </div>
      {/* Darken only from below for legibility — no white / light wash */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent"
        aria-hidden
      />
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-16 pt-28 sm:pt-32 lg:pb-24 text-center">
        <Image
          alt="Stalone BJJ logo"
          className="drop-shadow-md"
          height={96}
          priority
          src="/thumbnail_stalone-logo-1.png"
          width={96}
        />
        <p className="mt-8 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
          Chorley · Lancashire
        </p>
        <h1 className="mt-3 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-sm">
          Train BJJ with purpose at{" "}
          <span className="text-red-400">Stalone BJJ</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/95">
          A full-time academy with classes for kids and adults — fundamentals
          through to competition. Book a free trial and step on the mats with us.
        </p>
        <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <Button
            asChild
            className="h-12 border-2 border-red-600 px-8 text-base font-semibold"
            variant="default"
          >
            <Link href="#contact-form">Book your free trial</Link>
          </Button>
          <Button
            asChild
            className="h-12 border-2 border-white bg-white px-8 text-base font-semibold text-neutral-900 shadow-md hover:bg-zinc-100"
            variant="secondary"
          >
            <Link href="/schedule">View timetable</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
