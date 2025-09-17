"use client";

import { Laptop, Fingerprint, Users } from "lucide-react";

export default function CurrentOpportunities() {
  const opportunities = [
    {
      icon: <Laptop className="w-12 h-12 text-[#167BFF]" />,
      title: "Data Intelligence Analyst",
      description:
        "Data Intelligence involves analyzing large datasets using machine learning, AI, and data mining to extract actionable insights, identify trends, and inform decisions.",
    },
    {
      icon: <Fingerprint className="w-12 h-12 text-[#167BFF]" />,
      title: "Forensic Data Engineer",
      description:
        "A Forensic Data Engineer retrieves, analyzes, and preserves digital evidence from systems and networks to support legal investigations and cybercrime cases.",
    },
    {
      icon: <Users className="w-12 h-12 text-[#167BFF]" />,
      title: "Client Engagement Manager",
      description:
        "A Client Engagement Manager oversees client relationships, ensuring satisfaction, addressing needs, and driving business growth through tailored solutions and communication.",
    },
    {
      icon: <Users className="w-12 h-12 text-[#167BFF]" />,
      title: "OSINT Investigator",
      description:
        "An OSINT Investigator collects and analyzes publicly available information from online sources to support investigations, uncover threats, and gather intelligence.",
    },
    {
      icon: <Users className="w-12 h-12 text-[#167BFF]" />,
      title: "Security Intelligence Analyst",
      description:
        "Corporate security teams use OSINT to detect threats to people, assets, and reputation. Your work helps safeguard the business, mitigate risks, and ensure operational continuity.",
    },
    {
      icon: <Users className="w-12 h-12 text-[#167BFF]" />,
      title: "Private Investigator",
      description:
        "Private investigators increasingly rely on OSINT to locate individuals, uncover hidden assets, and verify facts. Using public records and social media, you enhance investigations and help clients solve complex cases.",
    },
  ];

  return (
    <section className="container text-white py-16 px-6 md:px-12 lg:px-28">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Left Section */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Current Opportunities
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Explore a range of exciting career opportunities with us. We are
              constantly looking for talented individuals to join our team in
              various roles. Whether you're an experienced professional or just
              starting your career, we offer dynamic and challenging positions
              that allow you to grow, innovate, and make an impact.
            </p>
            <button className="bg-gradient-to-r from-[#030A14] to-[#167BFF] border border-[#6D6D6D99] text-white px-6 py-3 rounded-full w-fit hover:scale-105 transition-transform">
            Apply Now
          </button>
          </div>
          
        </div>

        {/* Right Section (Cards) */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {opportunities.map((item, idx) => (
            <div
              key={idx}
              className="rounded-[32px] border border-[#6D6D6D99] p-8 bg-gradient-to-b from-[#030A14] to-[#167BFF]/40 flex flex-col items-center text-center hover:scale-[1.02] transition-transform"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
