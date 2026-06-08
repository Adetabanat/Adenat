import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-slate-900 to-teal-700 px-8 py-14 text-center shadow-2xl">
        <p className="font-semibold uppercase tracking-wide text-teal-200">
          Ready to Start?
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Let&apos;s Build a Solution That Moves Your Organization Forward
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-slate-200">
          Contact ADENAT SOLUTIONS & ENTERPRISE today for custom software,
          websites, enterprise systems, business automation, and professional
          consultancy.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="https://wa.me/233244734362"
            target="_blank"
            className="rounded-full bg-white px-7 py-3 font-semibold text-slate-900"
          >
            Chat on WhatsApp
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white px-7 py-3 font-semibold text-white"
          >
            Contact Us
          </Link>
        </div>

        <p className="mt-6 text-sm text-slate-200">
          Call / WhatsApp: 0244734362
        </p>
      </div>
    </section>
  );
}