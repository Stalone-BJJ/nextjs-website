import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="absolute h-36 lg:h-96 w-full">
        <Image
          alt="Image of school"
          className="object-cover w-full h-full"
          fill
          src="/who_we_are.jpg"
        />
      </div>
      <div className="absolute h-36 lg:h-96 w-full bg-black/40"></div>
      <div className="relative h-36 lg:h-96 flex flex-col items-center justify-center w-full">
        <Image
          alt="Stalone BJJ logo"
          className="mt-2"
          height={80}
          src="/thumbnail_stalone-logo-1.png"
          width={80}
        />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 tracking-tight">
          TIMETABLE
        </h1>
      </div>
    </>
  );
}
