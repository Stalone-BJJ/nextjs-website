import Image from "next/image";

import SectionWithImage from "../SectionWithImage";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import SectionHeading from "./SectionHeading";

export default function OurSchool() {
  return (
    <SectionWithImage classNameRef="home-our-school">
      <div className="w-full max-w-5xl mx-auto">
        <SectionHeading
          align="left"
          className="!mx-0 !text-left mb-8 lg:mb-10"
          eyebrow="Our facility"
          subtitle="A space built for serious training — and a friendly welcome on day one."
          title="More than a gym — a full-time BJJ academy"
        />
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <Card className="border-red-600 bg-card shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">
                Previously Gracie Barra Chorley
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-base leading-relaxed">
                We set out to showcase what Brazilian Jiu-Jitsu can be: a
                dedicated facility that isn&apos;t shared, stays spotlessly clean,
                and runs full time for our students.
              </CardDescription>
              <CardDescription className="text-base leading-relaxed">
                You&apos;ll find generous mat space, refreshments, changing
                facilities, and a team focused on your progress on and off the
                mats.
              </CardDescription>
            </CardContent>
          </Card>
          <div className="flex flex-col items-center justify-center rounded-xl border border-red-600 bg-card p-10 shadow-md">
            <Image
              alt="Stalone BJJ Chorley school illustration"
              height={140}
              src="/chorley-school.svg"
              width={140}
            />
            <p className="mt-6 text-center text-sm text-zinc-400 max-w-xs">
              Brazilian Jiu-Jitsu · Kids & adults · Fundamentals to advanced
            </p>
          </div>
        </div>
      </div>
    </SectionWithImage>
  );
}
