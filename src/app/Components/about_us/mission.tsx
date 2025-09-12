"use client";
import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section className="relative container bg-black flex flex-col md:flex-row items-center justify-between p-10 gap-10 px-6 md:px-20">
      {/* LEFT SIDE: RADAR */}
      <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] mb-10 flex items-center justify-center">
        {/* Radar Container */}
        <div className="relative w-full h-full rounded-full border border-blue-500/60 flex items-center justify-center">
          {/* Concentric Circles */}
          {[1, 2, 3,4].map((i) => (
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
          <div className="absolute w-[80px] h-[80px] rounded-full bg-black border border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center justify-center text-blue-400 text-3xl">
            &gt;
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
              duration: 10,
            }}
          />

          {/* Radar Icons */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="p-3 rounded-full bg-black border border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]">
              🎯
            </div>
          </div>
          <div className="absolute top-1/2 -right-6 -translate-y-1/2">
            <div className="p-3 rounded-full bg-black border border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]">
              🛰
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
            <div className="p-3 rounded-full bg-black border border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]">
              🛡
            </div>
          </div>
          <div className="absolute top-1/2 -left-6 -translate-y-1/2">
            <div className="p-3 rounded-full bg-black border border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]">
              👁
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: TEXT CONTENT */}
      <div className="text-center md:text-left max-w-md">
        <div className="flex items-center justify-center md:justify-start mb-4">
          <div className="p-4 rounded-full bg-black border border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.7)]">
            🎯
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Mission: What We Do...
        </h2>
        <p className="text-gray-300 text-[16px] mb-3">
          Unite digital intelligence with forensic investigative strategies to
          uncover credible, actionable insights that deliver client outcomes.
        </p>
        <p className="text-blue-400 font-semibold text-[20px]">
          Forensic. Value. Delivered.
        </p>
      </div>
    </section>
  );
}
