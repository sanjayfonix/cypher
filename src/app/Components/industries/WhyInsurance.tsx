'use client'
import { ArrowDownRightIcon } from "lucide-react";
import React from "react";
import { Button } from "./IndustryButton";
import { Card, CardContent, CardTitle, CardDescription } from "./Card";
import { FindIcon, GuassMeterIcon, ProtectIcon, Toparrow, WeighScaleIcon } from "@/assets/icon";
import { GlassIcon } from "../home/GlassIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface WhyIndustriesCarrierProps {
  data: {
    title: string;
    problemTitle: string;
    problemDescription: string;
    benefits: Array<{
      title: string;
      description: string;
    }>;
  };
}

export const WhyIndustriesCarrier = ({ data }: WhyIndustriesCarrierProps) => {
  const router = useRouter();
  const icons = [FindIcon, ProtectIcon, GuassMeterIcon, WeighScaleIcon];

  return (
    <section className="relative bg-black w-full p-6 md:p-12 lg:p-20 flex flex-col lg:flex-row items-start justify-center gap-6 ">

      {/* Left Column: Text + Button */}
      <div className="flex flex-col gap-8 relative animate-fade-in opacity-0">
        <header className="flex flex-col gap-4">
          <h1 className="text-white font-UI-h3-bold text-3xl md:text-[length:var(--UI-h3-bold-font-size)] lg:tracking-[var(--UI-h3-bold-letter-spacing)] lg:leading-[var(--UI-h3-bold-line-height)] [font-style:var(--UI-h3-bold-font-style)]">
            {data.title}
          </h1>

          <div className="flex flex-col gap-2 mt-2">
            <h2 className="text-[#157aff] font-UI-h5-bold text-[length:var(--UI-h5-bold-font-size)] tracking-[var(--UI-h5-bold-letter-spacing)] leading-[var(--UI-h5-bold-line-height)] [font-style:var(--UI-h5-bold-font-style)]">
              {data.problemTitle}
            </h2>
            <p className="text-gray-pure1 font-UI-b1-reg text-[length:var(--UI-b1-reg-font-size)] tracking-[var(--UI-b1-reg-letter-spacing)] leading-[var(--UI-b1-reg-line-height)] [font-style:var(--UI-b1-reg-font-style)] max-w-3xl">
              {data.problemDescription}
            </p>
          </div>
        </header>

        <div>

          <button onClick={() => {
            const element = document.getElementById('industry-contact-us') || document.getElementById('contact-us');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
              router.push('/#contact-us');
              setTimeout(() => {
                const element = document.getElementById('contact-us');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 500);
            }
          }} className="custom-button with-border bg-transparent">
            Contact our expert <Toparrow />
          </button>

        </div>
      </div>

      {/* Right Column: Cards */}
      <div className="relative max-w-3xl">
        {/* IMPORTANT: stack on mobile, grid (3 cols) from md */}
        <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-start">

          {/* Left Cards Column */}
          <div className="flex flex-col gap-14 mt-0 md:mt-20">
            {data.benefits.slice(0, 2).map((benefit, index) => {
              const IconComponent = icons[index];
              return (
                <React.Fragment key={index}>
                  <Card className="self-start flex flex-col lg:flex-row items-start gap-6 bg-transparent border-none shadow-none ">
                    <CardContent className="flex flex-col md:flex-row items-start gap-6 p-0 max-w-2xl">
                      <div className="h-24 w-24 object-cover"><GlassIcon icon={<IconComponent />} size={60} /></div>
                      <div className="flex flex-col gap-4 ">
                        <CardTitle>{benefit.title}</CardTitle>
                        <CardDescription>
                          {benefit.description}
                        </CardDescription>
                      </div>
                    </CardContent>
                  </Card>

                  {index === 0 && <div className="hidden w-full h-0 border-[#5B5B5B] border md:block" />}
                </React.Fragment>
              );
            })}
          </div>

          {/* vertical divider only on md+ */}
          <div className="block h-full w-0 border border-[#5B5B5B]" />

          {/* Right Cards Column */}
          <div className="flex flex-col gap-14 mt-0">
            {data.benefits.slice(2, 4).map((benefit, index) => {
              const IconComponent = icons[index + 2];
              return (
                <React.Fragment key={index + 2}>
                  <Card className="self-start flex flex-1 items-start gap-6 bg-transparent border-none shadow-none">
                    <CardContent className="flex items-start gap-6 p-0 flex-col md:flex-row w-full">
                      <div className="h-24 w-24 object-cover"><GlassIcon icon={<IconComponent />} size={60} /></div>
                      <div className="flex flex-col gap-4">
                        <CardTitle>{benefit.title}</CardTitle>
                        <CardDescription>
                          {benefit.description}
                        </CardDescription>
                      </div>
                    </CardContent>
                  </Card>

                  {index === 0 && <div className="hidden w-full h-0 border-[#5B5B5B] border md:block" />}
                </React.Fragment>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
