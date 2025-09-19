"use client";

import { useEffect, useState } from "react";
import HowItWorks from "@/app/Components/search/Howwork";
import SearchResultTab from "@/app/Components/home/SearchResultTab";
import { Facebook, Mail, User } from "lucide-react";

export default function HomeBanner() {
  // ✅ Array of result cards (you can easily expand it)
  const tabsData = [
    {
      icon: User,
      title: "John Doe",
      queryVal: "Find Account",
      date: "2025-09-11",
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: true, isValue: true },
        { label: "Facebook Login Option:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
      ],
    },
    {
      icon: Facebook,
      title: "Jane Smith",
      queryVal: "Reset Password",
      date: "2025-09-10",
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: true, isValue: true },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
      ],
    },
    {
      icon: Mail,
      title: "Alex Johnson",
      queryVal: "Update Email",
      date: "2025-09-09",
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: true, isValue: true },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
        { label: "Facebook Login Option:", isValid: false, isValue: false },
      ],
    },
    {
      icon: User,
      title: "Emily Davis",
      queryVal: "Verify Account",
      date: "2025-09-08",
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: true, isValue: false },
        { label: "Facebook Login Option:", isValid: false, isValue: true },
        { label: "Facebook Login Option:", isValid: true, isValue: true },
      ],
    },
    {
      icon: Facebook,
      title: "Michael Brown",
      queryVal: "Deactivate Account",
      date: "2025-09-07",
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: true, isValue: true },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
      ],
    },
    {
      icon: Mail,
      title: "Sarah Wilson",
      queryVal: "Change Password",
      date: "2025-09-06",
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: true, isValue: true },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
        { label: "Facebook Login Option:", isValid: false, isValue: true },
      ],
    },
  ];

  return (
    <>
      <div className="relative w-full bg-[url('/grid.png')] bg-no-repeat bg-top bg-cover overflow-hidden flex flex-col items-center justify-start py-16 sm:py-20 px-4 sm:px-12 lg:px-28">
        {/* Glow Background Layers */}
        <div className="absolute pointer-events-none z-0 blur-[185.1px] -top-[31px] opacity-60 w-full h-10 bg-[#1057B5]" />
        <div
          className="absolute pointer-events-none z-1 blur-[3px] animate-blink delay-75"
          style={{
            width: "30%",
            height: 26,
            top: -16,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.9,
            borderRadius: "50%",
            backgroundColor: "#E8F2FF",
          }}
        />
        <div
          className="absolute pointer-events-none z-0 blur-[26.2px] animate-glow2 "
          style={{
            width: "50%",
            height: 78,
            top: -43,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.6,
            borderRadius: "50%",
            backgroundColor: "#167BFF",
          }}
        />
        <div
          className="absolute pointer-events-none z-0 blur-[50px] animate-glow2"
          style={{
            width: "50%",
            height: 192,
            top: -95,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.3,
            borderRadius: "50%",
            backgroundColor: "#167BFF",
          }}
        />
        <div
          className="absolute pointer-events-none z-0 blur-[271.2px] animate-glow2"
          style={{
            width: "50%",
            height: 659,
            top: -351,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.4,
            borderRadius: "50%",
            backgroundColor: "#1470E8",
          }}
        />

        {/* Heading Section */}
        <div className="flex flex-col items-center justify-start gap-4 sm:gap-6 z-10 text-center max-w-[900px]">
          <p className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
            How it works
          </p>

          <p className="text-xs sm:text-base md:text-[1rem] text-[#F1F1F1] leading-relaxed px-2">
            Using advanced algorithms, OSINT methodology and investigative <br className="hidden sm:block" />
            technologies, Webutation scours social media, public records, and other <br className="hidden sm:block" />
            digital footprints to provide actionable intelligence.
          </p>
        </div>

        <HowItWorks />
      </div>

      {/* Search Results Title */}
      <div className="font-sans text-2xl sm:text-3xl font-bold text-white text-center underline decoration-gray-600 underline-offset-4 mt-10">
        Search Results
      </div>

      {/* Search Result Grid */}
      <div className="grid p-4 sm:p-6 gap-4 sm:gap-6 container grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {tabsData.map((tab, idx) => (
          <SearchResultTab
            key={idx}
            icon={tab.icon}
            title={tab.title}
            queryVal={tab.queryVal}
            date={tab.date}
            rowsData={tab.rowsData}
          />
        ))}
      </div>
    </>
  );
}
