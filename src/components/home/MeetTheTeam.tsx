import Image from "next/image";

export default function MeetTheTeam() {
  return (
    <div className="p-4 border-b-2 border-red-600 w-full flex flex-col items-center">
      <h2 className="text-white text-2xl font-bold">MEET THE TEAM</h2>
      <Image
        className="rounded-full border-2 border-white my-4"
        alt="Image of Professor Stalone"
        height={120}
        src="/stalone.png"
        width={120}
      />
      <h3 className="text-lg text-center">
        Professor Matt{" "}
        <span className="text-red-600 font-bold">&quot;Stalone&quot;</span>{" "}
        Callaghan
      </h3>
      <h4>3rd Degree Black Belt</h4>
      <p className="text-sm m-2">
        With over 20 years of Brazilian Jiu-Jitsu experience and a portfolio of
        gold medals from multiple competitions regionally, nationally and
        continentally, Professor Stalone provides nothing but the most
        exceptional training for all of his students.
      </p>
      {/* <p className="text-sm m-2">
        Certified to the highest standards by the IBJJF, Professor Stalone is a
        3rd Degree Black Belt under Professor Lucio{" "}
        <span className="text-red-600 font-bold">&quot;Lagarto&quot;</span>{" "}
        Rodrigues and strives continuously for the betterment of both himself
        and his students.
      </p> */}
      <Image
        alt="Image of Professor Fletch"
        className="rounded-full border-2 border-white my-4"
        height={120}
        src="/man.png"
        width={120}
      />
      <h3 className="text-lg text-center">
        Professor First{" "}
        <span className="text-red-600 font-bold">&quot;Fletch&quot;</span> Last
      </h3>
      <h4>2nd Degree Black Belt</h4>
      <p className="text-sm m-2">
        Both a former and still current student of Professor Stalone, with over
        15 years of Brazilian Jiu-Jitsu experience and another portfolio of gold
        medals from multiple competitions, Professor Fletch takes charge for
        those students who wish to compete at any and all levels.
      </p>
      {/* <p className="text-sm m-2">
        Certified to the highest standards by the IBJJF, Professor Fletch is a
        2nd Degree Black Belt under Professor Lagarto and focuses primarily on
        competitions. If you&apos;ve got the competitive itch, Professor Fletch
        will be the one to help you scratch it.
      </p> */}
      <Image
        alt="Image of Professor Matt"
        className="rounded-full border-2 border-white my-4"
        height={120}
        src="/matt-bell.jpg"
        width={120}
      />
      <h3 className="text-lg text-center">Professor Matt Bell</h3>
      <h4>2nd Degree Black Belt</h4>
      <p className="text-sm m-2">
        Also a former and still current student of Professor Stalone, with over
        15 years of Brazilian Jiu-Jitsu experience, Professor Matt takes charge
        of our{" "}
        <span className="font-bold text-red-600">
          Gracie Barra Horwich School
        </span>{" "}
        as well as various classes at our Stalone BJJ Academy in Chorley.
      </p>
      {/* <p className="text-sm m-2">
        Certified to the highest standards by the IBJJF, Professor Matt
        is a 2nd Degree Black Belt under Professor Stalone and focuses primarily
        on the womens only classes. If you&apos;re apprehensive about starting
        your BJJ journey, Professor Ju will provide a warm, welcoming and
        inclusive experience.
      </p> */}
      <Image
        alt="Image of Professor Larry"
        className="rounded-full border-2 border-white my-4"
        height={120}
        src="/larry.jpg"
        width={120}
      />
      <h3 className="text-lg text-center">Professor Larry Longton</h3>
      <h4>2nd Degree Black Belt</h4>
      <p className="text-sm m-2">
        Another former and still current student of Professor Stalone, with over
        15 years of Brazilian Jiu-Jitsu experience, Professor Larry manages our{" "}
        <span className="font-bold text-red-600">
          Gracie Barra Horwich School
        </span>{" "}
        with Professor Matt and teaches our popular early bird classes at 6AM
        along with kids classes both at Horwich and Chorley.
      </p>
      {/* <p className="text-sm m-2">
        Certified to the highest standards by the IBJJF, Professor Matt
        is a 2nd Degree Black Belt under Professor Stalone and focuses primarily
        on the womens only classes. If you&apos;re apprehensive about starting
        your BJJ journey, Professor Ju will provide a warm, welcoming and
        inclusive experience.
      </p> */}
      <Image
        alt="Image of Professor Ju"
        className="rounded-full border-2 border-white my-4"
        height={120}
        src="/joanna.jpg"
        width={120}
      />
      <h3 className="text-lg text-center">
        Professor Joana{" "}
        <span className="text-red-600 font-bold">&quot;Ju&quot;</span> Patricio
        Sousa
      </h3>
      <h4>1st Degree Black Belt</h4>
      <p className="text-sm m-2">
        Continuing the tradition of former and still current students of
        Professor Stalone, with over 10 years of Brazilian Jiu-Jitsu experience,
        Professor Ju takes charge of our very popular womens only classes at{" "}
        <span className="font-bold text-red-600">Stalone BJJ Chorley</span> and
        Gracie Barra Horwich.
      </p>
      {/* <p className="text-sm m-2">
        As usual, certified to the highest standards by the IBJJF, Professor Ju
        is a 1st Degree Black Belt under Professor Stalone and focuses primarily
        on the womens only classes. If you&apos;re apprehensive about starting
        your BJJ journey, Professor Ju will provide a warm, welcoming and
        inclusive experience.
      </p> */}
      <Image
        alt="Image of Professor Ian"
        className="rounded-full border-2 border-white my-4"
        height={120}
        src="/ian.jpg"
        width={120}
      />
      <h3 className="text-lg text-center">Professor Ian Ingleson</h3>
      <h4>1st Degree Black Belt</h4>
      <p className="text-sm m-2">
        Another former and still current student of Professor Stalone, with over
        10 years of Brazilian Jiu-Jitsu experience, Professor Ian teaches our
        all levels classes at our{" "}
        <span className="font-bold text-red-600">
          Gracie Barra Horwich School
        </span>
        .
      </p>
      {/* <p className="text-sm m-2">
        As usual, certified to the highest standards by the IBJJF, Professor Ju
        is a 1st Degree Black Belt under Professor Stalone and focuses primarily
        on the womens only classes. If you&apos;re apprehensive about starting
        your BJJ journey, Professor Ju will provide a warm, welcoming and
        inclusive experience.
      </p> */}
      <Image
        alt="Image of Coach Aaron"
        className="rounded-full border-2 border-white my-4"
        height={120}
        src="/aaron.jpg"
        width={120}
      />
      <h3 className="text-lg text-center">Coach Aaron Smithies</h3>
      <h4>2nd Degree Brown Belt</h4>
      <p className="text-sm m-2">
        A current student of Professor Stalone, with over 8 years of Brazilian
        Jiu-Jitsu experience, Coach Aaron teaches our fundamentals gi and no-gi
        classes in our{" "}
        <span className="font-bold text-red-600">
          Stalone BJJ Chorley Academy
        </span>
        .
      </p>
      {/* <p className="text-sm m-2">
        As usual, certified to the highest standards by the IBJJF, Professor Ju
        is a 1st Degree Black Belt under Professor Stalone and focuses primarily
        on the womens only classes. If you&apos;re apprehensive about starting
        your BJJ journey, Professor Ju will provide a warm, welcoming and
        inclusive experience.
      </p> */}
      <Image
        alt="Image of Coach Cheryl"
        className="rounded-full border-2 border-white my-4"
        height={120}
        src="/cheryl.jpg"
        width={120}
      />
      <h3 className="text-lg text-center">Coach Aaron Smithies</h3>
      <h4>3rd Degree Purple Belt</h4>
      <p className="text-sm m-2">
        Another current student of Professor Stalone, with over 6 years of
        Brazilian Jiu-Jitsu experience, Coach Cheryl teaches our kids classes at{" "}
        <span className="font-bold text-red-600">
          Stalone BJJ Chorley Academy
        </span>
        .
      </p>
      {/* <p className="text-sm m-2">
        As usual, certified to the highest standards by the IBJJF, Professor Ju
        is a 1st Degree Black Belt under Professor Stalone and focuses primarily
        on the womens only classes. If you&apos;re apprehensive about starting
        your BJJ journey, Professor Ju will provide a warm, welcoming and
        inclusive experience.
      </p> */}
    </div>
  );
}
