import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-wide text-teal-300">
            Our Services
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold">
            Technology, Consultancy, and Enterprise Solutions for Growth
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            ADENAT SOLUTIONS & ENTERPRISE helps businesses, schools, churches,
            hospitals, and institutions build smarter systems, automate
            operations, and improve service delivery.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link
                  href={`/services/${service.slug}`}
                  key={service.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-teal-300 hover:shadow-2xl"
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal-100 opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />

                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-teal-500 via-blue-500 to-slate-900 opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-slate-900 text-white shadow-lg shadow-teal-100 transition duration-300 group-hover:scale-110">
                        <Icon size={28} />
                      </div>

                      <span className="text-sm font-bold text-slate-300">
                        0{index + 1}
                      </span>
                    </div>

                    <h2 className="mt-8 text-xl font-bold text-slate-900 transition group-hover:text-teal-700">
                      {service.title}
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <div className="mt-8 flex items-center gap-2 font-semibold text-teal-600">
                      <span>Learn more</span>
                      <ArrowUpRight
                        size={18}
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