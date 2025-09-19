"use client";

import React from "react";
import Image from "next/image";
import { GlassIcon } from "../home/GlassIcon";
import {
  AccreditIcon,
  BookIcon,
  EthicalIcon,
  PracticalIcon,
  WeighScaleIcon,
} from "@/assets/icon";

const features = [
  {
    icon: <AccreditIcon />,
    title: "Accredited & Industry-Recognized",
    description:
      "All programs meet CE and CLE requirements from recognized accrediting bodies.",
  },
  {
    icon: <BookIcon />,
    title: "Expert-Led Training Based on Real Case Studies",
    description:
      "Learn from seasoned investigators with hands-on experience in the field.",
  },
  {
    icon: <PracticalIcon />,
    title: "Practical Checklists, Frameworks & Roadmaps",
    description:
      "Take away actionable tools you can implement immediately in your work.",
  },
  {
    icon: <WeighScaleIcon />,
    title:
      "Designed for Insurance, Legal, Corporate, and Investigative Professionals",
    description:
      "Curriculum tailored specifically for your industry's unique challenges and requirements.",
  },
  {
    icon: <EthicalIcon />,
    title: "Ethical, Transparent, Legally Defensible Insights",
    description:
      "All techniques comply with legal standards and ethical guidelines for professional use.",
  },
];

export default function EducationPrograms() {
  return (
    <section className="container text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-8 leading-snug">
          Why Choose Cyphr&apos;s Educational Programs?
        </h2>
        <p className="text-[#F1F1F1] text-sm sm:text-base font-normal font-inter px-2 sm:px-0">
          Our comprehensive approach ensures you receive the highest quality
          training with practical, immediately applicable knowledge.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[22px] items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            src="/images/Education.png"
            alt="3D Globe"
            width={613}
            height={604}
            className="rounded-lg max-w-[90%] sm:max-w-[70%] md:max-w-[613px] h-auto"
            priority
          />
        </div>

        {/* Right Features */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 sm:space-x-4"
            >
              <div className="flex-shrink-0">
                <GlassIcon icon={feature.icon} size={50} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl text-white font-inter font-medium leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[#A0A4AE] text-xs sm:text-sm md:text-base font-normal font-inter max-w-[95%]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
