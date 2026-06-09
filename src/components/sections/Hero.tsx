"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const heroSlides = [
  {
    image: "/hero-1.png",
    imageStyle: "cover",
    eyebrow: "Technology • Innovation • Solutions",
    title: "Smart Technology & Business Solutions",
    description:
      "We build custom software, websites, enterprise systems, and automation tools that help organizations operate smarter and grow faster.",
    primaryButton: "Request Consultation",
    primaryLink: "/contact",
    secondaryButton: "Explore Services",
    secondaryLink: "/services",
  },
  {
    image: "/hero-2.png",
    imageStyle: "cover",
    eyebrow: "Software • Systems • Automation",
    title: "Powerful Digital Systems for Your Business",
    description:
      "From school systems to church systems, hospital systems, CRM, ERP, and custom web applications, we design solutions that solve real problems.",
    primaryButton: "View Our Solutions",
    primaryLink: "/industry-solutions",
    secondaryButton: "See Portfolio",
    secondaryLink: "/portfolio",
  },
  {
    image: "/hero-new.png",
    imageStyle: "cover",
    eyebrow: "Consultancy • Strategy • Growth",
    title: "Consultancy for Digital Transformation",
    description:
      "We support businesses, institutions, and organizations with IT consultancy, project management, business automation, and enterprise solutions.",
    primaryButton: "Start a Project",
    primaryLink: "/contact",
    secondaryButton: "Learn About Us",
    secondaryLink: "/about",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="relative h-[680px] w-full md:h-[720px]">
        {/* Hero Background Image */}
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.title}
          fill
          priority={currentSlide === 0}
          className={`transition duration-700 ${
            slide.imageStyle === "contain"
              ? "object-contain p-16 opacity-70 md:p-24"
              : "object-cover"
          }`}
        />

        {/* Light overlays for readability without hiding the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

        {/* Floating Text Card */}
        <div className="absolute inset-0 flex items-end pb-12 md:pb-16">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="max-w-xl rounded-3xl border border-white/10 bg-slate-950/30 p-5 text-white shadow-2xl backdrop-blur-sm md:p-7">
              <p className="text-sm font-bold uppercase tracking-wide text-teal-300 md:text-base">
                {slide.eyebrow}
              </p>

              <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
                {slide.title}
              </h1>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-200 md:text-base">
                {slide.description}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={slide.primaryLink}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-teal-900/30 transition hover:-translate-y-1 hover:bg-teal-700"
                >
                  {slide.primaryButton}
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href={slide.secondaryLink}
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-slate-950"
                >
                  {slide.secondaryButton}
                </Link>
              </div>

              {/* Slide Dots */}
              <div className="mt-7 flex items-center gap-3">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      currentSlide === index
                        ? "w-10 bg-teal-400"
                        : "w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                    type="button"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Brand Label */}
        <div className="absolute bottom-6 left-6 hidden rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur md:left-12 md:block">
          ADENAT SOLUTIONS & ENTERPRISE
        </div>
      </div>
    </section>
  );
}