import ContactForm from "../ContactForm";
import SectionHeading from "../home/SectionHeading";

import AboutSection from "./AboutSection";

export default function UnderHero() {
  return (
    <>
      <AboutSection
        classNameRef="about-us-under-hero-first"
        title="Stalone BJJ is a great and exciting way to get fit"
      >
        <p>
          Jiu-jitsu is a stimulating way of getting fit, it does not just
          physically challenge you but also mentally. Many of our students are
          people who got bored working out at a gym on a treadmill.
        </p>
        <p>
          Jiu-jitsu challenges them physically and mentally, it makes exercise
          fun! The major bonus of working out with Brazilian jiu-jitsu is that
          you also learn to defend yourself, a true win-win.
        </p>
      </AboutSection>
      <AboutSection
        classNameRef="about-us-under-hero-second"
        title="We're committed to your progress"
      >
        <p>
          The people at Stalone BJJ make it what it is, you will soon be part of
          that successful and ever evolving team.
        </p>
        <p>
          You will be impressed as to how all instructors, staff and training
          friends all want everyone to improve and be the very best they can and
          Stalone BJJ Academy is structured to provide training that is
          accessible to all yet demanding and fun, pushing us to be the best
          version we can be.
        </p>
      </AboutSection>
      <AboutSection
        classNameRef="about-us-under-hero-third"
        title="Smooth and enjoyable learning curve"
      >
        <p>
          The well honed class structure is the hallmark of being a leading BJJ
          school. Classes start on time with a well developed standardised
          curriculum and class structure.
        </p>
        <p>
          As a student of Stalone BJJ Chorley you will know what is expected of
          you from your training partners and instructors. The consistency of
          this structure combined with the creativity and innovation of our
          devoted instructors blend perfectly to facilitate your progress.
        </p>
      </AboutSection>
      <AboutSection
        classNameRef="about-us-under-hero-fourth"
        title="We'll make a positive change to your life forever"
      >
        <p>
          When you join Stalone BJJ Chorley you are not just getting classes.
          You become part of a community united by the ideals of the Jiu-Jitsu
          lifestyle. Special classes and side events coupled with ordinary
          classes create a fun and exciting calendar of activities that you and
          your family will love to take part in.
        </p>
      </AboutSection>
      <AboutSection
        classNameRef="about-us-under-hero-fifth"
        title="Techniques will be useful on and off the mats"
      >
        <p>
          You don&apos;t come to class just to learn how to fight. You also work
          hard toward mastering the underlying principles that allow you to
          succeed on the mats. When applied to your life off the mats, these
          principles can bring more balance to your routine and help you reach
          your true potential.
        </p>
      </AboutSection>
      <AboutSection
        classNameRef="about-us-under-hero-sixth"
        title="An environment for the whole family"
      >
        <p>
          One of the most unique characteristics about our school is our
          family-orientated approach. Stalone BJJ is proud to be an environment
          that is welcoming for the whole family: men, women, and children. At
          Stalone BJJ, families find marvellous activities through which to
          spend quality time together.
        </p>
      </AboutSection>
      <AboutSection
        classNameRef="about-us-under-hero-seventh"
        title="Spotlessly clean facilities"
      >
        <p>
          Cleanliness is a top priority at Stalone BJJ. Our school adheres to
          the strict standard of cleanliness and hygiene set by being an
          accredited BJJ school.
        </p>
        <p>
          Our staff clean the facilities constantly, and all uniforms are washed
          regularly. Our training mats are cleaned on a daily basis with a
          specially designed cleaning agent that neutralises bacteria, fungus
          and odours without detriment to the equipment.
        </p>
      </AboutSection>
      <AboutSection
        classNameRef="about-us-under-hero-eighth"
        title="A safe environment for all"
      >
        <p>
          Student safety is our instructors&apos; primary goal. Training
          sessions are supervised at all times, and we have CPR-trained
          personnel on duty during every class.
        </p>
      </AboutSection>
      <AboutSection
        classNameRef="about-us-under-hero-ninth"
        title="More than 20 years of experience"
      >
        <p>
          Our IBJJF certified instructors are responsible for teaching classes
          and committed to keeping the core values of Brazilian Jiu-Jitsu. Our
          team of instructors are trained in the teaching philosophy and methods
          of Jiu-Jitsu. A legacy of over 20 years of teaching experience is at
          your service, so you don&apos;t have to worry: you and your family are
          in great hands at Stalone BJJ Chorley.
        </p>
      </AboutSection>
      <section
        className="w-full border-t-2 border-red-600 bg-background py-16 lg:py-20"
        id="contact-form"
      >
        <div className="container max-w-2xl">
          <SectionHeading
            subtitle="Tell us a little about yourself and we’ll help you book your first class."
            title="Ready to get started?"
          />
          <div className="rounded-xl border border-red-600 bg-card p-6 shadow-lg sm:p-8">
            <ContactForm embedded />
          </div>
        </div>
      </section>
    </>
  );
}
