import { ReactNode } from "react";

import SectionWithImage from "../SectionWithImage";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type AboutSectionProps = {
  classNameRef: string;
  title: string;
  children: ReactNode;
};

export default function AboutSection({
  classNameRef,
  title,
  children,
}: AboutSectionProps) {
  return (
    <SectionWithImage classNameRef={classNameRef}>
      <Card className="mx-auto max-w-3xl border-red-600 bg-card shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-center text-lg font-bold uppercase tracking-wide sm:text-xl">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
          {children}
        </CardContent>
      </Card>
    </SectionWithImage>
  );
}
