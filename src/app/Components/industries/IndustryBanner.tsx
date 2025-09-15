import { PointerGlow, ProtectGlowIcon } from "@/assets/icon";
import Button from "../common/Button";
import AnimatedPath from "./AnimatedBanner";

export const IndustryBanner = () => {
  return (
    <>
    <div className="w-full  flex flex-col gap-8 px-4 lg:px-20 md:px-12 py-5">
      {/* Inner div with relative positioning */}
      <div className="relative w-full md:w-[85%] flex flex-col gap-4">
        {/* First text */}
        <h1 className="font-sans font-bold  text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
          Stop Fraud. Protect Profits. Strengthen Trust.
        </h1>

        {/* Second text */}
        <p className="font-inter font-normal max-w-[93vw] md:max-w-[800px] text-sm sm:text-base md:text-lg text-[#F1F1F1]">
          Cyphr delivers investigator-led intelligence that helps insurance carriers
          detect fraud, deny false claims, recover funds, and safeguard long-term
          profitability.
        </p>

        {/* Buttons */}
        <div className="relative flex flex-col gap-0 mt-6">
          {/* Blurred background */}
          <div className="absolute top-0 left-0 w-full sm:w-[80%]  bg-[#030A14B2] blur-3xl rounded-2xl -z-10" />
          <div className="relative bg-black w-fit z-2 sm:flex-row flex-col flex gap-4 mt-6">  
          <Button color="bg-[#1057B5]" text="Book a Consultation" isIcon={false} />
          <Button
            color="bg-black"
            text="Explore Our Services"
            isIcon={true}
            isBorder={true}
          />
          </div>
          {/* ANIMATED PATHS */}
          </div>
        </div>
      </div>
    
    </>
  );
};


