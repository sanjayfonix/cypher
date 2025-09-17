"use client";

import React from "react";
import { Shield, Star, ArrowUpRight } from "lucide-react";

const programs = [
  {
    title: "Advanced Fraud Schemes",
    credit: "CE / CLE Accredited",
    description:
      "Detect evolving fraud schemes using real-world OSINT and forensic techniques.",
    rating: "4.9 (120 reviews)",
    created: "Jan 7, 2025",
    tags: ["Real case studies", "OSINT techniques", "Forensic analysis"],
  },
  {
    title: "Advanced Fraud Schemes",
    credit: "CE / CLE Accredited",
    description:
      "Detect evolving fraud schemes using real-world OSINT and forensic techniques.",
    rating: "4.9 (120 reviews)",
    created: "Jan 7, 2025",
    tags: ["Real case studies", "OSINT techniques", "Forensic analysis"],
  },
  {
    title: "Advanced Fraud Schemes",
    credit: "CE / CLE Accredited",
    description:
      "Detect evolving fraud schemes using real-world OSINT and forensic techniques.",
    rating: "4.9 (120 reviews)",
    created: "Jan 7, 2025",
    tags: ["Real case studies", "OSINT techniques", "Forensic analysis"],
  },
];

export default function EducationCards() {
  return (
    <section className="bg-black container text-white py-16  md:px-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Educational Programs
        </h2>
        <p className="text-gray-300 text-base md:text-lg">
          Industry-leading courses designed by experienced investigators and
          accredited for continuing education credits.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-700 bg-gradient-to-b from-[#0B0B0B] to-[#0F1E3D] p-6 shadow-lg hover:shadow-blue-500/30 transition"
          >
            {/* Icon */}
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 bg-black/40 mr-3">
                <Shield className="text-gray-200" size={22} />
              </div>
              <h3 className="text-lg font-semibold">{program.title}</h3>
            </div>

            {/* Badge */}
            <span className="inline-block bg-green-600 text-black text-xs font-medium px-3 py-1 rounded-full mb-4">
              Credit Type: {program.credit}
            </span>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4">{program.description}</p>

            {/* Rating + Date */}
            <div className="flex items-center text-sm text-gray-400 mb-4">
              <Star className="text-yellow-400 mr-1" size={16} />
              <span>{program.rating}</span>
              <span className="mx-2">|</span>
              <span>Created: {program.created}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {program.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Button */}
            <button className="w-full flex items-center justify-center gap-2 rounded-full border border-gray-600 py-2 text-sm font-medium hover:bg-blue-600 hover:text-white transition">
              Learn More <ArrowUpRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
