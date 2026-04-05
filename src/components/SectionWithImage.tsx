import { ReactNode } from "react";

export interface SectionWithImageProps {
  classNameRef: string;
  children: ReactNode;
}

export default function SectionWithImage({
  classNameRef,
  children,
}: SectionWithImageProps) {
  return (
    <section
      className={`border-t-2 border-red-600 text-foreground w-full py-10 lg:py-14 flex flex-col items-center bg-background relative z-10 ${classNameRef}`}
      id="section-with-image"
    >
      <div className="container max-w-5xl">{children}</div>
    </section>
  );
}
