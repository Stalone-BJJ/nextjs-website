import Image from "next/image";
import SectionWithImage from "../SectionWithImage";

export default function OurSchool() {
  return (
    <SectionWithImage classNameRef="home-our-school">
      <div className="pt-2 flex flex-col items-center z-10">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold text-white">OUR SCHOOL</h3>
        </div>
        <p className="pt-2 text-md text-white text-center">
          Previously{" "}
          <span className="text-red-600 font-bold">Gracie Barra Chorley</span>
          <span className="text-red-600">,</span> we want our school to be a
          showcase for all that Brazilian Jiu
          <span className="text-red-600">-</span>Jitsu is. We wanted to break
          the concept of a martial arts gym; we wanted a facility that is not
          shared, is spotlessly clean and which operates full time. Our facility
          includes large mat space, refreshments, changing facilities and more.
        </p>
        <Image
          alt="Catching limbs"
          height={120}
          src="/chorley-school.svg"
          width={120}
        />
      </div>
    </SectionWithImage>
  );
}
