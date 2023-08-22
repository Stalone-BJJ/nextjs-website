import ContactForm from "../ContactForm";

export default function UnderHero() {
  return (
    <section className="border-t-2 border-red-600 w-full px-8 mb-4">
      <h2 className="text-center font-bold text-2xl my-4">GET IN TOUCH</h2>
      <ContactForm />
    </section>
  );
}
