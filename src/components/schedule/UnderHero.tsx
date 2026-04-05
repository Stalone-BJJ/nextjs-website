import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const days = [
  [
    {
      position: 2,
      time: "10:00 - 11:00",
      name: "All levels gi drill class",
    },
    {
      position: 4,
      time: "17:00 - 17:45",
      name: "Kids gi",
    },
    {
      position: 5,
      time: "18:00 - 19:00",
      name: "Fundamentals gi *",
    },
    {
      position: 6,
      time: "19:00 - 20:00",
      name: "Advanced gi *",
    },
    {
      position: 7,
      time: "20:00 - 21:00",
      name: "Live training gi",
    },
  ],
  [
    {
      position: 1,
      time: "06:00 - 07:00",
      name: "Early birds all levels gi",
    },
    {
      position: 5,
      time: "18:00 - 19:00",
      name: "All levels gi",
    },
    {
      position: 6,
      time: "19:00 - 19:30",
      name: "Live training gi",
    },
  ],
  [
    {
      position: 1,
      time: "06:00 - 07:00",
      name: "Early birds all levels no gi",
    },
    {
      position: 4,
      time: "17:00 - 17:45",
      name: "Kids gi",
    },
    {
      position: 5,
      time: "18:00 - 19:00",
      name: "Fundamentals gi",
    },
    {
      position: 6,
      time: "19:00 - 20:00",
      name: "Competition training",
    },
  ],
  [
    {
      position: 1,
      time: "06:00 - 07:00",
      name: "Early birds all levels gi",
    },
    {
      position: 5,
      time: "18:00 - 19:00",
      name: "All levels no gi",
    },
    {
      position: 6,
      time: "19:00 - 19:30",
      name: "Live training no gi",
    },
  ],
  [
    {
      position: 2,
      time: "10:00 - 11:00",
      name: "All levels gi drill class",
    },
    {
      position: 5,
      time: "18:00 - 19:00",
      name: "Women's class **",
    },
    {
      position: 6,
      time: "18:00 - 19:00",
      name: "All levels gi",
    },
    {
      position: 7,
      time: "19:00 - 20:00",
      name: "Open mat",
    },
  ],
  [
    {
      position: 3,
      time: "11:00 - 12:00",
      name: "All levels gi",
    },
    {
      position: 4,
      time: "12:00 - 12:45",
      name: "Kids gi",
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

/** One distinct colour per class name (timetable legend by class type). */
const CLASS_TYPE_STYLES: Record<string, string> = {
  "All levels gi drill class":
    "bg-sky-700 text-white border border-sky-900/40",
  "Kids gi": "bg-amber-600 text-white border border-amber-800/50",
  "Fundamentals gi *": "bg-emerald-700 text-white border border-emerald-900/40",
  "Advanced gi *": "bg-red-800 text-white border border-red-950/50",
  "Live training gi": "bg-rose-700 text-white border border-rose-900/40",
  "Early birds all levels gi": "bg-cyan-700 text-white border border-cyan-900/40",
  "All levels gi": "bg-blue-700 text-white border border-blue-900/40",
  "Early birds all levels no gi":
    "bg-teal-700 text-white border border-teal-900/40",
  "Fundamentals gi": "bg-green-700 text-white border border-green-900/40",
  "Competition training": "bg-orange-800 text-white border border-orange-950/50",
  "All levels no gi": "bg-indigo-700 text-white border border-indigo-900/40",
  "Live training no gi":
    "bg-fuchsia-700 text-white border border-fuchsia-900/40",
  "Women's class **": "bg-pink-600 text-white border border-pink-800/50",
  "Open mat": "bg-violet-700 text-white border border-violet-900/40",
};

const getClassColour = (name: string) =>
  CLASS_TYPE_STYLES[name] ??
  "bg-zinc-700 text-white border border-zinc-600";

type ClassProps = { last: boolean } & (typeof days)[number][number];

const Class = ({ time, position, name, last }: ClassProps) => {
  return (
    <div
      className={`${
        sessionClasses[position - 1]
      } py-2 border border-red-600 rounded-md mx-2 ${last ? "mb-4" : ""}`} // Last class has no padding bottom.
    >
      <div className="text-center mb-2 font-bold text-foreground">{time}</div>
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
    <div className="flex flex-col lg:grid lg:grid-rows-8 gap-4 border border-red-600 rounded-lg overflow-hidden bg-background shadow-sm">
      <div className="bg-black text-white text-xl text-center flex justify-center items-center uppercase lg:p-0 p-4 border-b border-red-600">
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
    <div className="border-t-2 border-red-600 w-full bg-background">
      <div className="container mx-auto max-w-[1600px] px-4 sm:px-6 mb-12 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 gap-y-8 mt-10">
          {days.map((day, index) => (
            <Day day={index} classes={day} key={index} />
          ))}
        </div>
      </div>
      <section className="border-t-2 border-red-600 w-full py-8 bg-background">
        <div className="container mx-auto max-w-3xl px-4">
          <Card className="border-red-600 bg-card shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-center text-xl font-bold tracking-wide sm:text-2xl">
                Additional information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
              <p>
                * On the first Monday of each month the evening classes are
                replaced with an{" "}
                <span className="font-bold text-red-500">
                  Adults Gi All-Levels Class
                </span>{" "}
                that starts at 18:30 and finishes at 20:00. These classes will
                be reminded about via Social Media and the WhatsApp group, as
                well as at the end of classes nearer the time. The Live Training
                class will run as normal.
              </p>
              <p>
                **{" "}
                <span className="font-bold text-red-500">
                  Women&apos;s Classes
                </span>{" "}
                run alongside the All Levels Gi class on Fridays from 18:00 to
                19:00. These classes are open to all levels and are a safe and
                comfortable environment.
              </p>
              <p>
                Additionally{" "}
                <span className="font-bold text-red-500">Open Mat Sessions</span>{" "}
                are frequent but depend on the availability of the Professors and
                Coaches.
              </p>
              <p>
                You will be notified about these additional sessions via Social
                Media and the{" "}
                <span className="font-bold text-red-500">Stalone BJJ</span>{" "}
                WhatsApp group. Classes will also be notified at the end of each
                class.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
