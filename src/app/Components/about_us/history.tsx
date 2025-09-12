"use client";
import { useEffect, useRef, useState } from "react";
import { ServicesIcon } from "@/assets/icon"; // keep your import

export const History = () => {
    const sectionsRef = useRef<HTMLDivElement[]>([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            let currentIndex: number | null = null;
            let currentProgress = 0;

            sectionsRef.current.forEach((el, i) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                const sectionCenter = rect.top + rect.height / 2;
                const distanceToCenter = Math.abs(windowHeight / 2 - sectionCenter);

                if (
                    currentIndex === null ||
                    distanceToCenter <
                    Math.abs(
                        window.innerHeight / 2 -
                        (sectionsRef.current[currentIndex]?.getBoundingClientRect()
                            .top || 0)
                    )
                ) {
                    currentIndex = i;
                }

                if (i === currentIndex) {
                    const start = windowHeight * 0.2;
                    const end = windowHeight * 0.7;
                    const visible = Math.min(Math.max(end - rect.top, 0), end - start);
                    currentProgress = Math.min(Math.max(visible / (end - start), 0), 1);
                }
            });

            setActiveIndex(currentIndex);
            setProgress(currentProgress);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const timeline = [
        {
            year: "1994",
            title: "Early PI Work & OSINT Awakening",
            points: [
                "Key Case: A claimant feigning a debilitating back injury was exposed through a staged karate class.",
                "Insight Gained: The internet and emerging OSINT techniques could transform investigations, amplifying reach and efficiency."
            ]
        },
        {
            year: "2007",
            title: "Digital Prowess & Early Social Media OSINT",
            points: [
                "Small Point: Petrie refined his digital investigative skills with online research.",
                "Key Case: Tracked a missing teen within 17 minutes using MySpace data.",
                "Impact: Teen was found safe; years later became a family man.",
                "Innovation: First social media investigative platform launched."
            ]
        },
        {
            year: "2014",
            title: "Founding Social Detection & OSINT Evolution",
            points: [
                "Small Point: Advances in machine learning, APIs, and geolocation expanded investigative tech.",
                "Breakthrough: Social Detection used NLP, cloud computing, and OSINT frameworks.",
                "Legacy: Transformed into a sophisticated OSINT-driven platform."
            ]
        }
    ];

    return (
        <div className=" relative container flex flex-col p-10 md:flex-row gap-10">
            <div
                className="absolute pointer-events-none z-0 blur-[30px] animate-blink"
                style={{
                    width: '50%',
                    height: 250,
                    bottom: 3,
                    left: "1%",
                    transform: "translateX(-80%)",
                    opacity: 0.4,
                    borderRadius: "50%",
                    backgroundColor: "#167BFF",
                }}
            />
            {/* Left section with heading + image */}
            <div className="flex-1 flex flex-col  items-start">
                <h2 className="text-white text-4xl font-bold leading-snug">
                    Transforming Complex Data into <br /> Powerful Insights That Drive <br /> Action,
                    Empower Decisions, and <br /> Safeguard Your Future.
                </h2>
                <div className="mt-8">
                    <img
                        src="/images/aboutimg.png"
                        alt="OSINT Evolution"
                        className="drop-shadow-[0_0_20px_#1057B5]"
                    />
                </div>
            </div>

            {/* Right side timeline */}
            <div className="flex-1 relative">
                {timeline.map((item, i) => {
                    const isActive = i === activeIndex;
                    return (
                        <div
                            key={i}
                            ref={(el) => {
                                if (el) sectionsRef.current[i] = el;
                            }}
                            className="relative flex flex-col pl-10 mb-16"
                        >
                            {/* Vertical line */}
                            <div className="absolute left-0 top-0 w-[2px] h-full bg-[#6D6D6D]">
                                {isActive && (
                                    <div
                                        className="absolute left-0 top-0 w-full bg-[#1057B5] transition-all duration-300"
                                        style={{ height: `${progress * 100}%` }}
                                    ></div>
                                )}
                            </div>

                            {/* Circle marker */}
                            <div className="absolute -left-2 top-2 w-4 h-4 rounded-full bg-[#6D6D6D]">
                                {isActive && (
                                    <div className="w-4 h-4 rounded-full bg-[#1057B5] flex items-center justify-center">
                                        <ServicesIcon />
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <h3 className="text-white text-[32px] font-semibold">
                                {item.year} – {item.title}
                            </h3>
                            <ul className="mt-2 text-gray-100 space-y-1 text-[16px]">
                                {item.points.map((p, idx) => (
                                    <li key={idx}>• {p}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
