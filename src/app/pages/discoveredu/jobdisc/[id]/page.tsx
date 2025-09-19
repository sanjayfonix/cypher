"use client";

import { notFound } from "next/navigation";
import React, { useState } from "react";
import { CheckCircle, XCircle, ChevronDown, ChevronUp, PlusIcon,   } from "lucide-react";
import { GlassIcon } from "@/app/Components/home/GlassIcon";
import { ProtectIcon, Shield,StarIcon } from "@/assets/icon";

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
    <div className="min-h-screen bg-[#0E1014] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* LEFT CONTENT */}
        <div className="flex-1">
          {/* Header Card */}
          <div className="bg-[linear-gradient(191.01deg,rgba(3,10,20,0)_40.1%,rgba(22,123,255,0.4)_87.34%)] border border-[#6D6D6D99] rounded-2xl p-6 shadow-lg">
            <div className="flex gap-4">
              <GlassIcon icon={<ProtectIcon/>} size={60}/>
              <div className="flex flex-col gap-2 items-start">
              <h1 className="text-2xl font-sans font-bold text-white">{program.title}</h1>
              <div className="p-2 rounded-full bg-[#00C781] flex"><div className="text-xs font-medium font-sans text-black">Credit Type:</div><div className="font-sans text-black text-xs font-normal"> sCredit Type: CE / CLE Accredited</div></div>
              </div>
              </div>
            <p className="text-base mt-6 text-[#A0A4AE]">{program.description}</p>
           <div className="flex gap-2 mt-2 items-center">
              <StarIcon/> <span className="text-base font-inter font-normal text-[#A0A4AE]">{program.rating}</span><span className="ml-2 text-base font-inter font-normal text-[#A0A4AE]">{`|`}</span><span className="ml-2 text-base font-inter font-normal text-[#A0A4AE]">Created: {program.created}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {program.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#1A293E] border border-[#989898] text-xs p-2 rounded-full text-[#A0A4AE] font-sans font-normal"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="mt-8">
            <div className="h-0 w-full border-[0.2px] border-blue-500"></div>
            <div className="flex justify-between mt-4 items-center">
            <h2 className=" lg:text-5xl md:text-4xl text-3xl font-bold font-sans pb-2">
              Overview
            </h2>
            {overview===true?<div onClick={()=>setOverview(false)} className="w-[33px] h-[3.6666667461395264px] bg-white"></div>:<PlusIcon size={33} color="white" onClick={()=>setOverview(true)}/>}
            </div>
            {overview && <p className="mt-4 text-[#FFFFFF] leading-relaxed font-inter font-normal text-base">
              A memorable presentation can make you the go-to advisor in your field.
              But too many legal presentations are dry, inaccessible, and forgettable,
              leaving audiences overwhelmed and uninspired...
            </p>}
            {overview &&<p className="mt-4 text-white font-inter font-normal text-base">Learning Objectives:</p>}
            {overview && <ul className="list-decimal font-inter font-normal text-base list-inside mt-4 text-[#FFFFFF] space-y-2">
              <li>Identify and overcome the most common mistakes...</li>
              <li>Develop a clear, compelling core message...</li>
              <li>Craft vivid stories, metaphors and examples...</li>
              <li>Create visually compelling slides that enhance...</li>
              <li>Master the key presentation techniques...</li>
            </ul>}
          </div>

          <div className="h-0 w-full border-[0.2px] border-blue-500 mt-8"></div>
          <div className="mt-[30px]">
            <div
              onClick={() => setOpenCredits(!openCredits)}
              className="w-full flex justify-between items-center bg-transparent transition"
            >
              <span className="text-5xl font-sans font-bold">Credits</span>
               {openCredits===true?<div onClick={()=>setOpenCredits(false)} className="w-[33px] h-[3.6666667461395264px] bg-white"></div>:<PlusIcon size={33} color="white" onClick={()=>setOpenCredits(true)}/>}
            </div>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                openCredits ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full border-[#373737] border shadow-[0px_1px_2px_0px_#1018280F] bg-[#1E1E1E] rounded-lg overflow-hidden">
                  
                  <thead className=" text-[#B0BAC5]">
                    <div className="p-4 bg-[#1E1E1E] text-lg font-medium text-white">Close all credits available</div>
                    <tr>
                      <th className="text-left py-2 px-4 bg-[#09346B] text-base font-medium font-inter text-white">Credit States</th>
                      <th className="text-left py-2 px-4 bg-[#09346B] text-base font-medium font-inter text-white">Status</th>
                      <th className="text-left py-2 px-4 bg-[#09346B] text-base font-medium font-inter text-white">Credits</th>
                      <th className="text-left py-2 px-4 bg-[#09346B] text-base font-medium font-inter text-white">Earn credit until</th>
                    </tr>
                  </thead>
                  <tbody>
                    {credits.map((row, index) => (
                      <tr
                        key={index}
                        className="border-t border-[#373737] hover:bg-[#262B34] transition"
                      >
                        <td className="p-4 text-sm font-inter font-normal">{row.state}</td>
                        <td className="p-4 flex items-center gap-2">
                          
                          <span className="text-sm font-inter font-normal" style={{color:row.status==='Approved'?'#00C781':'#FF3B30'}}>{row.status}</span>
                        </td>
                        <td className="p-4 text-white text-sm font-inter font-normal">{row.credits}</td>
                        <td className="p-4 text-white text-sm font-inter font-normal">{row.until}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="h-0 mt-8 w-full border-[0.2px] border-blue-500"></div>
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
