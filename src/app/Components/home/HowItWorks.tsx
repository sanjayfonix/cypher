'use client'
import { useState } from "react";
import Button from "../common/Button"; // Make sure to import your Button component
import { Bounce } from "gsap";
import { easeInOut } from "framer-motion";
import { Loader2 } from "lucide-react";
import { fetchPhoneSearchResult } from "@/api/apiFunctions";
import { Toparrow } from "@/assets/icon";

export default function HowItWorks() {
  const [searchresults, setSearchResults] = useState(false);
  const [phoneResult,setPhoneResult] = useState<any[]|null>(null);

  const [searchLoading,setSearchLoading] = useState(false);

  const fetchResult=async()=>{
    try{
      // Validation
      if(type===1 && mode===1){
        if(!phone || phone.trim() === ''){
          return;
        }
        
        setSearchLoading(true);
        
        const result = await fetchPhoneSearchResult({query:phone,OstIndAKey:''});
        console.log('phone search result is ',result);
        
        if(result && Array.isArray(result) && result.length > 0){
          setPhoneResult(result);
          setSearchResults(true);
        } else {
          setPhoneResult(null);
          setSearchResults(false);
        }
      }
    }
    catch(e: any){
      console.error('Search error:', e);
      setPhoneResult(null);
      setSearchResults(false);
    }
    finally{
      setSearchLoading(false);
    }
  }

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
  const [phone,setPhone] = useState('');
  return (
    <div className="">
      <div className="flex  flex-col lg:flex-row mt-20 justify-center items-center p-6 sm:p-12 lg:p-10 gap-8 lg:gap-12 bg-black bg-[url('/grid.png')]   bg-repeat">
        {/* Left Column */}
        <div className="h-full flex flex-col gap-4 justify-start items-start text-center lg:text-left max-w-xl">
          {/* First Text */}
          <h1 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] tracking-normal text-white">
            How it works
          </h1>

          {/* Second Text */}
          <p className="text-left font-inter font-normal text-sm sm:text-base md:text-lg text-white">
            "Using advanced algorithms, OSINT methodology and investigative technologies, Webutation
            scours social media, public records, and other digital footprints to provide actionable
            intelligence."
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
                    className="font-sans min-w-[150px] text-base sm:text-lg md:text-xl">
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
              {type === 1 && <CustomForm formType={1} controller={phone} setController={setPhone}/>}
              {type === 2 && <CustomForm formType={2} controller={phone} setController={setPhone}/>}
              {/* Search Button */}
              <div className="p-4">
                <button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    fetchResult();
                  }} 
                  disabled={searchLoading}
                  className={`custom-button w-full with-shadow bg-[#1057B5] flex items-center justify-center gap-2 ${
                    searchLoading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {searchLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                      <span className="text-white">Searching...</span>
                    </>
                  ) : (
                    <>
                      <span>Search Now</span>
                      <Toparrow />
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

          <p className="font-inter font-normal text-white text-xs sm:text-sm text-center">
            Search by username, phone number, or email to confidentially look up information.
          </p>
        </div>
      </div>

      {/* Search Results Display */}
      {phoneResult && phoneResult.length > 0 && (
        <div className="container mx-auto px-4 py-8">
          <div className="font-sans text-2xl sm:text-3xl font-bold text-white text-center w-fit mx-auto p-[10px] border-b-[0.25px] border-b-[#FFFFFF] mb-8">
            Search Results ({phoneResult.length} platform{phoneResult.length !== 1 ? 's' : ''} found)
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {phoneResult.map((item: any, index: number) => {
              if (item.status !== 'found') return null;
              
              const platformName = item.module || 'Unknown';
              const categoryName = item.category?.name || 'Unknown Category';
              const specData = item.spec_format?.[0] || {};
              
              return (
                <div 
                  key={index} 
                  className="bg-[#1A1A1A] border border-[#3C414A] rounded-lg p-4 sm:p-6 hover:border-[#167BFF] transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg sm:text-xl mb-1">
                        {platformName}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm">{categoryName}</p>
                    </div>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
                      Found
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    {specData.registered && (
                      <div className="text-sm text-gray-300">
                        <span className="text-gray-500">Registered:</span> Yes
                      </div>
                    )}
                    {specData.name && (
                      <div className="text-sm text-gray-300">
                        <span className="text-gray-500">Name:</span> {specData.name.value}
                      </div>
                    )}
                    {specData.email && (
                      <div className="text-sm text-gray-300">
                        <span className="text-gray-500">Email:</span> {specData.email.value}
                      </div>
                    )}
                    {specData.phone && (
                      <div className="text-sm text-gray-300">
                        <span className="text-gray-500">Phone:</span> {specData.phone.value}
                      </div>
                    )}
                    {specData.username && (
                      <div className="text-sm text-gray-300">
                        <span className="text-gray-500">Username:</span> {specData.username.value}
                      </div>
                    )}
                    {specData.location && (
                      <div className="text-sm text-gray-300">
                        <span className="text-gray-500">Location:</span> {specData.location.value}
                      </div>
                    )}
                  </div>
                  
                  {item.reliable_source && (
                    <div className="mt-4 pt-4 border-t border-[#3C414A]">
                      <span className="text-xs text-blue-400">✓ Reliable Source</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}


// components/SearchForm.tsx


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
  controller:string;
  setController:(val:string)=>void;
}

export function CustomForm({ formType,controller,setController }: formInput) {
  return (
    <div className="w-full  p-4">
      {/* Full Name */}
      <div>
        <label className="block text-sm text-white font-inter mb-4">{formType === 1 ? 'Phone Number' : 'Email'}</label>
        <div className="flex items-end justify-between gap-4 flex-wrap sm:flex-nowrap">
          <input
            value={controller}
            onChange={(e)=>setController(e.target.value)}
            type="text"
            placeholder={formType === 1 ? "Enter Phone Number" : "Enter Email address"}
            className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500 py-3 px-4"
          />
        </div>

      </div>

    </div>
  );
}