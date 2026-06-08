import { services } from "../../data/services";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Page Hero */}
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

            {/* Services Grid */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.title}
                                    className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                                        <Icon size={26} />
                                    </div>

                                    <h2 className="text-xl font-bold text-slate-900">
                                        {service.title}
                                    </h2>

                                    <p className="mt-3 text-slate-600">{service.description}</p>

                                    <button className="mt-6 font-semibold text-teal-600 hover:text-teal-700">
                                        Learn More
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}