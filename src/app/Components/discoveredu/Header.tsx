'use client'

import { Toparrow } from "@/assets/icon";

interface ButtonProps {
  onClickConsult: () => void;
}

export const TopBanner = () => {
  return (
    <div className="relative w-full bg-[url('/grid.png')] bg-no-repeat bg-cover bg-center p-6 sm:p-12 md:p-16 lg:p-20 overflow-hidden flex flex-col items-center justify-start">

      {/* Quarter Blur - Top Left */}
      <div
        className="absolute pointer-events-none -z-10 animate-glow"
        style={{
          width: "300px",
          height: "200px",
          top: "-100px",
          left: "-150px",
          background: "#167BFF",
          opacity: 0.5,
          filter: "blur(50px)",
          borderRadius: "50%",
          transform: "rotate(-180deg)",
        }}
      />

      {/* Quarter Blur - Top Right */}
      <div
        className="absolute pointer-events-none -z-10 animate-glow"
        style={{
          width: "300px",
          height: "200px",
          top: "-100px",
          right: "-150px",
          background: "#167BFF",
          opacity: 0.5,
          filter: "blur(50px)",
          borderRadius: "50%",
          transform: "rotate(-180deg)",
        }}
      />

      {/* Content */}
      <div className="flex bg-transparent flex-col items-center justify-start gap-4 z-10 text-center max-w-[95%] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1200px]">
        <p className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-sans">
          Advance Your Expertise with<br/> Accredited CE & CLE Programs
        </p>

        <p className="text-xs sm:text-sm md:text-base lg:text-[1rem] text-[#F1F1F1] max-w-full md:max-w-[53%] sm:max-w-[80%]">
          Stay ahead of emerging risks with ethical, investigator-led courses designed for insurance carriers, legal professionals, corporate leaders, and investigators. Earn CE/CLE credits while learning actionable intelligence techniques.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 w-full sm:w-auto items-center justify-center">
          <button className="custom-button with-shadow bg-[#1057B5] w-full sm:w-auto">
            Explore Courses
          </button>
          <button className="custom-button with-border bg-transparent w-full sm:w-auto">
            Request a Custom Program <Toparrow />
          </button>
        </div>
      </div>
    </div>
  );
};
