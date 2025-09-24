import { inter } from "@/app/layout";
import Button from "../common/Button";

export const CareerBanner = () => {
  return (
    <div className="relative w-full bg-[url('/grid.png')] bg-no-repeat bg-top bg-cover overflow-hidden flex flex-col items-center justify-start py-12 sm:py-16 lg:py-20 px-4 sm:px-10 lg:px-28">
      
      {/* Background Blur Layers */}
      <div className="absolute pointer-events-none z-0 blur-[150px] -top-8 opacity-60 w-full h-16 bg-[#1057B5]" />
      
      <div
        className="absolute pointer-events-none z-0 blur-[3px] animate-blink"
        style={{
          width: "70%",
          height: 20,
          top: -10,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.8,
          borderRadius: "50%",
          backgroundColor: "#E8F2FF",
        }}
      />
      <div
        className="absolute pointer-events-none z-0 blur-[26px] animate-blink"
        style={{
          width: "80%",
          height: 70,
          top: -30,
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
          width: "80%",
          height: 150,
          top: -50,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.5,
          borderRadius: "50%",
          backgroundColor: "#167BFF",
        }}
      />
      <div
        className="absolute pointer-events-none z-0 blur-[270px] animate-blink"
        style={{
          width: "90%",
          height: 500,
          top: -500,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.4,
          borderRadius: "50%",
          backgroundColor: "#1470E8",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[900px] w-full px-2 sm:px-6">
        
        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-snug sm:leading-tight">
          Connect with Cyphr for Expert <br className="hidden sm:block" />
          Intelligence Solutions
        </h1>

        {/* Subtitle */}
        <p
          className={`mt-4 text-sm sm:text-base text-[#F1F1F1] font-normal leading-relaxed max-w-[75%] ${inter.className}`}
        >
          We're here to provide expert support with actionable intelligence and
          advanced investigative solutions tailored to your needs.
        </p>

        {/* Optional Button (Can add later if needed) */}
        {/* <div className="mt-6">
          <Button>Get Started</Button>
        </div> */}
      </div>
    </div>
  );
};
