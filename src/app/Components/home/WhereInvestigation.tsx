'use client'

import { BigProtectIc, BlueFbIcon, BlueInstaIcon, BlueWhatsappIcon, BlueXIcon, DiamondGlow, FbIcon, InstaIcon, Toparrow, WhatsappIcon, XIcon } from "@/assets/icon";
import { useState, useEffect } from "react";
import { GlassIcon } from "./GlassIcon";
import Link from "next/link";
import { GlassCard } from "./GlassCard";
import dynamic from "next/dynamic";
import { AltGrid } from "./GridAnimation2";



const useIsTouch = () => {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
    setIsTouch(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);
  return isTouch;
};



const TravelingBorder = dynamic(
  () => import("../services/CorePrincipals").then(mod => mod.TravelingBorder),
  { ssr: false, loading: () => null }
);

const PointerGrid = dynamic(
  () => import("./GridAnimation").then(mod => mod.PointerGrid),
  { ssr: false, loading: () => null }
);


export default function WhereInvestigation() {
  const [isHovering, setHovering] = useState(false);

  const isTouch = useIsTouch();
  const [tapped, setTapped] = useState(false);


  return (
    <div className="bg-black text-white container mx-auto px-4 flex flex-col items-center">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
          Where Investigation Meets Innovation
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 md:mb-12">
          Comprehensive expertise to solve critical challenges and drive confident decisions.
        </p>
      </div>

      {/* Two-column flex layout */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-7xl mx-auto">

        {/* Left Column */}
        <div className="flex flex-col flex-1 gap-6">
          {/* Consulting & Advisory */}
          <div className="relative bg-gradient-to-b  from-[#030A1400] to-[#167BFFB2] border border-[#6D6D6D99] p-5 sm:p-6 rounded-3xl shadow-lg flex flex-col justify-between">


            <div className="absolute bottom-0 right-0 z-30 w-[35%] max-w-[180px] aspect-square">
              {/* <AltGrid width={'100%'} isAlternativeGrid={true} height={'100%'} vertical={ [{ x: 51.143, fromY: 146.084, toY: 300.084, direction: "down" },{ x: 51.143, fromY: 146.084, toY: 300.084, direction: "down" }] }/> */}
              <PointerGrid width={'100%'} height={'100%'} />
            </div>


            <div className="flex flex-col gap-3 relative z-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans">
                Consulting & Advisory
              </h2>
              <p className="text-[#F1F1F1] text-base sm:text-lg font-medium font-sans">
                Transform complex data into your strategic advantage
              </p>
              <p className="text-[#E3E3E3] text-sm sm:text-base font-normal font-inter max-w-[28rem]">
                Leverage intelligence techniques to make informed decisions, enhance security, and mitigate risks.
              </p>
            </div>
            <Link href={'/pages/services/consulting'}><button className="mt-12 custom-button with-border bg-transparent">
              See How It works{" "}
              <span>
                <Toparrow />
              </span>
            </button>
            </Link>
          </div>

          {/* Social Media Intelligence */}
          <div onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)} className=" group relative Z-30 bg-[linear-gradient(110.77deg,rgba(3,10,20,0)_0%,rgba(22,123,255,0.12)_91.47%)] border border-[#6D6D6D] rounded-3xl shadow-lg flex flex-col h-full">
            {/* Bottom radial glow */}

            <TravelingBorder borderRadius={24} anticlockwise={true} />

            <div className="absolute inset-0  overflow-hidden flex justify-center items-end">
              <div
                className={`${isHovering ? 'opacity-100' : 'opacity-0'}  transition-all duration-1000 
               absolute inset-0 flex justify-center items-center 
               top-[80%] sm:top-[83%] 
               w-full
               left-0
               blur-[20px] sm:blur-[30px]`}
              >
                <DiamondGlow />
              </div>
            </div>
            {/* transition-all duration-1000 group-hover:opacity-100 opacity-0 */}
            <div className="p-5 sm:p-6 flex flex-col gap-2 z-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-sans">
                Social Media Intelligence
              </h2>
              <p className="text-[#E3E3E3] text-base sm:text-lg font-medium font-sans">
                Turn online data into actionable intelligence.
              </p>
              <p className="text-[#E3E3E3] text-xs sm:text-sm md:text-base font-normal font-inter">
                We extract critical insights from social media, offering real-time fraud detection and litigation support.
              </p>
            </div>
            <Link href={'/pages/services/social-intel'}><button className="custom-button relative z-10 with-border bg-transparent ml-5">
              See How It works{" "}
              <span>
                <Toparrow />
              </span>
            </button></Link>
            {/* Floating divs / glows inside Social Media Intelligence */}
            <div className={` relative flex h-full items-end justify-center mx-auto w-[80%] max-w-[367px] aspect-square`}>
              {/* Small floating circles */}

              <div
                className={`${isHovering ? 'translate-y-0 translate-x-0 opacity-100' : 'translate-x-0 translate-y-[60px] opacity-0'} absolute z-50 top-[23%] left-[5%] w-fit aspect-square
    flex justify-center items-center rounded-full 
    bg-[linear-gradient(180deg,rgba(3,10,20,0.2)_28.22%,rgba(21,122,255,0.2)_185.84%)] 
    shadow-[0_0_40px_0_#157AFF99]
    transform 
    transition-all duration-500 
`}
              >
                <GlassIcon
                  icon={<InstaIcon />}
                  hoverComp={<BlueInstaIcon />}
                  isHoverProperty={true}
                  arcLength={120}
                />
              </div>

              <div className={`absolute w-fit  aspect-square
  flex justify-center z-50 items-center rounded-full 
  bg-[linear-gradient(180deg,rgba(3,10,20,0.2)_28.22%,rgba(21,122,255,0.2)_185.84%)] shadow-[0_0_40px_0_#157AFF99]
  transform transition-all duration-500 ${isHovering ? 'translate-y-0 opacity-100' : 'translate-y-[80px] opacity-0'} sm:top-0 md:top-4 top-4  left-[25%]`}>
                <GlassIcon arcLength={120} hoverComp={<BlueXIcon />} isHoverProperty={true} icon={<XIcon />} />
              </div>
              <div className={`absolute  w-fit sm:w-[60px] aspect-square
  flex justify-center z-50 items-center rounded-full 
  bg-[linear-gradient(180deg,rgba(3,10,20,0.2)_28.22%,rgba(21,122,255,0.2)_185.84%)] shadow-[0_0_40px_0_#157AFF99]
  transform ${isHovering ? 'translate-y-0 opacity-100' : 'translate-y-[80px] opacity-0'} transition-all duration-500  sm:top-0 md:top-4 top-4 left-[59%]`}>
                <GlassIcon arcLength={120} hoverComp={<BlueWhatsappIcon />} isHoverProperty={true} icon={<WhatsappIcon />} />
              </div>
              <div className={`absolute top-[23%] left-[85%] w-fit aspect-square
  flex justify-center z-50 items-center rounded-full 
  bg-[linear-gradient(180deg,rgba(3,10,20,0.2)_28.22%,rgba(21,122,255,0.2)_185.84%)] shadow-[0_0_40px_0_#157AFF99]
  transform 
  transition-all duration-500 ${isHovering ? 'translate-y-0 translate-x-0 opacity-100' : 'translate-x-0 translate-y-[60px] opacity-0'}
  `}>
                <GlassIcon arcLength={120} hoverComp={<BlueFbIcon />} isHoverProperty={true} icon={<FbIcon />} /></div>

              {/* Vertical rectangle */}
              <div className=" h-full relative flex items-end justify-center mx-auto w-[100%] aspect-square">
                {/* ...floating circles */}
                <div className="h-full relative flex items-end justify-center mx-auto w-full aspect-square">
                  {/* Diamond Glow */}


                  {/* group-hover:opacity-100 */}
                  {/* Vertical rectangle container */}
                  <div className="overflow-hidden relative mx-auto w-[60%] sm:w-[220px] md:w-[180px] lg:w-[250px]  h-[65%] sm:h-[85%] md:h-[75%] flex flex-col justify-start">
                    <div
                      className="relative z-10 
                 w-[70%] 
                 h-[95%]
                 left-1/5 top-3 sm:top-4
                 rounded-tl-lg rounded-tr-lg
                 flex flex-col justify-start
                 backdrop-blur-[20px]
                 border-2 border-t-3 border-b-0 border-white/20
                 shadow-[0_0_10px_0_#157AFF66]
                 sm:shadow-[0_0_30px_0_#157AFF66]
                 
                 bg-[linear-gradient(180deg,rgba(3,10,20,0.2)_28.22%,rgba(21,122,255,0.2)_185.84%)]
                 before:absolute before:inset-0 
                 before:rounded-tl-lg before:rounded-tr-lg
                 before:content-[''] before:pointer-events-none before:z-[-1]"
                    >
                      {/* Notch / Speaker */}
                      <div className="w-3 sm:w-4 h-1 rounded-sm mt-2 bg-[#D9D9D9] opacity-40 self-center"></div>
                    </div>
                  </div>
                </div>

              </div>

              <div>

              </div>

            </div>


            <div>


            </div>
            <div>

            </div>

          </div>
        </div>




        {/* Right Column */}
        <div className="flex flex-col justify-between flex-1 gap-6">

          <div className="relative bg-[linear-gradient(110.77deg,rgba(3,10,20,0)_0%,rgba(22,123,255,0.12)_91.47%)] border border-[#6D6D6D] rounded-3xl shadow-lg flex flex-col h-full">
            <TravelingBorder borderRadius={24} anticlockwise={true} />
            <div className="p-5 sm:p-6 flex flex-col gap-2 z-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans">Geospatial Cellular Forensics</h2>
              <p className="text-[#E3E3E3] text-base sm:text-lg font-medium font-sans">
                Unlock the power of location-based intelligence.
              </p>
              <p className="text-[#E3E3E3] text-xs sm:text-sm md:text-base font-normal font-inter">
                Analyze mobile device data to track movement, verify alibis, and uncover hidden connections.
              </p>
            </div>
            <Link href={'/pages/services/geospatial'}><button className="custom-button with-border bg-transparent ml-5">
              See How It works{" "}
              <span>
                <img src={"/arrow-down-right.svg"} className="w-5 h-5 sm:w-6 sm:h-6 object-cover" />
              </span>
            </button>
            </Link>

            <div className="relative flex justify-center items-center w-full max-w-[400px] aspect-square mx-auto">
              {/* Animated rings */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[89%] aspect-square rounded-full border border-[#09336B80]
                    animate-zoom-fade" />

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[75%]  aspect-square rounded-full border border-[#09336BCC]
                    animate-zoom-fade"
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[60%]  aspect-square rounded-full border border-[#09336BE6]
                    animate-zoom-fade"
                />

              </div>

              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className=" w-60  opacity-50 aspect-square rounded-full blur-[30px] bg-[#157AFF80] animate-glow" />
              </div>

              {/* Inner circle wrapper (static, isolates rotation) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div
                  className="flex justify-center items-center w-[150px] sm:w-[180px] md:w-[195px] lg:w-[205px] aspect-square
                 rounded-full bg-gradient-to-b from-[#030A14] to-[#157AFF80]"
                  style={{
                    transform: "rotate(-0.47deg)",
                    padding: "8px",
                  }}
                >

                  <BigProtectIc />

                </div>
              </div>
            </div>




          </div>

          {/* Geospatial Cellular Forensics */}
          <div className="relative bg-gradient-to-b from-[#030A1400] to-[#167BFFB2] border border-[#6D6D6D99] p-5 sm:p-6 rounded-3xl shadow-lg flex flex-col justify-between h-full">
            <div className="absolute bottom-0 right-0 z-30 w-[35%] max-w-[180px] aspect-square">
              <PointerGrid width="100%" height="100%" />
            </div>

            <div className="flex flex-col gap-3 z-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans">Brand Defense</h2>
              <p className="text-[#F1F1F1] text-base sm:text-lg font-medium font-sans">
                Protect your brand from digital threats.
              </p>
              <p className="text-[#E3E3E3] text-sm sm:text-base font-normal font-inter max-w-[28rem]">
                Detect counterfeit operations, cyber threats, and reputation damage early to take proactive action.
              </p>
            </div>
            <Link href={'/pages/services/brand-defence'}><button className="custom-button with-border bg-transparent mt-12">
              See How It works{" "}
              <span>
                <img src={"/arrow-down-right.svg"} className="w-5 h-5 sm:w-6 sm:h-6 object-cover" />
              </span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}






