const days = [
  [
    {
      position: 2,
      time: "10.00 - 11.00",
      name: "All levels gi",
    },
    {
      position: 3,
      time: "11.00 - 12.00",
      name: "Competition sparring gi",
    },
    {
      position: 4,
      time: "17.00 - 17.45",
      name: "Kids gi",
    },
    {
      position: 5,
      time: "18.00 - 19.00",
      name: "Fundamentals gi",
    },
    {
      position: 6,
      time: "19.00 - 20.00",
      name: "Advanced gi",
    },
    {
      position: 7,
      time: "20.00 - 21.00",
      name: "Live training gi",
    },
  ],
  [
    {
      position: 1,
      time: "06.00 - 07.00",
      name: "Early birds all levels gi",
    },
    {
      position: 5,
      time: "18.00 - 19.00",
      name: "Advanced gi",
    },
    {
      position: 6,
      time: "19.00 - 19.30",
      name: "Live training gi",
    },
    {
      position: 7,
      time: "19.30 - 20.30",
      name: "Fundamentals gi",
    },
  ],
  [
    {
      position: 1,
      time: "06.00 - 07.00",
      name: "Early birds all levels no gi",
    },
    {
      position: 4,
      time: "17.00 - 17.45",
      name: "Kids gi",
    },
    {
      position: 5,
      time: "18.00 - 19.00",
      name: "Fundamentals no gi",
    },
    {
      position: 6,
      time: "19.00 - 20.00",
      name: "Competition training",
    },
  ],
  [
    {
      position: 1,
      time: "06.00 - 07.00",
      name: "Early birds all levels gi",
    },
    {
      position: 5,
      time: "18.00 - 19.00",
      name: "Advanced no gi",
    },
    {
      position: 6,
      time: "19.00 - 19.30",
      name: "Live training no gi",
    },
    {
      position: 7,
      time: "19.30 - 20.30",
      name: "All levels gi",
    },
  ],
  [
    {
      position: 2,
      time: "10.00 - 11.00",
      name: "All levels gi",
    },
    {
      position: 3,
      time: "11.00 - 12.00",
      name: "Competition sparring gi",
    },
    {
      position: 5,
      time: "17.30 - 18.30",
      name: "Women's class",
    },
    {
      position: 6,
      time: "18.30 - 19.30",
      name: "All levels gi",
    },
    {
      position: 7,
      time: "19.30 - 20.30",
      name: "Open mat",
    },
  ],
  [
    {
      position: 2,
      time: "09.30 - 11.00",
      name: "Competition training",
    },
    {
      position: 3,
      time: "12.00 - 12.50",
      name: "Kids gi",
    },
    {
      position: 4,
      time: "13.00 - 14.00",
      name: "All levels gi",
    },
    {
      position: 5,
      time: "14:00 - 15:00",
      name: "Yoga Session",
    },
  ],
];

const sessionClasses = [
  "row-start-2",
  "row-start-3",
  "row-start-4",
  "row-start-5",
  "row-start-6",
  "row-start-7",
  "row-start-8",
];

const openDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getClassColour = (name: string) => {
  switch (name) {
    case "All levels gi":
    case "Early birds all levels gi":
    case "Early birds all levels no gi":
    case "Fundamentals gi":
    case "Fundamentals no gi":
    case "Open mat":
    case "Women's class":
      return "bg-blue-500 text-white";
    case "Advanced gi":
    case "Advanced no gi":
    case "Competition sparring gi":
    case "Competition training":
    case "Live training gi":
    case "Live training no gi":
      return "bg-purple-500 text-white";
    case "Kids gi":
      return "bg-green-500 text-white";
    case "Yoga Session":
      return "bg-pink-500 text-white";
    default:
      return "bg-black text-white";
  }
};

type ClassProps = { last: boolean } & (typeof days)[number][number];

const Class = ({ time, position, name, last }: ClassProps) => {
  return (
    <div
      className={`${
        sessionClasses[position - 1]
      } py-2 border border-white rounded-md mx-2 ${last ? "mb-4" : ""}`} // Last class has no padding bottom.
    >
      <div className="text-center mb-2 font-bold">{time}</div>
      <div
        className={`p-2 text-center uppercase text-sm ${getClassColour(name)}`}
      >
        {name}
      </div>
    </div>
  );
};

type DayProps = {
  day: number;
  classes: (typeof days)[number];
};

const Day = ({ day, classes }: DayProps) => {
  return (
    <div className="flex flex-col lg:grid lg:grid-rows-8 gap-4 border border-white rounded-lg overflow-hidden">
      <div className="bg-slate-700 text-white text-xl text-center flex justify-center items-center uppercase lg:p-0 p-4 border border-white">
        {openDays[day]}
      </div>
      {classes.map((c, index) => (
        <Class key={c.name} last={index === classes.length - 1} {...c} />
      ))}
    </div>
  );
};

export default function UnderHero() {
  return (
    <div className=" border-t-2 border-red-600 w-full">
      <div className="container mx-autol">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 ">
          {days.map((day, index) => (
            <Day day={index} classes={day} key={index} />
          ))}
        </div>
        <div className="m-10 w-[600px]">
          <p className="text-center"></p>
        </div>
      </div>
      <section className="border-t-2 border-red-600 w-full py-8 space-y-4">
        <div className="container mx-auto">
          <h2 className="text-center font-bold text-2xl">ADDITIONAL INFO</h2>
          <p className="text-sm text-center">
            The above timetable represents a normal week at{" "}
            <span className="font-bold text-red-600">Stalone BJJ</span>.
            Additionally{" "}
            <span className="font-bold text-red-600">Open Mat</span> and{" "}
            <span className="font-bold text-red-600">Yoga Sessions</span> are
            frequent but depend on the professor&apos;s and coach&apos;s
            availability. You will be notified about these additional sessoins
            via socials and the{" "}
            <span className="font-bold text-red-600">Stalone BJJ</span> Whatsapp
            group.
          </p>
        </div>
      </section>
    </div>
  );
}
