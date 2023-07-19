import Image from "next/image";

export default function OurSchool() {
  return (
    <div className="px-4 pt-4 pt-2 border-b-2 border-red-600 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold text-white">OUR SCHOOL</h3>
      </div>
      <p className="px-4 pt-2 text-md text-white">
        Previously <span className="text-red-600">Gracie Barra Chorley</span>
        <span className="text-red-600">,</span> we want our school to be a
        showcase for all that Brazilian Jiu
        <span className="text-red-600">-</span>Jitsu is
        <span className="text-red-600">.</span> We wanted to break the concept
        of a martial arts gym
        <span className="text-red-600">;</span> we wanted a facility that is not
        shared<span className="text-red-600">,</span> is spotlessly clean and
        which operates full time
        <span className="text-red-600">.</span> Our facility includes large mat
        space<span className="text-red-600">,</span> refreshments
        <span className="text-red-600">,</span> changing facilities and more
        <span className="text-red-600">.</span>
      </p>
      <Image
        alt="Catching limbs"
        height={120}
        src="/chorley-school.svg"
        width={120}
      />
    </div>
  );
}
