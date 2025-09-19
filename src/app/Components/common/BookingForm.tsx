"use client";

import { Toparrow } from "@/assets/icon";
import React from "react";

export default function BookingForm() {
  return (
    <div className="container px-4 sm:px-6 lg:px-[48px] py-8 sm:py-12">
      <div className="w-full border border-[#5B5B5B] rounded-[24px] sm:rounded-[32px] p-4 sm:p-8 lg:p-[48px]">
        <h1 className="text-white text-2xl sm:text-3xl md:text-[32px] font-bold mb-6 sm:mb-8 text-center sm:text-left leading-snug">
          Book Your CE/CLE Public Speaking Session
        </h1>

        <form className="flex flex-col gap-4 sm:gap-[16px]">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-white text-[14px] sm:text-[16px] font-medium mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                className="w-full p-[10px] sm:p-[11px] bg-[#2A2A2A] text-white shadow-none rounded-lg font-normal font-inter border border-[#3C414A] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 text-[14px]"
                required
              />
              <p className="mt-1 text-[12px] text-[#A0A4AE]">Minimum 2 characters</p>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-white text-[14px] sm:text-[16px] font-medium mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                className="w-full p-[10px] sm:p-[11px] bg-[#2A2A2A] text-white shadow-none rounded-lg font-normal font-inter border border-[#3C414A] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 text-[14px]"
                minLength={2}
                required
              />
              <p className="mt-1 text-[12px] text-[#A0A4AE]">Minimum 2 characters</p>
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-white text-[14px] sm:text-[16px] font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="John123@example.com"
              className="w-full p-[10px] sm:p-[11px] bg-[#2A2A2A] text-white rounded-lg border border-[#3C414A] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 text-[14px]"
              required
            />
            <p className="mt-1 text-[12px] text-[#A0A4AE]">Must be a valid email address</p>
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-white text-[14px] sm:text-[16px] font-medium mb-2"
            >
              Phone Number
            </label>
            <div className="flex bg-[#2A2A2A] rounded-xl border border-[#3C414A] focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all duration-200">
              <select
                id="countryCode"
                name="countryCode"
                className="p-[10px] sm:p-[11px] bg-transparent text-white rounded-l-xl outline-none cursor-pointer text-[14px]"
              >
                <option value="+91" className="bg-[#2A2A2A]">+91</option>
                <option value="+1" className="bg-[#2A2A2A]">+1</option>
                <option value="+44" className="bg-[#2A2A2A]">+44</option>
              </select>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="00 0000 0000"
                className="flex-1 p-[10px] sm:p-[11px] bg-transparent text-white outline-none text-[14px] rounded-r-xl"
                required
              />
            </div>
          </div>

          {/* Organization & Role */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="organizationName"
                className="block text-white text-[14px] sm:text-[16px] font-medium mb-2"
              >
                Organization Name
              </label>
              <input
                type="text"
                id="organizationName"
                name="organizationName"
                placeholder="Your company, law firm, or institution"
                className="w-full p-[10px] sm:p-[11px] bg-[#2A2A2A] text-white rounded-lg border border-[#3C414A] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-[14px]"
              />
            </div>
            <div>
              <label
                htmlFor="professionalRole"
                className="block text-white text-[14px] sm:text-[16px] font-medium mb-2"
              >
                Professional Role
              </label>
              <input
                type="text"
                id="professionalRole"
                name="professionalRole"
                placeholder="E.g., Claims Manager, Attorney, Investigator"
                className="w-full p-[10px] sm:p-[11px] bg-[#2A2A2A] text-white rounded-lg border border-[#3C414A] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-[14px]"
              />
            </div>
          </div>

          {/* Session Type & Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="sessionType"
                className="block text-white text-[14px] sm:text-[16px] font-medium mb-2"
              >
                Session Type
              </label>
              <select
                id="sessionType"
                name="sessionType"
                className="w-full p-[10px] sm:p-[11px] bg-[#2A2A2A] text-white rounded-lg border border-[#3C414A] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-[14px]"
              >
                <option className="bg-[#2A2A2A]">CE Credit</option>
                <option className="bg-[#2A2A2A]">CLE Credit</option>
                <option className="bg-[#2A2A2A]">General Speaking Engagement</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="preferredDateTime"
                className="block text-white text-[14px] sm:text-[16px] font-medium mb-2"
              >
                Preferred Date & Time
              </label>
              <input
                type="text"
                id="preferredDateTime"
                name="preferredDateTime"
                placeholder="Choose a date and time"
                className="w-full p-[10px] sm:p-[11px] bg-[#2A2A2A] text-white rounded-lg border border-[#3C414A] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-[14px]"
                onFocus={(e) => (e.target.type = "datetime-local")}
                onBlur={(e) => e.target.value === "" && (e.target.type = "text")}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-white text-[14px] sm:text-[16px] font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us more about your audience..."
              className="resize-none w-full p-[10px] sm:p-[11px] bg-[#2A2A2A] text-white rounded-lg border border-[#3C414A] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-[14px]"
              minLength={20}
              required
            ></textarea>
            <p className="mt-1 text-[12px] text-[#A0A4AE]">Minimum 20 characters</p>
          </div>

          {/* Agreement */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              className="h-[16px] w-[16px] rounded bg-[#2A2A2A] border-gray-600 text-blue-600 focus:ring-blue-500"
              required
            />
            <label htmlFor="agreement" className="text-[#E3E3E3] text-[14px]">
              I agree to the terms and conditions and authorize Cyphr to contact me regarding this booking.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full custom-button with-shadow bg-[#1057B5] mt-4"
          >
            Submit Booking Request <Toparrow />
          </button>
        </form>
      </div>
    </div>
  );
}
