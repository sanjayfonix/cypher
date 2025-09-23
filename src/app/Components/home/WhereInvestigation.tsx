'use client'

import { BigProtectIc, BlueFbIcon, BlueWhatsappIcon, BlueXIcon, DiamondGlow, FbIcon, InstaIcon, Toparrow, WhatsappIcon, XIcon } from "@/assets/icon";
import { TravelingBorder } from "../services/CorePrincipals";
import { useState,useEffect } from "react";
import { GlassIcon } from "./GlassIcon";
import Link from "next/link";
import { GlassCard } from "./GlassCard";
import { PointerGrid } from "./GridAnimation";



export default function WhereInvestigation() {
  const [isHovering, setHovering] = useState(false);

  

  return (
    <div onMouseEnter={() => {
      setHovering(true)
      console.log('hovering')
    }} onMouseLeave={() => setHovering(false)} className="bg-black text-white px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-8 md:py-12 flex flex-col items-center overflow-hidden">
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
            
           
          <div className="absolute bottom-0 -right-6 z-30 w-[35%] max-w-[180px] aspect-square">
  <PointerGrid width="100%" height="100%" />
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
          <div className="group relative Z-30 bg-[linear-gradient(110.77deg,rgba(3,10,20,0)_0%,rgba(22,123,255,0.12)_91.47%)] border border-[#6D6D6D] rounded-3xl shadow-lg flex flex-col h-full">
            {/* Bottom radial glow */}
          


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
            <Link href={'/pages/services/social-intel'}><button className="custom-button with-border bg-transparent ml-5">
              See How It works{" "}
              <span>
                <Toparrow />
              </span>
            </button></Link>
            {/* Floating divs / glows inside Social Media Intelligence */}
            <div className={` relative flex h-full items-end justify-center mx-auto w-[80%] max-w-[367px] aspect-square`}>
              {/* Small floating circles */}

              <div className="absolute top-[23%] left-[5%] w-fit aspect-square
  flex justify-center items-center rounded-full 
  bg-[linear-gradient(180deg,rgba(3,10,20,0.2)_28.22%,rgba(21,122,255,0.2)_185.84%)] shadow-[0_0_40px_0_#157AFF99]
  transform translate-x-[80px] translate-y-[60px] opacity-0 
  transition-all duration-500 
  group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
  <GlassIcon  hoverComp={<InstaIcon/>} isHoverProperty={true} icon={<InstaIcon />} />
</div>
              <div className="absolute w-fit  aspect-square
  flex justify-center items-center rounded-full 
  bg-[linear-gradient(180deg,rgba(3,10,20,0.2)_28.22%,rgba(21,122,255,0.2)_185.84%)] shadow-[0_0_40px_0_#157AFF99]
  transform translate-y-[80px] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:top-0 top-4  left-[25%]">
                <GlassIcon hoverComp={<BlueXIcon/>} isHoverProperty={true}  icon={<XIcon />} />
              </div>
              <div className="absolute  w-fit sm:w-[60px] aspect-square
  flex justify-center items-center rounded-full 
  bg-[linear-gradient(180deg,rgba(3,10,20,0.2)_28.22%,rgba(21,122,255,0.2)_185.84%)] shadow-[0_0_40px_0_#157AFF99]
  transform translate-y-[80px] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:top-0 top-4 left-[59%] ">
                <GlassIcon  hoverComp={<BlueWhatsappIcon/>} isHoverProperty={true} icon={<WhatsappIcon />} />
              </div>
             <div className="absolute top-[23%] left-[85%] w-fit aspect-square
  flex justify-center items-center rounded-full 
  bg-[linear-gradient(180deg,rgba(3,10,20,0.2)_28.22%,rgba(21,122,255,0.2)_185.84%)] shadow-[0_0_40px_0_#157AFF99]
  transform -translate-x-[80px] translate-y-[60px] opacity-0 
  transition-all duration-500 
  group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
  <GlassIcon  hoverComp={<BlueFbIcon/>} isHoverProperty={true} icon={<FbIcon />} /></div>

              {/* Vertical rectangle */}
              <div className="overflow-hidden h-full relative flex items-end justify-center mx-auto w-[100%] aspect-square">
                {/* ...floating circles */}
               <div className="overflow-hidden h-full relative flex items-end justify-center mx-auto w-full aspect-square">
  {/* Diamond Glow */}
  <div
    className="group-hover:opacity-100 transition-all duration-1000 opacity-0 
               absolute inset-0 flex justify-center items-center 
               top-[72%] sm:top-[75%] 
               w-[calc(100%+50px)]
               -left-4  
               blur-[20px] sm:blur-[30px]"
  >
    <DiamondGlow />
  </div>

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
                 sm:shadow-[0_0_20px_0_#157AFF66]
                 lg:shadow-[0_0_40px_0_#157AFF66]
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

<TravelingBorder borderRadius={24} anticlockwise={true}/>

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
              <div className="absolute bottom-0 -right-6 z-30 w-[35%] max-w-[180px] aspect-square">
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






