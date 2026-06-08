
import { services } from "../../data/services";

export default function ServicesSection() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl">
                    <p className="font-semibold text-teal-600">Our Services</p>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        Solutions Designed for Modern Organizations
                    </h2>

                    <p className="mt-4 text-slate-600">
                        ADENAT SOLUTIONS & ENTERPRISE delivers technology, automation, and
                        consultancy services that help businesses and institutions work
                        smarter.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.title}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                                    <Icon size={26} />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900">
                                    {service.title}
                                </h3>

                                <p className="mt-3 text-slate-600">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}