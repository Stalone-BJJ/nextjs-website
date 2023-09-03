"use client";

import SectionWithImage from "../SectionWithImage";
import { Button } from "../ui/button";

export default function UnderHero() {
  const scrollToView = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <SectionWithImage classNameRef="programs-under-hero">
      <div className="w-full my-4 space-y-4">
        <h2 className="text-center font-bold text-2xl mb-2">
          SUITABLE FOR ALL
        </h2>
        <p className="text-sm mb-4">
          <span className="font-bold text-red-600">Stalone BJJ Chorley</span>{" "}
          caters for all levels of fitness and experience, from complete
          beginners to advanced competitors. We have a friendly and welcoming
          atmosphere with a great team of students and instructors.
        </p>
        <p className="text-sm mb-4">
          We offer everything from Jiu-Jitsu classes for children and adults to
          Jiu-Jitsu inspired fitness classes, including self-defence classes for
          both men and women and even a dedicated yoga class each week.
        </p>
        <div className="flex w-full justify-around">
          <Button
            aria-label="Adults classes"
            className="border-2 border-red-600"
            variant="secondary"
            onClick={() => scrollToView("adults-classes")}
          >
            ADULTS
          </Button>
          <Button
            aria-label="Childrens classes"
            className="border-2 border-red-600"
            variant="secondary"
            onClick={() => scrollToView("childrens-classes")}
          >
            CHILDREN
          </Button>
          <Button
            aria-label="Private classes"
            className="border-2 border-red-600"
            variant="secondary"
            onClick={() => scrollToView("private-classes")}
          >
            PRIVATE
          </Button>
        </div>
      </div>
    </SectionWithImage>
  );
}
