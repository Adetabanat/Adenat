const stats = [
  {
    value: "100+",
    label: "Digital Solutions",
  },
  {
    value: "6+",
    label: "Core Service Areas",
  },
  {
    value: "24/7",
    label: "Support Mindset",
  },
  {
    value: "100%",
    label: "Client-Focused Delivery",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-white px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 rounded-3xl border border-slate-200 bg-slate-950 p-6 shadow-xl md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white/5 p-6 text-center"
            >
              <h3 className="text-4xl font-extrabold text-white">
                {stat.value}
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}