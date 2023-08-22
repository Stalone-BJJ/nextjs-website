import Image from "next/image";
import SectionWithImage from "../SectionWithImage";

export default function WhatWeOffer() {
  return (
    <SectionWithImage classNameRef="home-what-we-offer">
      <h2 className="font-bold text-2xl mb-4">WHAT WE OFFER</h2>
      <div className="flex w-full mb-2 my-4">
        <div className="w-1/3 flex items-center flex-col">
          <Image
            alt="Gold medal"
            src="/gold-medal.svg"
            width={48}
            height={48}
          />
          <h3 className="text-center mt-2">Best in-class training</h3>
        </div>
        <div className="w-1/3 flex items-center flex-col">
          <Image
            alt="Cognitive Improvement"
            src="/brain.svg"
            width={48}
            height={48}
          />
          <h3 className="text-center mt-2">Cognitive Improvement</h3>
        </div>
        <div className="w-1/3 flex items-center flex-col">
          <Image
            alt="Character Development"
            src="/idea-man.svg"
            width={48}
            height={48}
          />
          <h3 className="text-center mt-2">Character Development</h3>
        </div>
      </div>
      <div className="flex w-full my-4">
        <div className="w-1/3 flex items-center flex-col">
          <Image alt="Self defence" src="/shield.svg" width={48} height={48} />
          <h3 className="text-center mt-2">Self defence</h3>
        </div>
        <div className="w-1/3 flex items-center flex-col">
          <Image
            alt="Fitness"
            src="/weight-lifting.svg"
            width={48}
            height={48}
          />
          <h3 className="text-center mt-2">Fitness</h3>
        </div>
        <div className="w-1/3 flex items-center flex-col">
          <Image
            alt="Weight loss"
            src="/weight-loss.svg"
            width={48}
            height={48}
          />
          <h3 className="text-center mt-2">Weight loss</h3>
        </div>
      </div>
      <div className="flex w-full my-4">
        <div className="w-1/3 flex items-center flex-col">
          <Image alt="Respect" src="/handshake.svg" width={48} height={48} />
          <h3 className="text-center mt-2">Respect</h3>
        </div>
        <div className="w-1/3 flex items-center flex-col">
          <Image alt="Camaraderie" src="/group.svg" width={48} height={48} />
          <h3 className="text-center mt-2">Camaraderie</h3>
        </div>
        <div className="w-1/3 flex items-center flex-col">
          <Image alt="Confidence" src="/thumbs-up.svg" width={48} height={48} />
          <h3 className="text-center mt-2">Confidence</h3>
        </div>
      </div>
    </SectionWithImage>
  );
}
