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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-teal-600">
                  {project.category}
                </p>

                <h2 className="mt-3 text-2xl font-bold text-slate-900">
                  {project.title}
                </h2>

                <p className="mt-4 text-slate-600">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <button className="mt-6 font-semibold text-teal-600 hover:text-teal-700">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}