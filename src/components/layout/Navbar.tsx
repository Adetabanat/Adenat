"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search, ArrowUpRight } from "lucide-react";
import { services } from "../../data/services";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function closeMenu() {
    setMenuOpen(false);
    setSearchTerm("");
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-white/90 shadow-sm backdrop-blur">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
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

          {/* Desktop Links */}
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

          {/* Desktop Search */}
          <div className="relative hidden w-52 xl:block">
            <div className="flex w-full items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
              <Search size={18} className="text-slate-400" />

              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="ml-2 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>

            {searchTerm && (
              <div className="absolute left-0 top-12 z-50 w-full rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                {filteredServices.length > 0 ? (
                  filteredServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => setSearchTerm("")}
                      className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-teal-600"
                    >
                      {service.title}
                    </Link>
                  ))
                ) : (
                  <p className="px-4 py-3 text-sm text-slate-500">
                    No service found
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700 lg:inline-block"
          >
            Request Consultation
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 lg:hidden"
            aria-label="Open menu"
            type="button"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Floating Menu */}
      {mounted && menuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Dark Overlay */}
          <button
            aria-label="Close menu overlay"
            onClick={closeMenu}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            type="button"
          />

          {/* Floating Panel */}
          <div className="absolute right-4 top-4 w-[92%] max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl">
            {/* Panel Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
                <Image
                  src="/adenat_logo.png"
                  alt="ADENAT SOLUTIONS & ENTERPRISE Logo"
                  width={42}
                  height={42}
                  priority
                />

                <div>
                  <h2 className="text-sm font-extrabold leading-none text-slate-900">
                    ADENAT
                  </h2>

                  <p className="mt-1 text-[10px] font-bold text-teal-600">
                    SOLUTIONS & ENTERPRISE
                  </p>
                </div>
              </Link>

              <button
                onClick={closeMenu}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-900 transition hover:bg-slate-200"
                aria-label="Close menu"
                type="button"
              >
                <X size={22} />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="px-5 py-4">
              <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-3">
                <Search size={18} className="text-slate-400" />

                <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search services..."
                  className="ml-2 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>

              {searchTerm && (
                <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
                  {filteredServices.length > 0 ? (
                    filteredServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={closeMenu}
                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-teal-600"
                      >
                        {service.title}
                      </Link>
                    ))
                  ) : (
                    <p className="px-4 py-3 text-sm text-slate-500">
                      No service found
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Links */}
            <div className="px-5 pb-5">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-50 hover:text-teal-600"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={16} className="text-slate-400" />
                  </Link>
                ))}
              </div>

              {/* CTA Card */}
              <div className="mt-5 rounded-3xl bg-slate-950 p-5 text-white">
                <p className="text-sm font-semibold text-teal-300">
                  Need a custom solution?
                </p>

                <p className="mt-2 text-sm text-slate-300">
                  Let&apos;s discuss your software, website, automation, or
                  enterprise system project.
                </p>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="mt-4 block rounded-full bg-teal-600 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-teal-700"
                >
                  Request Consultation
                </Link>
              </div>

              <p className="mt-5 text-center text-xs text-slate-400">
                Call / WhatsApp: 0244734362
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}