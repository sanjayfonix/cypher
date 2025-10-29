"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Laptop, Lock, MessageSquare, Shield, Brain } from "lucide-react";
import { GlassIcon } from "../home/GlassIcon";

const features = [
    {
        icon: <Laptop className="text-white w-6 h-6" />,
        title: "Ciphers: The Art of Encryption",
        description:
            "As a base literal meaning, a cipher (or cypher) is an approach (often an algorithm) for encrypting or decrypting something through a series of specific sequences.",
    },
    {
        icon: <Lock className="text-white w-6 h-6" />,
        title: "The Role of Ciphers in Security",
        description:
            "In the realm of secret communication and information security, the use of ciphers played a crucial role throughout history. These cryptographic techniques were (and still are) employed to conceal the meaning of messages, protecting sensitive information from unauthorized access help to serve the purpose of obscuring communication. ",
    },
    {
        icon: <MessageSquare className="text-white w-6 h-6" />,
        title: "Ciphers Shaping Communication",
        description:
            "Cyphers were at the core of many unique means to facilitate communications, and enable transformative progress, communicate in sophisticated yet private means – and shaped the historical landscape, industrial nations and powerbases of economies, armies, governments and more.",
    },
    {
        icon: <Shield className="text-white w-6 h-6" />,
        title: "Cryptography: Securing Data Transmission",
        description:
            "Cryptography is a fundamental building block of information transmission in a secure, codified manner with an intent to deceive, or conceal – a fundamental ground for competition, security, privacy and understanding information risk management. ",
    },
    {
        icon: <Brain className="text-white w-6 h-6" />,
        title: "Cyphr’s Expertise in Intelligence",
        description:
            "Cyphr understands the psychology, technology, methodology and strategy to ‘find what was not meant to be found’ and ‘solve what may not be self-evident to the eye’ and the strategy to find truth in the informational chaos ",
    },
];

export default function Whycyphr() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section className="bg-black flex flex-col text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-12 gap-8 max-w-full overflow-x-hidden">
            <div className="text-center mb-12">
                <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold">Why Cyphr?</h2>
                <p className="text-gray-400 text-[14px] sm:text-[16px] mt-2">
                    Unlocking the Power of Intelligence Through Technology and Strategy
                </p>
            </div>

            <div ref={ref} className="flex flex-col md:gap-16 lg:gap-8 gap-8 max-w-7xl mx-auto relative w-full">
                {features.map((item, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <div
                            key={index}
                            /* PRESERVE: DOM order and alternation logic.
                               RESPONSIVE: stack vertically on small screens, switch to row/row-reverse on md+ */
                            className={`relative flex flex-col ${isLeft ? "md:flex-row-reverse" : "md:flex-row"} gap-4`}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{
                                    duration: 1.2,
                                    delay: index * 0.2,
                                    ease: "easeOut",
                                }}
                                /* ADDED min-w-0 so flex children can shrink (prevents overflow) */
                                className="relative flex items-start   gap-6 p-2 min-w-0"
                            >
                                {/* Gradient bar - same behavior, slight width tweak for tiny screens */}
                               <div
  className={`relative w-full  overflow-hidden rounded-full
    ${isLeft
      ? "md:bg-gradient-to-r md:w-[70%] md:translate-x-1/8 md:from-[#157aff] md:via-[#0c3b7c] md:to-[#000000] md:self-end"
      : "md:bg-gradient-to-r md:w-[90%] md:from-[#000000] md:via-[#0c3b7c] md:to-[#157aff]"
    }`}
>
  {/* Inner flex container that controls layout */}
  <div
    className={`flex  items-center justify-between gap-4 p-6 md:p-8
      ${isLeft ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse "}`}
  >
       {/* Icon content */}
    <div className="flex-shrink-0">
      <GlassIcon icon={item.icon} fadeSize={45} size={60} />
    </div>
    {/* Text content */}
    <div
      className={`text-center md:text-left flex-1 min-w-0
        ${isLeft ? "md:text-left" : "md:text-right"}`}
    >
      <h3 className="text-[24px] font-semibold">{item.title}</h3>
      <p className="text-gray-300 text-[16px] mt-1 max-w-3xl break-words">
        {item.description}
      </p>
    </div>

 
  </div>
</div>

                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
