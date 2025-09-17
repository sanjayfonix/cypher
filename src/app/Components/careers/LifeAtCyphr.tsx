"use client";

import { Laptop, ShieldCheck, Users, Award } from "lucide-react";

export default function LifeAtCyphr() {
  return (
    <section className=" container text-white py-16 ">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Life at Cyphr</h2>
        <p className="text-gray-300 text-base md:text-lg">
          At Cyphr, we promote innovation, inclusivity, and personal growth in a
          collaborative environment. Our team embraces cutting-edge challenges,
          continuous learning, and diverse contributions, helping shape the
          future of technology in a supportive culture.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="flex">
          <img
            src="/images/carieer.png"
            alt="Life at Cyphr Graphic"
            className="w-[80%] md:w-[70%] lg:w-[90%] max-w-[500px]"
          />
        </div>

        {/* Right Content */}
        <div className="relative flex flex-col h-full">
          {/* Left Column of Text */}
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

          {/* Vertical Divider */}
          <div className="absolute top-0 right-1/2 translate-x-1/2 h-full w-px bg-gray-700 hidden lg:block"></div>

          {/* Right Column Positioned Elements */}
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
        </div>
      </div>
    </section>
  );
}
