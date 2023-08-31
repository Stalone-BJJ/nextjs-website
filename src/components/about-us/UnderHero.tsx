import ContactForm from "../ContactForm";
import SectionWithImage from "../SectionWithImage";

export default function UnderHero() {
  return (
    <>
      <SectionWithImage classNameRef="about-us-under-hero-first">
        <h2 className="text-center font-bold text-xl my-4">
          STALONE BJJ IS A GREAT AND EXCITING WAY TO GET FIT
        </h2>
        <p className="text-sm p-4">
          Jiu-jitsu is a stimulating way of getting fit, it does not just
          physically challenge you but also mentally. Many of our students are
          people who got bored working out at a gym on a treadmill.
        </p>
        <p className="text-sm p-4">
          Jiu-jitsu challenges them physically and mentally, it makes exercise
          fun! The major bonus of working out with Brazilian jiu-jitsu is that
          you also learn to defend yourself, a true win-win.
        </p>
      </SectionWithImage>
      <SectionWithImage classNameRef="about-us-under-hero-second">
        <h2 className="text-center font-bold text-xl my-4">
          WE&apos;RE COMMITTED TO YOUR PROGRESS
        </h2>
        <p className="text-sm p-4">
          The people at Stalone BJJ make it what it is, you will soon be part of
          that successful and ever evolving team.
        </p>
        <p className="text-sm p-4">
          You will be impressed as to how all instructors, staff and training
          friends all want everyone to improve and be the very best they can and
          Stalone BJJ Academy is structured to provide training that is
          accessible to all yet demanding and fun, pushing us to be the best
          version we can be.
        </p>
      </SectionWithImage>
      <SectionWithImage classNameRef="about-us-under-hero-third">
        <h2 className="text-center font-bold text-xl my-4">
          SMOOTH AND ENJOYABLE LEARNING CURVE
        </h2>
        <p className="text-sm p-4">
          The well honed class structure is the hallmark of being a former
          Gracie Barra BJJ school. Classes start on time with a well developed
          standardised curriculum and class structure.
        </p>
        <p className="text-sm p-4">
          As a student of Stalone BJJ Chorley you will know what is expected of
          you from your training partners and instructors. The consistency of
          this structure combined with the creativity and innovation of our
          devoted instructors blend perfectly to facilitate your progress.
        </p>
      </SectionWithImage>
      <SectionWithImage classNameRef="about-us-under-hero-fourth">
        <h2 className="text-center font-bold text-xl my-4">
          WE&apos;LL MAKE A POSITIVE CHANGE TO YOUR LIFE FOREVER
        </h2>
        <p className="text-sm p-4">
          When you join Stalone BJJ Chorley you are not just getting classes.
          You become part of a community united by the ideals of the Jiu-Jitsu
          lifestyle. Special classes and side events coupled with ordinary
          classes create a fun and exciting calendar of activities that you and
          your family will love to take part in.
        </p>
      </SectionWithImage>
      <SectionWithImage classNameRef="about-us-under-hero-fifth">
        <h2 className="text-center font-bold text-xl my-4">
          TECHNIQUES WILL BE USEFUL ON AND OFF THE MATS
        </h2>
        <p className="text-sm p-4">
          You don&apos;t come to class just to learn how to fight. You also work
          hard toward mastering the underlying principles that allow you to
          succeed on the mats. When applied to your life off the mats, these
          principles can bring more balance to your routine and help you reach
          your true potential.
        </p>
      </SectionWithImage>
      <SectionWithImage classNameRef="about-us-under-hero-sixth">
        <h2 className="text-center font-bold text-xl my-4">
          AN ENVIRONMENT FOR THE WHOLE FAMILY
        </h2>
        <p className="text-sm p-4">
          One of the most unique characteristics about our school is our
          family-orientated approach. Stalone BJJ is proud to be an environment
          that is welcoming for the whole family: men, women, and children. At
          Stalone BJJ, families find marvellous activities through which to
          spend quality time together.
        </p>
      </SectionWithImage>
      <SectionWithImage classNameRef="about-us-under-hero-seventh">
        <h2 className="text-center font-bold text-xl my-4">
          SPOTLESSLY CLEAN FACILITIES
        </h2>
        <p className="text-sm p-4">
          Cleanliness is a top priority at Stalone BJJ. Our school adheres to
          the strict standard of cleanliness and hygiene set by being a former
          Gracie Barra school.
        </p>
        <p className="text-sm p-4">
          Our staff clean the facilities constantly, and all uniforms are washed
          regularly. Our training mats are cleaned on a daily basis with a
          specially designed cleaning agent that neutralises bacteria, fungus
          and odours without detriment to the equipment.
        </p>
      </SectionWithImage>
      <SectionWithImage classNameRef="about-us-under-hero-eighth">
        <h2 className="text-center font-bold text-xl my-4">
          A SAFE ENVIRONMENT FOR ALL
        </h2>
        <p className="text-sm p-4">
          Student safety is our instructors&apos; primary goal. Training
          sessions are supervised at all times, and we have CPR-trained
          personnel on duty during every class.
        </p>
      </SectionWithImage>
      <SectionWithImage classNameRef="about-us-under-hero-ninth">
        <h2 className="text-center font-bold text-xl my-4">
          MORE THAN 20 YEARS OF EXPERIENCE
        </h2>
        <p className="text-sm p-4">
          Our IBJJF certified instructors are responsible for teaching classes
          and committed to keeping the core values of Brazilian Jiu-Jitsu. Our
          team of instructors are trained in the teaching philosophy and methods
          of Jiu-Jitsu. A legacy of over 20 years of teaching experience is at
          your service, so you don&apos;t have to worry: you and your family are
          in great hands at Gracie Barra Chorley and Gracie Barra Horwich.
        </p>
      </SectionWithImage>
      <section
        className="px-8 py-4 w-full border-t-2 border-red-600"
        id="contact-form"
      >
        <h2 className="text-2xl font-bold text-center my-4">
          READY TO GET STARTED?
        </h2>
        <ContactForm />
      </section>
    </>
  );
}
