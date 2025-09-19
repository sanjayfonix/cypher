"use client";

import { Toparrow } from "@/assets/icon";
import { Laptop, Fingerprint, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";

export default function CurrentOpportunities() {
  const router = useRouter();

  const opportunities = [
    { id: 1, slug: "data-intelligence-analyst", icon: <Laptop className="w-12 h-12 text-[#167BFF]" />, title: "Data Intelligence Analyst", description: "Data Intelligence involves analyzing large datasets using machine learning, AI, and data mining to extract actionable insights, identify trends, and inform decisions." },
    { id: 2, slug: "forensic-data-engineer", icon: <Fingerprint className="w-12 h-12 text-[#167BFF]" />, title: "Forensic Data Engineer", description: "A Forensic Data Engineer retrieves, analyzes, and preserves digital evidence from systems and networks to support legal investigations and cybercrime cases." },
    { id: 3, slug: "client-engagement-manager", icon: <Users className="w-12 h-12 text-[#167BFF]" />, title: "Client Engagement Manager", description: "A Client Engagement Manager oversees client relationships, ensuring satisfaction, addressing needs, and driving business growth through tailored solutions and communication." },
    { id: 4, slug: "osint-investigator", icon: <Users className="w-12 h-12 text-[#167BFF]" />, title: "OSINT Investigator", description: "An OSINT Investigator collects and analyzes publicly available information from online sources to support investigations, uncover threats, and gather intelligence." },
    { id: 5, slug: "security-intelligence-analyst", icon: <Users className="w-12 h-12 text-[#167BFF]" />, title: "Security Intelligence Analyst", description: "Corporate security teams use OSINT to detect threats to people, assets, and reputation. Your work helps safeguard the business, mitigate risks, and ensure operational continuity." },
    { id: 6, slug: "private-investigator", icon: <Users className="w-12 h-12 text-[#167BFF]" />, title: "Private Investigator", description: "Private investigators increasingly rely on OSINT to locate individuals, uncover hidden assets, and verify facts. Using public records and social media, you enhance investigations and help clients solve complex cases." },
  ];

  // group into pairs
  const pairs = Array.from({ length: Math.ceil(opportunities.length / 2) }, (_, i) =>
    opportunities.slice(i * 2, i * 2 + 2)
  );

  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const [scrollY, setScrollY] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      const cardHeight = cardRef.current.offsetHeight;
      // ✅ height = 2 cards stacked + margin
      setStepHeight(cardHeight  + 48);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || stepHeight === 0) return;
      const rect = containerRef.current.getBoundingClientRect();
      const offsetTop = -rect.top;
      setScrollY(offsetTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stepHeight]);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: 2000 }}
    >
      <div
        className="container text-white py-16 sticky top-0 flex"
        style={{ height: 623 }}
      >
        {/* Left Section (Pinned) */}
        <div className="lg:col-span-2 w-2/5 pr-6 flex flex-col justify-center">
          <h2 className="text-3xl md:text-[48px] font-bold font-sans mb-8">
            Current Opportunities
          </h2>
          <p className="text-[#F1F1F1] tracking-normal mb-6 font-inter font-normal text-base max-w-[90%]">
            Explore a range of exciting career opportunities with us. We are
            constantly looking for talented individuals to join our team in
            various roles. Whether you're an experienced professional or just
            starting your career, we offer dynamic and challenging positions
            that allow you to grow, innovate, and make an impact.
          </p>
        </div>

        {/* Right Section (scrolling pairs) */}
        <div className="lg:col-span-3 w-3/5 relative overflow-hidden">
          <div
            className="transition-transform duration-300 w-full"
            style={{
              transform: `translateY(-${Math.floor(scrollY / stepHeight) * stepHeight}px)`,
              height: `${2000}px`,
            }}
          >
            {pairs.map((pair, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                
              >
                {pair.map((item, i) => (
                  <div
                    key={item.id}
                    ref={idx === 0 && i === 0 ? cardRef : null}
                    className="rounded-[32px] mb-4 border border-[#6D6D6D99] p-11 bg-gradient-to-b from-[#030A14] to-[#167BFF]/40 flex flex-col items-center text-center hover:scale-[1.02] transition-transform"
                  >
                    <div className="mb-8">{item.icon}</div>
                    <h3 className="text-[24px] font-medium font-sans text-white mb-[14px] max-w-[80%]">
                      {item.title}
                    </h3>
                    <p className="text-[#A0A4AE] text-base font-normal font-inter tracking-normal max-w-[95%] mb-8">
                      {item.description}
                    </p>
                    <button
                      onClick={() =>
                        router.push(`/pages/careers/jobdisc/${item.id}?slug=${item.slug}`)
                      }
                      className="hidden lg:block min-w-[130px] mt-4 custom-button with-border bg-transparent"
                    >
                      Read full job description
                      <Toparrow />
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
