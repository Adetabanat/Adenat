import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

        {/* Left Content */}
        <div>
          <p className="font-semibold uppercase tracking-wide text-teal-600">
            Technology • Innovation • Solutions
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight text-slate-900">
            Smart Technology & Business Solutions for Growing Organizations
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            We build custom software, websites, enterprise systems, and provide
            technology, business, and project consultancy services that help
            organizations operate smarter and grow faster.
          </p>

         <div className="mt-8 flex flex-col gap-4 sm:flex-row">
  <Link
    href="/contact"
    className="rounded-lg bg-teal-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-teal-700"
  >
    Request Consultation
  </Link>

  <Link
    href="/services"
    className="rounded-lg border border-slate-300 px-6 py-3 text-center font-semibold text-slate-900 transition hover:border-teal-600 hover:text-teal-600"
  >
    Explore Services
  </Link>
</div>
        </div>

        {/* Right Image */}
        <div>
          <Image
            src="/hero-new.png"
            alt="ADENAT Team"
            width={700}
            height={600}
            className="rounded-3xl shadow-2xl"
            priority
          />
        </div>

      </div>
    </section>
  );
}