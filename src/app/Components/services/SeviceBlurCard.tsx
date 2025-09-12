// components/BlurCard.tsx
import React from "react";
import Button from "../common/Button";

const ServiceBlurCard = () => {
  return (
    <div className="py-10 sm:py-16 lg:py-20 px-6 sm:px-20 lg:px-28">
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
            top: "-120%",
            left: "30%",
            zIndex: 1,
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
            zIndex: 0,
          }}
        ></div>

        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-[44px]">
          {/* First Div */}
          <div className="flex flex-col gap-6 sm:gap-7 lg:gap-[28px]">
            <h1 className="font-[IBM Plex Sans] font-bold text-3xl sm:text-4xl lg:text-[48px] text-white text-center leading-snug">
              Take Command of Your Future.
            </h1>
            
            <p className="font-inter font-normal text-sm sm:text-base lg:text-[16px] text-[#F1F1F1] self-center text-center max-w-[60%]">
              With Cyphr’s Consulting & Advisory services, you’ll gain the knowledge, tools, and strategies to act decisively in an unpredictable world.
            </p>
          </div>

          {/* Second Div */}
          <div className="flex justify-center gap-4">
            <Button
              isBorder={false}
              isIcon={false}
              text="Book a Consultation"
              color="bg-[#1057B5]"
            />
            <Button
              isBorder={true}
              isIcon={true}
              text="Contact our expert"
              color="bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBlurCard;