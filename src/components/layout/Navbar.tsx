import Link from "next/link";
import Image from "next/image";


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
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
       <Link href="/" className="flex items-center gap-3">
  <Image
    src="/adenat_logo.png"
    alt="ADENAT SOLUTIONS & ENTERPRISE"
    width={50}
    height={50}
    priority
  />

  <div>
    <h1 className="text-lg font-bold text-slate-900">
      ADENAT SOLUTIONS
    </h1>

    <p className="text-xs text-slate-500">
      & ENTERPRISE
    </p>
  </div>
</Link>

        <div className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-teal-600"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="rounded-full bg-teal-600 px-5 py-2 text-sm font-semibold text-white"
        >
          Request Consultation
        </Link>
      </nav>
    </header>
  );
}