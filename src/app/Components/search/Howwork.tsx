'use client'
import { useState } from "react";
import { Toparrow } from "@/assets/icon";

export default function HowItWorks() {
  const [mode, setMode] = useState(0);
  const [type, setType] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row mt-10 items-center  sm:p-6 w-full justify-center">
      {/* Right Column */}
      <div className="relative h-full flex flex-col gap-6 lg:gap-4 items-center w-full max-w-3xl">
        <div className="flex flex-col w-full">
          {/* Top Tab Buttons */}
          <div className="flex flex-col sm:flex-row justify-center w-full gap-2 sm:gap-4 p-3 sm:p-4 rounded-t-[12px] bg-[#09346B]">
            {["All in One", "OSINT", "Data Breach"].map((label, idx) => (
              <button
                key={idx}
                onClick={() => setMode(idx)}
                style={{
                  border: mode === idx ? "1px solid #167BFF" : "none",
                  backgroundColor: mode === idx ? "#0C448C" : "transparent",
                  transition: "linear 0.5s",
                }}
                className="rounded-lg px-4 py-2 sm:py-3 cursor-pointer w-full sm:w-auto text-center"
              >
                <span
                  style={{
                    color: mode === idx ? "white" : "#E3E3E3",
                    fontWeight: mode === idx ? "bold" : "normal",
                  }}
                  className="font-sans text-base sm:text-lg md:text-xl"
                >
                  {label}
                </span>
              </button>
            ))}
          </div>

          {/* Bottom Content */}
          <div className="flex flex-col gap-6 sm:gap-8 p-4 sm:p-6 md:p-8 rounded-b-[12px] bg-black shadow-[inset_0_0_30px_0_#157AFF80]">
            {/* Type Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              {["Username", "Phone Number", "Email"].map((label, idx) => (
                <button
                  key={idx}
                  style={{
                    transition: "linear 1s",
                    backgroundColor: type === idx ? "#E8F2FF" : "#515151",
                    border: type === idx ? "1.2px solid #157AFF" : "none",
                  }}
                  onClick={() => setType(idx)}
                  className="flex items-center justify-center gap-2.5 rounded-[3rem] w-full sm:w-auto px-4 py-2 sm:py-3 cursor-pointer text-center"
                >
                  <span
                    style={{
                      color: type === idx ? "#1E1E1E" : "black",
                      fontWeight: type === idx ? "500" : "normal",
                    }}
                    className="font-sans text-base sm:text-lg md:text-xl"
                  >
                    {label}
                  </span>
                </button>
              ))}
            </div>

            {/* Conditional Form */}
            {type === 0 && <UsernameForm />}
            {type === 1 && <CustomForm formType={1} />}
            {type === 2 && <CustomForm formType={2} />}

            {/* Search Button */}
            <div className="px-2 sm:px-4">
              <button className="custom-button with-shadow w-full bg-[#1057B5] py-3 rounded-full">
                Search Now <Toparrow />
              </button>
            </div>
          </div>
        </div>

        <p className="font-inter font-normal text-white text-xs sm:text-sm text-center">
          Search by username, phone number, or email to confidentially look up information.
        </p>
      </div>
    </div>
  );
}

export function UsernameForm() {
  return (
    <div className="w-full p-2 sm:p-4">
      {/* Full Name */}
      <div className="mb-3">
        <label className="block text-sm text-white mb-2 sm:mb-4">Full name</label>
        <input
          type="text"
          placeholder="Enter full name"
          className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 py-3 px-4 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* City + State */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
        <div className="w-full">
          <label className="block text-sm text-white mb-2 sm:mb-4">City</label>
          <input
            type="text"
            placeholder="City"
            className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 px-4 py-3 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-full">
          <label className="block text-sm text-white mb-2 sm:mb-4">State</label>
          <input
            type="text"
            placeholder="State"
            className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 px-4 py-3 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

interface formInput {
  formType: number;
}

export function CustomForm({ formType }: formInput) {
  return (
    <div className="w-full p-2 sm:p-4">
      <label className="block text-sm text-white font-inter mb-2 sm:mb-4">
        {formType === 1 ? "Phone Number" : "Email"}
      </label>
      <input
        type="text"
        placeholder={formType === 1 ? "Enter Phone Number" : "Enter Email address"}
        className="w-full rounded-full bg-neutral-900 text-white placeholder-gray-500 border border-[#515151] focus:outline-none focus:ring-2 focus:ring-blue-500 py-3 px-4"
      />
    </div>
  );
}
