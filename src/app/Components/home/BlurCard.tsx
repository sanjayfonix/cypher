// components/BlurCard.tsx
import React from "react";
import Button from "../common/Button";
import Link from "next/link";
import { TopBanner } from "../discoveredu/Header";
import { Toparrow } from "@/assets/icon";
import { PointerGrid } from "./GridAnimation";


const BlurCard = () => {
  return (
    <div className="overflow-hidden relative py-10 sm:py-16 lg:py-20 px-6 sm:px-20 lg:px-28">

<div
  className="absolute z-30 hidden sm:flex items-center justify-center"
  style={{
    top: "40%",
    right: "0",
    transform: "translateX(50%)", // half outside screen, half visible
  }}
>
  <div className="relative flex items-center justify-center">
    {/* Glow behind */}
    <div
      className="absolute blur-[10px] animate-glow2"
      style={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(21,122,255,0.7) 0%, rgba(21,122,255,0) 70%)",
        zIndex: -1,
      }}
    />
   <div className="relative -left-8">
    <PointerGrid
      
      width={150}
      height={150}
    />
    </div>
  </div>
</div>



{/* Left Grid Glow */}
<div
  className="absolute z-30 hidden sm:flex items-center justify-center"
  style={{
    top: "40%",
    left: "0",
    transform: "translateX(-50%)", // half outside screen, half visible
  }}
>
  <div className="relative flex items-center justify-center">
    {/* Glow behind */}
    <div
      className="absolute blur-[10px] animate-glow2"
      style={{
        width: "220px",
        height: "220px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(21,122,255,0.7) 0%, rgba(21,122,255,0) 70%)",
        zIndex: -1,
      }}
    />
    <PointerGrid
      horizontal={{ direction: "right", y: 30, fromX: 60, toX: 100 }}
      width={150}
      height={150}
    />
  </div>
</div>

{/* On mobile, show both grids above card */}
{/* <div className="absolute flex sm:hidden justify-between w-full px-6 -top-12">
 
  <div className="relative flex items-center justify-center">
    <div
      className="absolute blur-[10px] animate-glow2"
      style={{
        width: "140px",
        height: "140px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(21,122,255,0.7) 0%, rgba(21,122,255,0) 70%)",
        zIndex: -1,
      }}
    />
    <PointerGrid width={100} height={100} />
  </div>

  <div className="relative flex items-center justify-center">
    <div
      className="absolute blur-[10px] animate-glow2"
      style={{
        width: "140px",
        height: "140px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(21,122,255,0.7) 0%, rgba(21,122,255,0) 70%)",
        zIndex: -1,
      }}
    />
    <PointerGrid width={100} height={100} />
  </div>
</div> */}

      {/* Main Card */}
      <div className="relative overflow-hidden flex flex-col gap-6 sm:gap-10 lg:gap-[32px] p-6 sm:p-10 lg:p-[48px] rounded-[16px] border border-[#515151] bg-[#121212] relative z-10">
        {/* First Decorative Blur Div */}
        <div
          className="absolute blur-[157.2px]"
          style={{
            borderRadius: "50%",
            width: "213.5988892543589px",
            height: "543.9217453983816px",
            transform: "rotate(-110.74deg)",
            opacity: 0.5,
            background: "#1057B5",
            boxShadow: "0px 0px 108.3px 0px #157AFF80",
            top: "-50%",
            left: "30%",
            zIndex: -1,
          }}
        ></div>

        {/* Second Decorative Blur Div */}
        <div
          className="absolute blur-[93.2px]"
          style={{
            width: "186.9999847412111px",
            height: "276.0000000000002px",
            transform: "rotate(90deg)",
            opacity: 0.3,
            background: "#1057B5",
            bottom: "-20%",
            right: "25%",
            borderRadius: "50%",
            zIndex: -1,
          }}
        ></div>

    
        
        

        <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-[44px]">
          {/* First Div */}
          <div className="flex flex-col gap-6 sm:gap-7 lg:gap-[28px]">
            <h1 className="font-[IBM Plex Sans] font-bold text-3xl sm:text-4xl lg:text-[48px] text-white text-center leading-snug">
              Integrity at the Core of
              <br /> Everything We Do
            </h1>
            <h2 className="font-[IBM Plex Sans] font-medium text-base sm:text-lg lg:text-[18px] text-[#F1F1F1] text-center">
              Trustworthy Intelligence Built on Transparency and Responsibility
            </h2>
            <p className="font-inter max-w-3xl font-normal text-sm sm:text-base lg:text-[16px] text-[#F1F1F1] text-center">
              At Cyphr, we deliver actionable insights through ethical practices.
              We prioritize responsible data collection, privacy, and security,
              ensuring that every decision is backed by integrity. Whether it's
              OSINT, social media intelligence, or geospatial data, we are
              committed to providing transparent and secure intelligence.
            </p>
          </div>

          {/* Second Div */}
          <div className="flex justify-center">
            <Link href={'/pages/contactus'}><button className="custom-button with-shadow bg-[#1057B5]"
            
             
              
            > Get in Touch <Toparrow/></button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlurCard;
