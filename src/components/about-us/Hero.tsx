import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="absolute lg:h-72 h-36 w-full">
        <Image
          alt="Stalone BJJ logo"
          className="object-cover w-full h-full"
          fill
          src="/professors.jpg"
        />
      </div>
      <div className="absolute lg:h-72 h-36 w-full opacity-50 bg-black"></div>
      <div className="relative lg:h-72 h-36 flex flex-col items-center justify-center w-full">
        <Image
          alt="Stalone BJJ logo"
          className="mt-2"
          height={80}
          src="/thumbnail_stalone-logo-1.png"
          width={80}
        />
        <h1 className="text-3xl font-bold text-white mt-2">ABOUT US</h1>
      </div>
    </>
  );
}
