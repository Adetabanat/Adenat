import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industry Solutions", href: "/industry-solutions" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/adenat_logo.png"
            alt="ADENAT SOLUTIONS & ENTERPRISE Logo"
            width={48}
            height={48}
            priority
          />

          <div className="hidden sm:block">
            <h1 className="text-lg font-extrabold leading-none text-slate-900">
              ADENAT
            </h1>
            <p className="mt-1 text-xs font-bold text-teal-600">
              SOLUTIONS & ENTERPRISE
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-teal-600"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Search Bar */}
        <div className="hidden max-w-xs flex-1 items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 md:flex">
          <Search size={18} className="text-slate-400" />

          <input
            type="search"
            placeholder="Search services..."
            className="ml-2 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700 sm:inline-block"
        >
          Request Consultation
        </Link>
      </nav>
    </header>
  );
}