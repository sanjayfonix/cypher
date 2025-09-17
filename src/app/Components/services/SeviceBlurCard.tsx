// components/BlurCard.tsx
'use client'
import React from "react";

import { Grid, Toparrow } from "@/assets/icon";


const ServiceBlurCard = () => {
  return (
    <div className="relative mb-4 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-10 py-8 sm:py-16 lg:py-20 overflow-visible">
      {/* ===== Left Grid + Blur (outside card, never overlapping) ===== */}
      <div
        className="absolute"
        style={{
          top: "60%",
          left: "clamp(-7rem, -14vw, -2rem)", // pushes grid far left on mobile
          transform: "translateY(-50%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Blur behind left grid */}
        <div
          className="absolute blur-[8.1px]  translate-y-[80%] sm:translate-y-[50%]  md:translate-x-3 lg:translate-x-5 lg:translate-y-[40%]  animate-glow"
          style={{
            width: "clamp(90px, 20vw, 180px)",
            height: "clamp(90px, 20vw, 180px)",
            background: "radial-gradient(circle, rgba(21,122,255,0.9) 0%, rgba(21,122,255,0) 70%)",
            rotate: "180deg",
            borderRadius: "50%",
            boxShadow: "0px 0px 80px 0px #157AFF80",

          }}
        />

        <div className="relative flex items-center justify-center w-[clamp(48px,8vw,100px)] h-[clamp(48px,8vw,100px)]">
          <Grid />
        </div>
      </div>

      {/* ===== Right Grid + Blur ===== */}
      <div
        className="absolute"
        style={{
          top: "15%",
          right: "clamp(-2rem, 3vw, 4rem)", // keeps right grid visible but away from card
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Blur behind right grid */}
        <div
          className="absolute blur-[8.1px] md:translate-x-[10%] lg:translate-x-[40%] md:-translate-y-[80%] translate-x-[25%] -translate-y-[80%] lg:-translate-y-[60%]  animate-glow"
          style={{
            width: "clamp(90px, 20vw, 180px)",
            height: "clamp(90px, 20vw, 180px)",
            background: "radial-gradient(circle, rgba(21,122,255,0.9) 0%, rgba(21,122,255,0) 70%)",
            rotate: "180deg",
            borderRadius: "50%",
            boxShadow: "0px 0px 80px 0px #157AFF80",

          }}
        />
        <div className="relative flex items-center justify-center w-[clamp(48px,8vw,100px)] h-[clamp(48px,8vw,100px)]">
          <Grid />
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
            top: "-40%",
            left: "20%",
            zIndex: 1,
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
            zIndex: 0,
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
            <button className="custom-button with-border bg-transparent"



            >
              Contact our expert <Toparrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBlurCard;
