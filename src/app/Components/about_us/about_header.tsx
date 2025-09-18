import { inter } from "@/app/layout";
import Button from "../common/Button";
import Image from "next/image";
import { ShoppingBag, Mail, Globe } from "lucide-react";

export const AboutHeader = () => {
    return (
        <div className="bg-[url('/grid.png')] bg-no-repeat bg-top bg-cover ">
            <div className="relative  containerr  flex flex-col lg:flex-row items-center justify-between py-20 px-6 sm:px-12 lg:px-28 h-auto">
                <div>

                </div>
                {/* Glowing Background Effects */}
                <div className="absolute pointer-events-none z-0 blur-[185.1px] -top-[31px] opacity-60 w-[100%] h-10 bg-[#1057B5]" />
                <div
                    className="absolute pointer-events-none z-0 blur-[50px]"
                    style={{
                        width: "25%",
                        height: 192,
                        top: 200,
                        left: "60%",
                        transform: "translateX(40%)",
                        opacity: 0.4,
                        borderRadius: "50%",
                        backgroundColor: "#167BFF",
                    }}
                />
                <div
                    className="absolute pointer-events-none z-0 blur-[50px]"
                    style={{
                        width: "30%",
                        height: 192,
                        top: 35,
                        // left: "50%",
                        transform: "translateX(-70%)",
                        opacity: 0.5,
                        borderRadius: "50%",
                        backgroundColor: "#167BFF",
                    }}
                />

                {/* LEFT CONTENT */}
                <div className="flex flex-col items-start justify-center gap-6 z-10 w-full lg:w-1/2 text-left">
                    <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                        About Us
                    </h1>

                    <p
                        className={`text-sm sm:text-base md:text-lg text-[#F1F1F1] ${inter.className}`}
                    >
                        "With comprehensive expertise, we tackle critical challenges head-on.
                        Our solutions empower businesses to make informed, confident
                        decisions. Trust us to drive your success through innovative strategies
                        and data-driven insights."
                    </p>


                    <Button
                        color="bg-[#1057B5] hover:bg-[#1470E8] transition"
                        text="Book a Consultation"
                        isIcon={true}
                    />
                </div>

                {/* RIGHT TIMELINE */}
                {/* <div className="flex flex-col relative w-full  lg:w-1/2 mt-10 lg:mt-0 items-center gap-6">
                    <div className="relative pl-12 w-full max-w-sm ">
                        <div className="absolute left-8 transform -translate-x-1/2 h-[calc(100%+24px)] w-[0.25px] bg-blue-800 "></div>
                        <div className="absolute left-6 top-10 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_#167BFF]" />
                        <div className="px-6 py-4 flex justify-between rounded-2xl border border-[#3c414a] backdrop-blur-xs shadow-[inset_0_0_65px_rgba(22,123,255,0.7)]">
                           
                            <div className="flex flex-col   mb-2">
                                <p className="text-gray-300 text-sm">Today</p>
                                <p className="text-3xl  text-white">8:25 AM</p>
                                <p className="text-[16px] text-gray-400">Active</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <ShoppingBag className="text-gray-300 " size={25} />
                            </div>

                        </div>
                    </div>

                    <div className="relative pl-12 w-full max-w-sm">
                        <div className="absolute left-8 transform -translate-x-1/2 h-[calc(100%+24px)] w-[0.25px] bg-blue-800 "></div>
                        <div className="absolute left-6  top-10 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_#167BFF]" />
                        <div className="px-6 py-4 flex justify-between rounded-2xl gap-4 border border-[#3c414a] backdrop-blur-xs shadow-[inset_0_0_20px_rgba(22,123,255,0.7)]">
                            <Image
                                src="/images/dumypro.png"
                                alt="Emma Wilson"
                                width={36}
                                height={36}
                                className="rounded-full"
                            />
                            <div className="flex-1 text-left">
                                <p className="text-white font-medium">Emma Wilson</p>
                                <p className="text-gray-400 text-sm">Logged in</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <ShoppingBag className="text-gray-300 " size={25} />
                            </div>
                        </div>
                    </div>


                    <div className="relative pl-12 w-full max-w-sm">
                        <div className="absolute left-8 transform -translate-x-1/2 h-[calc(100%+24px)] w-[0.25px] bg-blue-800 "></div>
                        <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_#167BFF]" />
                        <div className="px-6 py-4 flex justify-between rounded-2xl border border-[#3c414a] backdrop-blur-xs shadow-[inset_0_0_20px_rgba(22,123,255,0.7)]">

                            <div className="flex-1 text-left">
                                <p className="text-white text-lg font-bold">6:30 AM</p>
                                <p className="text-gray-400 text-sm">Signed up</p>
                            </div>
                            <Mail className="text-gray-300" size={22} />
                        </div>
                    </div>

                   
                    <div className="relative pl-12 w-full max-w-sm">
                        <div className="absolute left-8 transform -translate-x-1/2 h-[calc(100%)] w-[0.25px] bg-blue-800 "></div>
                        <div className="absolute left-6 top-10 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_#167BFF]" />
                        <div className="px-6 py-4 flex justify-between gap-4 rounded-2xl border border-[#3c414a] backdrop-blur-xs shadow-[inset_0_0_30px_rgba(22,123,255,0.7)]">
                            <Image
                                src="/images/dumypro.png"
                                alt="Michael Smith"
                                width={36}
                                height={36}
                                className="rounded-full"
                            />
                            <div className="flex-1 text-left">
                                <p className="text-white font-medium">Michael Smith</p>
                                <p className="text-gray-400 text-sm">Active</p>
                            </div>
                            <Globe className="text-gray-300" size={18} />
                        </div>
                    </div>
                </div> */}
                <div className="flex justify-center items-center">
                    <Image
                        src="/images/aboutheader.png"
                        alt="About Header"
                        width={630}
                        height={630}
                        className="rounded-lg object-cover"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};
