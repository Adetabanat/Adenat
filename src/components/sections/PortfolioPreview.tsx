import Link from "next/link";
import { projects } from "../../data/projects";

export default function PortfolioPreview() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-semibold text-teal-600">Our Work</p>

            <h2 className="mt-3 max-w-3xl text-4xl font-bold text-slate-900">
              Digital Solutions and Systems We Can Build
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Explore some of the solutions ADENAT SOLUTIONS & ENTERPRISE can
              design, develop, and implement for organizations.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-900 hover:border-teal-600 hover:text-teal-600"
          >
            View Portfolio
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-teal-600">
                {project.category}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                {project.title}
              </h3>

              <p className="mt-4 text-slate-600">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-white px-3 py-1 text-sm text-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}