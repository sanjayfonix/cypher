'use client'
import { DropDown, DropUp, MagIcon, Tick } from '@/assets/icon';
import Image from 'next/image';
import { useState } from 'react';

export default function CorePrincipals() {
  const [tabIndex, setTabIndex] = useState(-1);

  return (
    <div className="flex flex-col gap-8 p-6 sm:p-12 lg:p-20 bg-black text-white">
      {/* Heading */}
      <h1 className="font-['IBM Plex Sans'] font-bold text-[32px] sm:text-[40px] lg:text-[48px] text-center">
        Core Pillars of Consulting & Advisory
      </h1>

      {/* Custom Seminars */}
      <div className="border border-[#6D6D6D] rounded-[32px] p-6 sm:p-8 flex flex-col lg:flex-row gap-8 overflow-hidden">
        {/* Left Column */}
        <div className="flex flex-col gap-12 flex-1">
          <div className="flex flex-col gap-4">
            <h2 className="font-sans text-white font-bold text-[28px] sm:text-[32px] lg:text-[40px] leading-[1.3]">
              Custom Seminars
            </h2>
            <div className="text-[#E3E3E3] text-[1rem] font-inter font-normal max-w-[80%]">
              Tailored seminars to equip your team with the skills to detect and mitigate intelligence threats. We offer practical tools and roadmaps to help you stay ahead.
            </div>
          </div>
          <ul className="flex flex-col gap-3 font-['Inter'] text-[#E3E3E3] text-[14px] sm:text-[16px]">
            <li className="flex items-center gap-2"><Tick/> Fraud case studies and prevention strategies</li>
            <li className="flex items-center gap-2"><Tick/> Practical checklists and roadmaps</li>
            <li className="flex items-center gap-2"><Tick/> Insights into evolving intelligence threats</li>
            <li className="flex items-center gap-2"><Tick/> Sector-specific fraud use cases</li>
          </ul>
        </div>

        {/* Right Column: Dashed Semi-Circles */}
        <div className="flex-1 flex justify-center items-center relative max-w-full">
          <svg className="max-w-full" viewBox="0 0 555 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="dashedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="11.54%" stopColor="rgba(204, 204, 204, 0.3)" />
                <stop offset="100%" stopColor="rgba(3, 10, 20, 0.3)" />
              </linearGradient>
            </defs>
            <path d="M 0 249 A 277.5 277.5 0 0 1 555 249" stroke="url(#dashedGradient)" strokeWidth="2" strokeDasharray="12 12" fill="none"/>
            <path d="M 54.41 249 A 223 223 0 0 1 500.59 249" stroke="url(#dashedGradient)" strokeWidth="2" strokeDasharray="12 12" fill="none"/>
            <path d="M 101.9 249 A 176 176 0 0 1 453.1 249" stroke="url(#dashedGradient)" strokeWidth="2" strokeDasharray="12 12" fill="none"/>
            <path d="M 158.29 249 A 119 119 0 0 1 396.71 249" stroke="url(#dashedGradient)" strokeWidth="2" strokeDasharray="12 12" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Second Row: Investigative Services + Continuing Education */}
      <div className="flex flex-col sm:flex-row items-start gap-8">
        {/* Investigative Services Support */}
        <div className="border border-[#6D6D6D] rounded-[32px] p-6 sm:p-8 relative flex-1 flex flex-col gap-6">
          <div className="relative flex justify-center">
            {/* Glow Behind Fingerprint */}
            <div
              className="absolute animate-glow"
              style={{
                width: "539px",
                height: "35px",
                background: "#157AFF",
                opacity: 1.5,
                filter: "blur(90px)",
                borderRadius: "50%", // pill shape
                top: "50%",
                transform:  "translate(-50%, -50%)",  
                zIndex: 0,
              }}
            />
            <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
<div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
    style={{
      width: "120px", // orbit diameter
      height: "120px",
    }}
  >
    {/* MagIcon wrapper */}
    <div className="absolute top-0 z-50left-1/2 -translate-x-1/2">
      {/* Full lens blur */}
      <div
        className="absolute"
        style={{
           transform: "translateX(-50%)",     // adjust based on lens position in SVG
          width: "52px",   // match lens diameter
          height: "52px",
          borderRadius: "50%",
          backgroundColor: "rgba(22, 123, 255, 0.3)",
          backdropFilter: "blur(12px)",
          zIndex: -1,
        }}
      />
      
    </div>
    <MagIcon />
  </div>
  
  </div>
            <img
              src="/fingerprint.png"
              alt="fingerprint"
              className="my-10 mx-auto relative z-10 max-w-[60%]"
            />
          </div>

          <h2 className="font-sans font-bold text-[28px] sm:text-[32px] lg:text-[32px] leading-[1.3]">
            Investigative Services Support
          </h2>

          <div className="flex flex-row justify-between items-end">
            <p className="max-w-[80%] text-base font-normal text-[#F1F1F1] font-inter ">
              Our team extends your investigative capabilities with investigator-led support. We provide comprehensive intelligence services to:
            </p>
            <div
              onClick={() => setTabIndex(tabIndex === 0 ? -1 : 0)}
              className="flex relative top-2 left-2 justify-center items-center rounded-full flex-col gap-2.5 p-[9px_7px] w-8 h-8 border border-white opacity-100"
            >
              {tabIndex === 0 ? <DropUp /> : <DropDown />}
            </div>
          </div>

          {tabIndex === 0 && (
            <ul className="flex flex-col gap-3 font-['Inter'] text-[#E3E3E3] text-[14px] sm:text-[16px]">
              <li className="flex items-center gap-2"><Tick/> Uncover hidden connections and threats</li>
              <li className="flex items-center gap-2"><Tick/> Validate evidence with digital forensics</li>
              <li className="flex items-center gap-2"><Tick/> Deliver courtroom-ready reports</li>
              <li className="flex items-center gap-2"><Tick/> Support or augment your existing investigations</li>
            </ul>
          )}
        </div>

        {/* Continuing Education */}
       {/* Continuing Education */}
<div className="overflow-hidden border border-[#6D6D6D] rounded-[32px] p-6 sm:p-8 flex-1 flex flex-col gap-6 relative">
  
  {/* Glow at Top-Center */}
  <div
    className="absolute animate-glow"
    style={{
      width: "539px",
      height: "60px",           // same height as fingerprint glow
      background: "#157AFF",
      opacity: 1.2,             // strong glow
      filter: "blur(70px)",
      borderRadius: "9999px",   // pill shape
      top: "-30px",             // half of height above div top
      left: "5%",
      transform: "translateX(-50%)", // center horizontally
      zIndex: 0,
    }}
  />

  

  <div className="relative mx-auto max-w-full">
    <div className="flex justify-center items-center w-[297px] h-[286px] rounded-full border border-[#0C438C]">
      <div className="flex justify-center items-center w-[247.95px] h-[238.77px] rounded-full border border-[#0C438C]">
        <div className="relative justify-center items-center w-[201.63px] h-[194.16px] rounded-full border border-[#0C438C]" />
        <img className="absolute" src={'/book.png'} />
      </div>
    </div>
  </div>

  <h2 className="font-['IBM Plex Sans'] font-bold text-[28px] sm:text-[32px] lg:text-[40px] leading-[1.3]">
    Continuing Education
  </h2>

  <div className="flex flex-row justify-between items-end">
    <p className="max-w-[75%] text-base font-normal text-[#F1F1F1] font-inter">
      We offer accredited CE courses to ensure professionals are always prepared for emerging fraud schemes and digital investigations.
    </p>
    <div className="relative top-2 left-2 flex justify-center items-center rounded-full flex-col gap-2.5 p-[9px_7px] w-8 h-8 border border-white opacity-100">
      {tabIndex === 1 ? <DropUp /> : <DropDown />}
    </div>
  </div>
</div>

      </div>
    </div>
  );
}


