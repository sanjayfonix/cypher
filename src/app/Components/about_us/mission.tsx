"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const contentData = [
  {
    id: 1,
    icon: "/images/mission1.png",
    title: "Mission: What We Do...",
    description:
      "Unite digital intelligence with forensic investigative strategies to uncover credible, actionable insights that deliver client outcomes.",
    highlight: "Forensic. Value. Delivered.",
  },
  {
    id: 2,
    icon: "/images/mission2.png",
    title: "Purpose: Why we do it...",
    description:
      "To optimize the collective power of foundational open-source intelligence methods, a seasoned forensic investigative team and modern scalable infrastructure answer complex questions at scale.",
    highlight: "Inquisitive. Focused. Creative",
  },
  {
    id: 3,
    icon: "/images/mission3.png",
    title: "Vision: What we aspire to be...",
    description:
      "Unite digital intelligence with forensic investigative strategies to uncover credible, actionable insights that deliver client outcomes.",
    highlight: "Forensic. Value. Delivered.",
  },
  {
    id: 4,
    icon: "/images/mission4.png",
    title: "Our Ethical Commitment",
    description:
      "We hold ourselves to the highest ethical standards in everything we do. Integrity, respect, and responsibility guide our work in digital intelligence and forensic investigations.",
    highlight:
      "Integrity. Responsibility. Ethical Practice.",
  },
];

export default function MissionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Set up intersection observer to detect which section is in view
  useEffect(() => {
    const contentSections = document.querySelectorAll('.content-section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6, rootMargin: '-100px 0px' }
    );

    contentSections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      contentSections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative container bg-black flex flex-col md:flex-row items-start justify-between px-6 md:px-20 py-12 gap-12 h-[700px] mb-5 overflow-hidden"
    >
      {/* LEFT SIDE: FIXED RADAR */}
      <div className="sticky top-24 self-start w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] flex items-center justify-center">
        {/* Radar Container */}
        <div className="relative w-full h-full rounded-full border border-blue-500/60 flex items-center justify-center">
          {/* Concentric Circles */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="absolute rounded-full border border-blue-500/30"
              style={{
                width: `${(i * 100) / 4}%`,
                height: `${(i * 100) / 4}%`,
              }}
            />
          ))}

          {/* Center Icon */}
          <div className="absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full bg-black border border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center justify-center text-blue-400 text-2xl sm:text-3xl">
            <Image src="/images/missionimg2.png" alt="Mission1" width={52} height={52} />
          </div>

          {/* Rotating Radar Sweep */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full rounded-full"
            style={{
              background:
                "conic-gradient(rgba(59,130,246,0.7) 0deg, transparent 90deg)",
              clipPath: "circle(50%)",
            }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          />

          {/* Radar Icons - Highlight the active one */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className={`p-2 sm:p-3 rounded-full bg-black border ${activeIndex === 0 ? 'border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.9)]' : 'border-gray-600'} transition-all duration-500`}>
              <Image src="/images/mission1.png" alt="Mission1" width={32} height={32} />
            </div>
          </div>

          <div className="absolute top-1/2 -right-6 -translate-y-1/2">
            <div className={`p-2 sm:p-3 rounded-full bg-black border ${activeIndex === 1 ? 'border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.9)]' : 'border-gray-600'} transition-all duration-500`}>
              <Image src="/images/mission2.png" alt="Mission2" width={32} height={32} />
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
            <div className={`p-2 sm:p-3 rounded-full bg-black border ${activeIndex === 2 ? 'border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.9)]' : 'border-gray-600'} transition-all duration-500`}>
              <Image src="/images/mission3.png" alt="Mission3" width={32} height={32} />
            </div>
          </div>
          <div className="absolute top-1/2 -left-6 -translate-y-1/2">
            <div className={`p-2 sm:p-3 rounded-full bg-black border ${activeIndex === 3 ? 'border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.9)]' : 'border-gray-600'} transition-all duration-500`}>
              <Image src="/images/mission4.png" alt="Mission4" width={32} height={32} />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (Dynamic Content) - Scrollable container */}
      <div className="flex-1 max-w-lg relative h-[577px] overflow-y-auto scrollbar-hide">
        <div className="flex flex-col gap-16 py-4">
          {contentData.map((item, idx) => (
            <motion.div
              key={item.id}
              data-index={idx}
              className="content-section text-center md:text-left min-h-[400px] flex flex-col justify-center transition-opacity duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className={`p-3 rounded-full bg-black border ${activeIndex === idx ? 'border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.7)]' : 'border-gray-600'} transition-all duration-500`}>
                  <Image src={item.icon} alt={item.title} width={36} height={36} />
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                {item.title}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-6">
                {item.description}
              </p>
              <p className="text-[#167bff] font-semibold text-base sm:text-lg md:text-xl">
                {item.highlight}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}