import { industries } from "../../data/industries";

export default function IndustrySolutions() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-semibold text-teal-600">Industry Solutions</p>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          Serving Different Sectors with Smart Systems
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-xl bg-white p-6 font-semibold text-slate-800 shadow-sm"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}