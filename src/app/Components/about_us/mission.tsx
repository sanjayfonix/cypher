"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="relative container bg-black flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-12">
      {/* LEFT SIDE: RADAR */}
      <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] flex items-center justify-center">
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

          {/* Radar Icons */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="p-2 sm:p-3 rounded-full bg-black border border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]">
              <Image src="/images/mission1.png" alt="Mission1" width={32} height={32} />
            </div>
          </div>
          <div className="absolute top-1/2 -right-6 -translate-y-1/2">
            <div className="p-2 sm:p-3 rounded-full bg-black border border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]">
              <Image src="/images/mission2.png" alt="Mission2" width={32} height={32} />
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
            <div className="p-2 sm:p-3 rounded-full bg-black border border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]">
              <Image src="/images/mission3.png" alt="Mission3" width={32} height={32} />
            </div>
          </div>
          <div className="absolute top-1/2 -left-6 -translate-y-1/2">
            <div className="p-2 sm:p-3 rounded-full bg-black border border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]">
              <Image src="/images/mission4.png" alt="Mission4" width={32} height={32} />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: TEXT CONTENT */}
      <div className="text-center md:text-left max-w-lg">
        <div className="flex items-center justify-center md:justify-start mb-4">
          <div className="p-3 rounded-full bg-black border border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.7)]">
            <Image src="/images/mission1.png" alt="Mission icon" width={36} height={36} />
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Mission: What We Do...
        </h2>
        <p className="text-gray-300 text-sm sm:text-base mb-3">
          Unite digital intelligence with forensic investigative strategies to
          uncover credible, actionable insights that deliver client outcomes.
        </p>
        <p className="text-[#167bff] font-semibold text-base sm:text-lg md:text-xl">
          Forensic. Value. Delivered.
        </p>
      </div>
    </section>
  );
}
