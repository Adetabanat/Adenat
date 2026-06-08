export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <section className="mx-auto max-w-4xl">
        <p className="font-semibold text-teal-600">Legal</p>

        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          Disclaimer
        </h1>

        <div className="mt-10 space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              General Information
            </h2>
            <p className="mt-3">
              The information on this website is provided for general business
              and service information purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              Service Information
            </h2>
            <p className="mt-3">
              Service descriptions, timelines, pricing, and deliverables may
              vary depending on client requirements, project scope, and formal
              agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              No Guarantee
            </h2>
            <p className="mt-3">
              While we aim to provide quality service, results may vary based on
              project requirements, client cooperation, available resources, and
              other external factors.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}