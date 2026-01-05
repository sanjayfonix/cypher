'use client'

import { Toparrow } from "@/assets/icon";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface ButtonProps {
  onClickConsult: () => void;
}

interface TopBannerProps {
  content: {
    heading: {
      id: number;
      text: string;
    },
    description: {
      id: number;
      list: string[];
    },
    primaryButton: {
      id: number;
      text: string;
    },
    secondaryButton: {
      id: number;
      text: string;
    },
  };
}



export const TopBanner = ({ content }: TopBannerProps) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="relative w-full bg-[url('/grid.png')] bg-no-repeat bg-top bg-cover p-8 sm:p-16 lg:p-20 overflow-hidden flex flex-col items-center justify-start">
      {/* Quarter Blur - Top Left */}
      <div
        className="absolute pointer-events-none -z-1 animate-glow2 w-[250px] sm:w-[320px] h-[220px] sm:h-[280px]"
        style={{
          top: "-100px",
          left: "-150px",
          background: "#167BFF",
          opacity: 0.5,
          filter: "blur(50px)",
          borderRadius: "50%",
          transform: "rotate(-180deg)",
        }}
      />

      {/* Quarter Blur - Top Right */}
      <div
        className="absolute right-[-140px] sm:right-[-140px] pointer-events-none z-2 animate-glow2 w-[250px] sm:w-[320px] h-[220px] sm:h-[280px]"
        style={{
          top: "-100px",
          background: "#167BFF",
          opacity: 0.5,
          filter: "blur(50px)",
          borderRadius: "50%",
          transform: "rotate(-180deg)",
        }}
      />

      {/* Content */}
      <div className="flex bg-transparent flex-col items-center justify-start gap-4 z-10 text-center max-w-[90%] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1200px]">
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl max-w-5xl font-bold text-white leading-tight font-sans">
          {content.heading.text}
        </p>

        <ul className="text-xs sm:text-sm md:text-base lg:text-[1rem] text-[#F1F1F1] max-w-1/2   list-disc list-inside space-y-1">
          {content.description.list.map((item, index) => (
            <p key={index}>{item}</p>
            // <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="flex flex-col w-full sm:flex-row gap-8 sm:gap-5 mt-4 justify-start sm:justify-center">

          <button onClick={() => {
            const element = document.getElementById('how-it-works');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
              router.push('/#how-it-works');
              setTimeout(() => {
                const element = document.getElementById('how-it-works');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 500);
            }
          }} className="custom-button with-shadow h-fit bg-[#1057B5] sm:w-fit">
            {content.primaryButton.text}
          </button>


          <button
            onClick={() => {
              const navToSection = document.getElementById('contact-us');
              if (navToSection) {
                navToSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="custom-button with-border sm:w-fit h-fit bg-transparent"
          >
            {content.secondaryButton.text} <Toparrow />
          </button>
        </div>
      </div>
    </div>
  );
};




