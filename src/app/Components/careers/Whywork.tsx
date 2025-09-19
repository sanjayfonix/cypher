"use client";

import { Bulb, CareerSearch, Global, Stats } from "@/assets/icon";
import { Search, Lightbulb, TrendingUp, Globe } from "lucide-react";

export default function WhyWorkAtCyphr() {
  const items = [
    {
      icon: <CareerSearch/>,
      title: "Impact That Matters",
      description:
        "Every project contributes to protecting businesses, institutions, and society from hidden risks.",
    },
    {
      icon: <Bulb/>,
      title: "Cutting-Edge Tools",
      description:
        "Work with advanced data intelligence, cryptography, and investigative technology.",
    },
    {
      icon: <Stats/>,
      title: "Continuous Growth",
      description:
        "We value analytical minds who challenge the obvious and dig deeper.",
    },
    {
      icon: <Global />,
      title: "Global Reach",
      description:
        "Collaborate with clients across industries—insurance, law, government, finance, and more.",
    },
  ];

  return (
    <section className="container text-white py-16 px-6 md:px-12 lg:px-28">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-sans mb-4">
          Why Work at Cyphr
        </h2>
        <p className="text-[#F1F1F1] text-base font-inter font-normal ">
          At Cyphr, we blend investigative expertise, forensic intelligence,
          and technology. Every project uncovers truth, safeguards
          organizations, and drives meaningful impact.
        </p>
      </div>

      {/* Grid of Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-12">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-start gap-[35pxs]">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-2xl font-medium font-sans tracking-normal mb-[14px]">{item.title}</h3>
            <p className="text-[#A0A4AE] text-base font-inter font-normal tracking-normal max-w-[90%]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
