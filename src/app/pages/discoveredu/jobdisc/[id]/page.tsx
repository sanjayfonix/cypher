"use client";

import { notFound } from "next/navigation";
import React, { useState } from "react";
import { CheckCircle, XCircle, ChevronDown, ChevronUp } from "lucide-react";

const programs = [
  {
    id: 1,
    slug: "advanced-fraud-schemes",
    title: "Advanced Fraud Schemes",
    credit: "CE / CLE Accredited",
    description:
      "Detect evolving fraud schemes using real-world OSINT and forensic techniques.",
    rating: "4.9 (120 reviews)",
    created: "Jan 7, 2025",
    tags: ["Real case studies", "OSINT techniques", "Forensic analysis"],
  },
  {
    id: 2,
    slug: "cybercrime-investigation",
    title: "Cybercrime Investigation",
    credit: "CE / CLE Accredited",
    description:
      "Master cybercrime detection with OSINT and advanced investigation techniques.",
    rating: "4.8 (98 reviews)",
    created: "Feb 15, 2025",
    tags: ["Cybersecurity", "Dark web", "Case studies"],
  },
  {
    id: 3,
    slug: "financial-forensics",
    title: "Financial Forensics",
    credit: "CE / CLE Accredited",
    description:
      "Investigate financial frauds and laundering with forensic auditing skills.",
    rating: "4.7 (76 reviews)",
    created: "Mar 5, 2025",
    tags: ["Auditing", "Forensic tools", "Fraud detection"],
  },
];

const credits = [
  { state: "Alabama CLE", status: "Approved", credits: "1.0 General", until: "22 Jan 2022" },
  { state: "Alabama CLE", status: "Approved", credits: "1.0 General", until: "20 Jan 2022" },
  { state: "Alabama CLE", status: "Approved", credits: "1.0 General", until: "24 Jan 2022" },
  { state: "Alabama CLE", status: "Approved", credits: "1.0 General", until: "26 Jan 2022" },
  { state: "Alabama CLE", status: "Not Eligible", credits: "1.0 General", until: "18 Jan 2022" },
  { state: "Alabama CLE", status: "Approved", credits: "1.0 General", until: "28 Jan 2022" },
  { state: "Alabama CLE", status: "Approved", credits: "1.0 General", until: "16 Jan 2022" },
];

export default function ProgramPage({ params }: any) {
  const programId = Number(params.id);
  const program = programs.find((p) => p.id === programId);
  const [openCredits, setOpenCredits] = useState(true);

  if (!program) return notFound();

  return (
    <div className="min-h-screen bg-[#0E1014] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* LEFT CONTENT */}
        <div className="flex-1">
          {/* Header Card */}
          <div className="bg-[linear-gradient(191.01deg,rgba(3,10,20,0)_40.1%,rgba(22,123,255,0.4)_87.34%)] border border-[#6D6D6D99] rounded-2xl p-6 shadow-lg">
            <h1 className="text-3xl font-bold">{program.title}</h1>
            <p className="mt-1 text-sm text-[#9BA3B4]">{program.credit}</p>
            <p className="mt-4 text-base text-[#D2D8E4]">{program.description}</p>
            <p className="text-sm text-[#9BA3B4] mt-2">
              ⭐ {program.rating} • Created: {program.created}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {program.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#202530] text-sm px-3 py-1 rounded-full text-[#B0BAC5]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold border-b border-[#2C313A] pb-2">
              Overview
            </h2>
            <p className="mt-4 text-[#B0BAC5] leading-relaxed">
              A memorable presentation can make you the go-to advisor in your field.
              But too many legal presentations are dry, inaccessible, and forgettable,
              leaving audiences overwhelmed and uninspired...
            </p>
            <ul className="list-decimal list-inside mt-4 text-[#D2D8E4] space-y-2">
              <li>Identify and overcome the most common mistakes...</li>
              <li>Develop a clear, compelling core message...</li>
              <li>Craft vivid stories, metaphors and examples...</li>
              <li>Create visually compelling slides that enhance...</li>
              <li>Master the key presentation techniques...</li>
            </ul>
          </div>

          {/* Credits Accordion */}
          <div className="mt-10">
            <button
              onClick={() => setOpenCredits(!openCredits)}
              className="w-full flex justify-between items-center bg-[#1B1E24] px-5 py-4 rounded-xl hover:bg-[#22262F] transition"
            >
              <span className="text-lg font-semibold">Credits</span>
              {openCredits ? (
                <ChevronUp className="w-5 h-5 text-[#9BA3B4]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#9BA3B4]" />
              )}
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                openCredits ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full bg-[#1B1E24] rounded-xl overflow-hidden">
                  <thead className="bg-[#22262F] text-[#B0BAC5]">
                    <tr>
                      <th className="text-left p-4">Credit States</th>
                      <th className="text-left p-4">Status</th>
                      <th className="text-left p-4">Credits</th>
                      <th className="text-left p-4">Earn credit until</th>
                    </tr>
                  </thead>
                  <tbody>
                    {credits.map((row, index) => (
                      <tr
                        key={index}
                        className="border-t border-[#2C313A] hover:bg-[#262B34] transition"
                      >
                        <td className="p-4">{row.state}</td>
                        <td className="p-4 flex items-center gap-2">
                          {row.status === "Approved" ? (
                            <CheckCircle className="text-green-400 w-4 h-4" />
                          ) : (
                            <XCircle className="text-red-400 w-4 h-4" />
                          )}
                          <span>{row.status}</span>
                        </td>
                        <td className="p-4">{row.credits}</td>
                        <td className="p-4">{row.until}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-full h-fit lg:w-100 bg-[#030A14] border border-[#6D6D6D] rounded-2xl p-8 shadow-md flex flex-col gap-2">
          <div className="w-full h-[347px] bg-[#D9D9D9] rounded-lg">

          </div>
          <div>
            <div className="flex justify-between"><p className="text-2xl font-medium font-inter text-[#A0A4AE]">Course Price</p><p className="text-white font-bold text-2xl font-inter">$79</p></div>
            <ul className="text-base font-normal font-inter text-[#A0A4AE] mt-2 space-y-1">
              <li>• Instant Certificate Upon Completion</li>
              <li>• Mobile, Desktop and Laptop Access</li>
              <li>• Money-Back Guarantee</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <button className="custom-button with-shadow bg-[#1057B5]">
              Get this course
            </button>
            <button className="custom-button with-border bg-transparent">
              Try it with free trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
