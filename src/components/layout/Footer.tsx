import Link from "next/link";
import Image from "next/image";

const services = [
  "Software Development",
  "Website Development",
  "Business Automation",
  "Enterprise Systems",
  "Project Management",
  "Building Consultancy",
];

const solutions = [
  "School Management Systems",
  "Church Management Systems",
  "Hospital Management Systems",
  "CRM & ERP Systems",
  "Learning Management Systems",
  "Custom Web Applications",
];

const industries = [
  "Education",
  "Healthcare",
  "Religious Organizations",
  "Businesses & Startups",
  "Construction & Real Estate",
  "NGOs & Development Organizations",
  "Government & Public Sector",
];

const company = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Request Consultation", href: "/contact" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-6">
        {/* Brand */}
        <div className="lg:col-span-2">
         <Link href="/" className="flex items-center gap-3">
  <Image
    src="/adenat_logo.png"
    alt="ADENAT SOLUTIONS & ENTERPRISE Logo"
    width={56}
    height={56}
    className="rounded-md"
  />

  <div>
    <h2 className="text-2xl font-extrabold leading-none">ADENAT</h2>

    <p className="mt-1 text-sm font-bold text-teal-400">
      SOLUTIONS & ENTERPRISE
    </p>
  </div>
</Link>

          <p className="mt-10 max-w-xs text-lg leading-8 text-slate-300">
            Building custom software, websites, and enterprise systems for
            growing businesses and organizations.
          </p>

          <p className="mt-6 text-sm text-slate-400">
            Building Ideas Into Professional Solutions
          </p>

          <p className="mt-6 text-sm text-slate-400">
            Call / WhatsApp: 0244734362
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Instagram: ADENAT SOLUTIONS
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold">Services</h3>

          <ul className="mt-6 space-y-4">
            {services.map((service) => (
              <li key={service}>
                <Link
                  href="/services"
                  className="font-semibold text-slate-300 transition hover:text-teal-400"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-lg font-bold">Solutions</h3>

          <ul className="mt-6 space-y-4">
            {solutions.map((solution) => (
              <li key={solution}>
                <Link
                  href="/industry-solutions"
                  className="font-semibold text-slate-300 transition hover:text-teal-400"
                >
                  {solution}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h3 className="text-lg font-bold">Industries</h3>

          <ul className="mt-6 space-y-4">
            {industries.map((industry) => (
              <li key={industry}>
                <Link
                  href="/industry-solutions"
                  className="font-semibold text-slate-300 transition hover:text-teal-400"
                >
                  {industry}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company + Legal */}
        <div>
          <h3 className="text-lg font-bold">Company</h3>

          <ul className="mt-6 space-y-4">
            {company.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="font-semibold text-slate-300 transition hover:text-teal-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-lg font-bold">Legal</h3>

          <ul className="mt-6 space-y-4">
            {legal.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="font-semibold text-slate-300 transition hover:text-teal-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-slate-800 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} ADENAT SOLUTIONS & ENTERPRISE. All rights
        reserved.
      </div>
    </footer>
  );
}