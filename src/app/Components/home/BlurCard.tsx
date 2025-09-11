// components/BlurCard.tsx
import React from "react";
import Button from "../common/Button";

const BlurCard = () => {
  return (
    <div className="py-20 px-28">
      {/* First Decorative Blur Div */}
      

      {/* Main Card */}
      <div
        className="relative overflow-hidden flex flex-col gap-[32px] p-[48px] rounded-[16px] border border-[#515151] bg-[#121212] relative z-10"
      >
        <div
        className="absolute blur-[157.20001220703125px]"
        style={{
            borderRadius:'50%',
          width: "213.5988892543589px",
          height: "543.9217453983816px",
          transform: "rotate(-110.74deg)",
          opacity: 0.5,
          background: "#1057B5",
          boxShadow: "0px 0px 108.3px 0px #157AFF80",
          top: "-50%",
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
          bottom: "-20%", // adjust as needed
          right: "25%",
          borderRadius:'50%', // adjust as needed
          zIndex: 0,
        }}
      ></div>
        <div className="flex flex-col gap-[44px]">
          {/* First Div */}
          <div className="flex flex-col gap-[28px]">
            <h1
              className="font-[IBM Plex Sans] font-bold text-[48px] text-white text-center"
            >
              Integrity at the Core of
              <br /> Everything We Do
            </h1>
            <h2
              className="font-[IBM Plex Sans] font-medium text-[18px] text-[#F1F1F1] text-center"
            >
              Trustworthy Intelligence Built on Transparency and Responsibility
            </h2>
            <p
              className="font-inter font-normal text-[16px] text-[#F1F1F1] text-center"
            >
              At Cyphr, we deliver actionable insights through ethical practices.
              We prioritize responsible data collection, privacy, and security,
              ensuring that every decision is backed by integrity. Whether it's
              OSINT, social media intelligence, or geospatial data, we are
              committed to providing transparent and secure intelligence.
            </p>
          </div>

          {/* Second Div */}
          <div className="flex justify-center">
            <Button isBorder={false} isIcon={true} text="Get in Touch" color="bg-[#1057B5]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlurCard;

