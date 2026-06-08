const reasons = [
  {
    title: "Tailored Solutions",
    description:
      "We design systems around your actual business needs instead of forcing you into generic tools.",
  },
  {
    title: "Business-Focused Technology",
    description:
      "Our goal is not just to build software, but to help your organization work smarter and grow faster.",
  },
  {
    title: "End-to-End Support",
    description:
      "From planning and development to deployment and support, we stay with you through the full process.",
  },
  {
    title: "Professional Delivery",
    description:
      "We combine technical skill, project management, and consultancy experience to deliver quality results.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-semibold text-teal-600">Why Choose Us</p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              We Build Practical Solutions That Help Organizations Grow
            </h2>

            <p className="mt-5 text-slate-600">
              ADENAT SOLUTIONS & ENTERPRISE focuses on helping businesses,
              schools, churches, hospitals, and institutions improve operations
              through smart systems, automation, and professional consultancy.
            </p>
          </div>

          <div className="grid gap-5">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {reason.title}
                </h3>

                <p className="mt-2 text-slate-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}