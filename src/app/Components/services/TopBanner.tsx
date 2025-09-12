import { inter } from "@/app/layout";
import Button from "../common/Button";


export const TopBanner = () => {
  return (
    <div className="relative w-full bg-[url('/grid.png')] bg-no-repeat p-20 bg-top bg-cover overflow-hidden flex flex-col items-center justify-start h-auto ">


      <div
        className="absolute pointer-events-none z-0 blur-[17px]  animate-blink"
        style={{
          width:'30%',
          height: '30%',
          top: -10,
          left: "-30%",
          transform: "translateX(-50%)",
          opacity: 0.5,
          rotate:'-180deg',
          borderRadius: "50%",
          backgroundColor: "#167BFF",
        }}
      />
      {/* <div
        className="absolute pointer-events-none z-0 blur-[26.2px] animate-blink"
        style={{
          width: '50%',
          height: 78,
          top: -43,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.6,
          borderRadius: "50%",
          backgroundColor: "#167BFF",
        }}
      />
      <div
        className="absolute pointer-events-none z-0 blur-[50px] animate-blink"
        style={{
          width: '50%',
          height: 192,
          top: -95,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.3,
          borderRadius: "50%",
          backgroundColor: "#167BFF",
        }}
      />
      <div
        className="absolute pointer-events-none z-0 blur-[271.2px] animate-blink"
        style={{
          width: '50%',
          height: 659,
          top: -351,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.4,
          borderRadius: "50%",
          backgroundColor: "#1470E8",
        }}
      />  */}

      {/* Content */}
      <div className="flex flex-col items-center justify-start gap-4 z-10 text-center max-w-[1200px]">
        {/* Headline */}
        <p className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white leading-tight font-sans">
          Transform Complex Data Into Your Strategic Advantage
        </p>

        {/* Subtitle */}
        <p className={`text-xs sm:text-base sm:text-sm md:text-[1rem] text-[#F1F1F1] ${inter.className}`}>
          Navigate digital risks and uncover hidden opportunities with investigator-led consulting<br/> and advisory services designed to protect your company, employees, and reputation.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 sm:gap-5 mt-[0.9rem] w-full sm:w-auto justify-center">
          <Button color="bg-[#1057B5]" text="Book a Consultation" isIcon={false} />
          <Button color="bg-transparent" text="Explore Our Services" isIcon={true} isBorder={true} />
        </div>
      </div>
    </div>
  );
};