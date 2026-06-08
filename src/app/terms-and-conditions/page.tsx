export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <section className="mx-auto max-w-4xl">
        <p className="font-semibold text-teal-600">Legal</p>

        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          Terms & Conditions
        </h1>

        <div className="mt-10 space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              Use of Our Website
            </h2>
            <p className="mt-3">
              By using this website, you agree to use it for lawful purposes and
              not to misuse, copy, attack, or interfere with the website or its
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              Services
            </h2>
            <p className="mt-3">
              ADENAT SOLUTIONS & ENTERPRISE provides technology, software,
              website development, business automation, consultancy, project
              management, and related enterprise services. Specific project
              terms, timelines, and costs will be agreed with each client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              Payments and Project Delivery
            </h2>
            <p className="mt-3">
              Payments, milestones, revisions, and delivery timelines may vary
              depending on the agreed project scope. Work begins after agreement
              on project requirements and payment terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              Intellectual Property
            </h2>
            <p className="mt-3">
              Website content, designs, branding, and materials belong to ADENAT
              SOLUTIONS & ENTERPRISE unless otherwise agreed in writing.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}