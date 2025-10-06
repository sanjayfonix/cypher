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
                                className="relative flex items-center max-w-5xl mx-auto w-full gap-6 p-2 min-w-0"
                            >
                                {/* Gradient bar - same behavior, slight width tweak for tiny screens */}
                                <div
                                    className={`absolute top-1/2 transform -translate-y-1/2 md:h-[150px] lg:h-[100px] pointer-events-none
                                        ${isLeft
                                            ? "w-[90%] md:w-2/3 right-0 md:rounded-l-full bg-gradient-to-r from-[#157aff] via-[#0c3b7c] to-[#000000]"
                                            : "w-[90%] md:w-2/3 left-0 md:rounded-r-full bg-gradient-to-r from-[#000000] via-[#0c3b7c] to-[#157aff]"
                                        }`}
                                    style={{ maxWidth: "100%" }}
                                />

                                {/* Content - keeps original order (text then GlassIcon),
                                    but stacks on small screens to avoid overflow */}
                                <div
                                    className={`relative flex flex-col md:flex-row items-center gap-2 w-full md:w-2/3 min-w-0
                                        ${isLeft ? "md:ml-auto md:flex-row-reverse md:text-left text-center" : "md:mr-auto md:flex-row md:text-right text-center"}`}
                                >
                                    <div className="md:order-1 order-2 min-w-0">
                                        <h3 className="text-[24px] font-semibold">{item.title}</h3>
                                        <p className="text-gray-300 text-[16px] mt-1 max-w-3xl break-words">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* ensure icon doesn't force width; let it keep its size but not grow */}
                                    <div className="order-1 md:order-2 flex-shrink-0">
                                        <GlassIcon icon={item.icon} fadeSize={45} size={60} />
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
