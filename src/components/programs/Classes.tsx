import Link from "next/link";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function Classes() {
  return (
    <>
      <section
        className="border-t-2 border-red-600 w-full bg-background py-12 lg:py-16"
        id="adults-classes"
      >
        <div className="mx-auto container max-w-4xl">
          <Card className="border-red-600 bg-card shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Adults</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-relaxed text-zinc-300 lg:text-[15px]">
              <p>
                <span className="font-bold text-red-500">
                  At Stalone BJJ Chorley
                </span>{" "}
                we follow a well versed curriculum with safe, professional
                teaching. For our adult classes, we have split them into three
                offerings based upon knowledge of the art.{" "}
              </p>
              <h3 className="text-lg font-bold text-zinc-100 pt-2">
                Fundamentals Classes
              </h3>
              <p>
                <span className="font-bold text-red-500">
                  At Stalone BJJ Chorley
                </span>
                , we understand that stepping onto the mats for the first time
                can be intimidating. Our Adults Fundamentals Class is designed
                with beginners in mind, providing a welcoming and supportive
                environment to learn the art of Brazilian Jiu-Jitsu.{" "}
              </p>
              <p>
                Led by experienced black belt instructors, this class focuses on
                building a strong foundation of fundamental techniques, basic
                positions, and essential concepts. Whether you&apos;re new to
                martial arts or looking to refresh your skills, our Fundamentals
                Class will help you gain confidence, improve your fitness, and
                develop a solid understanding of BJJ.
              </p>
              <h3 className="text-lg font-bold text-zinc-100 pt-2">
                Advanced Classes
              </h3>
              <p>
                Elevate your BJJ journey at{" "}
                <span className="font-bold text-red-500">Stalone BJJ</span> with
                our Advanced Class designed specifically for white belts with
                three stripes and beyond. Once you&apos;ve grasped the basics,
                it&apos;s time to dive deeper into the intricacies of Brazilian
                Jiu-Jitsu. Our experienced instructors will guide you through
                more complex techniques, transitions, and strategies, helping
                you refine your existing skills and expand your knowledge.
              </p>
              <p>
                This class emphasizes controlled sparring sessions, allowing you
                to practice your techniques in a live, dynamic setting. Whether
                you&apos;re aiming to compete or simply looking to challenge
                yourself, our Advanced Class will provide the tools you need to
                progress and excel in your BJJ practice.
              </p>
              <h3 className="text-lg font-bold text-zinc-100 pt-2">
                Competition Classes
              </h3>
              <p>
                Step onto the path of champions with our Competition Class at{" "}
                <span className="font-bold text-red-500">Stalone BJJ Chorley</span>
                . Geared towards practitioners with a strong foundation in
                Brazilian Jiu-Jitsu, this class is tailored for those who aspire
                to excel in competitions.
              </p>
              <p>
                Led by our seasoned black belt instructors, you&apos;ll receive
                specialised training that hones advanced techniques, tactical
                strategies, and mental fortitude required for success in the
                competitive arena.
              </p>
              <p>
                Our structured curriculum includes intense drilling, live
                rolling, and simulated tournament scenarios, ensuring you&apos;re
                well-prepared for the challenges of competition. Join our
                community of dedicated athletes, push your limits, and unlock
                your full potential on the tournament circuit with our
                Competition Class.
              </p>
              <h3 className="text-lg font-bold text-zinc-100 pt-2">
                Women&apos;s Only Classes
              </h3>
              <p>
                Empower yourself on the mats with our Women&apos;s Only BJJ Class
                at{" "}
                <span className="font-bold text-red-500">Stalone BJJ Chorley</span>
                . We recognize the unique needs and preferences of female
                practitioners, and our specialized class offers a comfortable
                and supportive environment to learn Brazilian Jiu-Jitsu.
              </p>
              <p>
                Led by skilled female instructors, this class focuses on
                techniques that leverage technique and leverage over strength,
                allowing you to develop effective skills regardless of your size
                or physical prowess.
              </p>
              <p>
                Whether you&apos;re new to martial arts or looking to enhance your
                abilities, our Women&apos;s Only BJJ Class fosters a sense of
                camaraderie among fellow female practitioners while promoting
                self-confidence, fitness, and self-defense proficiency. Join us
                and become part of a community where you can grow, learn, and
                achieve your goals in a positive and empowering atmosphere.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center border-t border-red-600 pt-6">
              <Button asChild className="px-8" variant="default">
                <Link href="/contact-us">Book your free trial</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section
        className="border-t-2 border-red-600 w-full bg-background py-12 lg:py-16"
        id="childrens-classes"
      >
        <div className="mx-auto container max-w-4xl">
          <Card className="border-red-600 bg-card shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Kids and teens
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-relaxed text-zinc-300 lg:text-[15px]">
              <p>
                Children and teens of all skill levels and abilities will benefit
                from Jiu-Jitsu classes at{" "}
                <span className="font-bold text-red-500">Stalone BJJ Chorley</span>
                . Our Kids Programme is designed to teach children self-discipline
                as well as providing a unique way to express themselves.
              </p>
              <p>
                Our instructors are trained to interact and offer gentle
                correction for children and teens who practice the art of
                Jiu-Jitsu. Children over the age of five can begin their training
                at either of our BJJ Schools, experiencing the true power of
                brotherhood and integrity.
              </p>
              <p>
                The programme is structured similarly to adult courses, with
                adaptations and modifications made to reach the different age
                ranges in the class. Jiu-Jitsu classes for children begin with the
                building blocks that are needed to teach the fundamentals of
                Jiu-Jitsu. We have developed a curriculum that is structured in a
                way that shows children and teens the value of routine,
                cooperation and self-awareness.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center border-t border-red-600 pt-6">
              <Button asChild className="px-8" variant="default">
                <Link href="/contact-us">Book your free trial</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section
        className="border-t-2 border-red-600 w-full bg-background py-12 lg:py-16"
        id="private-classes"
      >
        <div className="mx-auto container max-w-4xl">
          <Card className="border-red-600 bg-card shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Private training
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-relaxed text-zinc-300 lg:text-[15px]">
              <p>
                Elevate your Brazilian Jiu-Jitsu journey with our personalized
                Private Training Classes at{" "}
                <span className="font-bold text-red-500">Stalone BJJ Chorley</span>
                . Whether you&apos;re a beginner seeking focused guidance or an
                experienced practitioner targeting specific goals, our private
                sessions are tailored to your individual needs.
              </p>
              <p>
                Our skilled instructors work closely with you to create a
                customized training plan that addresses your strengths,
                weaknesses, and objectives. Benefit from one-on-one attention,
                in-depth technique analysis, and immediate feedback, accelerating
                your progress in a way that group classes might not provide.
                Whether you&apos;re preparing for competition, refining your
                skills, or simply seeking accelerated growth, our Private
                Training Classes offer a unique and effective path to mastery in
                BJJ.
              </p>
              <p className="text-center font-bold text-zinc-100">
                Please contact us directly for more information about booking a
                private class.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
