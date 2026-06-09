import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/services";

export default function ServicesSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-wide text-teal-600">
            Our Services
          </p>

          <h2 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Solutions Designed for Modern Organizations
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            ADENAT SOLUTIONS & ENTERPRISE delivers technology, automation, and
            consultancy services that help businesses and institutions work
            smarter, faster, and more efficiently.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                 href={`/services/${service.slug}`}
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-teal-300 hover:shadow-2xl"
              >
                {/* Decorative Glow */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal-100 opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />

                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-teal-500 via-blue-500 to-slate-900 opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-slate-900 text-white shadow-lg shadow-teal-100 transition duration-300 group-hover:scale-110">
                      <Icon size={28} />
                    </div>

                   
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-slate-900 transition group-hover:text-teal-700">
                    {service.title}
                  </h3>

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
  );
}