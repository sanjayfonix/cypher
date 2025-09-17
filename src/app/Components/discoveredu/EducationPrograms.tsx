"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, ClipboardCheck, Scale, BadgeCheck, FileText } from "lucide-react";

const features = [
  {
    icon: <BadgeCheck size={28} className="text-blue-400" />,
    title: "Accredited & Industry-Recognized",
    description: "All programs meet CE and CLE requirements from recognized accrediting bodies.",
  },
  {
    icon: <BookOpen size={28} className="text-blue-400" />,
    title: "Expert-Led Training Based on Real Case Studies",
    description: "Learn from seasoned investigators with hands-on experience in the field.",
  },
  {
    icon: <ClipboardCheck size={28} className="text-blue-400" />,
    title: "Practical Checklists, Frameworks & Roadmaps",
    description: "Take away actionable tools you can implement immediately in your work.",
  },
  {
    icon: <Scale size={28} className="text-blue-400" />,
    title: "Designed for Insurance, Legal, Corporate, and Investigative Professionals",
    description: "Curriculum tailored specifically for your industry's unique challenges and requirements.",
  },
  {
    icon: <FileText size={28} className="text-blue-400" />,
    title: "Ethical, Transparent, Legally Defensible Insights",
    description: "All techniques comply with legal standards and ethical guidelines for professional use.",
  },
];

export default function EducationPrograms() {
  return (
    <section className="container text-white py-16 md:px-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose Cyphr&apos;s Educational Programs?
        </h2>
        <p className="text-gray-300 text-base md:text-lg">
          Our comprehensive approach ensures you receive the highest quality training 
          with practical, immediately applicable knowledge.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            src="/images/Education.png" // <-- put your 3D globe image in public/images
            alt="3D Globe"
            width={450}
            height={450}
            className="rounded-lg"
          />
        </div>

        {/* Right Features */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
