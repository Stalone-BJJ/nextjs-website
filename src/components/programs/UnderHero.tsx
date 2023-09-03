"use client";

import { Button } from "../ui/button";

export default function UnderHero() {
  const scrollToView = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="border-t-2 border-red-600 w-full p-8 space-y-4">
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-2xl mb-2 ">
          SUITABLE FOR ALL
        </h2>
        <p className="text-sm mb-4">
          <span className="font-bold text-red-600">Stalone BJJ Chorley</span>{" "}
          caters for all levels of fitness and experience, from complete
          beginners to advanced competitors. We have a friendly and welcoming
          atmosphere with a great team of students and instructors. We offer
          everything from Jiu-Jitsu classes for children and adults to Jiu-Jitsu
          inspired fitness classes, including self-defence classes for both men
          and women and even a dedicated yoga class each week.
        </p>
        <div className="flex w-full justify-around">
          <Button
            variant="secondary"
            onClick={() => scrollToView("adults-classes")}
          >
            ADULTS
          </Button>
          <Button
            variant="secondary"
            onClick={() => scrollToView("childrens-classes")}
          >
            CHILDREN
          </Button>
          <Button
            variant="secondary"
            onClick={() => scrollToView("private-classes")}
          >
            PRIVATE
          </Button>
        </div>
      </div>
    </section>
  );
}
