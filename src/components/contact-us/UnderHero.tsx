import Image from "next/image";
import ContactForm from "../ContactForm";

export default function UnderHero() {
  return (
    <>
      <section className="border-t-2 border-red-600 w-full p-8">
        <div className="space-y-4 container sm:w-[80%]">
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
      <section className="border-t-2 border-red-600 w-full p-8 hidden md:block">
        <div className="container">
          <div className="flex justify-between">
            <div className="m-4 w-[45%] flex flex-col items-center">
              <h2 className="text-center font-bold text-2xl my-4">
                GOOGLE MAPS
              </h2>
              <a
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
            </div>
            <div className="m-4 w-[45%]">
              <h2 className="text-center font-bold text-2xl my-4">
                GET IN TOUCH
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section className="border-t-2 border-red-600 w-full p-8 container md:hidden flex flex-col items-center">
        <h2 className="text-center font-bold text-2xl my-4">GOOGLE MAPS</h2>
        <Image
          alt="Stalone BJJ Map - Link to Google Maps"
          width={500}
          height={500}
          src="/map.jpg"
        />
      </section>
      <section className="border-t-2 border-red-600 w-full p-8 container md:hidden">
        <h2 className="text-center font-bold text-2xl my-4">GET IN TOUCH</h2>
        <ContactForm />
      </section>
    </>
  );
}
