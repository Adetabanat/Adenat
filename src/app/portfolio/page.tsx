import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-wide text-teal-300">
            Portfolio
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold">
            Projects and Solutions We Can Deliver
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Explore examples of digital systems, websites, automation tools,
            and consultancy solutions ADENAT SOLUTIONS & ENTERPRISE can design
            and implement for clients.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Link
                href={`/portfolio/${project.slug}`}
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-teal-300 hover:bg-white hover:shadow-2xl"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal-100 opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />

                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-teal-500 via-blue-500 to-slate-900 opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-6">
                    <p className="text-sm font-bold uppercase tracking-wide text-teal-600">
                      {project.category}
                    </p>

                   
                  </div>

                  <h2 className="mt-6 text-2xl font-bold leading-snug text-slate-900 transition group-hover:text-teal-700">
                    {project.title}
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-gradient-to-r from-teal-50 to-blue-50 px-3 py-1 text-sm font-semibold text-slate-700 ring-1 ring-teal-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-2 font-semibold text-teal-600">
                    <span>View details</span>
                    <ArrowUpRight
                      size={18}
                      className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}