'use client'
import { DropDown, DropUp, Tick } from '@/assets/icon';
import Image from 'next/image';
import { useState } from 'react';

export default function CorePrincipals() {

 const [tabIndex,setTabIndex]=useState(-1);


  return (
    <div className="flex flex-col gap-8 p-6 sm:p-12 lg:p-20 bg-black text-white">
      {/* Heading */}
      <h1 className="font-['IBM Plex Sans'] font-bold text-[32px] sm:text-[40px] lg:text-[48px] text-center">
        Core Pillars of Consulting & Advisory
      </h1>

      {/* Custom Seminars (Full Width) */}
      <div className="border border-[#6D6D6D] rounded-[32px] p-6 sm:p-8 flex flex-col lg:flex-row gap-8 overflow-hidden">
        {/* Left Column */}
        <div className="flex flex-col gap-12 flex-1">
          <div className="flex flex-col gap-4">
            <h2 className="font-sans text-white font-bold text-[28px] sm:text-[32px] lg:text-[40px] leading-[1.3]">
              Custom Seminars
            </h2>
            <div className="text-[#E3E3E3] text-[1rem] font-inter font-normal max-w-[80%]">
              Tailored seminars to equip your team with the skills to detect and mitigate intelligence threats. We offer practical tools and roadmaps to help you stay ahead.
            </div>
          </div>
          <ul  className="flex flex-col gap-3 font-['Inter'] text-[#E3E3E3] text-[14px] sm:text-[16px]">
            <li className="flex items-center gap-2">
              <Tick/>
              Fraud case studies and prevention strategies
            </li>
            <li className="flex items-center gap-2">
             <Tick/>
              Practical checklists and roadmaps
            </li>
            <li className="flex items-center gap-2">
              <Tick/>
              Insights into evolving intelligence threats
            </li>
            <li className="flex items-center gap-2">
             <Tick/>
              Sector-specific fraud use cases
            </li>
          </ul>
        </div>

        {/* Right Column: Nested Dashed Semi-Circles */}
        <div className="flex-1 flex justify-center items-center relative max-w-full">
          <svg
            className="max-w-full"
            viewBox="0 0 555 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="dashedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="11.54%" stopColor="rgba(204, 204, 204, 0.3)" />
                <stop offset="100%" stopColor="rgba(3, 10, 20, 0.3)" />
              </linearGradient>
            </defs>
            <path
              d="M 0 249 A 277.5 277.5 0 0 1 555 249"
              stroke="url(#dashedGradient)"
              strokeWidth="2"
              strokeDasharray="12 12"
              fill="none"
            />
            <path
              d="M 54.41 249 A 223 223 0 0 1 500.59 249"
              stroke="url(#dashedGradient)"
              strokeWidth="2"
              strokeDasharray="12 12"
              fill="none"
            />
            <path
              d="M 101.9 249 A 176 176 0 0 1 453.1 249"
              stroke="url(#dashedGradient)"
              strokeWidth="2"
              strokeDasharray="12 12"
              fill="none"
            />
            <path
              d="M 158.29 249 A 119 119 0 0 1 396.71 249"
              stroke="url(#dashedGradient)"
              strokeWidth="2"
              strokeDasharray="12 12"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Second Row: Investigative Services + Continuing Education */}
      <div className="flex flex-col sm:flex-row items-start gap-8">
        {/* Investigative Services Support */}
        <div className="border  border-[#6D6D6D] rounded-[32px] p-6 sm:p-8 relative flex-1 flex flex-col gap-6">
          <img
            src="/fingerprint.png"
            alt="fingerprint"
            className="my-10  mx-auto relative z-10 max-w-[60%]"
          />
          <h2 className="font-sans font-bold text-[28px] sm:text-[32px] lg:text-[32px] leading-[1.3]">
            Investigative Services Support
          </h2>
          <div className='flex flex-row justify-between items-end'>
          <p className="max-w-[80%] text-base font-normal text-[#F1F1F1] font-inter ">
            Our team extends your investigative capabilities with investigator-led support. We provide comprehensive intelligence services to:
          </p>
         <div onClick={()=>{
          if(tabIndex===0){
            setTabIndex(-1)
          }
          else{
             setTabIndex(0)
          }
         }} className="flex relative top-2 left-2 justify-center items-center rounded-full  flex-col gap-2.5 p-[9px_7px] w-8 h-8 border border-white opacity-100">
          {tabIndex===0?<DropUp/>:<DropDown/>}
  {/* Content goes here */}
</div>
          </div>
          {tabIndex===0 && <ul className="flex flex-col gap-3 font-['Inter'] text-[#E3E3E3] text-[14px] sm:text-[16px]">
            <li className="flex items-center gap-2">
              <Tick/>
              Uncover hidden connections and threats
            </li>
            <li className="flex items-center gap-2">
             <Tick/>
              Validate evidence with digital forensics
            </li>
            <li className="flex items-center gap-2">
              <Tick/>
              Deliver courtroom-ready reports
            </li>
            <li className="flex items-center gap-2">
             <Tick/>
              Support or augment your existing investigations
            </li>
          </ul>}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] max-w-[539px] h-[35px] bg-white opacity-20 blur-[134.6px]" />
        </div>

        {/* Continuing Education */}
        <div className="border border-[#6D6D6D] rounded-[32px] p-6 sm:p-8 flex-1 flex flex-col gap-6 relative ">
          <div className="relative mx-auto max-w-full">
            <div className="flex justify-center items-center w-[297px] h-[286px] rounded-full border border-[#0C438C]" >
             <div className="flex justify-center items-center   w-[247.95px] h-[238.77px] rounded-full border border-[#0C438C]">
              <div className="relative justify-center items-center  w-[201.63px] h-[194.16px] rounded-full border border-[#0C438C]" />
             <img className='absolute ' src={'/book.png'}/>
             </div>
            </div>
           
           
          </div>
          <h2 className="font-['IBM Plex Sans'] font-bold text-[28px] sm:text-[32px] lg:text-[40px] leading-[1.3]">
            Continuing Education
          </h2>
          <div className='flex flex-row justify-between items-end'>
          <p className="max-w-[75%] text-base font-normal text-[#F1F1F1] font-inter">
            We offer accredited CE courses to ensure professionals are always prepared for emerging fraud schemes and 
digital investigations.
          </p>
         <div onClick={()=>{
          
         }} className="relative top-2 left-2 flex justify-center items-center rounded-full  flex-col gap-2.5 p-[9px_7px] w-8 h-8 border border-white opacity-100">
          {tabIndex===1?<DropUp/>:<DropDown/>}
  {/* Content goes here */}
</div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

