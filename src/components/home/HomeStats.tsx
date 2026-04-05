const stats = [
  {
    value: "20+",
    label: "Weekly classes",
    hint: "Gi, no-gi, kids & more",
  },
  {
    value: "8",
    label: "Expert coaches",
    hint: "Experienced black belts",
  },
  {
    value: "6",
    label: "Days on the mats",
    hint: "Full weekly timetable",
  },
] as const;

export default function HomeStats() {
  return (
    <section
      className="w-full border-y border-neutral-700 bg-neutral-900 -mt-px relative z-10"
      aria-label="Academy highlights"
    >
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-neutral-700">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-10 sm:py-12 px-6 text-center"
            >
              <span className="text-4xl sm:text-5xl font-bold tabular-nums text-red-500 tracking-tight">
                {s.value}
              </span>
              <span className="mt-2 text-sm font-semibold uppercase tracking-wide text-neutral-100">
                {s.label}
              </span>
              <span className="mt-1 text-xs text-neutral-400 max-w-[14rem]">
                {s.hint}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
