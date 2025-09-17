"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Toparrow } from "@/assets/icon";
import BookingForm from "../common/BookingForm";


const CESessions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Section */}
      <div className="flex justify-center items-center mt-8">
        <div className="w-full border-[0.25px] border-[#6D6D6D] p-6 md:p-12 bg-gradient-to-b from-[#000000] via-[#030A14] to-[#167BFF]/70 rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
            {/* Left Section */}
            <div className="flex-1 text-white text-center lg:text-left">
              <h1 className="text-3xl md:text-[32px] font-bold mb-4">
                Book Us for Accredited CE & CLE Sessions
              </h1>
              <p className="text-lg md:text-[16px] text-[#F1F1F1] mb-6 font-light">
                Empower your team with expert insights into OSINT, fraud prevention,
                <br />
                and digital investigations.
                <br /> Earn CE/CLE credits while staying ahead of emerging risks.
              </p>
              <div className="flex gap-3 sm:gap-5 mt-[0.9rem] w-full sm:w-auto">
                {/* Button that opens popup */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="custom-button with-shadow bg-[#1057B5]"
                >
                  Book a Speaking Session <Toparrow />
                </button>
                <Link href={"/pages/discoveredu"}>
                  <button className="custom-button with-border bg-transparent">
                    Discover Our Educational Programs <Toparrow />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Section: Image */}
            <div className="flex-shrink-0 mt-8 lg:mt-0 relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/cle.png"
                alt="People in a meeting discussing"
                className="rounded-2xl w-[400px] h-[226px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed container inset-0 flex items-center justify-center bg-opacity-70 z-50">
          <div className="relative w-full  mx-auto bg-[#1A1A1A] rounded-3xl shadow-2xl p-8 md:p-12 overflow-y-auto max-h-[90vh]">
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
            >
              ×
            </button>

            {/* Booking Form */}
            <BookingForm />
          </div>
        </div>
      )}
    </>
  );
};

export default CESessions;
