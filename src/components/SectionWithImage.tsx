import { ReactNode } from "react";

export interface SectionWithImageProps {
  classNameRef: string;
  children: ReactNode;
}

export default function SectionWithImage({
  classNameRef,
  children,
}: SectionWithImageProps) {
  // The classNameRef is what to reference from the globals.css file for the background image
  return (
    <section
      className={`border-t-2 border-red-600 text-white w-full p-4 flex flex-col items-center bg-slate-950 relative z-10 ${classNameRef}`}
      id="section-with-image"
    >
      {children}
    </section>
  );
}
