// components/BlurCard.tsx
'use client'
import React from "react";

import { Grid, Toparrow } from "@/assets/icon";
import { PointerGrid } from "../home/GridAnimation";



const ServiceBlurCard = () => {
  return (
    <div className="relative mb-4 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-10 py-8 sm:py-16 lg:py-20 overflow-visible">
{/* PointerGrid at top-right edge of screen with glow */}
 <div
        className="absolute translate-x-[50%] sm:flex  top-12 right-0 hidden lg:top-[-2%]  z-30   items-center justify-center"
        
      >
        <div className="relative flex items-center justify-center">
          {/* Glow behind */}
          <div
            className="absolute blur-[10px] animate-glow2 h-[220px] w-[220px] md:h-[170px] md:w-[170px]"
            style={{
              
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
        className="relative lg:left-0 left-[-43%] hidden sm:flex  lg:absolute lg:bottom-0 z-30  items-center justify-center"
        style={{
         
          
          transform: "translateX(-50%)", // half outside screen, half visible
        }}
      >
        <div className="relative flex items-center justify-center mb-4">
          {/* Glow behind */}
          <div
            className="absolute blur-[10px] animate-glow2 h-[220px] w-[220px] md:w-[170px] md:h-[170px]"
            style={{
              
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
  

      {/* ===== Main Card ===== */}
      <div
        className="
          relative w-full
          max-w-[95%] sm:max-w-3xl lg:max-w-4xl
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
            opacity: 0.7,
            background: "#1057B5",
            boxShadow: "0px 0px 80px 0px #157AFF80",
            top: "-20%",
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
            opacity: 0.7,
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
          <div className="flex flex-col gap-3 sm:gap-6 lg:gap-[28px] text-center">
            <h1 className="font-sans font-bold text-lg sm:text-3xl lg:text-[48px] text-white leading-snug">
              Take Command of Your Future.
            </h1>
            <p className="font-inter font-normal text-xs sm:text-base lg:text-[16px] text-[#F1F1F1] mx-auto text-center max-w-[95%] sm:max-w-[80%] lg:max-w-[72%]">
              With Cyphr’s Consulting & Advisory services, you’ll gain the
              knowledge, tools, and strategies to act decisively in an
              unpredictable world.
            </p>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-2">
            <button onClick={() => {
              const navToSection = document.getElementById('contact-us')
              if (navToSection) {
                navToSection.scrollIntoView({ behavior: 'smooth' })
              }
            }} className="custom-button bg-[#1057B5] with-shadow"




            >Book a Consultation</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBlurCard;
