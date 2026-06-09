import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industrySolutions } from "../../data/industrySolutions";

export default function IndustrySolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-wide text-teal-300">
            Industry Solutions
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold">
            Smart Digital Systems for Different Sectors
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            We design and develop industry-specific software systems,
            automation platforms, and consultancy solutions for schools,
            hospitals, churches, businesses, NGOs, and institutions.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
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

                    <h2 className="mt-7 text-xl font-bold text-slate-900 transition group-hover:text-teal-700">
                      {industry.title}
                    </h2>

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
    </main>
  );
}