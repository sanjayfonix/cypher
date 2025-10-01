"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const teamData = [
  {
    id: 1,
    title: "Michael Petrie - Founder/CEO",
    description:
      "Michael’s curiosity and entrepreneurial spirit led him to pioneer Cyphr, combining traditional investigative methods with advanced digital intelligence. With a knack for navigating complex data—both digital and non-digital—he focuses on addressing risks, protecting brands, and benefiting individuals and employers, all while keeping the process engaging and innovative.",
    image: "/images/img1.png",
  },
    {
    id: 2,
    title: "Max Terzi - CTO ",
    description:
      "Driven by a track record of success, Michael is building the next-generation Investigative Services platform, which adapts across industries and use cases, from custom to scalable solutions. By combining modern AI with forensic advancements, he bridges the gap between intelligence methodologies and real-world strategies.",
    image: "/images/img3.png",
  },
  {
    id: 3,
    title: "Brett Huselton - ADVISOR - Strategy",
    description:
      "With two decades of experience in building growth-oriented services, Michael merged his expertise in neuroscience and psychology with his forensic and data analysis skills. Recognizing the power of data liquidity and strategic forensic assessment, he is shaping the future of investigative science, just as advancements have revolutionized healthcare science.",
    image: "/images/img2.png",
  },

];

export default function TeamSection() {
  return (
    <section className="overflow-hidden lg:overflow-visible relative w-full container bg-black text-white px-4 sm:px-8 lg:px-28 py-12 sm:py-16">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top Right Glow */}
        <div className="absolute w-[300px] h-[300px] rounded-full bg-[#167BFF] opacity-40 blur-[120px] top-[200px] right-[15%]" />

        {/* Mid Right Glow */}
        <div className="absolute w-[280px] h-[280px] rounded-full bg-[#167BFF] opacity-30 blur-[120px] top-[650px] right-[10%]" />

        {/* Center Glow */}
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[#167BFF] opacity-20 blur-[160px] top-[500px] left-1/2 -translate-x-1/2" />

        {/* Large Soft Glow */}
        <div className="absolute w-[700px] h-[700px] rounded-full bg-[#167BFF] opacity-20 blur-[200px] top-[100px] left-[5%]" />
      </div>

      {/* Title */}
      <div className="relative text-center mb-12 sm:mb-16 z-10">
        <h2 className="text-3xl sm:text-[40px] md:text-[48px] font-bold mb-2">
          The Team
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Investigative | Intelligence | Transformed
        </p>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start z-10">
        {/* Left Side - Content */}
        <div className="space-y-10 sm:space-y-12">
          {teamData.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col gap-2"
            >
              <div className="relative inline-block">
                {/* Big Gray "0" */}
                <span className="text-7xl sm:text-8xl font-bold text-gray-500">
                  0
                </span>

                {/* Glowing Blue Number */}
                <span className="absolute top-0 left-10 text-7xl sm:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                  {member.id}
                </span>
              </div>
              <h3 className="text-[20px] sm:text-xl font-semibold text-white">
                {member.title}
              </h3>
              <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right Side - Images */}
        <div className="relative flex flex-col justify-center items-center lg:items-end gap-8 mt-8 lg:mt-0">
          {teamData.map((member, idx) => (
            <motion.div
              key={member.id}
              whileHover={{ scale: 1.05 }}
              className={`relative border border-[#6D6D6D] rounded-3xl overflow-hidden h-[334px] w-[274px] shadow-[0px_0px_108px_0px_#157AFF80]
              ${idx === 0 ? "lg:translate-x-10" : ""}
              ${idx === 1 ? "lg:-translate-x-12 lg:-translate-y-10" : ""}
              ${idx === 2 ? "lg:translate-x-10 lg:-translate-y-20" : ""}`}
            >
              {member.id!==3&&<Image
                src={member.image}
                alt={member.title}
                width={294}
                height={290}
                className="object-top w-full h-full"
              />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
