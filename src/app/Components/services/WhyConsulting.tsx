"use client";
import { useEffect, useRef, useState } from "react";
import { ServicesIcon } from "@/assets/icon"; // adjust import
import Button from "../common/Button";

export const WhyConsulting = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      let currentIndex: number | null = null;
      let currentProgress = 0;

      sectionsRef.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const sectionCenter = rect.top + rect.height / 2;
        const distanceToCenter = Math.abs(windowHeight / 2 - sectionCenter);

        if (
          currentIndex === null ||
          distanceToCenter <
            Math.abs(
              window.innerHeight / 2 -
                (sectionsRef.current[currentIndex]?.getBoundingClientRect()
                  .top || 0)
            )
        ) {
          currentIndex = i;
        }

        if (i === currentIndex) {
          const start = windowHeight * 0.2;
          const end = windowHeight * 0.7;
          const visible = Math.min(Math.max(end - rect.top, 0), end - start);
          currentProgress = Math.min(Math.max(visible / (end - start), 0), 1);
        }
      });

      setActiveIndex(currentIndex);
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rows = [
    {
      text: "Leverage advanced intelligence techniques and unique data sources to enhance security, prevent fraud, and inform critical decisions",
      img: "/services1.png",
      maxW: "md:max-w-[32%]",
    },
    
    {
      text: "Unlock actionable insights and secure your future",
      img: "/services3.png",
      maxW: "md:max-w-[32%]",
    },
    {
      text: "Take command of your own destiny – build robust risk management frameworks, optimize investigative processes, and achieve a decisive competitive edge in today's dynamic landscape",
      img: "/services2.png",
      maxW: "md:max-w-[35%]",
    },
  ];

  return (
    <div className="py-4 px-2 sm:px-4 md:px-8 flex flex-col">
      {/* Title */}
      <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-bold font-sans text-center mt-20">
        Why Consulting & Advisory?
      </h2>

      <div className="flex flex-col gap-0 container relative">
        {/* Global vertical line */}
        <div
          className="absolute left-1/2 top-[4.625rem] w-[1px] bg-[#6D6D6D] rounded-[20px]"
          style={{
            // full height but cut to 2.5 blocks (half of 3rd block)
            height: `calc((100% - 4.625rem) - 8%)`,
          }}
        >
          <div
            className="absolute left-0 top-0 w-full bg-[#1057B5] transition-all duration-200"
            style={{
              height: `${
                activeIndex !== null
                  ? ((activeIndex + progress) / rows.length) * 100
                  : 0
              }%`,
            }}
          />
        </div>

        {rows.map((row, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={i}
              ref={(el) => {
                if (el) sectionsRef.current[i] = el;
              }}
              className={`relative flex px-4 md:px-16 justify-between items-center ${
                i === 0 ? "pt-[4.625rem]" : "pt-8"
              } gap-4`}
            >
              {/* Left text (for rows 1 & 3) */}
              {i !== 1 && (
                <div
                  className={`flex gap-1 max-w-[43%] text-xs sm:text-sm md:text-base lg:text-2xl font-normal ${row.maxW}`}
                  style={{
                    color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.3)",
                    transition: "color 0.3s ease",
                  }}
                >
                  <span className="font-bold">{i + 1}.</span>
                  <span>{row.text}</span>
                </div>
              )}

              {/* Circle OR ServicesIcon */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div
                  className={`w-3 h-3 rounded-full bg-[#6D6D6D] transition-all duration-300 ${
                    isActive ? "opacity-0 scale-50" : "opacity-100 scale-100"
                  }`}
                ></div>

                <div
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isActive && !(i === 0 && progress === 0)
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-50"
                  }`}
                >
                  <ServicesIcon />
                </div>
              </div>

              {/* Image */}
              <img
                src={row.img}
                className={`${i===2?'scale-x-[-1]':''} w-[40%] h-auto object-cover`}
                alt={`service-${i + 1}`}
              />

              {/* Right text (middle row) */}
              {i === 1 && (
                <div
                  className={`flex gap-1 max-w-[43%] text-xs sm:text-sm md:text-base lg:text-2xl font-normal ${row.maxW}`}
                  style={{
                    color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.3)",
                    transition: "color 0.3s ease",
                  }}
                >
                  <span className="font-bold">{i + 1}.</span>
                  <span>{row.text}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div className="relative -top-5 flex justify-center mt-8">
        <button className="custom-button with-shadow bg-[#1057B5]">
          Book a Consultation
        </button>
      </div>
    </div>
  );
};


