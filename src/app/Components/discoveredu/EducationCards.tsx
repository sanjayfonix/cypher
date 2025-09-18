"use client";

import React from "react";
import { Shield, Star, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { GlassIcon } from "../home/GlassIcon";

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

export default function EducationCards() {
  const router = useRouter();

  return (
    <section className="container text-white py-16 md:px-12">
      {/* Heading */}
      <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Our Educational Programs
        </h2>
        <p className="text-[#F1F1F1] text-base font-normal max-w-xl">
          Industry-leading courses designed by experienced investigators and
          accredited for continuing education credits.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {programs.map((program) => (
          <div
            key={program.id}
            className="rounded-4xl border border-[#6D6D6D99] bg-gradient-to-b from-[#030A14] to-[#167Bff]/40 p-6 shadow-lg hover:shadow-blue-500/30 transition"
          >
            {/* Icon */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 bg-black/40 mr-3">
                <GlassIcon size={60} icon={<Shield className="text-gray-200" size={50} />}></GlassIcon>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-medium ">{program.title}</h3>
                {/* Badge */}
                <div className="w-fit bg-[#00c781] text-black text-xs font-medium p-2 rounded-full mb-4">
                  Credit Type: {program.credit}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#A0A4AE] text-base font-normal font-inter mb-2">{program.description}</p>

            {/* Rating + Date */}
            <div className="flex items-center text-base text-[#A0A4AE] font-inter font-normal mb-4">
             <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.74158 4.10528L1.22959 4.49462C1.10292 4.50995 0.990919 4.59462 0.948919 4.72328C0.906919 4.85195 0.948919 4.98595 1.04225 5.07062C2.08625 6.02328 3.65492 7.44995 3.65492 7.44995C3.65358 7.44995 3.22425 9.52528 2.93892 10.91C2.92532 10.9726 2.93023 11.0379 2.95307 11.0978C2.9759 11.1577 3.01567 11.2097 3.06753 11.2475C3.11939 11.2852 3.1811 11.307 3.24515 11.3103C3.30919 11.3136 3.37281 11.2982 3.42825 11.266C4.65758 10.5673 6.49892 9.51662 6.49892 9.51662L9.56825 11.2666C9.68025 11.3279 9.82025 11.3266 9.92892 11.2473C9.98062 11.2096 10.0204 11.1578 10.0434 11.0981C10.0665 11.0384 10.0719 10.9733 10.0589 10.9106L9.34492 7.44995L11.9576 5.07262C12.0049 5.02958 12.0388 4.97381 12.0552 4.91199C12.0717 4.85018 12.0699 4.78494 12.0502 4.72408C12.0305 4.66323 11.9937 4.60934 11.9442 4.56888C11.8946 4.52842 11.8345 4.5031 11.7709 4.49595C10.3656 4.33862 8.25825 4.10528 8.25825 4.10528L6.80292 0.885283C6.77653 0.827049 6.73391 0.777653 6.68017 0.74301C6.62644 0.708366 6.56385 0.689941 6.49992 0.689941C6.43598 0.689941 6.3734 0.708366 6.31966 0.74301C6.26593 0.777653 6.22331 0.827049 6.19692 0.885283L4.74158 4.10528Z" fill="#FFCC00"/>
</svg>

              <span className="ml-1">{program.rating}</span>
              <span className="mx-2">|</span>
              <span>Created: {program.created}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {program.tags.map((tag, i) => (
                <span
                  key={i}
                  className="p-2 bg-[#1A293E] border border-[#989898] text-[#A0A4AE] font-medium rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Button */}
            <button
              onClick={() => router.push(`/pages/discoveredu/jobdisc/${program.id}`)}
              className="custom-button with-border bg-transparent w-full"
            >
              Learn More <ArrowUpRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
