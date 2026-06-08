import Link from "next/link";
import {
  Phone,
  Camera,
  Building2,
  User,
  MessageSquare,
  BriefcaseBusiness,
  Send,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <p className="font-semibold text-teal-600">Contact Us</p>

            <h1 className="mt-3 text-4xl font-bold text-slate-900">
              Let&apos;s Discuss Your Next Project
            </h1>

            <p className="mt-5 max-w-2xl text-slate-600">
              Contact ADENAT SOLUTIONS & ENTERPRISE for software development,
              website development, school systems, church systems, hospital
              systems, business automation, and consultancy services.
            </p>

            <div className="mt-8 grid gap-4">
              <Link
                href="https://wa.me/233244734362"
                target="_blank"
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                  <Phone size={24} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Call / WhatsApp</p>
                  <p className="font-bold text-slate-900">0244734362</p>
                </div>
              </Link>

              <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-700">
                  <Camera size={24} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Instagram</p>
                  <p className="font-bold text-slate-900">ADENAT SOLUTIONS</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <Building2 size={24} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Company</p>
                  <p className="font-bold text-slate-900">
                    ADENAT SOLUTIONS & ENTERPRISE
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="grid gap-5">
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <div className="mt-2 flex items-center gap-3 rounded-lg border border-slate-300 px-4 py-3 focus-within:border-teal-600">
                  <User size={20} className="text-slate-400" />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Phone Number
                </label>

                <div className="mt-2 flex items-center gap-3 rounded-lg border border-slate-300 px-4 py-3 focus-within:border-teal-600">
                  <Phone size={20} className="text-slate-400" />
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Service Needed
                </label>

                <div className="mt-2 flex items-center gap-3 rounded-lg border border-slate-300 px-4 py-3 focus-within:border-teal-600">
                  <BriefcaseBusiness size={20} className="text-slate-400" />
                  <select className="w-full bg-white outline-none">
                    <option>Select a service</option>
                    <option>Software Development</option>
                    <option>Website Development</option>
                    <option>School Management System</option>
                    <option>Church Management System</option>
                    <option>Hospital Management System</option>
                    <option>Business Automation</option>
                    <option>Project Consultancy</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Project Description
                </label>

                <div className="mt-2 flex items-start gap-3 rounded-lg border border-slate-300 px-4 py-3 focus-within:border-teal-600">
                  <MessageSquare size={20} className="mt-1 text-slate-400" />
                  <textarea
                    rows={5}
                    placeholder="Briefly describe your project"
                    className="w-full resize-none outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700"
              >
                <Send size={18} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}