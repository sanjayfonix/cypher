'use client'
import { useState } from "react";
import Button from "../common/Button"; // Make sure to import your Button component
import { Bounce } from "gsap";
import { easeInOut } from "framer-motion";

export default function HowItWorks() {
  const [mode,setMode]=useState(0);
  const [type,setType]=useState(0); 
  return (
    <div className="flex flex-col lg:flex-row mt-20 items-center p-6 sm:p-12 lg:p-10 gap-8 lg:gap-12 bg-black bg-[url('/grid.png')] bg-fill bg-repeat">
      {/* Left Column */}
      <div className="h-full flex flex-col gap-4 justify-start items-start text-center lg:text-left max-w-xl">
        {/* First Text */}
        <h1 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] tracking-normal text-white">
          How it works
        </h1>

        {/* Second Text */}
        <p className="text-left font-inter font-normal text-sm sm:text-base md:text-lg text-white">
          Using advanced algorithms, OSINT methodology and investigative technologies, Webutation
          scours social media, public records, and other digital footprints to provide actionable
          intelligence.
        </p>
      </div>

      {/* Right Column */}
      <div className="relative h-full flex flex-col gap-6 lg:gap-8 items-center w-full max-w-3xl">
        <div className="absolute -top-2 bg-[#167BFF] h-7 w-full max-w-[38.5rem] align-middle blur-[63.8px]"></div>

        <div className="flex flex-col gap-0 w-full">
          {/* First Div - Top Row */}
          <div className="flex flex-col sm:flex-row justify-center w-full gap-2 sm:gap-4 p-4 rounded-t-[12px] bg-[#09346B]">
            {/* First inner div */}
            <button onClick={()=>setMode(0)} style={{
              border:mode===0?'1px solid #167BFF':'none',
              backgroundColor:mode===0?'#0C448C':'transparent',
               transition:'linear 0.5s',
            }} className="rounded-lg px-4 py-2 sm:py-3">
              <span style={{
                color:mode===0?'white':'#E3E3E3',
                fontWeight:mode===0?'bold':'normal',
              }} className="font-sans  text-lg sm:text-xl md:text-2xl ">
                All in One
              </span>
            </button>

              <button onClick={()=>setMode(1)} style={{
              border:mode===1?'1px solid #167BFF':'none',
              backgroundColor:mode===1?'#0C448C':'transparent',

            }} className="rounded-lg px-4 py-2 sm:py-3">
              <span style={{
                 transition:'linear 0.5s',
                color:mode===1?'white':'#E3E3E3',
                fontWeight:mode===1?'bold':'normal',
              }} className="font-sans  text-lg sm:text-xl md:text-2xl ">
                OSINT              </span>
            </button>

           <button onClick={()=>setMode(2)} style={{
              transition:'linear 0.5s',
              border:mode===2?'1px solid #167BFF':'none',
              backgroundColor:mode===2?'#0C448C':'transparent',

            }} className="rounded-lg px-4 py-2 sm:py-3">
              <span style={{
                color:mode===2?'white':'#E3E3E3',
                fontWeight:mode===2?'bold':'normal',
              }} className="font-sans  text-lg sm:text-xl md:text-2xl ">
                Data Breach              </span>
            </button>

          </div>

          {/* Second Div - Bottom Content */}
          <div className="flex flex-col gap-6 sm:gap-8 p-4 sm:p-6 md:p-8 rounded-b-[12px] bg-black shadow-[inset_0_0_30px_0_#157AFF80]">
            {/* First Row inside Bottom Div */}
            <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
              {/* Input */}
              <input
                type="text"
                placeholder="Enter text..."
                className="w-full sm:flex-1 rounded-[38px] border border-[#515151] bg-[#1E1E1E] px-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:outline-none"
              />

              {/* Button Component */}
              <Button
                isIcon={true}
                isBorder={false}
                color="bg-[#1057B5]"
                text="Search Now"
              />
            </div>

            {/* Placeholder for next row content */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-100">
              {/* First Div - Username */}
              <button style={{
                 transition:'linear 1s',
                backgroundColor:type===0?'#E8F2FF':'#515151',
                border:type===0?'1.2px solid #157AFF':'none'
              }} onClick={()=>setType(0)} className="flex items-center justify-center gap-2.5 rounded-[3rem]  px-4 py-2 sm:py-3 ">
                <span
                style={{
                  color:type===0?'#1E1E1E':'black',
                  fontWeight:mode===0?'medium':'normal'
                }}
                className="font-sans text-base sm:text-lg md:text-xl">
                  Username
                </span>
              </button>

              {/* Second Div - Phone Number */}
              <button style={{
                transition:'linear 1s',
                backgroundColor:type===1?'#E8F2FF':'#515151',
                border:type===1?'1.2px solid #157AFF':'none'
              }} onClick={()=>setType(1)} className="flex items-center justify-center gap-2.5 rounded-[3rem]  px-4 py-2 sm:py-3 ">
                <span
                style={{
                  color:type===1?'#1E1E1E':'black',
                  fontWeight:mode===1?'medium':'normal'
                }}
                className="font-sans text-base sm:text-lg md:text-xl">
                  Phone Number
                </span>
              </button>

              {/* Third Div - Email */}
              <button style={{
                 transition:'linear 1s',
                backgroundColor:type===2?'#E8F2FF':'#515151',
                border:type===2?'1.2px solid #157AFF':'none'
              }} onClick={()=>setType(2)} className="flex items-center justify-center gap-2.5 rounded-[3rem]  px-4 py-2 sm:py-3 ">
                <span
                style={{
                  color:type===2?'#1E1E1E':'black',
                  fontWeight:mode===2?'medium':'normal'
                }}
                className="font-sans text-base sm:text-lg md:text-xl">
                  Email
                </span>
              </button>
            </div>
          </div>
        </div>

        <p className="font-inter font-normal text-white text-xs sm:text-sm text-center">
          Search by username, phone number, or email to confidentially look up information.
        </p>
      </div>
    </div>
  );
}

