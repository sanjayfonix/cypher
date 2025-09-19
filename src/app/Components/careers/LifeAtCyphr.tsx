"use client";

import { Laptop, ShieldCheck, Users, Award } from "lucide-react";
import { Card, CardContent } from "../industries/Card";
import { GlassIcon } from "../home/GlassIcon";
import { Computer, HandShakeIcon, Collab, Winner } from "@/assets/icon";

export default function LifeAtCyphr() {
  return (
    <section className="container text-white ">
      {/* Section Heading */}
      <div className="text-center flex items-center flex-col mx-auto  px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-normal mb-6">
          Life at Cyphr
        </h2>
        <p className="text-[#F1F1F1] text-sm sm:text-base font-inter font-normal max-w-full sm:max-w-[80%] lg:max-w-[61.5%]">
          At Cyphr, we promote innovation, inclusivity, and personal growth in a
          collaborative environment. Our team embraces cutting-edge challenges,
          continuous learning, and diverse contributions, helping shape the
          future of technology in a supportive culture.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 px-4 lg:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/images/carieer.png"
            alt="Life at Cyphr Graphic"
            className=""
          />
        </div>

        {/* Right Column: Cards */}
        <div className="relative w-full">
          {/* Left Cards Column + Divider + Right Cards Column */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8">
            {/* Left Column */}
            <div className="flex flex-col gap-10 sm:gap-14 md:mt-20">
              {/* Card 1 */}
              <Card className="flex flex-col lg:flex-row items-start gap-6 bg-transparent border-none shadow-none">
                <CardContent className="flex flex-col md:flex-row items-start gap-6 p-0">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 object-cover">
                    <GlassIcon icon={<Computer />} size={60} />
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <p className="font-medium text-xl sm:text-2xl font-sans tracking-normal">
                      Hybrid & Remote Flexibility
                    </p>
                    <p className="text-sm sm:text-base font-inter text-[#D5D5D5] font-normal">
                      Work where you’re most productive.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="h-0 border border-[#5B5B5B] block md:block hidden" />

              {/* Card 2 */}
              <Card className="flex items-start gap-6 bg-transparent border-none shadow-none">
                <CardContent className="flex flex-col md:flex-row items-start gap-6 p-0">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 object-cover">
                    <GlassIcon icon={<HandShakeIcon />} size={60} />
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <p className="font-medium text-xl sm:text-2xl font-sans tracking-normal">
                      Ethics & Responsibility
                    </p>
                    <p className="text-sm sm:text-base font-inter text-[#D5D5D5] font-normal">
                      Every investigation is grounded in transparency, security,
                      and societal value.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Middle Divider (Hide on small) */}
            <div className="hidden md:block w-0 border border-[#5B5B5B]" />

            {/* Right Column */}
            <div className="flex flex-col gap-10 sm:gap-14 mt-0">
              {/* Card 3 */}
              <Card className="flex items-start gap-6 bg-transparent border-none shadow-none">
                <CardContent className="flex flex-col md:flex-row items-start gap-6 p-0">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 object-cover">
                    <GlassIcon icon={<Collab />} size={60} />
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <p className="font-medium text-xl sm:text-2xl font-sans tracking-normal">
                      Collaborative Teams
                    </p>
                    <p className="text-sm sm:text-base font-inter text-[#D5D5D5] font-normal">
                      Investigators, analysts, and technologists working side by
                      side.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="w-full h-0 border border-[#5B5B5B] block md:block hidden" />

              {/* Card 4 */}
              <Card className="flex items-start gap-6 bg-transparent border-none shadow-none">
                <CardContent className="flex flex-col md:flex-row items-start gap-6 p-0">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 object-cover">
                    <GlassIcon icon={<Winner />} size={60} />
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <p className="font-medium text-xl sm:text-2xl font-sans tracking-normal">
                      Recognition & Rewards
                    </p>
                    <p className="text-sm sm:text-base font-inter text-[#D5D5D5] font-normal">
                      We celebrate sharp thinking and impactful results.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
