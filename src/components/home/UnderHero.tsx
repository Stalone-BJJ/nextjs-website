"use client";

import SectionWithImage from "../SectionWithImage";
import { Button } from "../ui/button";

export default function UnderHero() {
  const scrollToContactForm = () => {
    const element = document.getElementById("contact-form");

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <SectionWithImage classNameRef="home-under-hero">
      <div className="w-full text-center my-8 space-y-4">
        <h2 className="mx-auto text-2xl font-bold">
          JIU<span className="text-red-600">-</span>JITSU
          <br />
          <span className="italic text-red-600">FOR EVERYONE</span>.
        </h2>
        <p className="text-center">
          Getting started at Stalone BJJ Academy is easy. Book your free trial
          class today.
        </p>
        <Button
          className="mt-4"
          variant="secondary"
          onClick={scrollToContactForm}
        >
          BOOK YOUR FREE TRIAL
        </Button>
      </div>
    </SectionWithImage>
  );
}
