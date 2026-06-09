const testimonials = [
  {
    name: "Business Client",
    role: "Startup Founder",
    message:
      "ADENAT SOLUTIONS & ENTERPRISE understands business needs and provides practical digital solutions that support growth.",
  },
  {
    name: "School Administrator",
    role: "Education Sector",
    message:
      "Their approach to school systems and automation makes administrative work easier, faster, and more organized.",
  },
  {
    name: "Organization Leader",
    role: "Nonprofit / Institution",
    message:
      "The team focuses on professional service, clear communication, and solutions that match organizational goals.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-wide text-teal-600">
            Testimonials
          </p>

          <h2 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Trusted by Businesses and Organizations
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We focus on delivering professional, reliable, and practical
            solutions that help clients achieve measurable progress.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 text-5xl font-bold text-teal-600">“</div>

              <p className="leading-8 text-slate-600">
                {testimonial.message}
              </p>

              <div className="mt-8 border-t border-slate-100 pt-5">
                <h3 className="font-bold text-slate-900">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}