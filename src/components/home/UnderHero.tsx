"use client";

import { Button } from "../ui/button";

export default function UnderHero() {
  const scrollToContactForm = () => {
    const element = document.getElementById("contact-form");

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="border-y-2 border-red-600 text-white w-full p-4 flex flex-col items-center">
      <h2 className="mx-auto text-2xl font-bold text-center">
        JIU<span className="text-red-600">-</span>JITSU
        <br />
        <span className="italic text-red-600">FOR EVERYONE</span>.
      </h2>
      <p className="text-center">
        Getting started at Stalone BJJ Academy is easy
        <span className="text-red-600">.</span> Book your free trial class today
        <span className="text-red-600">.</span>
      </p>
      <Button
        className="mt-4"
        variant="secondary"
        onClick={scrollToContactForm}
      >
        BOOK YOUR FREE TRIAL
      </Button>
    </div>
  );
}
