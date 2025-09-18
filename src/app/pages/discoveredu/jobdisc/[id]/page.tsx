"use client";

import { Toparrow } from "@/assets/icon";
import { log } from "console";
import { notFound } from "next/navigation";
import React, { useState } from "react";

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

// ✅ Accordion sections (you can modify content here)
const sections = [
  {
    title: "Job Description",
    content: (
      <div className="space-y-4 text-white">
        <p className="text-lg font-semibold">Project Role : Application Lead</p>
        <p className="text-base">
          Project Role Description : Lead the effort to design, build and configure
          applications, acting as the primary point of contact.
        </p>
        <p className="text-base">
          Must have skills : SAP FI S/4HANA Accounting
        </p>
        <p className="text-base">Good to have skills : NA</p>
        <p className="text-base">
          Minimum 5 year(s) of experience is required
        </p>
        <p className="text-base">
          Educational Qualification : 15 years full time education
        </p>

        <p className="text-lg font-semibold">Summary:</p>
        <p className="text-base">
          As an Application Lead, you will lead the effort to design, build, and
          configure applications, acting as the primary point of contact. Your
          typical day will involve collaborating with various teams to ensure that
          application requirements are met, overseeing the development process, and
          providing guidance to team members. You will also engage in problem-solving
          activities, ensuring that the applications align with business objectives
          and user needs, while maintaining a focus on quality and efficiency
          throughout the project lifecycle.
        </p>

        <p className="text-lg font-semibold">Roles & Responsibilities:</p>
        <p className="text-base">
          - Expected to be an SME. <br />
          - Collaborate and manage the team to perform. <br />
          - Responsible for team decisions. <br />
          - Engage with multiple teams and contribute on key decisions. <br />
          - Provide solutions to problems for their immediate team and across multiple
          teams. <br />
          - Facilitate knowledge sharing sessions to enhance team capabilities. <br />
          - Monitor project progress and ensure timely delivery of milestones.
        </p>

        <p className="text-lg font-semibold">Professional & Technical Skills:</p>
        <p className="text-base">
          - Must To Have Skills: Proficiency in SAP FI S/4HANA Accounting. <br />
          - Strong understanding of financial accounting principles and practices.{" "}
          <br />
          - Experience with integration of SAP modules and third-party applications.{" "}
          <br />
          - Ability to analyze business requirements and translate them into technical
          specifications. <br />
          - Familiarity with SAP reporting tools and financial analysis.
        </p>

        <p className="text-lg font-semibold">Additional Information:</p>
        <p className="text-base">
          The candidate should have minimum 5 years of experience in SAP FI S/4HANA
          Accounting.
        </p>
      </div>

    ),
  },
  {
    title: "Qualification",
    content: <p>Minimum 5 years of investigative or forensic experience.</p>,
  },
  {
    title: "Locations",
    content: <p>Available Online & Onsite (Navi Mumbai, Delhi, Bangalore)</p>,
  },
  {
    title: "Additional Information",
    content: (
      <p>
        Equal Employment Opportunity Statement
        All employment decisions shall be made without regard to age, race, creed, color, religion, sex, national origin, ancestry, disability status, veteran status, sexual orientation, gender identity or expression, genetic information, marital status, citizenship status or any other basis as protected by federal, state, or local law.
        Please read Accenture’s  for more information on how we process your data during the Recruiting and Hiring process.
      </p>
    ),
  },
  {
    title: "About Accenture",
    content: (
      <div>
        <p>
          We work with one shared purpose: to deliver on the promise of technology and human ingenuity. Every day, more than 775,000 of us help our stakeholders continuously reinvent. Together, we drive positive change and deliver value to our clients, partners, shareholders, communities, and each other.
          We believe that delivering value requires innovation, and innovation thrives in an inclusive and diverse environment. We actively foster a workplace free from bias, where everyone feels a sense of belonging and is respected and empowered to do their best work.
        </p>
        <p>
          At Accenture, we see well-being holistically, supporting our people’s physical, mental, and financial health. We also provide opportunities to keep skills relevant through certifications, learning, and diverse work experiences. We’re proud to be consistently recognized as one of the World’s Best Workplaces™.
        </p>
      </div>
    ),
  },
  {
    title: "Important Notice",
    content: (
      <p>
        We have been alerted to the existence of fraudulent messages asking job seekers to set up payment to cover various costs associated with establishing employment at Accenture. No one is ever required to pay for employment at Accenture. If you are contacted by someone asking for payment, please do not respond, and contact us at immediately.
      </p>
    ),
  },
];

export default function ProgramPage({ params, searchParams }: any) {
  const programId = Number(params.id);
  const program = programs.find((p) => p.id === programId);
  console.log("job page is call");

  if (!program) return notFound();

  // Accordion state
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleSection = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="container mx-auto py-16 text-white">
      {/* ===== Your Existing Code ===== */}
      <h1 className="text-[60px] font-bold mb-4">{program.title}</h1>
      <p className="text-gray-400 mb-2">Credit: {program.credit}</p>
      <p className="text-gray-300 mb-6">{program.description}</p>
      <p className="text-sm text-gray-400">Created on: {program.created}</p>
      <div className="flex flex-wrap gap-2 mt-4 mb-10">
        <div className="hidden md:flex items-center gap-4 md:gap-2">
          <button
            className="min-w-[160px] text-sm custom-button with-shadow bg-[#1057B5]">

            Apply for this job

          </button>
          <button
            className="hidden lg:block min-w-[130px] custom-button with-border bg-transparent "
          >
            Share
            <Toparrow />
          </button>

        </div>
      </div>

      {/* ===== Added Accordion Code ===== */}
      <div className="flex flex-col gap-[30px]">
        {sections.map((section, index) => (
          <div
            key={index}
            className="border-t  border-[#167BFF]  overflow-hidden"
          >
            {/* Header */}
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left "
            >
              <span className="font-bold text-[48px]">{section.title}</span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            {/* Content */}
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-300 bg-black/40">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
