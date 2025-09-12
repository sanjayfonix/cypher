"use client";
import { motion } from "framer-motion";

export default function RadarAnimation() {
  return (
    <div className="relative flex items-center justify-center my-10 bg-black">
      {/* Outer Radar Container */}
      <div className="relative w-[400px] h-[400px] rounded-full border border-blue-500 flex items-center justify-center">
        {/* Concentric Circles */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`absolute rounded-full border border-blue-900/60`}
            style={{
              width: `${(i * 100) / 4}%`,
              height: `${(i * 100) / 4}%`,
            }}
          />
        ))}

        {/* Center Circle */}
        <div className="absolute w-[80px] h-[80px] rounded-full bg-black border border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center justify-center text-blue-400 text-3xl">
          ⌨
        </div>

        {/* Rotating Radar Sweep */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full rounded-full"
          style={{
            background:
              "conic-gradient(rgba(59,130,246,0.3) 0deg, transparent 60deg)",
            clipPath: "circle(50%)",
          }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 4,
          }}
        />

        {/* Radar Icons */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="p-3 rounded-full bg-black border border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.7)]">
            🎯
          </div>
        </div>

        <div className="absolute top-1/2 -right-4 -translate-y-1/2">
          <div className="p-3 rounded-full bg-black border border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.7)]">
            🛡
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
          <div className="p-3 rounded-full bg-black border border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.7)]">
            👁
          </div>
        </div>

        <div className="absolute top-1/2 -left-4 -translate-y-1/2">
          <div className="p-3 rounded-full bg-black border border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.7)]">
            🚀
          </div>
        </div>
      </div>
    </div>
  );
}
