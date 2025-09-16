'use client'
import { ArrowDownRightIcon, } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./IndustryButton";
import { Card, CardContent, CardTitle, CardDescription } from "./Card";
import { FindIcon, GuassMeterIcon, ProtectIcon, Toparrow, WeighScaleIcon } from "@/assets/icon";
import { GlassIcon } from "../home/GlassIcon";

export const WhyIndustriesCarrier = () => {
  return (
    <section className="relative bg-black w-full p-6 md:p-12 lg:p-20 flex flex-col lg:flex-row items-start justify-center gap-6 ">

      {/* Left Column: Text + Button */}
      <div className="flex flex-col gap-8 relative animate-fade-in opacity-0">
        <header className="flex flex-col gap-4">
          <h1 className="text-white font-UI-h3-bold text-3xl md:text-[length:var(--UI-h3-bold-font-size)] lg:tracking-[var(--UI-h3-bold-letter-spacing)] lg:leading-[var(--UI-h3-bold-line-height)] [font-style:var(--UI-h3-bold-font-style)]">
            Why Insurance Carriers Choose Cyphr
          </h1>

          <div className="flex flex-col gap-2 mt-2">
            <h2 className="text-[#157aff] font-UI-h5-bold text-[length:var(--UI-h5-bold-font-size)] tracking-[var(--UI-h5-bold-letter-spacing)] leading-[var(--UI-h5-bold-line-height)] [font-style:var(--UI-h5-bold-font-style)]">
              Problem
            </h2>
            <p className="text-gray-pure1 font-UI-b1-reg text-[length:var(--UI-b1-reg-font-size)] tracking-[var(--UI-b1-reg-letter-spacing)] leading-[var(--UI-b1-reg-line-height)] [font-style:var(--UI-b1-reg-font-style)] max-w-3xl">
              Managing risks and detecting fraud can be complex and time-sensitive. 
              With inconsistent claimant statements and rising fraudulent activity, 
              insurance carriers face challenges in making accurate assessments while 
              protecting their bottom line.
            </p>
          </div>
        </header>
<div>
        <Link href='/pages/contactus'><button  className="with-border custom-button bg-transparent">Contact our expert <Toparrow/></button></Link>
        </div>
      </div>

      {/* Right Column: Cards */}
      <div className="relative max-w-3xl">

        {/* Divider */}
        

        {/* Left Cards Column */}
        <div className="grid grid-cols-[1fr_auto_1fr] md:flex gap-4  md:gap-8 ">
        <div className="md:mt-20 flex flex-col gap-14 ">
          {/* Card 1 */}
          <Card className="flex flex-col flex-1 lg:flex-row items-start gap-6 bg-transparent border-none shadow-none ">
            <CardContent className="flex flex-col md:flex-row items-start gap-6 p-0 max-w-2xl">
              <GlassIcon size={60} icon={<FindIcon/>}></GlassIcon>
              <div className="flex flex-col gap-4 ">
                <CardTitle>Detect Fraud Early</CardTitle>
                <CardDescription>
                  Identify fraudulent claims quickly by analyzing digital footprints and claimant data, reducing risk before it impacts your business.
                </CardDescription>
              </div>
            </CardContent>
          </Card>

          <div className="flex-0.25 block h-px bg-gray-600" />
        
          {/* Card 2 */}
          <Card className="flex flex-1 items-start gap-6 bg-transparent border-none shadow-none">
            <CardContent className="flex md:flex-row flex-col items-start gap-6 p-0 ">
             <GlassIcon size={60} icon={<ProtectIcon/>}></GlassIcon>
              <div className="flex flex-col gap-4">
                <CardTitle>Build Better Risk Profiles</CardTitle>
                <CardDescription>
                  Create accurate risk profiles and assess client risks to make better underwriting decisions and improve risk management.
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </div>
       <div className="block w-0.25 bg-gray-600" />
        {/* Right Cards Column */}
        <div className="flex flex-col gap-14  mt-0 ">
          {/* Card 3 */}
          <Card className="flex flex-1 items-start gap-6 bg-transparent border-none shadow-none">
            <CardContent className="flex items-start gap-6 p-0 flex-col md:flex-row w-full">
              <GlassIcon size={60} icon={<GuassMeterIcon/>}></GlassIcon>
              <div className="flex flex-col gap-4">
                <CardTitle>Reduce Costs and Improve Efficiency</CardTitle>
                <CardDescription>
                  Minimize payouts and improve operational efficiency by detecting fraud and streamlining the claims process.
                </CardDescription>
              </div>
            </CardContent>
          </Card>

          <div className="flex-0.25 h-px bg-gray-600" />

          {/* Card 4 */}
          <Card className="flex flex-1 items-start gap-6 bg-transparent border-none shadow-none">
            <CardContent className="flex md:flex-row flex-col items-start gap-6 p-0 w-full ">
             <GlassIcon size={60} icon={<WeighScaleIcon/>}></GlassIcon>
              <div className="flex flex-col gap-4">
                <CardTitle>Ensure Legal Compliance</CardTitle>
                <CardDescription>
                  Ensure fraud detection and investigations are legally defensible, providing courtroom-ready reports and compliance.
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </div>
        </div>
      </div>
    </section>
  );
};

