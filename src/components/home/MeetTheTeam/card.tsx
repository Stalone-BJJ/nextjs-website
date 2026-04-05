import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface CardProps {
  name: string;
  belt: string;
  description: JSX.Element;
  src: string;
}

export default function TeamCard({
  name,
  belt,
  description,
  src,
}: CardProps) {
  return (
    <Card className="overflow-hidden border-red-600 bg-card shadow-md transition-shadow hover:shadow-lg hover:border-red-600/40">
      <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:gap-8">
        <div className="flex shrink-0 justify-center sm:justify-start">
          <Image
            alt={`Photo of ${name}`}
            className="h-[120px] w-[120px] rounded-full border-2 border-zinc-600 object-cover"
            height={120}
            src={src}
            width={120}
          />
        </div>
        <div className="min-w-0 flex-1 text-center sm:text-left">
          <CardHeader className="p-0 pb-2 space-y-1">
            <CardTitle className="text-xl text-red-500">{name}</CardTitle>
            <p className="text-sm font-medium text-zinc-500">{belt}</p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="text-sm leading-relaxed text-zinc-300 md:text-[15px]">
              {description}
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
