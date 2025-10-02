
'use client';
import { BlueShield, Search2, Search2Blue, Search3, Search3Blue, Search4, Search4Blue, Shield, WaterDrop } from "@/assets/icon";
import React, { useState, useRef, useEffect } from 'react'
import Loc8Intelligence from "./Loc8Intelligence";

import { GlassIcon } from "./GlassIcon";;
import { motion } from "framer-motion";

import dynamic from "next/dynamic";





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

const Radar = dynamic(() => import("./RadarAnimation"), {
  ssr: false,
  loading: () => <div className="" /> // fallback placeholder
});





export default function GlobalThreatIntelligence() {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const timelineData = [
    { title: "Malintent", description: "Active protection against evolving digital threats" },
    { title: "Investigation", description: "Forensic examination of security incidents" },
    { title: "Risk Assessment", description: "Continuous evaluation of vulnerability exposure" },
    { title: "Data Analysis", description: "Pattern recognition across massive datasets" },
  ];

  


  return (
    <div className="bg-black container text-white flex flex-col items-center px-4 sm:px-6 md:px-12 py-8 md:py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
        Global Threat Intelligence
      </h1>

      {/* Tabs */}
 <div className="relative flex w-full mb-8 sm:mb-12 border border-gray-800 rounded-full bg-[#1F1F1FD6] overflow-hidden">
  {/* Sliding Active Indicator */}
  <div
    className={`absolute top-0 h-full w-1/2 rounded-full bg-[#1057B5] shadow-[inset_0_0_10px_#89BFFF,0_0_4px_#268AFF] transition-transform duration-500 ease-in-out`}
    style={{ transform: `translateX(${tabIndex * 100}%)` }}
  ></div>

  {/* Tab 1 */}
  <button
    onClick={() => setTabIndex(0)}
    className="flex-1 cursor-pointer relative z-10 text-white py-3 px-4 flex items-center justify-center gap-2"
  >
    <img src={"/shield-flash-line.svg"} className="w-3 h-3 sm:w-6 sm:h-6" />
    <span
      className={`text-xs sm:text-lg md:text-xl font-medium font-sans transition-colors duration-300 ${
        tabIndex === 0 ? "text-white font-semibold" : "text-gray-300"
      }`}
    >
      Threat Radar
    </span>
  </button>

  {/* Tab 2 */}
  <button
    onClick={() => setTabIndex(1)}
    className="flex-1  cursor-pointer relative z-10 text-white py-3 px-4 flex items-center justify-center gap-2"
  >
    <img src={"/Location.svg"} className="w-3 sm:w-6 h-3 sm:h-6" />
    <span
      className={`text-xs sm:text-lg md:text-xl font-medium font-sans transition-colors duration-300 ${
        tabIndex === 1 ? "text-white font-semibold" : "text-gray-300"
      }`}
    >
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

  // ✅ Safe initial value
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  const [hoverIndex, setHoverIndex] = useState(-1);

  useEffect(() => {
    // ✅ Only runs in browser
    function updateSize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    }

    updateSize(); // set once
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

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
      icon: <Shield />,
      icon2: <BlueShield />,
    },
    {
      title: "Investigation",
      desc: "Forensic examination of security incidents",
      icon: <Search2 />,
      icon2: <Search2Blue />,
    },
    {
      title: "Risk Assessment",
      desc: "Continuous evaluation of vulnerability exposure",
      icon: <Search3 />,
      icon2: <Search3Blue />,
    },
    {
      title: "Data Analysis",
      desc: "Pattern recognition across massive datasets",
      icon: <Search4 />,
      icon2: <Search4Blue />,
    },
  ];

  return (
    <div className="bg-black flex flex-wrap items-start py-10 overflow-hidden">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-0 lg:gap-20 relative">
        {[0, 1].map((col, idx) => (
          <div
            key={col}
            className="relative flex flex-col md:flex=row lg:flex-col sm:items-start lg:items-center"
          >
            {/* Vertical line starting from center of top icon */}
            {features
              .filter((_, idx) => idx % 2 === col)
              .map((feature, realInd) => (
                <div
                  key={realInd}
                  className={`flex items-start  text-white gap-4 mb-20 relative z-10 
                    ${realInd === 1 ? "translate-for-lg" : ""}`}
                >
                  <div
                    ref={lineRef}
                    className={`isHidden absolute top-[125px] left-1/7 transform -translate-x-1/2 ${
                      realInd === 1 || realInd === 3
                        ? "h-[calc(100%)]"
                        : " h-[calc(250%)]"
                    } w-0 border border-[#696969]`}
                  >
                    {/* ✅ Extracted Animation */}
                    <WaterDropAnimation
                      lineHeight={lineHeight}
                      isShort={realInd === 1 || realInd === 3}
                    />
                  </div>

                  <div className="relative  px-5 rounded-full flex items-center justify-center ">
                    <div className="flex flex-col gap-8 items-center">
                      <GlassIcon
                        size={100}
                        hoverComp={feature.icon2}
                        isHoverProperty={true}
                        icon={feature.icon}
                      />
                      {/* <div ref={lineRef} className={`block sm:hidden h-20 w-0 border border-[#696969]`}>

                     <motion.div
                      className="absolute left-1/2 -translate-x-1/2"
                      initial={{ y: -5 }}
                      animate={{ y:  lineHeight-30  }}
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


                  </div> */}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg max-w-[100%] responsive-max">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 max-w-[100%] responsive-max">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}




function WaterDropAnimation({
  lineHeight,
  isShort,
}: {
  lineHeight: number;
  isShort: boolean;
}) {
  return (
    <motion.div
      // 👇 key forces re-render when lineHeight changes
      key={lineHeight + (isShort ? "-short" : "-long")}
      className="absolute left-1/2 -translate-x-1/2"
      initial={{ y: -5 }}
      animate={{
        y: isShort ? lineHeight - 60 : lineHeight * 2.5 - 60,
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    >
      <WaterDrop />
    </motion.div>
  );
}





