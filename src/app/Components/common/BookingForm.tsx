"use client";

import React from "react";

export default function BookingForm() {
  return (
    <div className="container p-[48px]">
      <div className="w-full border-[1px] border-[#5B5B5B]  rounded-3xl p-[48px]">
        <h1 className="text-white text-3xl md:text-[32px] font-extrabold mb-10 text-center sm:text-left">
          Book Your CE/CLE Public Speaking Session
        </h1>

        <form className="space-y-[8px]">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-300 text-[16px] font-medium mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                className="w-full p-[11px] bg-[#2A2A2A] text-white rounded-xl border-[0.5px] border-[#3C414A] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 text-[14px]"

                required
              />
              <p className="mt-2 text-[12px] text-gray-500">Minimum 2 characters</p>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-300 text-[16px] font-medium mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                className="w-full p-[11px] bg-[#2A2A2A] text-white rounded-xl border-[0.5px] border-[#3C414A] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 text-[14px]"
                minLength={2}
                required
              />
              <p className="mt-2 text-[12px] text-gray-500">Minimum 2 characters</p>
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-300 text-[16px] font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="John123@example.com"
              className="w-full p-[11px] bg-[#2A2A2A] text-white rounded-xl border-[0.5px] border-[#3C414A] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 text-[14px]"
              required
            />
            <p className="mt-2 text-[12px] text-gray-500">
              Must be a valid email address
            </p>
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-gray-300 text-[16px] font-medium mb-2"
            >
              Phone Number
            </label>
            <div className="flex bg-[#2A2A2A] rounded-xl border-[0.5px] border-[#3C414A] focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all duration-200"
            >
              <select
                id="countryCode"
                name="countryCode"
                className="p-[11px] bg-transparent text-white rounded-l-xl outline-none cursor-pointer text-[14px]"
              >
                <option value="+91" className="bg-[#2A2A2A]">
                  +91
                </option>
                <option value="+1" className="bg-[#2A2A2A]">
                  +1
                </option>
                <option value="+44" className="bg-[#2A2A2A]">
                  +44
                </option>
              </select>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="00 0000 0000"
                className="flex-1 p-[11px] bg-transparent text-white rounded-r-xl outline-none text-[14px]"
                required
              />
            </div>
          </div>

          {/* Organization & Role */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="organizationName"
                className="block text-gray-300 text-[16px] font-medium mb-2"
              >
                Organization Name
              </label>
              <input
                type="text"
                id="organizationName"
                name="organizationName"
                placeholder="Your company, law firm, or institution"
                className="w-full p-[11px] bg-[#2A2A2A] text-white rounded-xl border-[0.5px] border-[#3C414A] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 text-[14px]"
              />
            </div>
            <div>
              <label
                htmlFor="professionalRole"
                className="block text-gray-300 text-[16px] font-medium mb-2"
              >
                Professional Role
              </label>
              <input
                type="text"
                id="professionalRole"
                name="professionalRole"
                placeholder="E.g., Claims Manager, Attorney, Investigator"
                className="w-full p-[11px] bg-[#2A2A2A] text-white rounded-xl border-[0.5px] border-[#3C414A] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 text-[14px]"
              />
            </div>
          </div>

          {/* Session Type & Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="sessionType"
                className="block text-gray-300 text-[16px] font-medium mb-2"
              >
                Session Type
              </label>
              <div className="relative">
                <select
                  id="sessionType"
                  name="sessionType"
                  className="w-full p-[11px] bg-[#2A2A2A] text-white rounded-xl border border-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none outline-none transition-all duration-200 cursor-pointer text-[14px] pr-10"
                >
                  <option className="bg-[#2A2A2A]">CE Credit</option>
                  <option className="bg-[#2A2A2A]">CLE Credit</option>
                  <option className="bg-[#2A2A2A]">
                    General Speaking Engagement
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                  <svg className="fill-current h-6 w-6" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.096 6.924 4.682 8l4.611 4.95z" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="preferredDateTime"
                className="block text-gray-300 text-[14px] font-medium mb-2"
              >
                Preferred Date & Time
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="preferredDateTime"
                  name="preferredDateTime"
                  placeholder="Choose a date and time for the session"
                  className="w-full p-[11px] bg-[#2A2A2A] text-white rounded-xl border border-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 cursor-pointer text-[16px] pr-10"
                  onFocus={(e) => (e.target.type = "datetime-local")}
                  onBlur={(e) =>
                    e.target.value === "" && (e.target.type = "text")
                  }
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-300 text-[16px] font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us more about your audience and what you'd like us to cover..."
              className="w-full p-[11px] bg-[#2A2A2A] text-white rounded-xl border-[0.5px] border-[#3C414A] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 text-[14px]"
              minLength={20}
              required
            ></textarea>
            <p className="mt-2 text-[12px] text-gray-500">Minimum 20 characters</p>
          </div>

          {/* Agreement */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              className="h-[12px] w-[12px] rounded bg-[#2A2A2A] border-gray-600 text-blue-600 focus:ring-blue-500 mr-3 mt-1"
              required
            />
            <label
              htmlFor="agreement"
              className="text-gray-300 text-[14px] cursor-pointer"
            >
              I agree to the terms and conditions and authorize Cyphr to contact
              me regarding this booking.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-[16px] transition-colors duration-300 shadow-lg mt-10"
          >
            Submit Booking Request
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
