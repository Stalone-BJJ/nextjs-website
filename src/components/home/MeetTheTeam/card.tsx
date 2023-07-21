import Image from "next/image";

export interface CardProps {
  name: string;
  belt: string;
  description: JSX.Element;
  src: string;
}

export default function Card({ name, belt, description, src }: CardProps) {
  return (
    <>
      <Image
        className="rounded-full border-2 border-white my-4"
        alt={`Image of ${name}`}
        height={120}
        src={src}
        width={120}
      />
      <h3 className="text-lg text-center text-red-600 font-bold">{name}</h3>
      <h4>{belt}</h4>
      <p className="text-sm m-2">{description}</p>
    </>
  );
}
