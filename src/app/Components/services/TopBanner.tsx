
'use client'

import { Toparrow } from "@/assets/icon";


interface ButtonProps{
  onClickConsult:()=>void;
}

export const TopBanner = () => {

  return (
    <div className="relative w-full bg-[url('/grid.png')] bg-no-repeat p-8 sm:p-16 lg:p-20  overflow-hidden flex flex-col items-center justify-start">

      {/* Quarter Blur - Top Left */}
      <div
        className="absolute pointer-events-none -z-1 animate-glow"
        style={{
          width: "300px",
          height: "200px",
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
        className="absolute pointer-events-none z-2 animate-glow"
        style={{
          width: "300px",
          height: "200px",
          top: "-100px",
          right: "-150px",
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
          Transform Complex Data Into Your Strategic Advantage
        </p>

        <p className={`text-xs sm:text-sm md:text-base lg:text-[1rem] text-[#F1F1F1] max-w-[95%] sm:max-w-[50%] `}>
          Navigate digital risks and uncover hidden opportunities with investigator-led consulting
          and advisory services designed to protect your company, employees, and reputation.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-5 mt-4 justify-start sm:justify-center">
          <button onClick={()=>{
            const navToSection=document.getElementById('contact-us')
            if(navToSection){
              navToSection.scrollIntoView({behavior:'smooth'})
            }
          }} className="custom-button with-shadow bg-[#1057B5]"   >Book a Consultation</button>
          <button className="custom-button with-border bg-transparent"  >Explore Our Services <Toparrow/></button>
        </div>
      </div>
    </div>
  );
};



