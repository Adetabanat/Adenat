const industrySolutions = [
  {
    title: "Education",
    description:
      "School management systems, learning platforms, online assessment systems, student portals, and digital academic tools.",
    solutions: [
      "School Management System",
      "Learning Management System",
      "Online Assessment Platform",
      "Student & Parent Portal",
    ],
  },
  {
    title: "Healthcare",
    description:
      "Hospital and clinic systems that support patient records, appointments, billing, pharmacy, and laboratory operations.",
    solutions: [
      "Hospital Management System",
      "Clinic Management Software",
      "Patient Records",
      "Appointment Scheduling",
    ],
  },
  {
    title: "Religious Organizations",
    description:
      "Church systems for managing membership, donations, events, ministries, attendance, and communication.",
    solutions: [
      "Church Management System",
      "Member Records",
      "Donation Management",
      "Event Management",
    ],
  },
  {
    title: "Businesses & Startups",
    description:
      "Business automation systems that help companies manage customers, sales, operations, staff, and reporting.",
    solutions: [
      "CRM Systems",
      "ERP Systems",
      "Business Automation",
      "Custom Dashboards",
    ],
  },
  {
    title: "Construction & Real Estate",
    description:
      "Digital tools and consultancy support for building projects, property management, documentation, and project tracking.",
    solutions: [
      "Property Management",
      "Project Tracking",
      "Building Consultancy",
      "Documentation Support",
    ],
  },
  {
    title: "NGOs & Development Organizations",
    description:
      "Systems for project monitoring, beneficiary tracking, reporting, donor management, and organizational efficiency.",
    solutions: [
      "Beneficiary Management",
      "Project Monitoring",
      "Donor Reporting",
      "Data Management",
    ],
  },
];

export default function IndustrySolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-wide text-teal-300">
            Industry Solutions
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold">
            Smart Digital Systems for Different Sectors
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            We design and develop industry-specific software systems,
            automation platforms, and consultancy solutions for schools,
            hospitals, churches, businesses, NGOs, and institutions.
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industrySolutions.map((industry) => (
              <div
                key={industry.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h2 className="text-2xl font-bold text-slate-900">
                  {industry.title}
                </h2>

                <p className="mt-4 text-slate-600">
                  {industry.description}
                </p>

                <div className="mt-6 space-y-2">
                  {industry.solutions.map((solution) => (
                    <div
                      key={solution}
                      className="rounded-lg bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      {solution}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}