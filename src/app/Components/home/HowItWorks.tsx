'use client'
import { useState } from "react";
import Button from "../common/Button"; // Make sure to import your Button component
import { Bounce } from "gsap";
import { easeInOut } from "framer-motion";

export default function HowItWorks() {
  const [searchresults, setSearchResults] = useState(false);

  const tabsData = [
    {
      icon: Instagram,
      title: "Instagram",
      queryVal: "abcd1234@gmail.com",
      date: "2022-25-16132:56",
      hasMultipleAccounts: false,
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: true, isValue: true },
        { label: "Has Multiple Accounts:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
      ],
    },
    {
      icon: Facebook,
      title: "Facebook",
      queryVal: "abcd1234@gmail.com",
      date: "2022-25-16132:56",
      hasMultipleAccounts: false,
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: true, isValue: true },
        { label: "Has Multiple Accounts:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
      ],
    },
    {
      icon: X,
      title: "X",
      queryVal: "abcd1234@gmail.com",
      date: "2022-25-16132:56",
      hasMultipleAccounts: false,
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: true, isValue: true },
        { label: "Has Multiple Accounts:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
      ],
    },
    {
      icon: Phone,
      title: "Phone Number",
      queryVal: "abcd1234@gmail.com",
      date: "2022-25-16132:56",
      hasMultipleAccounts: false,
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: true, isValue: false },
        { label: "Has Multiple Accounts:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
      ],
    },
    {
      icon: Banknote,
      title: "Bank Details",
      queryVal: "abcd1234@gmail.com",
      date: "2022-25-16132:56",
      hasMultipleAccounts: false,
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: true, isValue: true },
        { label: "Has Multiple Accounts:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
      ],
    },
    {
      icon: Mail,
      title: "Email ID",
      queryVal: "abcd1234@gmail.com",
      date: "2022-25-16132:56",
      hasMultipleAccounts: false,
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: true, isValue: true },
        { label: "Has Multiple Accounts:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
      ],
    },
  ];

  const [mode, setMode] = useState(0);
  const [type, setType] = useState(0);
  return (
    <div className="container">
      <div className="flex  flex-col lg:flex-row mt-20 items-center p-6 sm:p-12 lg:p-10 gap-8 lg:gap-12 bg-black bg-[url('/grid.png')]  bg-repeat">
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
          <div className="absolute -top-2 bg-[#167BFF] h-7 w-full max-w-[38.5rem] align-middle blur-[43.8px]"></div>

          <div className="flex flex-col gap-0 w-full">
            {/* First Div - Top Row */}
            <div className="flex flex-col sm:flex-row justify-center w-full gap-2 sm:gap-4 p-4 rounded-t-[12px] bg-[#09346B]">
              {/* First inner div */}
              <button onClick={() => setMode(0)} style={{
                border: mode === 0 ? '1px solid #167BFF' : 'none',
                backgroundColor: mode === 0 ? '#0C448C' : 'transparent',
                transition: 'linear 0.5s',
              }} className="rounded-lg px-4 py-2 sm:py-3 cursor-pointer">
                <span style={{
                  color: mode === 0 ? 'white' : '#E3E3E3',
                  fontWeight: mode === 0 ? 'bold' : 'normal',
                }} className="font-sans  text-lg sm:text-xl md:text-2xl ">
                  All in One
                </span>
              </button>

              <button onClick={() => setMode(1)} style={{
                border: mode === 1 ? '1px solid #167BFF' : 'none',
                backgroundColor: mode === 1 ? '#0C448C' : 'transparent',

              }} className="rounded-lg px-4 py-2 sm:py-3 cursor-pointer">
                <span style={{
                  transition: 'linear 0.5s',
                  color: mode === 1 ? 'white' : '#E3E3E3',
                  fontWeight: mode === 1 ? 'bold' : 'normal',
                }} className="font-sans  text-lg sm:text-xl md:text-2xl ">
                  OSINT              </span>
              </button>

              <button onClick={() => setMode(2)} style={{
                transition: 'linear 0.5s',
                border: mode === 2 ? '1px solid #167BFF' : 'none',
                backgroundColor: mode === 2 ? '#0C448C' : 'transparent',

              }} className="rounded-lg px-4 py-2 sm:py-3 cursor-pointer">
                <span style={{
                  color: mode === 2 ? 'white' : '#E3E3E3',
                  fontWeight: mode === 2 ? 'bold' : 'normal',
                }} className="font-sans  text-lg sm:text-xl md:text-2xl ">
                  Data Breach              </span>
              </button>

            </div>

            {/* Second Div - Bottom Content */}
            <div className="flex flex-col gap-6 sm:gap-4 p-4 sm:p-6 md:p-8 rounded-b-[12px] bg-black shadow-[inset_0_0_30px_0_#157AFF80]">
              {/* Placeholder for next row content */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-100">

                {/* First Div - Username */}
                <button style={{
                  transition: 'linear 1s',
                  backgroundColor: type === 0 ? '#E8F2FF' : '#515151',
                  border: type === 0 ? '1.2px solid #157AFF' : 'none'
                }} onClick={() => setType(0)} className="flex items-center justify-center gap-2.5 rounded-[3rem]  px-4 py-2 sm:py-3 cursor-pointer ">
                  <span
                    style={{
                      color: type === 0 ? '#1E1E1E' : 'black',
                      fontWeight: mode === 0 ? 'medium' : 'normal'
                    }}
                    className="font-sans text-base sm:text-lg md:text-xl">
                    Username
                  </span>
                </button>

                {/* Second Div - Phone Number */}
                <button style={{
                  transition: 'linear 1s',
                  backgroundColor: type === 1 ? '#E8F2FF' : '#515151',
                  border: type === 1 ? '1.2px solid #157AFF' : 'none'
                }} onClick={() => setType(1)} className="flex items-center justify-center gap-2.5 rounded-[3rem]  px-4 py-2 sm:py-3 cursor-pointer ">
                  <span
                    style={{
                      color: type === 1 ? '#1E1E1E' : 'black',
                      fontWeight: mode === 1 ? 'medium' : 'normal'
                    }}
                    className="font-sans text-base sm:text-lg md:text-xl">
                    Phone Number
                  </span>
                </button>

                {/* Third Div - Email */}
                <button style={{
                  transition: 'linear 1s',
                  backgroundColor: type === 2 ? '#E8F2FF' : '#515151',
                  border: type === 2 ? '1.2px solid #157AFF' : 'none'
                }} onClick={() => setType(2)} className="flex items-center justify-center gap-2.5 rounded-[3rem]  px-4 py-2 sm:py-3 cursor-pointer ">
                  <span
                    style={{
                      color: type === 2 ? '#1E1E1E' : 'black',
                      fontWeight: mode === 2 ? 'medium' : 'normal'
                    }}
                    className="font-sans text-base sm:text-lg md:text-xl">
                    Email
                  </span>
                </button>
              </div>
              {type === 0 && <UsernameForm />}
              {type === 1 && <CustomForm formType={1} />}
              {type === 2 && <CustomForm formType={2} />}
              {/* Search Button */}
              <div className="p-4">
                <button onClick={() => setSearchResults(!searchresults)} className="custom-button w-full with-shadow bg-[#1057B5]">Search Now <Toparrow />
                </button>
              </div>

            </div>
          </div>

          <p className="font-inter font-normal text-white text-xs sm:text-sm text-center">
            Search by username, phone number, or email to confidentially look up information.
          </p>
        </div>
      </div>
      {searchresults && <div className="font-sans text-3xl font-bold text-white text-center w-fit mx-auto p-[10px] border-b-[0.25px] border-b-[#FFFFFF]">Search Results</div>}
      {searchresults && <div className="grid p-6 grid-cols-1 sm:grid-cols-2 gap-2 gap-y-6">
        {tabsData.map((item, i) => {
          return <SearchResultTab key={i} icon={<GlassIcon size={70} icon={<item.icon />} />} title={item.title} queryVal={item.queryVal} date={item.date} rowsData={item.rowsData} />
        })}
      </div>}
    </div>
  );
}


// components/SearchForm.tsx


import { Toparrow } from "@/assets/icon";
import SearchResultTab from "./SearchResultTab";
import { Banknote, Facebook, Instagram, Mail, Phone, User, X } from "lucide-react";
import { GlassIcon } from "./GlassIcon";

export function UsernameForm() {
  return (
    <div className="w-full  p-4">
      {/* Full Name */}
      <div className="mb-3">
        <label className="block text-sm text-white mb-4">Full name</label>
        <input
          type="text"
          placeholder="Enter full name"
          className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 py-3 px-4 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* City, State + Button */}
      {/* City, State */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end justify-between mt-4">
        {/* City */}
        <div className="flex-1 w-full">
          <label className="block text-sm text-white mb-2 sm:mb-4">City</label>
          <input
            type="text"
            placeholder="City"
            className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 px-4 py-3 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* State */}
        <div className="flex-1 w-full">
          <label className="block text-sm text-white mb-2 sm:mb-4">State</label>
          <input
            type="text"
            placeholder="State"
            className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 px-4 py-3 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>


    </div>

  );
}

interface formInput {
  formType: number;
}

export function CustomForm({ formType }: formInput) {
  return (
    <div className="w-full  p-4">
      {/* Full Name */}
      <div>
        <label className="block text-sm text-white font-inter mb-4">{formType === 1 ? 'Phone Number' : 'Email'}</label>
        <div className="flex items-end justify-between gap-4 flex-wrap sm:flex-nowrap">
          <input
            type="text"
            placeholder={formType === 1 ? "Enter Phone Number" : "Enter Email address"}
            className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500 py-3 px-4"
          />
        </div>

      </div>

    </div>
  );
}