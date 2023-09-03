import { Button } from "../ui/button";

export default function UnderHero() {
  return (
    <section className="border-t-2 border-red-600 w-full">
      <div className="container py-8 space-y-8">
        <h2 className="text-center font-bold text-2xl">HOW IT ALL STARTED</h2>
        <p className="text-sm">
          <span className="font-bold text-red-600">
            Formerly Gracie Barra Chorley,
          </span>{" "}
          we were founded in 2017 by{" "}
          <span className="font-bold text-red-600">Professor Stalone,</span> a
          passionate practitioner and dedicated instructor in the art of
          Brazilian Jiu-Jitsu. Our academy has quickly become a hub for martial
          arts enthusiasts in the picturesque town of Chorley, Lancashire.
        </p>
        <p className="text-sm">
          <span className="font-bold text-red-600">
            Stalone Brazilian Jiu-Jitsu Academy
          </span>{" "}
          traces its roots back to 2017 when{" "}
          <span className="font-bold text-red-600">Professor Stalone,</span> a
          highly experienced and skilled Brazilian Jiu-Jitsu practitioner,
          recognised the need for a professional training facility in Chorley.
          Inspired by his own journey through the art and his desire to share
          its numerous benefits, he took the bold step of establishing the
          academy to create a nurturing environment for aspiring grapplers of
          all levels.
        </p>
        <p className="text-sm">
          With a wealth of knowledge and a genuine passion for Brazilian
          Jiu-Jitsu,{" "}
          <span className="font-bold text-red-600">Professor Stalone</span> set
          out to create a school that not only emphasised technical proficiency
          but also fostered a strong sense of community and mutual respect among
          its members. The academy&apos;s doors were opened to students of all
          ages and abilities, promoting an inclusive atmosphere where everyone
          could discover the transformative power of BJJ.
        </p>
        <h2 className="text-center font-bold text-2xl">HOW IT&apos;S GOING</h2>
        <p className="text-sm">
          Since its inception,{" "}
          <span className="font-bold text-red-600">Stalone BJJ Chorley</span>{" "}
          has experienced remarkable growth, attracting students from various
          backgrounds, fitness levels, and goals. Whether individuals seek to
          learn self-defence, improve their physical fitness, or compete in the
          sport, the academy provides a supportive and encouraging environment
          to help them achieve their aspirations.
        </p>
        <p className="text-sm">
          Under{" "}
          <span className="text-red-600 font-bold">
            Professor Stalone&apos;s
          </span>{" "}
          expert guidance, the academy has gained a reputation for producing
          skilled practitioners and competitors, earning accolades in local and
          regional tournaments. Moreover, the academy&apos;s emphasis on
          discipline, humility, and camaraderie has created a close-knit BJJ
          family, where students not only grow in skill but also forge lasting
          friendships.
        </p>
        <p className="text-sm">
          Beyond the mats,{" "}
          <span className="font-bold text-red-600">Stalone BJJ Chorley</span>{" "}
          has been actively involved in the local community, organising
          workshops, charity events, and seminars to spread awareness about the
          art of Brazilian Jiu-Jitsu and its positive impact on individuals and
          society.
        </p>
        <h2 className="text-center font-bold text-2xl">THE MISSION</h2>
        <p className="text-sm">
          As we look towards the future,{" "}
          <span className="font-bold text-red-600">Stalone BJJ Chorley</span>{" "}
          remains committed to upholding the traditional values of Brazilian
          Jiu-Jitsu while embracing innovation and growth. We continue to
          welcome new members into our vibrant community, ensuring that the
          spirit of{" "}
          <span className="font-bold text-red-600">
            Professor Stalone&apos;s
          </span>{" "}
          vision lives on and that the art of Brazilian Jiu-Jitsu thrives in
          Chorley and beyond.
        </p>
        <p className="text-sm">
          Join us at{" "}
          <span className="font-bold text-red-600">Stalone BJJ Chorley</span>{" "}
          and become part of our journey in mastering the art of Brazilian
          Jiu-Jitsu while nurturing a strong body, mind, and spirit. Whether you
          are a beginner or an experienced practitioner, our doors are always
          open to welcome you to our family.
        </p>
        <div className="flex justify-center w-full">
          <Button
            variant="secondary"
            className="border-2 border-red-600"
            aria-label="Book Trial"
          >
            <a href="/contact-us">BOOK YOUR FREE TRIAL</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
