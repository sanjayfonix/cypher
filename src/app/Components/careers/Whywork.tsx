"use client";

import { Search, Lightbulb, TrendingUp, Globe } from "lucide-react";

export default function WhyWorkAtCyphr() {
  const items = [
    {
      icon: <Search className="w-10 h-10 text-white" />,
      title: "Impact That Matters",
      description:
        "Every project contributes to protecting businesses, institutions, and society from hidden risks.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-white" />,
      title: "Cutting-Edge Tools",
      description:
        "Work with advanced data intelligence, cryptography, and investigative technology.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-white" />,
      title: "Continuous Growth",
      description:
        "We value analytical minds who challenge the obvious and dig deeper.",
    },
    {
      icon: <Globe className="w-10 h-10 text-white" />,
      title: "Global Reach",
      description:
        "Collaborate with clients across industries—insurance, law, government, finance, and more.",
    },
  ];

  return (
    <section className="container text-white py-16 px-6 md:px-12 lg:px-28">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Work at Cyphr
        </h2>
        <p className="text-gray-300 text-base md:text-lg">
          At Cyphr, we blend investigative expertise, forensic intelligence,
          and technology. Every project uncovers truth, safeguards
          organizations, and drives meaningful impact.
        </p>
      </div>

      {/* Grid of Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-12">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
