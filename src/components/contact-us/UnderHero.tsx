import Image from "next/image";
import ContactForm from "../ContactForm";

export default function UnderHero() {
  return (
    <>
      <section className="border-t-2 border-red-600 w-full px-8 mb-4">
        <h2 className="text-center font-bold text-2xl my-4">GET IN TOUCH</h2>
        <ContactForm />
      </section>
      <section className="border-t-2 border-red-600 w-full p-8 container mx-auto">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-center">LOCATION</h2>
          <p className="text-sm text-center">
            <span className="font-bold text-red-600">
              Stalone Brazilian Jiu-Jitsu Academy
            </span>{" "}
            Chorley is strategically located, offering both convenience and
            accessibility to martial arts enthusiasts. Situated in the heart of
            Chorley, a vibrant town in Lancashire, the facility benefits from
            its central location. Chorley&apos;s well-developed transportation
            network ensures easy access for individuals coming from various
            directions. The facility is within walking distance from the Chorley
            train station, making it accessible to those arriving by train.
            Additionally, several bus routes connect the town to neighboring
            areas, further enhancing the ease of travel. For those arriving by
            car, ample parking facilities are available nearby, eliminating any
            worries about parking space. Overall,{" "}
            <span className="font-bold text-red-600">
              Stalone Brazilian Jiu-Jitsu Academy&apos;s
            </span>{" "}
            prime location and excellent travel links make it a convenient
            destination for individuals looking to engage in Brazilian Jiu-Jitsu
            training in the Chorley area.
          </p>
        </div>
      </section>
      <section className="border-t-2 border-red-600 w-full p-8 container mx-auto">
        <div className="flex space-between">
          <div>
            <Image
              alt="Stalone BJJ Map - Link to Google Maps"
              width={500}
              height={500}
              src="/map.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
