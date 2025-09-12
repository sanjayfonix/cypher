import { inter } from "@/app/layout";
import Button from "../common/Button";

export const TopBanner = () => {
  return (
    <div className="relative w-full bg-[url('/grid.png')] bg-no-repeat p-20 bg-top bg-cover overflow-hidden flex flex-col items-center justify-start h-auto ">

      {/* Quarter Blur - Top Left */}
      <div
        className="absolute pointer-events-none z-0 animate-glow"
        style={{
          width: "542px",
          height: "341px",
          top: "-170px",
          left: "-270px",
          background: "#167BFF",
          opacity: 0.5,
          filter: "blur(287px)",
          borderRadius: "50%",
          transform: "rotate(-180deg)",
        }}
      />

      {/* Quarter Blur - Top Right */}
      <div
        className="absolute pointer-events-none z-0 animate-glow"
        style={{
          width: "542px",
          height: "341px",
          top: "-170px",
          right: "-270px",
          background: "#167BFF",
          opacity: 0.5,
          filter: "blur(287px)",
          borderRadius: "50%",
          transform: "rotate(-180deg)",
        }}
      />

      {/* Content */}
      <div className="flex flex-col items-center justify-start gap-4 z-10 text-center max-w-[1200px]">
        <p className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white leading-tight font-sans">
          Transform Complex Data Into Your Strategic Advantage
        </p>

        <p className={`text-xs sm:text-base sm:text-sm md:text-[1rem] text-[#F1F1F1] ${inter.className}`}>
          Navigate digital risks and uncover hidden opportunities with investigator-led consulting<br/>
          and advisory services designed to protect your company, employees, and reputation.
        </p>

        <div className="flex gap-3 sm:gap-5 mt-[0.9rem] w-full sm:w-auto justify-center">
          <Button color="bg-[#1057B5]" text="Book a Consultation" isIcon={false} />
          <Button color="bg-transparent" text="Explore Our Services" isIcon={true} isBorder={true} />
        </div>
      </div>
    </div>
  );
};


