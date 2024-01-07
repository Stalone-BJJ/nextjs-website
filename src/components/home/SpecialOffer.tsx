"use client";

import SectionWithImage from "../SectionWithImage";
import { Button } from "../ui/button";

export default function SpecialOffer() {
  const scrollToContactForm = () => {
    const element = document.getElementById("contact-form");

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <SectionWithImage classNameRef="home-special-offer">
      <div className="w-full text-center my-8 space-y-4">
        <h2 className="mx-auto text-2xl font-bold">
          NEW YEAR&apos;S OFFER 2024
        </h2>
        <p className="text-center bold italic">
          Start the new year in the best way possible.
        </p>
        <div className="text-center">
          <p>
            <span className="font-bold text-red-600">New Members:</span> Sign up
            to our Premium Package and get all your training included until
            March.
          </p>
          <p className="mt-4 md:mt-0">
            <span className="font-bold text-red-600">Former Members:</span>{" "}
            Simply pay for January&apos;s training and receive all your training
            until March too!
          </p>
        </div>
        <p className="text-center">
          Call us, email us or simply use the contact form below to book your
          free trial class.
        </p>
        <Button
          aria-label="Book your free trial"
          className="mt-4 border-2 border-red-600"
          variant="secondary"
          onClick={scrollToContactForm}
        >
          I&apos;M INTERESTED
        </Button>
      </div>
    </SectionWithImage>
  );
}
