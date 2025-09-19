"use client";

import { notFound } from "next/navigation";
import React, { useState } from "react";
import { PlusIcon } from "lucide-react";
import { GlassIcon } from "@/app/Components/home/GlassIcon";
import { ProtectIcon, StarIcon } from "@/assets/icon";

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
  const [overview, setOverview] = useState(true);

  if (!program) return notFound();

  return (
    <div className="min-h-screen bg-[#0E1014] text-white px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* LEFT CONTENT */}
        <div className="flex-1">
          {/* Header Card */}
          <div className="bg-[linear-gradient(191.01deg,rgba(3,10,20,0)_40.1%,rgba(22,123,255,0.4)_87.34%)] border border-[#6D6D6D99] rounded-2xl p-4 sm:p-6 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <GlassIcon icon={<ProtectIcon />} size={60} />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl sm:text-2xl font-bold">{program.title}</h1>
                <div className="px-3 py-1 rounded-full bg-[#00C781] flex flex-wrap text-xs sm:text-sm">
                  <span className="font-medium text-black">Credit Type:</span>
                  <span className="ml-1 text-black">{program.credit}</span>
                </div>
              </div>
            </div>
            <p className="text-sm sm:text-base mt-4 text-[#A0A4AE]">{program.description}</p>
            <div className="flex flex-wrap gap-2 mt-2 items-center text-sm sm:text-base">
              <StarIcon /> 
              <span className="text-[#A0A4AE]">{program.rating}</span>
              <span className="mx-2 text-[#A0A4AE]">|</span>
              <span className="text-[#A0A4AE]">Created: {program.created}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {program.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#1A293E] border border-[#989898] text-xs sm:text-sm px-3 py-1 rounded-full text-[#A0A4AE]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Overview Section */}
          <div className="mt-6 sm:mt-8">
            <div className="border-b border-blue-500"></div>
            <div className="flex justify-between mt-4 items-center">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold">Overview</h2>
              {overview ? (
                <div onClick={() => setOverview(false)} className="cursor-pointer w-[33px] h-[3px] bg-white"></div>
              ) : (
                <PlusIcon className="cursor-pointer" size={30} onClick={() => setOverview(true)} />
              )}
            </div>

            {overview && (
              <>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-white">
                  A memorable presentation can make you the go-to advisor in your field...
                </p>
                <p className="mt-4 text-sm sm:text-base font-semibold">Learning Objectives:</p>
                <ul className="list-decimal list-inside mt-4 space-y-2 text-sm sm:text-base">
                  <li>Identify and overcome the most common mistakes...</li>
                  <li>Develop a clear, compelling core message...</li>
                  <li>Craft vivid stories, metaphors and examples...</li>
                  <li>Create visually compelling slides that enhance...</li>
                  <li>Master the key presentation techniques...</li>
                </ul>
              </>
            )}
          </div>

          {/* Credits Section */}
          <div className="border-b border-blue-500 mt-6 sm:mt-8"></div>
          <div className="mt-6">
            <div onClick={() => setOpenCredits(!openCredits)} className="flex justify-between items-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">Credits</span>
              {openCredits ? (
                <div className="cursor-pointer w-[33px] h-[3px] bg-white"></div>
              ) : (
                <PlusIcon className="cursor-pointer" size={30} onClick={() => setOpenCredits(true)} />
              )}
            </div>

            <div className={`transition-all duration-300 overflow-hidden ${openCredits ? "max-h-[1000px]" : "max-h-0"}`}>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full border border-[#373737] rounded-lg bg-[#1E1E1E]">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 bg-[#09346B] text-xs sm:text-base text-white text-left">Credit States</th>
                      <th className="py-2 px-4 bg-[#09346B] text-xs sm:text-base text-white text-left">Status</th>
                      <th className="py-2 px-4 bg-[#09346B] text-xs sm:text-base text-white text-left">Credits</th>
                      <th className="py-2 px-4 bg-[#09346B] text-xs sm:text-base text-white text-left">Until</th>
                    </tr>
                  </thead>
                  <tbody>
                    {credits.map((row, i) => (
                      <tr key={i} className="border-t border-[#373737] hover:bg-[#262B34]">
                        <td className="p-3 text-xs sm:text-sm">{row.state}</td>
                        <td className="p-3 text-xs sm:text-sm" style={{ color: row.status === "Approved" ? "#00C781" : "#FF3B30" }}>
                          {row.status}
                        </td>
                        <td className="p-3 text-xs sm:text-sm text-white">{row.credits}</td>
                        <td className="p-3 text-xs sm:text-sm text-white">{row.until}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-full lg:w-[320px] bg-[#030A14] border border-[#6D6D6D] rounded-2xl p-6 flex flex-col gap-4">
          <div className="w-full h-[200px] sm:h-[300px] bg-[#D9D9D9] rounded-lg"></div>
          <div>
            <div className="flex justify-between items-center">
              <p className="text-lg sm:text-2xl text-[#A0A4AE]">Course Price</p>
              <p className="text-white font-bold text-lg sm:text-2xl">$79</p>
            </div>
            <ul className="mt-2 text-xs sm:text-base text-[#A0A4AE] space-y-1">
              <li>• Instant Certificate Upon Completion</li>
              <li>• Mobile, Desktop and Laptop Access</li>
              <li>• Money-Back Guarantee</li>
            </ul>
          </div>
          <button className="custom-button with-shadow bg-[#1057B5]">Get this course</button>
          <button className="custom-button with-border bg-transparent">Try it with free trial</button>
        </div>
      </div>
    </div>
  );
}
