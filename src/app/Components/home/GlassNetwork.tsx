"use client";
import Image from "next/image";

export default function GlassNetwork() {
  return (
    <div className="relative w-full flex justify-center items-center py-10">
      {/* Central Radar / Glass Circle */}
      <div className="relative flex justify-center items-center">
        {/* Outer Rings */}
        <div className="absolute w-[217px] h-[217px] rounded-full border border-[#0C438C] opacity-20"></div>
        <div className="absolute w-[185px] h-[185px] rounded-full border border-[#0C438C] opacity-10"></div>
        <div className="absolute w-[147px] h-[147px] rounded-full border border-[#0C438C]"></div>
        
        {/* Glass Circle with Icon */}
        <div className="relative w-[147px] h-[147px] rounded-full bg-white/20 backdrop-blur-lg border border-white/30 flex justify-center items-center">
          <Image src="/path/to/your/central-icon.svg" alt="Central Icon" width={60} height={60} />
        </div>
      </div>

      {/* Left Top Circle */}
      <div className="absolute top-0 left-0 w-[85px] h-[85px] rounded-full bg-white/20 backdrop-blur-lg border border-white/30 flex justify-center items-center">
        <Image src="/path/to/icon1.svg" alt="Icon 1" width={40} height={40} />
      </div>

      {/* Left Bottom Circle */}
      <div className="absolute bottom-0 left-0 w-[85px] h-[85px] rounded-full bg-white/20 backdrop-blur-lg border border-white/30 flex justify-center items-center">
        <Image src="/path/to/icon2.svg" alt="Icon 2" width={40} height={40} />
      </div>

      {/* Right Top Circle */}
      <div className="absolute top-0 right-0 w-[85px] h-[85px] rounded-full bg-white/20 backdrop-blur-lg border border-white/30 flex justify-center items-center">
        <Image src="/path/to/icon3.svg" alt="Icon 3" width={40} height={40} />
      </div>

      {/* Right Bottom Circle */}
      <div className="absolute bottom-0 right-0 w-[85px] h-[85px] rounded-full bg-white/20 backdrop-blur-lg border border-white/30 flex justify-center items-center">
        <Image src="/path/to/icon4.svg" alt="Icon 4" width={40} height={40} />
      </div>

      {/* Optional: connecting paths */}
      <svg className="absolute w-full h-full" viewBox="0 0 1238 352" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M147 49H167.374C184.77 49 200.916 58.0421 210.006 72.875L234.671 113.125C243.761 127.958 259.907 137 277.303 137H580" stroke="#0C438C"/>
        <path d="M1091 49H1044.03C1030.36 49 1017.28 54.5983 1007.85 64.492L953.472 121.508C944.037 131.402 930.961 137 917.289 137H658" stroke="#0C438C"/>
        <path d="M147 295H193.967C207.639 295 220.714 289.402 230.15 279.508L284.527 222.492C293.962 212.598 307.038 207 320.71 207H580" stroke="#0C438C"/>
        <path d="M1091 295H1075.92C1061.15 295 1047.14 288.47 1037.64 277.161L993.683 224.839C984.183 213.53 970.169 207 955.399 207H658" stroke="#0C438C"/>
      </svg>
    </div>
  );
}
