// components/CustomDiv.jsx
import React from "react";

const CustomDiv = () => {
  return (
    <div className="flex flex-col gap-[23px] opacity-100 p-[80px] rotate-0">
      {/* Row div inside */}
      <div className="flex flex-row gap-4">
        {/* First div: flex column */}
        <div className="flex flex-col gap-[32px] opacity-100 rotate-0">
          {/* Nested div inside first div */}
          <div className="flex flex-col gap-[16px] opacity-100 rotate-0 max-w-[36em]">
            {/* First text */}
            <h1 className="font-sans font-bold text-[40px] text-white tracking-[0%]">
              Why Insurance Carriers Choose Cyphr
            </h1>

            {/* Second div with two texts */}
            <div className="flex flex-col gap-[8px] opacity-100 rotate-0">
              <h2 className="font-sans font-bold text-[24px] text-[#157AFF] tracking-[0%]">
                Problem
              </h2>
              <p className="font-inter font-normal text-[16px] text-[#F1F1F1] tracking-[0%] ">
                Managing risks and detecting fraud can be complex and time-sensitive. With inconsistent claimant statements and rising fraudulent activity, insurance carriers face challenges in making accurate assessments while protecting their bottom line.
              </p>
            </div>
          </div>
        </div>

        {/* Second div: flex row with two nested divs */}
        <div className="flex flex-row ">
          {/* First nested div */}
          <div
            className="flex flex-row gap-[24px] opacity-100 rotate-0"
            
          >
            {/* Inner div 1: rounded box */}
            <div className="w-[59px] h-[59px] flex items-center justify-center gap-[32px] p-[16px] rounded-[48px] bg-gray-700"></div>

            {/* Inner div 2: flex column with two texts */}
            <div className="flex flex-col gap-[16px] opacity-100 rotate-0">
              <h3 className="font-sans font-bold text-[24px] text-[#CACACA] tracking-[0%]">
                Detect Fraud Early
              </h3>
              <p className="font-inter font-normal text-[15px] text-[#E3E3E3] tracking-[0%]">
                Identify fraudulent claims quickly by analyzing digital footprints and claimant data, reducing risk before it impacts your business.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div
            className="opacity-100 rotate-0 absolute"
            style={{
              top: "190px", // Adjust as needed between the two divs
              left: "50px",
              width: "100%", // Adjust width to match your layout
              height: "0px",
              border: "1px solid #5B5B5B",
            }}
          ></div>

          {/* Second nested div: same as first one */}
          <div
            className="flex flex-row gap-[24px] opacity-100 rotate-0 absolute"
            style={{ top: "220px", left: "50px" }} // Adjust top position as needed
          >
            {/* Inner div 1 */}
            <div className="w-[59px] h-[59px] flex items-center justify-center gap-[32px] p-[16px] rounded-[48px] bg-gray-700"></div>

            {/* Inner div 2: flex column with two texts */}
            <div className="flex flex-col gap-[16px] opacity-100 rotate-0">
              <h3 className="font-sans font-bold text-[24px] text-[#CACACA] tracking-[0%]">
                Detect Fraud Early
              </h3>
              <p className="font-inter font-normal text-[15px] text-[#E3E3E3] tracking-[0%]">
                Identify fraudulent claims quickly by analyzing digital footprints and claimant data, reducing risk before it impacts your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDiv;
