import { Button } from "../ui/button";

export default function UnderHero() {
  return (
    <div className="border-y-2 border-red-600 text-white w-full px-4">
      <h2 className="mx-auto my-2 text-2xl font-bold text-center">
        JIU<span className="text-red-600">-</span>JITSU
        <br />
        <span className="italic text-red-600">FOR EVERYONE</span>.
      </h2>
      <p className="text-center">
        Getting started at Stalone BJJ Academy is easy
        <span className="text-red-600">.</span> Book your free trial class today
        <span className="text-red-600">.</span>
      </p>
      <div className="flex">
        <Button className="my-4 mx-auto" variant="secondary">
          BOOK YOUR FREE TRIAL
        </Button>
      </div>
    </div>
  );
}
