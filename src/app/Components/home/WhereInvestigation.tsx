import { BigProtectIc, DiamondGlow, FbIcon, InstaIcon, WhatsappIcon } from "@/assets/icon";
import { XIcon } from "lucide-react";
import { TravelingBorder } from "../services/CorePrincipals";

export default function WhereInvestigation() {
  return (
    <div className="bg-black text-white px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-8 md:py-12 flex flex-col items-center overflow-hidden">
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
        <div className="flex flex-col justify-between flex-1 gap-6">
          {/* Consulting & Advisory */}
          <div className="relative bg-gradient-to-b  from-[#030A1400] to-[#167BFFB2] border border-[#6D6D6D99] p-5 sm:p-6 rounded-3xl shadow-lg flex flex-col justify-between">
            <div className="absolute bottom-0 right-0 bg-cover bg-no-repeat bg-[url('/grid2.png')] w-[12rem] sm:w-[16.16rem] aspect-[1.06/1] z-10"/>
            <div className="flex flex-col gap-3 relative z-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans">
                Consulting & Advisory
              </h2>
              <p className="text-[#F1F1F1] text-base sm:text-lg font-medium font-sans">
                Transform complex data into your strategic advantage
              </p>
              <p className="text-[#E3E3E3] text-sm sm:text-base font-normal font-inter max-w-sm">
                Leverage intelligence techniques to make informed decisions, enhance security, and mitigate risks.
              </p>
            </div>
            <button className="font-medium text-sm sm:text-base w-fit border border-[#D5D5D5] gap-2 bg-transparent text-[#E5E5E5] rounded-full pl-4 pr-2 py-2 sm:py-3 flex items-center mt-4">
              See How It works{" "}
              <span>
                <img src={"/arrow-down-right.svg"} className="w-5 h-5 sm:w-6 sm:h-6 object-cover"/>
              </span>
            </button>
          </div>

          {/* Social Media Intelligence */}
          <div className=" relative bg-[linear-gradient(110.77deg,rgba(3,10,20,0)_0%,rgba(22,123,255,0.12)_91.47%)] border border-[#6D6D6D] rounded-3xl shadow-lg flex flex-col justify-between h-full">
            {/* Bottom radial glow */}
            <TravelingBorder/>
            

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
            <button className="font-medium text-sm sm:text-base w-fit border border-[#D5D5D5] gap-2 bg-transparent text-[#E5E5E5] rounded-full pl-4 pr-2 py-2 sm:py-3 flex items-center m-5 sm:m-6">
              See How It works{" "}
              <span>
                <img src={"/arrow-down-right.svg"} className="w-5 h-5 sm:w-6 sm:h-6 object-cover"/>
              </span>
            </button>

            {/* Floating divs / glows inside Social Media Intelligence */}
            <div className="relative flex items-end justify-center mx-auto w-[80%] max-w-[367px] aspect-square">
              {/* Small floating circles */}
              
              <div className="absolute top-[20%] left-0 w-12 sm:w-[60px] aspect-square flex justify-center items-center rounded-full bg-[linear-gradient(180deg,rgba(3,10,20,0.2)_28.22%,rgba(21,122,255,0.2)_185.84%)] shadow-[0_0_40px_0_#157AFF99]">
                <InstaIcon/>  
              </div>
              <div className="absolute top-0 left-[25%] w-12 sm:w-[60px] aspect-square flex justify-center items-center rounded-full bg-[linear-gradient(180deg,rgba(3,10,20,0.2)_28.22%,rgba(21,122,255,0.2)_185.84%)] shadow-[0_0_40px_0_#157AFF99]">
                <XIcon/>
              </div>
              <div className="absolute top-0 left-[59%] w-12 sm:w-[60px] aspect-square flex justify-center items-center rounded-full bg-[linear-gradient(180deg,rgba(3,10,20,0.2)_28.22%,rgba(21,122,255,0.2)_185.84%)] shadow-[0_0_40px_0_#157AFF99]">
                <WhatsappIcon/>
              </div>
              <div className="absolute top-[20%] left-[82%] w-12 sm:w-[60px] aspect-square flex justify-center items-center rounded-full bg-[linear-gradient(180deg,rgba(3,10,20,0.2)_28.22%,rgba(21,122,255,0.2)_185.84%)] shadow-[0_0_40px_0_#157AFF99]">
                <FbIcon/>
              </div>

              {/* Vertical rectangle */}
              
           <div className="relative mx-auto w-[40%] sm:w-[153px] h-[75%] flex flex-col justify-start">
  {/* 🌟 Radial Glow (centered on rectangle, behind it, semicircle shape) */}
  <div className=" absolute translate-x-1/4 -left-1/2 -bottom-9 overflow-hidden"><DiamondGlow/></div>

  {/* Actual rectangle */}
  <div className="relative z-10 w-full h-full rounded-[5px] bg-[linear-gradient(180deg,rgba(3,10,20,0.2)_28.22%,rgba(21,122,255,0.2)_185.84%)] shadow-[0_0_80px_0_#157AFF66] flex flex-col justify-start">
    <div className="w-3 sm:w-4 h-1 rounded-sm mt-2 bg-[#D9D9D9] self-center"></div>
  </div>
</div>

              <div>
              
              </div>
            </div>
          </div>
        </div>


        

        {/* Right Column */}
        <div className="flex flex-col justify-between flex-1 gap-6">
          {/* Brand Defense */}
          <div className="relative bg-[linear-gradient(110.77deg,rgba(3,10,20,0)_0%,rgba(22,123,255,0.12)_91.47%)] border border-[#6D6D6D] rounded-3xl shadow-lg flex flex-col justify-between h-full">
            <TravelingBorder/>
            <div className="p-5 sm:p-6 flex flex-col gap-2 z-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans">Brand Defense</h2>
              <p className="text-[#E3E3E3] text-base sm:text-lg font-medium font-sans">
                Protect your brand from digital threats
              </p>
              <p className="text-[#E3E3E3] text-xs sm:text-sm md:text-base font-normal font-inter">
                Detect counterfeit operations, cyber threats, and reputation damage early to take proactive action.
              </p>
            </div>
            <button className="font-medium text-sm sm:text-base w-fit border border-[#D5D5D5] gap-2 bg-transparent text-[#E5E5E5] rounded-full pl-4 pr-2 py-2 sm:py-3 flex items-center m-5 sm:m-6">
              See How It works{" "}
              <span>
                <img src={"/arrow-down-right.svg"} className="w-5 h-5 sm:w-6 sm:h-6 object-cover"/>
              </span>
            </button>

           <div className="relative flex justify-center items-center w-full max-w-[400px] aspect-square mx-auto">
  {/* Outer Circle */}
  <div className="flex justify-center items-center relative w-[95%] aspect-square rounded-full border border-[#09336B] opacity-50">
    {/* Middle Circle */}
    <div className="flex justify-center items-center w-[85%] aspect-square rounded-full border border-[#09336B] opacity-80">
      {/* Inner Circle */}
      <div className="flex justify-center items-center w-[80%] aspect-square rounded-full border border-[#09336B] opacity-90 relative">
        
        {/* 🌟 New Glow Behind Inner Circle */}
        <div className="absolute inset-0 flex justify-center items-center -z-10">
          <div className="w-[130%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(22,123,255,0.4)_0%,rgba(22,123,255,0)_80%)] blur-[5px] animate-glow" />
        </div>

        {/* Extra Glow Circle */}
        <div className="absolute w-[35%] aspect-square rounded-full bg-[#167BFF99] blur-[1.1px] animate-glow" />
        
        {/* Center Content */}
        <div
          className="flex justify-center items-center w-1/2 aspect-square rounded-full relative z-10 animate-ripple"
          style={{
            transform: 'rotate(-0.47deg)',
            padding: '8px',
            background: 'linear-gradient(180deg, #030A14 44.67%, #157AFF 185.84%)',

            boxShadow: '0px 0px 150px #157AFF80',
          }}
        >
          <BigProtectIc />
        </div>
      </div>
    </div>
  </div>
</div>

          </div>

          {/* Geospatial Cellular Forensics */}
          <div className="relative bg-gradient-to-b from-[#030A1400] to-[#167BFFB2] border border-[#6D6D6D99] p-5 sm:p-6 rounded-3xl shadow-lg flex flex-col justify-between h-full">
            <div className="absolute bottom-0 right-0 bg-cover bg-no-repeat bg-[url('/grid2.png')] w-[12rem] sm:w-[16.16rem] aspect-[1.06/1] z-10"/>
            <div className="flex flex-col gap-3 z-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans">Geospatial Cellular Forensics</h2>
              <p className="text-[#F1F1F1] text-base sm:text-lg font-medium font-sans">
                Unlock the power of location-based intelligence.
              </p>
              <p className="text-[#E3E3E3] text-sm sm:text-base font-normal font-inter max-w-sm">
                Analyze mobile device data to track movement, verify alibis, and uncover hidden connections.
              </p>
            </div>
            <button className="font-medium text-sm sm:text-base w-fit border border-[#D5D5D5] gap-2 bg-transparent text-[#E5E5E5] rounded-full pl-4 pr-2 py-2 sm:py-3 flex items-center mt-4">
              See How It works{" "}
              <span>
                <img src={"/arrow-down-right.svg"} className="w-5 h-5 sm:w-6 sm:h-6 object-cover"/>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}






