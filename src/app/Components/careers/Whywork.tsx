"use client";

import { Bulb, CareerSearch, Global, Stats } from "@/assets/icon";

export default function WhyWorkAtcyphr() {
  const items = [
    {
      icon: <CareerSearch />,
      title: "Impact That Matters",
      description:
        "Every project contributes to protecting businesses, institutions, and society from hidden risks.",
    },
    {
      icon: <Bulb />,
      title: "Cutting-Edge Tools",
      description:
        "Work with advanced data intelligence, cryptography, and investigative technology.",
    },
    {
      icon: <Stats />,
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
    <section className="container text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-10 lg:px-28">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans mb-3 sm:mb-4">
          Why Work at Cyphr
        </h2>
        <p className="text-[#F1F1F1] text-sm sm:text-base leading-relaxed font-inter font-normal">
          At Cyphr, we blend investigative expertise, forensic intelligence, and
          technology. Every project uncovers truth, safeguards organizations, and
          drives meaningful impact.
        </p>
      </div>

      {/* Grid of Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mt-10 sm:mt-12">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start gap-4 sm:gap-5 text-left"
          >
            {/* Icon */}
            <div className="mb-3 sm:mb-4">{item.icon}</div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-semibold font-sans tracking-tight">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-[#A0A4AE] text-sm sm:text-base font-inter font-normal leading-relaxed max-w-[95%]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
