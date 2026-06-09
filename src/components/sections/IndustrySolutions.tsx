import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industrySolutions } from "../../data/industrySolutions";

export default function IndustrySolutions() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-6 py-24">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-teal-100/60 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-wide text-teal-600">
              Industry Solutions
            </p>

            <h2 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Smart Systems for Every Sector We Serve
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We design digital platforms and automation systems for schools,
              hospitals, churches, businesses, NGOs, government institutions,
              and corporate organizations.
            </p>
          </div>

          <Link
            href="/industry-solutions"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 shadow-sm transition hover:border-teal-500 hover:text-teal-600"
          >
            View all industries
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {industrySolutions.map((industry) => {
            const Icon = industry.icon;

            return (
              <Link
                href={`/industry-solutions/${industry.slug}`}
                key={industry.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-teal-300 hover:shadow-2xl"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal-100 opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-slate-900 text-white shadow-lg shadow-teal-100 transition duration-300 group-hover:scale-110">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900 transition group-hover:text-teal-700">
                    {industry.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {industry.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-bold text-teal-600">
                    <span>Explore solution</span>
                    <ArrowUpRight
                      size={16}
                      className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}