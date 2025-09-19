"use client";

import { Laptop, ShieldCheck, Users, Award, } from "lucide-react";
import { Card,CardContent,CardTitle,CardDescription } from "../industries/Card";
import { GlassIcon } from "../home/GlassIcon";
import { WeighScaleIcon,GuassMeterIcon,FindIcon,ProtectIcon, Computer, HandShakeIcon, Collab, Winner } from "@/assets/icon";

export default function LifeAtCyphr() {
  return (
    <section className=" container text-white py-16 ">
      {/* Section Heading */}
      <div className="text-center flex items-center flex-col mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-normal mb-8">Life at Cyphr</h2>
        <p className="text-[#F1F1F1] text-base font-inter font-normal max-w-[61.5%] ">
          At Cyphr, we promote innovation, inclusivity, and personal growth in a
          collaborative environment. Our team embraces cutting-edge challenges,
          continuous learning, and diverse contributions, helping shape the
          future of technology in a supportive culture.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Left Image */}
        <div className="flex">
          <img
            src="/images/carieer.png"
            alt="Life at Cyphr Graphic"
            className="w-[80%] md:w-[70%] lg:w-[90%] max-w-[500px]"
          />
        </div>
 {/* Right Column: Cards */}
      <div className="relative">

        {/* Divider */}
        

        {/* Left Cards Column */}
        <div className="grid grid-cols-[1fr_auto_1fr] md:flex gap-4  md:gap-8 ">
        <div className="md:mt-20 flex flex-col gap-14 ">
          {/* Card 1 */}
          <Card className="flex flex-col flex-1 lg:flex-row items-start gap-6 bg-transparent border-none shadow-none ">
            <CardContent className="flex flex-col md:flex-row items-start gap-6 p-0">
              <div className="h-24 w-24 object-cover"><GlassIcon icon={<Computer/>} size={60}/></div>
              <div className="flex flex-col gap-4 ">
                <p className="font-medium text-2xl font-sans tracking-normal">Hybrid & Remote Flexibility</p>
                <p className="text-base font-inter text-[#D5D5D5] font-normal">
                  Work where you’re most productive.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="h-0 border-[#5B5B5B] border block  " />
        
          {/* Card 2 */}
          <Card className="flex flex-1 items-start gap-6 bg-transparent border-none shadow-none">
            <CardContent className="flex md:flex-row flex-col items-start gap-6 p-0 ">
              <div className="h-24 w-24 object-cover"><GlassIcon icon={<HandShakeIcon/>} size={60}/></div>
              <div className="flex flex-col gap-4">
                <p className="font-medium text-2xl font-sans tracking-normal">Ethics & Responsibility</p>
                <p className="text-base font-inter text-[#D5D5D5] font-normal">
                 Every investigation is grounded in transparency, security, and societal value.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
       <div className=" block w-0 border border-[#5B5B5B] " />
        {/* Right Cards Column */}
        <div className="flex flex-col gap-14  mt-0 ">
          {/* Card 3 */}
          <Card className="flex flex-1 items-start gap-6 bg-transparent border-none shadow-none">
            <CardContent className="flex items-start gap-6 p-0 flex-col md:flex-row">
              <div className="h-24 w-24 object-cover"><GlassIcon icon={<Collab/>} size={60}/></div>
              <div className="flex flex-col gap-4">
                <p className="font-medium text-2xl font-sans tracking-normal">Collaborative Teams</p>
                <p className="text-base font-inter text-[#D5D5D5] font-normal">
                  Investigators, analysts, and technologists working side by side.
                </p>
              </div>
            </CardContent>
          </Card>

 <div className="w-full h-0 border-[#5B5B5B] border block  " />

          {/* Card 4 */}
          <Card className="flex flex-1 items-start gap-6 bg-transparent border-none shadow-none">
            <CardContent className="flex md:flex-row flex-col items-start gap-6 p-0  ">
              <div className="h-24 w-24 object-cover"><GlassIcon icon={<Winner/>} size={60}/></div>
              <div className="flex flex-col gap-4">
                <p className="font-medium text-2xl font-sans tracking-normal">Recognition & Rewards</p>
                <p className="text-base font-inter text-[#D5D5D5] font-normal">
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







{/* <div className="relative flex flex-col h-full">
         
          <div className="space-y-16">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-[#167BFF]/10 rounded-full p-3">
                <Laptop className="w-6 h-6 text-[#167BFF]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Hybrid & Remote Flexibility
                </h3>
                <p className="text-gray-400 text-sm">
                  Work where you’re most productive.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-[#167BFF]/10 rounded-full p-3">
                <ShieldCheck className="w-6 h-6 text-[#167BFF]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Ethics & Responsibility
                </h3>
                <p className="text-gray-400 text-sm">
                  Every investigation is grounded in transparency, security, and
                  societal value.
                </p>
              </div>
            </div>
          </div>

         
          <div className="absolute top-0 right-1/2 translate-x-1/2 h-full w-px bg-gray-700 hidden lg:block"></div>

         
          <div className="absolute top-[109px] right-0 w-[45%]">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-[#167BFF]/10 rounded-full p-3">
                <Users className="w-6 h-6 text-[#167BFF]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Collaborative Teams</h3>
                <p className="text-gray-400 text-sm">
                  Investigators, analysts, and technologists working side by
                  side.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute top-[340px] right-0 w-[45%]">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-[#167BFF]/10 rounded-full p-3">
                <Award className="w-6 h-6 text-[#167BFF]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Recognition & Rewards</h3>
                <p className="text-gray-400 text-sm">
                  We celebrate sharp thinking and impactful results.
                </p>
              </div>
            </div>
          </div>
        </div> */}
    