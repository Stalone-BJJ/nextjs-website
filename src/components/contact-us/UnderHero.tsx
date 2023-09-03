import Image from "next/image";
import ContactForm from "../ContactForm";

export default function UnderHero() {
  return (
    <>
      <section className="border-t-2 border-red-600 w-full">
        <div className="space-y-4 my-8 container">
          <h2 className="text-2xl font-bold text-center">LOCATION</h2>
          <p className="text-sm text-center">
            <span className="font-bold text-red-600">
              Stalone Brazilian Jiu-Jitsu Academy
            </span>{" "}
            Chorley is strategically located, offering both convenience and
            accessibility to martial arts enthusiasts. Situated in the heart of
            Chorley, a vibrant town in Lancashire, the facility benefits from
            its central location.
          </p>
          <p className="text-sm text-center">
            Chorley&apos;s well-developed transportation network ensures easy
            access for individuals coming from various directions. The facility
            is within walking distance from the Chorley train station, making it
            accessible to those arriving by train.
          </p>
          <p className="text-sm text-center">
            Additionally, several bus routes connect the town to neighboring
            areas, further enhancing the ease of travel. For those arriving by
            car, ample parking facilities are available nearby, eliminating any
            worries about parking space.
          </p>
          <p className="text-sm text-center">
            Overall,{" "}
            <span className="font-bold text-red-600">
              Stalone Brazilian Jiu-Jitsu Academy&apos;s
            </span>{" "}
            prime location and excellent travel links make it a convenient
            destination for individuals looking to engage in Brazilian Jiu-Jitsu
            training in the Chorley area.
          </p>
        </div>
      </section>
      <section className="border-t-2 border-red-600 w-full">
        <div className="lg:flex-row flex flex-col gap-x-8 lg:container">
          <div className="text-center flex-1 container my-8">
            <h2 className="text-center font-bold text-2xl">WHERE TO FIND US</h2>
            <p className="text-sm text-center my-4">
              Click on the map below to be taken to Google Maps which will
              provide more than ample directions to our school.
            </p>
            <a
              className="mx-auto inline-flex"
              target="_blank"
              href="https://www.google.com/maps/place/Unit+5,+Stalone+Brazilian+Jiu+Jitsu+Academy,+Matrix+house,+Friday+St,+Chorley+PR6+0AA/@53.654125,-2.6261,17z/data=!4m6!3m5!1s0x487b0c5d34f6f63b:0xc8d758223612b664!8m2!3d53.654125!4d-2.6261!16s%2Fg%2F11dftpyprz"
            >
              <Image
                alt="Stalone BJJ Map - Link to Google Maps"
                width={500}
                height={500}
                src="/map.jpg"
              />
            </a>
            <p className="text-xs text-center mt-2">
              Stalone BJJ is not affiliated with Google Maps.
            </p>
          </div>
          <div className="flex-1 mb-8 space-y-4">
            <h2 className="text-center font-bold text-2xl lg:mt-8">
              GET IN TOUCH
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
