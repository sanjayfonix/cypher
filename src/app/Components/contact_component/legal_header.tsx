import { inter } from "@/app/layout";
import Button from "../common/Button";


export const LegalBanner = () => {
    return (
        <div className="relative w-full bg-[url('/grid.png')] bg-no-repeat bg-top bg-cover overflow-hidden flex flex-col items-center justify-start py-20 px-6 sm:px-12 lg:px-28 h-auto ">

            <div className="absolute pointer-events-none z-0 blur-[185.1px] -top-[31px] opacity-60 w-[100%] h-10 bg-[#1057B5]" />
            {/* Ellipses */}
            <div
                className="absolute pointer-events-none z-0 blur-[3px] animate-blink"
                style={{
                    width: '30%',
                    height: 26,
                    top: -16,
                    left: "50%",
                    transform: "translateX(-50%)",
                    opacity: 0.9,
                    borderRadius: "50%",
                    backgroundColor: "#E8F2FF",
                }}
            />
            <div
                className="absolute pointer-events-none z-0 blur-[26.2px] animate-blink"
                style={{
                    width: '50%',
                    height: 78,
                    top: -43,
                    left: "50%",
                    transform: "translateX(-50%)",
                    opacity: 0.6,
                    borderRadius: "50%",
                    backgroundColor: "#167BFF",
                }}
            />
            <div
                className="absolute pointer-events-none z-0 blur-[50px] animate-blink"
                style={{
                    width: '50%',
                    height: 192,
                    top: -75,
                    left: "50%",
                    transform: "translateX(-50%)",
                    opacity: 0.5,
                    borderRadius: "50%",
                    backgroundColor: "#167BFF",
                }}
            />
            <div
                className="absolute pointer-events-none z-0 blur-[271.2px] animate-blink"
                style={{
                    width: '50%',
                    height: 659,
                    top: -551,
                    left: "50%",
                    transform: "translateX(-50%)",
                    opacity: 0.4,
                    borderRadius: "50%",
                    backgroundColor: "#1470E8",
                }}
            />

            {/* Content */}
            <div className="flex flex-col items-center justify-start gap-4 z-10 text-center max-w-[900px]">
                {/* Headline */}
                <p className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white leading-tight font-sans">
                    Connect with Cyphr for Expert<br />
                    Intelligence Solutions
                </p>

                {/* Subtitle */}
                <p className={`text-xs sm:text-base sm:text-sm md:text-[1rem] text-[#F1F1F1] ${inter.className}`}>
                    We're here to provide expert support with actionable intelligence and advanced <br/> investigative solutions tailored to your needs.
                </p>

                
            </div>
        </div>
    );
};
