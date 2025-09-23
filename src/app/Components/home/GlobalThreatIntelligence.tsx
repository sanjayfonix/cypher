
'use client';
import { BlueShield, FallDownIcon, Find, Graph, Health, Search2, Search2Blue, Search3, Search3Blue, Search4, Search4Blue, Shield } from "@/assets/icon";
import React, { useState, useRef, useEffect } from 'react'
import Loc8Intelligence from "./Loc8Intelligence";
import Radar from "./RadarAnimation";
import { GlassIcon } from "./GlassIcon";
import { TravelingBorder } from "../services/CorePrincipals";
import { motion } from "framer-motion";
import { li } from "framer-motion/client";





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
      <div className="flex rounded-full overflow-hidden w-full mb-8 sm:mb-12 border border-gray-800">
        <button
          onClick={() => setTabIndex(0)}
          style={{
            cursor: 'pointer',
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
            cursor: 'pointer',
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
            Cellular Intelligence
          </span>
        </button>
      </div>

      {/* Description */}
      {tabIndex === 0 && (
        <div className="flex flex-col gap-2 max-w-2xl sm:max-w-3xl items-center text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-[2rem] font-bold font-sans text-white">
            Threat Detection System
          </h2>
          <p className="text-sm sm:text-base max-w-[80%] text-center text-[#F1F1F1] font-inter font-normal">
            Our advanced radar system continuously scans the global landscape for malintent threats and vulnerabilities, providing real-time detection of emerging risks.
          </p>
        </div>
      )}

      {tabIndex === 0 && (
    
        <div className="bg-black text-white font-sans flex flex-col change-flex items-center justify-center gap-8 lg:gap-12">
      <Radar/>
      <SecurityFeatures /> 
        </div>

      )}

      {tabIndex === 1 && <Loc8Intelligence />}
    </div>
  );
}

function SecurityFeatures() {


  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(80);
  const [hoverIndex,setHoverIndex]=useState(-1);

  useEffect(() => {
    if (!lineRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.height) {
          setLineHeight(entry.contentRect.height);
        }
      }
    });

    observer.observe(lineRef.current);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Malintent",
      desc: "Active protection against evolving digital threats",
      icon: <Shield/>,
      icon2:<BlueShield/>
    },
    {
      title: "Investigation",
      desc: "Forensic examination of security incidents",
      icon: <Search2 />,
      icon2:<Search2Blue/>
    },
    {
      title: "Risk Assessment",
      desc: "Continuous evaluation of vulnerability exposure",
      icon: <Search3 />,
      icon2:<Search3Blue/>
    },
    {
      title: "Data Analysis",
      desc: "Pattern recognition across massive datasets",
      icon: <Search4 />,
      icon2:<Search4Blue/>
    },
  ];

  return (
    <div className="bg-black flex flex-wrap items-start py-10 overflow-hidden">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 sm:gap-0 lg:gap-20 relative">
        {[0, 1].map((col, idx) => (
          <div key={col} className="relative flex flex-col sm:flex-row  lg:flex-col sm:items-start md:items-center">
            {/* Vertical line starting from center of top icon */}


            {features
              .filter((_, idx) => idx % 2 === col)
              .map((feature, realInd) => (
                <div
                  key={realInd}
                  className={`flex items-start  text-white gap-4 mb-20 relative z-10 
                    ${realInd === 1 ? "translate-for-lg" : ""}`}
                >
                  <div ref={lineRef} className={`hidden lg:block absolute top-[125px] left-1/7 transform -translate-x-1/2 ${realInd === 1 || realInd === 3 ? 'h-[calc(100%)]' : ' h-[calc(250%)]'} w-0 border border-[#696969]`}>

                     <motion.div
                      className="absolute left-1/2 -translate-x-1/2"
                      initial={{ y: -5 }}
                      animate={{ y: realInd === 1 || realInd === 3 ? lineHeight - 50 : lineHeight * 2.5 - 50 }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                      }}
                    >
                   <div className="relative w-[24px] h-[60px]">
   
      <div
        className="
          absolute inset-0
          bg-gradient-to-b from-[#006EFF] to-[#093C80]
          [clip-path:polygon(50%_0%,25%_80%,40%_100%,60%_100%,75%_80%)]
          shadow-[0_2px_4px_rgba(0,110,255,0.5),0_4px_6px_rgba(9,60,128,0.5)]
        "
      />
    </div>
                    </motion.div>


                  </div>

                  
                  <div className="relative  px-5 rounded-full flex items-center justify-center ">
                    <div>
                    <GlassIcon size={100} hoverComp={feature.icon2} isHoverProperty={true} icon={feature.icon} />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg max-w-[50%]">{feature.title}</h3>
                    <p className="text-gray-400 max-w-[50%] md:max-w-[70%]">{feature.desc}</p>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}







