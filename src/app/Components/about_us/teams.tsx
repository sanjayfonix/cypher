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
    title: "Brett Huselton - Vice President of Strategy and Growth",
    description:
      "With two decades of experience in building growth-oriented services, Michael merged his expertise in neuroscience and psychology with his forensic and data analysis skills. Recognizing the power of data liquidity and strategic forensic assessment, he is shaping the future of investigative science, just as advancements have revolutionized healthcare science.",
    image: "/images/img2.png",
  },
  {
    id: 3,
    title: "Max Terzi - CTO ",
    description:
      "Driven by a track record of success, Michael is building the next-generation Investigative Services platform, which adapts across industries and use cases, from custom to scalable solutions. By combining modern AI with forensic advancements, he bridges the gap between intelligence methodologies and real-world strategies.",
    image: "/images/img3.png",
  },
];

export default function TeamSection() {
  return (
    <section className="relative w-full container bg-black text-white px-4 sm:px-8 lg:px-28 py-12 sm:py-16">
      {/* Background Glow Effects */}
      <div
        className="absolute pointer-events-none z-0 blur-[70px]"
        style={{
          width: "20%",
          height: 292,
          top: 250,
          left: "60%",
          transform: "translateX(70%)",
          opacity: 0.4,
          borderRadius: "100%",
          backgroundColor: "#167BFF",
        }}
      />
      <div
        className="absolute pointer-events-none z-0 blur-[70px]"
        style={{
          width: "20%",
          height: 292,
          top: 750,
          left: "60%",
          transform: "translateX(70%)",
          opacity: 0.4,
          borderRadius: "100%",
          backgroundColor: "#167BFF",
        }}
      />
      <div
        className="absolute pointer-events-none z-0 blur-[70px]"
        style={{
          width: "25%",
          height: 292,
          top: 500,
          left: "50%",
          transform: "translateX(70%)",
          opacity: 0.2,
          borderRadius: "100%",
          backgroundColor: "#167BFF",
        }}
      />
      <div
        className="absolute pointer-events-none z-0 blur-[90px]"
        style={{
          width: "80%",
          height: 850,
          top: 135,
          left: "40%",
          transform: "translateX(-100%)",
          opacity: 0.2,
          borderRadius: "50%",
          backgroundColor: "#167BFF",
        }}
      />

      {/* Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-[40px] md:text-[48px] font-bold mb-2">
          The Team
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Investigative | Intelligence | Transformed
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left Side - Content */}
        <div className="space-y-10 sm:space-y-12">
          {teamData.map((member, index) => (
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

                {/* Glowing Blue Number - Overlapping */}
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
        <div className="relative flex flex-col justify-center p-6 items-center lg:items-end gap-0 mt-8 lg:mt-0">
          {teamData.map((member, idx) => (
            <motion.div
              key={member.id}
              whileHover={{ scale: 1.05 }}
              className={`relative border border-[#6D6D6D] rounded-4xl overflow-hidden h-[350px]
              [box-shadow:0px_0px_108.3px_0px_#157AFF80]
              ${idx === 0 ? "lg:translate-x-12" : ""} 
              ${idx === 1 ? "lg:-translate-x-24 lg:-translate-y-10" : ""} 
              ${idx === 2 ?  "lg:translate-x-20 lg:-translate-y-20"  : ""}`}
            >

              <Image
                src={member.image}
                alt={member.title}
                width={230}
                height={350}
                className=" object-top size-full"
              />
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
