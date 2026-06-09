import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { industrySolutions } from "../../../data/industrySolutions";

type IndustryDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function IndustryDetailsPage({
  params,
}: IndustryDetailsPageProps) {
  const { slug } = await params;

  const industry = industrySolutions.find((item) => item.slug === slug);

  if (!industry) {
    notFound();
  }

  const Icon = industry.icon;

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-600 text-white">
            <Icon size={32} />
          </div>

          <p className="mt-8 font-semibold uppercase tracking-wide text-teal-300">
            Industry Solution
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold">
            {industry.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {industry.description}
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="font-semibold text-teal-600">Overview</p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              How ADENAT Supports This Sector
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-600">
              {industry.overview}
            </p>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-slate-900">
                Solutions We Provide
              </h3>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {industry.solutions.map((solution) => (
                  <div
                    key={solution}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <CheckCircle2 className="text-teal-600" size={22} />
                    <span className="font-semibold text-slate-800">
                      {solution}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-slate-900">
                Benefits
              </h3>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {industry.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
                  >
                    <p className="font-semibold text-slate-800">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-3xl bg-slate-950 p-7 text-white">
            <h3 className="text-2xl font-bold">Need This Solution?</h3>

            <p className="mt-4 text-slate-300">
              Let&apos;s discuss digital systems and automation solutions for
              your organization.
            </p>

            <Link
              href="/contact"
              className="mt-6 block rounded-full bg-teal-600 px-6 py-3 text-center font-semibold text-white hover:bg-teal-700"
            >
              Request Consultation
            </Link>

            <Link
              href="https://wa.me/233244734362"
              target="_blank"
              className="mt-3 block rounded-full border border-white/20 px-6 py-3 text-center font-semibold text-white hover:bg-white/10"
            >
              Chat on WhatsApp
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}