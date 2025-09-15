// components/ThreatDetectionUI.tsx
'use client';
import { Find, Graph, Health, Shield } from "@/assets/icon";
import { useState } from "react";
import Loc8Intelligence from "./Loc8Intelligence";
import Radar from "./RadarAnimation";

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  align: string;
  children?: React.ReactNode;
}

interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlobalThreatIntelligence() {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const timelineData = [
    { title: "Malintent", description: "Active protection against evolving digital threats" },
    { title: "Investigation", description: "Forensic examination of security incidents" },
    { title: "Risk Assessment", description: "Continuous evaluation of vulnerability exposure" },
    { title: "Data Analysis", description: "Pattern recognition across massive datasets" },
  ];

  const Label = ({ children, className }: LabelProps) => (
    <div className={`absolute text-xs sm:text-sm text-gray-300 ${className}`}>{children}</div>
  );

  const TimelineItem = ({ icon, title, description, className, align, children }: TimelineItemProps) => (
    <div
      style={{ alignSelf: align }}
      className={`relative flex flex-col sm:flex-row justify-start items-center sm:items-start gap-4 p-2 ${className}`}
    >
      <div className="flex flex-col items-center justify-start gap-4">
        <div className="flex justify-center items-center aspect-square min-h-[3.5rem] min-w-[3.5rem] sm:min-h-[5rem] sm:min-w-[5rem] bg-[linear-gradient(180deg,rgba(27,27,27,0.17)_28.22%,rgba(1,72,165,0.2)_185.84%)] shadow-[0_0_6.6px_3px_rgba(21,154,255,0.1)] rounded-[2.625rem]">
          {icon}
        </div>
      </div>
      <div className="flex flex-col gap-6 sm:gap-16">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg sm:text-xl text-white font-sans font-bold text-center sm:text-left">{title}</h3>
          <p className="text-sm sm:text-base font-normal text-[#989898] font-inter text-center sm:text-left">{description}</p>
        </div>
        {children}
      </div>
    </div>
  );

  const RadarChart = () => (
    <div className="relative w-[80vw] max-w-[22rem] sm:max-w-[28rem] md:max-w-[32rem] aspect-square flex items-center justify-center">
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-blue-950/20 to-transparent rounded-full"></div>

      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-blue-500/20"
          style={{ width: `${(i + 1) * 20}%`, height: `${(i + 1) * 20}%` }}
        ></div>
      ))}

      <div className="absolute w-full h-[1px] bg-blue-500/20"></div>
      <div className="absolute h-full w-[1px] bg-blue-500/20"></div>

      <div className="absolute w-full h-[1px] bg-blue-500/40 -rotate-45 scale-x-110"></div>
      <div className="absolute top-[21%] right-[21%] w-1.5 h-1.5 bg-blue-400 rounded-full"></div>

      <Label className="top-[28%] left-[8%]">Data Analysis</Label>
      <Label className="bottom-[18%] left-[18%]">Risk Assessment</Label>
      <Label className="top-[8%] right-[12%]">Investigation</Label>

      <div className="absolute flex items-center justify-center w-[38%] h-[38%]">
        <div className="absolute w-full h-full border-2 border-red-500 rounded-full animate-pulse"></div>
        <div className="bg-red-600/80 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md shadow-lg z-10 text-xs sm:text-sm md:text-base">
          Malintent
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-black text-white flex flex-col items-center px-4 sm:px-6 md:px-12 py-8 md:py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
        Global Threat Intelligence
      </h1>

      {/* Tabs */}
      <div className="flex rounded-full overflow-hidden w-full max-w-5xl mb-8 sm:mb-12 border border-gray-800">
        <button
          onClick={() => setTabIndex(0)}
          style={{
            transition: "1s ease-out",
            boxShadow:
              tabIndex === 0
                ? "0px 0px 10px 0px #89BFFF inset,0px 0px 4px 0px #268AFF"
                : "none",
            backgroundColor: tabIndex === 0 ? "#1057B5" : "#1F1F1FD6",
          }}
          className="flex-1 text-white py-3 px-4 flex items-center justify-center gap-2"
        >
          <img src={"/shield-flash-line.svg"} className="w-3 h-3 sm:w-6 sm:h-6" />
          <span className="text-xs sm:text-lg md:text-xl font-medium font-sans">
            Threat Radar
          </span>
        </button>
        <button
          onClick={() => setTabIndex(1)}
          style={{
            transition: "1s ease-out",
            boxShadow:
              tabIndex === 1
                ? "0px 0px 10px 0px #89BFFF inset,0px 0px 4px 0px #268AFF"
                : "none",
            backgroundColor: tabIndex === 1 ? "#1057B5" : "#1F1F1FD6",
          }}
          className="flex-1 text-white py-3 px-4 flex items-center justify-center gap-2"
        >
          <img src={"/Location.svg"} className="w-3 sm:w-6 h-3 sm:h-6" />
          <span className="text-xs sm:text-lg md:text-xl font-medium font-sans">
            Loc8 Tracking
          </span>
        </button>
      </div>

      {/* Description */}
      {tabIndex === 0 && (
        <div className="flex flex-col gap-2 max-w-2xl sm:max-w-3xl text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-[2rem] font-bold font-sans text-white">
            Threat Detection System
          </h2>
          <p className="text-sm sm:text-base text-[#F1F1F1] font-inter font-normal">
            Our advanced radar system continuously scans the global landscape for malintent threats and vulnerabilities, providing real-time detection of emerging risks.
          </p>
        </div>
      )}

      {tabIndex === 0 && (
        <div className="bg-black text-white font-sans flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-2 sm:px-4 md:px-8">
         <Radar/>
          {/* Timeline (Responsive Grid) */}
<div className="relative grid grid-cols-2 gap-8 md:gap-12 w-full max-w-3xl">
  {/* LEFT COLUMN */}
  <div className="relative flex flex-col items-center sm:items-start gap-8">
    {/* Vertical connector line (LEFT) */}
    <div className="hidden sm:block absolute left-1/8 -translate-x-1/2 top-1/3 bottom-0 border border-[#696969] w-0" />
    <div className="hidden sm:block absolute left-[36%] -translate-x-1/2 top-3/4 bottom-0 border border-[#696969] w-0" />
    <TimelineItem icon={<Shield />} align="flex-start" {...timelineData[0]} />
    <div className="mx-20">
      <TimelineItem icon={<Health />} align="flex-start" {...timelineData[2]} />
    </div>
  </div>

  {/* RIGHT COLUMN */}
  <div className="relative flex flex-col items-center sm:items-start gap-8">
    {/* Vertical connector line (RIGHT) */}
    <div className="hidden sm:block absolute left-1/8 -translate-x-1/2 top-1/3 bottom-0 border border-[#696969] w-0" />
    <div className="hidden sm:block absolute left-[30%] -translate-x-1/2 top-3/4 bottom-0 border border-[#696969] w-0" />
    <TimelineItem className="relative" icon={<Find />} align="flex-start" {...timelineData[1]} />
    <div className="mx-8 sm:mx-12">
      <TimelineItem className="relative" icon={<Graph />} align="flex-start" {...timelineData[3]} />
    </div>
  </div>
</div>

        </div>
      )}

      {tabIndex === 1 && <Loc8Intelligence />}
    </div>
  );
}








  
  
    





//     <div className="bg-black text-white font-sans min-h-screen w-full flex items-center justify-center p-4 sm:p-8">
//       <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-8">
        
//         {/* Left Side: Radar Chart */}
//         <div className="flex justify-center items-center">
//           <RadarChart />
//         </div>

//         {/* Right Side: Timeline */}
//         <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-24">
//             <TimelineItem {...timelineData[0]} className="sm:mt-0" />
//             <TimelineItem {...timelineData[1]} className="sm:mt-24" />
//            
//             <TimelineItem {...timelineData[3]} className="sm:mt-24" />
//         </div>

//       </div>
//     </div>
//   );
