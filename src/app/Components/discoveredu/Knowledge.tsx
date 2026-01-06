// components/BlurCard.tsx
'use client'
import React from "react";
import { useRouter } from "next/navigation";

import { Grid, Toparrow } from "@/assets/icon";


const EmpowerTeam = () => {
  const router = useRouter();
  
  return (
    <div className="relative container mb-4 flex flex-col items-center justify-center  overflow-visible px-4">
      
      

      {/* ===== Main Card ===== */}
      <div
        className="
          relative w-full
          
          mx-auto overflow-hidden
          flex flex-col gap-6 sm:gap-10 lg:gap-[32px]
          p-4 sm:p-8 lg:p-[48px]
          rounded-[16px] border border-[#515151] bg-[#121212]
          z-20
        "
      >
        {/* First Decorative Blur Div (inside card) */}
        <div
          className="absolute blur-[80px] sm:blur-[120px] lg:blur-[160px]"
          style={{
            borderRadius: "50%",
            width: "30%",
            height: "93%",
            transform: "rotate(-110.74deg)",
            opacity: 0.4,
            background: "#1057B5",
            boxShadow: "0px 0px 80px 0px #157AFF80",
            top: "-40%",
            left: "20%",
            zIndex: -1,
          }}
        ></div>

        {/* Second Decorative Blur Div (inside card) */}
        <div
          className="absolute blur-[50px] sm:blur-[80px]"
          style={{
            width: "20%",
            height: "60%",
            transform: "rotate(90deg)",
            opacity: 0.3,
            background: "#1057B5",
            bottom: "-10%",
            right: "20%",
            borderRadius: "50%",
            zIndex: -1,
          }}
        ></div>

        {/* Content */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[44px]">
          {/* Text Section */}
          <div className="flex flex-col gap-4 text-center">
            <h1 className="font-sans font-bold text-lg sm:text-3xl lg:text-[48px] text-white leading-snug">
              Empower Your Team with Practical Intelligence <br/> Knowledge
            </h1>
            <p className="font-inter font-normal text-xs sm:text-base  text-[#A0A4AE] mx-auto text-center max-w-[95%] sm:max-w-[80%] lg:max-w-[72%]">
              Our accredited CE and CLE programs help your organization stay ahead of fraud, legal challenges, and digital threats.
            </p>
          </div>

          {/* Buttons Section */}
          <div className="flex  flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-2">
            <button onClick={() => {
              router.push('/#contact-us');
            }} className="custom-button bg-[#1057B5] with-shadow w-full sm:w-fit"
            >Book a Consultation</button>
            <button className="text-ellipsis whitespace-nowrap  custom-button with-border bg-transparent w-full sm:w-fit"



            >
              Request a Custom Program <Toparrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpowerTeam;
