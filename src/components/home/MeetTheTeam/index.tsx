import SectionHeading from "../SectionHeading";
import TeamMemberCard from "./card";

export default function MeetTheTeam() {
  const professors = [
    {
      name: "Professor Stalone",
      belt: "IBJJF 3rd Degree Black Belt",
      description: (
        <>
          With over 20 years of Brazilian Jiu-Jitsu experience and a portfolio
          of gold medals from multiple competitions regionally, nationally and
          continentally, Professor Stalone provides nothing but the most
          exceptional training for all of his students.
        </>
      ),
      src: "/stalone.png",
    },
    {
      name: "Professor Fletch",
      belt: "IBJJF 2nd Degree Black Belt",
      description: (
        <>
          Both a former student of and current instructor for Professor Stalone,
          with over 15 years of Brazilian Jiu-Jitsu experience and another
          portfolio of gold medals from multiple competitions, Professor Fletch
          takes charge of our competition classes for those students who wish to
          compete at any and all levels.
        </>
      ),
      src: "/man.png",
    },
    {
      name: "Professor Wayne",
      belt: "IBJJF 2nd Degree Black Belt",
      description: (
        <>
          Another former student of and current instructor for Professor
          Stalone, also with over 15 years of Brazilian Jiu-Jitsu experience,
          Professor Wayne supports and instructs a wide variety of classes at
          our schools.
        </>
      ),
      src: "/man.png",
    },
    {
      name: "Professor Matt",
      belt: "IBJJF 1st Degree Black Belt",
      description: (
        <>
          A former student of and still current coach for Professor Stalone,
          with over 15 years of Brazilian Jiu-Jitsu experience, Professor Matt
          takes care of our school in Horwich as well as various classes at our
          Stalone BJJ Academy in Chorley.
        </>
      ),
      src: "/matt-bell.jpg",
    },
    {
      name: "Professor Larry",
      belt: "IBJJF 1st Degree Black Belt",
      description: (
        <>
          Former student and current coach for Professor Stalone, with over 15
          years of Brazilian Jiu-Jitsu experience, Professor Larry works closely
          with Professor Matt to ensure the smooth running of our school in
          Horwich, as well as various classes at our Stalone BJJ Academy in
          Chorley.
        </>
      ),
      src: "/larry.jpg",
    },
    {
      name: "Professor Ju",
      belt: "IBJJF Black Belt",
      description: (
        <>
          Continuing the tradition of former student turned current coach for
          Professor Stalone, with over 10 years of Brazilian Jiu-Jitsu
          experience, Professor Ju takes charge of our very popular womens only
          classes at both our Chorley and Horwich schools.
        </>
      ),
      src: "/joanna.jpg",
    },
    {
      name: "Professor Aaron",
      belt: "IBJJF Black Belt",
      description: (
        <>
          A current student of Professor Stalone, with over 9 years of Brazilian
          Jiu-Jitsu experience, Professor Aaron leads our fundamentals gi and
          no-gi classes in our Chorley school.
        </>
      ),
      src: "/aaron.jpg",
    },
    {
      name: "Coach Cheryl",
      belt: "IBJJF 1st Degree Brown Belt",
      description: (
        <>
          Another current student of Professor Stalone, with over 6 years of
          Brazilian Jiu-Jitsu experience, Coach Cheryl teaches our kids classes
          at our Chorley school.
        </>
      ),
      src: "/cheryl.jpg",
    },
  ] as const;

  return (
    <section className="py-16 lg:py-24 border-t-2 border-red-600 w-full bg-background">
      <div className="container flex max-w-5xl flex-col">
        <SectionHeading
          eyebrow="Coaches"
          subtitle="Experienced black belts and dedicated coaches — here to help you reach your goals on the mats."
          title="Meet the team"
        />
        <div className="flex flex-col gap-6">
          {professors.map((professor) => (
            <TeamMemberCard
              key={professor.name}
              name={professor.name}
              belt={professor.belt}
              description={professor.description}
              src={professor.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
