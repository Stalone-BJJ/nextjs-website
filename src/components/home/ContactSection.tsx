"use client";

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
      <ContactForm />
    </section>
  );
}
