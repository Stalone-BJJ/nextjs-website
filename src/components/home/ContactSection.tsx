"use client";

import Link from "next/link";
import ContactForm from "../ContactForm";

interface FormValues {
  name: string;
  number: string;
  class: string;
  email: string;
  info: string;
}

export default function ContactSection() {
  return (
    <section
      className="border-t-2 border-red-600 py-4 w-full"
      id="contact-form"
    >
      <h2 className="text-2xl font-bold text-center">CONTACT US</h2>
      <p className="text-center my-8 mx-16">
        Our contact form is currently being updated. In the meantime, please
        feel free to reach out to us via email at{" "}
        <Link
          className="underline decoration-red-600 decoration-2 hover:text-gray-400"
          href="mailto:contact@stalonebjj.co.uk"
        >
          contact@stalonebjj.co.uk
        </Link>{" "}
        (click to open your email client).
      </p>
      {/* <ContactForm /> */}
    </section>
  );
}
