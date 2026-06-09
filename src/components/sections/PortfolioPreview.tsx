import Link from "next/link";
import { ArrowUpRight, Layers, MonitorSmartphone, ShieldCheck } from "lucide-react";
import { projects } from "../../data/projects";

const projectIcons = [MonitorSmartphone, Layers, ShieldCheck];

export default function PortfolioPreview() {
    const featuredProjects = projects.slice(0, 3);

    return (
        <section className="relative overflow-hidden bg-white px-6 py-24">
            {/* Background decoration */}
            <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-teal-100/50 blur-3xl" />
            <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                {/* Header */}
                <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                    <div className="max-w-3xl">
                        <p className="font-semibold uppercase tracking-wide text-teal-600">
                            Our Work
                        </p>

                        <h2 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                            Digital Solutions and Systems We Can Build
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            From business websites to school systems, church platforms, and
                            automation tools, we design practical solutions that help
                            organizations work smarter and grow faster.
                        </p>
                    </div>

                    <Link

                        href={`/portfolio/${projects.slug}`}
                        className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 shadow-sm transition hover:border-teal-500 hover:text-teal-600"
                    >
                        View Portfolio
                        <ArrowUpRight size={18} />
                    </Link>
                </div>

                {/* Cards */}
                <div className="mt-14 grid gap-7 lg:grid-cols-3">
                    {featuredProjects.map((project, index) => {
                        const Icon = projectIcons[index] || Layers;

                        return (
                            <Link
                                href="/portfolio"
                                key={project.title}
                                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-teal-300 hover:bg-white hover:shadow-2xl"
                            >
                                {/* Card glow */}
                                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal-100 opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />

                                {/* Top accent */}
                                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-teal-500 via-blue-500 to-slate-900 opacity-0 transition duration-300 group-hover:opacity-100" />

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between gap-6">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-slate-900 text-white shadow-lg shadow-teal-100 transition duration-300 group-hover:scale-110">
                                            <Icon size={28} />
                                        </div>


                                    </div>

                                    <p className="mt-8 text-sm font-bold uppercase tracking-wide text-teal-600">
                                        {project.category}
                                    </p>

                                    <h3 className="mt-3 text-2xl font-bold leading-snug text-slate-900 transition group-hover:text-teal-700">
                                        {project.title}
                                    </h3>

                                    <p className="mt-4 leading-8 text-slate-600">
                                        {project.description}
                                    </p>

                                    <div className="mt-7 flex flex-wrap gap-2">
                                        {project.tools.map((tool) => (
                                            <span
                                                key={tool}
                                                className="rounded-full bg-gradient-to-r from-teal-50 to-blue-50 px-3 py-1 text-sm font-semibold text-slate-700 ring-1 ring-teal-200 transition group-hover:from-teal-100 group-hover:to-blue-100"
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
                        );
                    })}
                </div>

                {/* Bottom CTA strip */}
                <div className="mt-14 overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-2xl md:p-10">
                    <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
                        <div>
                            <p className="font-semibold uppercase tracking-wide text-teal-300">
                                Have an idea?
                            </p>

                            <h3 className="mt-3 text-3xl font-bold">
                                Let&apos;s turn your business idea into a working digital solution.
                            </h3>

                            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                                We can help you plan, design, build, and launch the right
                                software, website, or automation system for your organization.
                            </p>
                        </div>

                        <div className="flex md:justify-end">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-7 py-3 font-bold text-white transition hover:bg-teal-700"
                            >
                                Start a Project
                                <ArrowUpRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}