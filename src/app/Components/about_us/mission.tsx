"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { PointerGrid } from "../home/GridAnimation";

const contentData = [
  { id: 1, icon: "/images/mission1.png", title: "Mission: What We Do...", description: "Unite digital intelligence with forensic investigative strategies to uncover credible, actionable insights that deliver client outcomes.", highlight: "Forensic. Value. Delivered." },
  { id: 2, icon: "/images/mission2.png", title: "Purpose: Why we do it...", description: "To optimize the collective power of foundational open-source intelligence methods, a seasoned forensic investigative team and modern scalable infrastructure answer complex questions at scale.", highlight: "Inquisitive. Focused. Creative" },
  { id: 3, icon: "/images/mission3.png", title: "Vision: What we aspire to be...", description: "Unite digital intelligence with forensic investigative strategies to uncover credible, actionable insights that deliver client outcomes.", highlight: "Forensic. Value. Delivered." },
  { id: 4, icon: "/images/mission4.png", title: "Our Ethical Commitment", description: "We hold ourselves to the highest ethical standards in everything we do. Integrity, respect, and responsibility guide our work in digital intelligence and forensic investigations.", highlight: "Integrity. Responsibility. Ethical Practice." },
];

export default function MissionSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const len = contentData.length;

    const calcIndexFromScroll = () => {
      // === NEW: on small devices (mobile), disable scroll-based updates ===
      // Tailwind's md breakpoint ~ 768px; change threshold here if you want a different cutoff.
      if (typeof window !== "undefined" && window.innerWidth < 900) {
        return;
      }
      // ===================================================================

      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportCenterY = window.innerHeight / 2;

      const rel = (viewportCenterY - rect.top) / (rect.height || 1);
      const clamped = Math.max(0, Math.min(1, rel));

      const rawIndex = Math.floor(clamped * len);
      const newIndex = Math.min(len - 1, rawIndex);

      setActiveIndex((prev) => (prev !== newIndex ? newIndex : prev));
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calcIndexFromScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    calcIndexFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const currentItem = contentData[activeIndex];

  return (
    <section
      ref={containerRef}
      className="overflow-hidden relative container bg-black mx-auto lg:mx-0 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-20 py-12 gap-10 sm:gap-12 md:gap-16 lg:gap-20 h-auto min-h-[700px] mb-5"
    >
      <div
              className="absolute translate-x-[50%] sm:flex  top-12 right-0 hidden lg:top-[-2%]  z-30   items-center justify-center"
              
            >
              <div className="relative flex items-center justify-center">
                {/* Glow behind */}
                <div
                  className="absolute blur-[10px] animate-glow2 h-[220px] w-[220px] md:h-[170px] md:w-[170px]"
                  style={{
                    
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(21,122,255,0.7) 0%, rgba(21,122,255,0) 70%)",
                    zIndex: -1,
                  }}
                />
                <div className="relative -left-8">
                  <PointerGrid
      
                    width={150}
                    height={150}
                  />
                </div>
              </div>
            </div>

     
      {/* LEFT SIDE: RADAR */}
      <div className="sticky left-0 md:left-[30%] lg:left-0 lg:top-24 self-start w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] flex items-center justify-center mx-auto md:mx-0">
        <div className="relative w-full h-full rounded-full border border-blue-500/60 flex items-center justify-center">
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
          <div className="cursor-pointer absolute w-[50px] z-20 h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] rounded-full bg-black border border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center justify-center text-blue-400">
            <Image src="/images/missionMiddle.png" alt="Mission Center" width={30} height={20} className="w-[50%] h-[35%] ml-2" />
          </div>

          {/* Radar Sweep */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full rounded-full"
            style={{
              background: "conic-gradient(rgba(59,130,246,0.7) 0deg, transparent 90deg)",
              clipPath: "circle(50%)",
            }}
            animate={{ rotate: activeIndex * 90 - 30 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          />

          {/* Radar Icons */}
          <div
            className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={() => setActiveIndex(0)}
          >
            <div
              className={`cursor-pointer p-2 sm:p-3 rounded-full bg-black border ${
                activeIndex === 0
                  ? "border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.9)]"
                  : "border-gray-600"
              } transition-all duration-500`}
            >
              <Image src="/images/mission1.png" alt="Mission1" width={28} height={28} />
            </div>
          </div>

          <div
            className="absolute top-1/2 -right-5 sm:-right-6 -translate-y-1/2 cursor-pointer"
            onClick={() => setActiveIndex(1)}
          >
            <div
              className={`cursor-pointer p-2 sm:p-3 rounded-full bg-black border ${
                activeIndex === 1
                  ? "border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.9)]"
                  : "border-gray-600"
              } transition-all duration-500`}
            >
              <Image src="/images/mission2.png" alt="Mission2" width={28} height={28} />
            </div>
          </div>

          <div
            className="absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={() => setActiveIndex(2)}
          >
            <div
              className={`cursor-pointer p-2 sm:p-3 rounded-full bg-black border ${
                activeIndex === 2
                  ? "border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.9)]"
                  : "border-gray-600"
              } transition-all duration-500`}
            >
              <Image src="/images/mission3.png" alt="Mission3" width={28} height={28} />
            </div>
          </div>

          <div
            className="absolute top-1/2 -left-5 sm:-left-6 -translate-y-1/2 cursor-pointer"
            onClick={() => setActiveIndex(3)}
          >
            <div
              className={`cursor-pointer p-2 sm:p-3 rounded-full bg-black border ${
                activeIndex === 3
                  ? "border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.9)]"
                  : "border-gray-600"
              } transition-all duration-500`}
            >
              <Image src="/images/mission4.png" alt="Mission4" width={28} height={28} />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Active Content */}
      <div className="flex-1 relative lg:top-0 w-full max-w-xl flex flex-col justify-center">
        <motion.div
          key={currentItem.id}
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div
            className={`p-3 rounded-full bg-black border inline-block mb-6 ${
              activeIndex === currentItem.id - 1
                ? "border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.7)]"
                : "border-gray-600"
            }`}
          >
            <Image src={currentItem.icon} alt={currentItem.title} width={32} height={32} />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            {currentItem.title}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6">
            {currentItem.description}
          </p>
          <p className="text-[#167bff] font-semibold text-base sm:text-lg md:text-xl">
            {currentItem.highlight}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
