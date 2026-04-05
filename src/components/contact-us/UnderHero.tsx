import Image from "next/image";
import Link from "next/link";

import ContactFormSection from "../ContactFormSection";
import SectionHeading from "../home/SectionHeading";
import { Card, CardContent } from "../ui/card";

export default function UnderHero() {
  return (
    <>
      <section className="w-full border-t-2 border-red-600 bg-background py-12 lg:py-16">
        <div className="container max-w-4xl">
          <SectionHeading
            eyebrow="Find us"
            subtitle="Central Chorley with strong transport links — train, bus, and nearby parking."
            title="Location"
          />
          <Card className="border-red-600 bg-card shadow-md">
            <CardContent className="space-y-4 pt-6 text-sm leading-relaxed text-zinc-300 lg:text-[15px]">
              <p>
                <span className="font-semibold text-red-500">
                  Stalone Brazilian Jiu-Jitsu Academy
                </span>{" "}
                Chorley is strategically located for martial arts enthusiasts.
                Situated in the heart of Chorley, the facility benefits from its
                central location.
              </p>
              <p>
                Chorley&apos;s transport network offers easy access from many
                directions. The facility is within walking distance of Chorley
                train station. Bus routes connect the town to neighbouring areas,
                and there is ample parking nearby for those arriving by car.
              </p>
              <p>
                Overall,{" "}
                <span className="font-semibold text-red-500">
                  Stalone Brazilian Jiu-Jitsu Academy&apos;s
                </span>{" "}
                location and travel links make it a convenient place to train
                Brazilian Jiu-Jitsu in the Chorley area.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="w-full border-t-2 border-red-600 bg-background py-12 lg:py-16">
        <div className="container max-w-6xl">
          <SectionHeading
            eyebrow="Directions"
            subtitle="Tap the map for Google Maps directions to the academy."
            title="Where to find us"
          />
          <div className="flex justify-center">
            <Card className="w-full max-w-[500px] overflow-hidden border-red-600 bg-card shadow-md">
              <CardContent className="p-4 sm:p-5">
                <Link
                  className="inline-flex w-full flex-col items-center gap-3"
                  href="https://www.google.com/maps/place/Unit+5,+Stalone+Brazilian+Jiu+Jitsu+Academy,+Matrix+house,+Friday+St,+Chorley+PR6+0AA/@53.654125,-2.6261,17z/data=!4m6!3m5!1s0x487b0c5d34f6f63b:0xc8d758223612b664!8m2!3d53.654125!4d-2.6261!16s%2Fg%2F11dftpyprz"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    alt="Map of Stalone BJJ Chorley — open in Google Maps"
                    className="h-auto w-full rounded-md border border-red-600"
                    height={500}
                    src="/map.jpg"
                    width={500}
                  />
                  <span className="text-xs text-zinc-500">
                    Stalone BJJ is not affiliated with Google Maps.
                  </span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        className="border-t-2 border-red-600 py-16 lg:py-24 w-full bg-background"
        id="contact-form"
      >
        <ContactFormSection />
      </section>
    </>
  );
}
