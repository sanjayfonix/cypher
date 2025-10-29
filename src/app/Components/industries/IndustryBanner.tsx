'use client'
import { Shield, Toparrow,IndustryIcon1, Peoples, QuestionIcon  } from "@/assets/icon";
import Link from "next/link";
import { AnimatedPath } from "../home/AnimatePath";
import { GlassIcon } from "../home/GlassIcon";

interface IndustryBannerProps {
  content:{
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


export const IndustryBanner = ({content}:IndustryBannerProps) => {
  return (
    <div className="relative w-full bg-[url(/grid.png)] bg-no-repeat flex flex-col gap-8 px-4 lg:px-20 md:px-12 py-5 overflow-hidden">
      {/* Quarter Blur - Top Left */}
      <div
        className="absolute pointer-events-none  animate-glow2 w-[250px] sm:w-[320px] h-[220px] sm:h-[280px]"
        style={{
          top: "-100px",
          left: "-150px",
          background: "#167BFF",
          opacity: 0.5,
          filter: "blur(50px)",
          borderRadius: "50%",
        }}
      />

      {/* Content */}
      <div className="relative w-full md:w-[85%] flex flex-col gap-4 z-20">
        <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
          {/* Stop Fraud. Protect Profits. Strengthen Trust. */}
          {content.heading.text}
        </h1>

        <p className="font-inter font-normal max-w-[93vw] md:max-w-[800px] text-sm sm:text-base md:text-lg text-[#F1F1F1]">
           {content.description.list.map((item, index) => (
            <p  key={index}>{item}</p>
            // <li key={index}>{item}</li>
          ))}
        </p>

        {/* Buttons */}
        <div className="relative flex flex-col sm:flex-row gap-4 mt-6 bg-black sm:w-fit w-full z-20 rounded-2xl">
          <Link href={"/pages/search"}>
            <button className="custom-button with-shadow w-full sm:w-fit bg-[#1057B5]">
              Start Investigating
            </button>
          </Link>
          <Link href={'/pages/contactus'}><button className="w-full sm:w-fit with-border custom-button bg-transparent">
            Talk to an Expert <Toparrow />
          </button></Link>
        </div>
      </div>
    </div>
  );
};



export const AnimationLoop = () => {
  return (
    <div className="block left-0 top-20 w-full overflow-hidden z-10">
      <svg
        className="w-full h-fit block"
        preserveAspectRatio="none"
        viewBox="0 -50 1440 600"
      >
        {/* --- Glowing circles --- */}
        <circle
          cx={1250}
          cy={280}
          className="blur-[40px]"
          strokeWidth={20}
          r={50}
          stroke="#157AFF99"
          filter="url(#glow)"
        />

        <circle
          cx={970}
          cy={358}
          className="blur-[40px]"
          strokeWidth={20}
          r={50}
          stroke="#157AFF99"
          filter="url(#glow)"
        />

        <circle
          cx={1180}
          cy={48}
          className="blur-[40px]"
          strokeWidth={20}
          r={50}
          stroke="#157AFF99"
          filter="url(#glow)"
        />

        {/* --- Glass icons --- */}
        <foreignObject x="1209" y="240" width={200} height={200}>
          <GlassIcon size={84} icon={<Shield />} />
        </foreignObject>

        <foreignObject x="1137" y="3" width={200} height={200}>
          <GlassIcon size={84} icon={<IndustryIcon1 />} />
        </foreignObject>

        <foreignObject x="929" y="320" width={200} height={200}>
          <GlassIcon size={84} icon={<QuestionIcon />} />
        </foreignObject>

        {/* --- Animated paths --- */}
        <g mask="url(#pointersMask)">
          <AnimatedPath
            speed={1}
            colorId="blue-1"
            gradient={["#016FFF", "#093C80"]}
            d="M0.018569 203.466H948.446C958.731 203.466 968.766 200.295 977.182 194.384L1239.62 10.0775C1248.03 4.16653 1258.07 0.994873 1268.35 0.994873H1487.43"
          />
          <AnimatedPath
            speed={4}
            colorId="blue-1"
            gradient={["#016FFF", "#093C80"]}
            d="M-0.000244141 284H1665"
          />
          <AnimatedPath
            speed={2}
            colorId="blue-1"
            gradient={["#016FFF", "#093C80"]}
            d="M0.0185547 444.523H248.582C261.03 444.523 273.029 439.881 282.235 431.503L341.529 377.544C350.735 369.166 362.734 364.523 375.182 364.523H1037.03C1046.58 364.523 1055.93 367.259 1063.97 372.406L1293.28 519.113C1301.33 524.26 1310.68 526.995 1320.23 526.995H1487.43"
          />
        </g>

        {/* --- Filters & Masks --- */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="40" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <mask id="pointersMask">
            <rect x="0" y="0" width="1440" height="700" fill="white" />
            <circle cx="1250" cy="240" r="61.5" fill="black" />
            <circle cx="970" cy="380" r="43.5" fill="black" />
            <circle cx="1180" cy="50" r="43.5" fill="black" />
          </mask>
        </defs>
      </svg>
    </div>
  );
};
