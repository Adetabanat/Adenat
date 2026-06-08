export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-wide text-teal-300">
            About Us
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold">
            Building Ideas Into Professional Solutions
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            ADENAT SOLUTIONS & ENTERPRISE is a technology, consultancy, and
            enterprise solutions company helping organizations improve
            operations through software, automation, websites, project
            management, and professional consultancy.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-semibold text-teal-600">Who We Are</p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              A Multidisciplinary Solutions Company
            </h2>
          </div>

          <div className="space-y-5 text-slate-600">
            <p>
              We design and build custom software, websites, school management
              systems, church management systems, hospital management systems,
              and business automation platforms for modern organizations.
            </p>

            <p>
              We also provide project management, building consultancy,
              business consultancy, and technology advisory services that help
              clients plan, execute, and grow with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Mission</h3>
            <p className="mt-4 text-slate-600">
              To provide innovative, reliable, and professional solutions that
              help businesses, institutions, and individuals achieve sustainable
              growth.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Vision</h3>
            <p className="mt-4 text-slate-600">
              To become a trusted enterprise solutions provider recognized for
              excellence, innovation, and impact across Africa and beyond.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Core Values</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>Integrity</li>
              <li>Professionalism</li>
              <li>Innovation</li>
              <li>Excellence</li>
              <li>Client Satisfaction</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}