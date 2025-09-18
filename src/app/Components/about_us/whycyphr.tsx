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
            "Ciphers are used to secure communication by encrypting and decrypting information.",
    },
    {
        icon: <Lock className="text-white w-6 h-6" />,
        title: "The Role of Ciphers in Security",
        description:
            "Ciphers play a crucial role in protecting sensitive data by concealing messages from unauthorized access.",
    },
    {
        icon: <MessageSquare className="text-white w-6 h-6" />,
        title: "Ciphers Shaping Communication",
        description:
            "Ciphers shaped global communication, enabling secure and private exchanges throughout history.",
    },
    {
        icon: <Shield className="text-white w-6 h-6" />,
        title: "Cryptography: Securing Data Transmission",
        description:
            "Cryptography is a foundation for secure information transmission, ensuring privacy, security, and risk management.",
    },
    {
        icon: <Brain className="text-white w-6 h-6" />,
        title: "Cyphr’s Expertise in Intelligence",
        description:
            "Cyphr combines psychology, technology, and methodology to uncover what’s hidden and solve complex data challenges.",
    },
];

export default function WhyCyphr() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section className="bg-black flex flex-col text-white py-16 px-6 gap-8 max-w-[100%] overflow-x-hidden">
            <div className="text-center mb-12">
                <h2 className="text-[48px] font-bold">Why Cyphr?</h2>
                <p className="text-gray-400 text-[16px] mt-2">
                    Unlocking the Power of Intelligence Through Technology and Strategy
                </p>
            </div>

            <div ref={ref} className="flex flex-col gap-8 max-w-7xl mx-auto relative">
                {features.map((item, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <div
                            key={index}
                            className={`relative flex gap-4 ${
                                isLeft ? "flex-row-reverse" : "flex-row"
                            }`}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{
                                    duration: 1.2,
                                    delay: index * 0.2,
                                    ease: "easeOut",
                                }}
                                className={`relative flex items-center max-w-5xl mx-auto w-full gap-6 p-2 ${
                                    isLeft ? "justify-start" : "justify-end"
                                }`}
                            >
                                {/* Gradient bar */}
                                <div
                                    className={`absolute top-1/2 transform -translate-y-1/2 h-[100px] w-full max-w-full ${
                                        isLeft
                                            ? "rounded-l-full right-0 bg-gradient-to-r from-[#157aff] via-[#0c3b7c] to-[#000000]"
                                            : "rounded-r-full left-0 bg-gradient-to-r from-[#000000] via-[#0c3b7c] to-[#157aff]"
                                    }`}
                                ></div>

                                {/* Content */}
                                <div
                                    className={`relative flex items-center gap-2 ${
                                        isLeft ? "flex-row-reverse" : "flex-row"
                                    }`}
                                >
                                    <div className={`${isLeft ? "text-left" : "text-right"}`}>
                                        <h3 className="text-[24px] font-semibold">{item.title}</h3>
                                        <p className="text-gray-300 text-[16px] mt-1 max-w-3xl">
                                            {item.description}
                                        </p>
                                    </div>

                                    <GlassIcon icon={item.icon} fadeSize={45} size={60} />
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </section>
    );

}
