"use client";
import { useState } from "react";
import { Email, Headquators, Toparrow } from "@/assets/icon";
import { GlassIcon } from "../home/GlassIcon";
import { PointerGrid } from "../home/GridAnimation";
import Link from "next/link";

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "Consulting & Advisory",
    message: "",
    terms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
  };

  return (
    <div
      id="contact-us"
      className="
        relative container 
        border border-[#5B5B5B] 
        rounded-3xl
        text-white 
        flex flex-col md:flex-row 
        items-start justify-between 
        p-6 sm:p-10 md:p-12  
        my-10 gap-8 md:gap-10 
        overflow-hidden
      "
    >
       <div className="hidden lg:block absolute z-30 left-0 bottom-0  -translate-x-1/3">
                    <div className="relative flex items-center justify-center">
                      <PointerGrid width={400} height={300} horizontal={{direction:'right',y:185 ,
            fromX: 200,
            toX: 80}}/>
                    </div>
                    </div>
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_5%_100%,rgba(00,99,235,0.25),transparent_70%)] pointer-events-none" />

      {/* Left Side - Info */}
      <div className="md:w-1/2 relative z-10 space-y-4 sm:space-y-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug tracking-wide">
          Every investigation we conduct is <br /> grounded in responsibility, <br /> transparency,
          and societal impact.
        </h3>
        <div className="border-b border-[#3c414a] md:mr-8 my-4 sm:my-6"></div>
        <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold">Get in touch</h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Fill out the form or contact us directly to discuss how Cyphr can provide intelligence
          solutions tailored to your organization's needs.
        </p>

        {/* Contact Info */}
        <div className="flex items-center gap-3">
          <GlassIcon icon={<Email />} size={42} />
          <div>
            <p className="text-gray-100 text-lg sm:text-xl font-bold">Email Id</p>
            <p className="text-gray-300 text-sm sm:text-base">Loremipsum16@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <GlassIcon icon={<Headquators />} size={42} />
          <div>
            <p className="text-gray-100 text-lg sm:text-xl font-bold">Headquarters</p>
            <p className="text-gray-300 text-sm sm:text-base">New York , NY</p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <form
        onSubmit={handleSubmit}
        className="
          md:w-1/2 
          md:pl-8 
          border-t md:border-t-0 md:border-l border-[#3c414a] 
          relative z-10 
          flex flex-col gap-4 sm:gap-6
          pt-6 md:pt-0
        "
      >
        {/* First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-100 mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="John"
              className="w-full bg-[#1E1E1E] border border-[#3C414A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">Minimum 2 characters</p>
          </div>

          <div>
            <label className="block text-sm text-gray-100 mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className="w-full bg-[#1E1E1E] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">Minimum 2 characters</p>
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-100 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="John123@example.com"
            className="w-full bg-[#1E1E1E] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">Must be a valid email address</p>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm text-gray-100 mb-1">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="00 0000 0000"
            className="w-full bg-[#1E1E1E] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">Numbers and “+” allowed</p>
        </div>

        {/* Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-100 mb-2">
            Services / Industry of Interest
          </label>
          <div className="relative">
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="
                w-full appearance-none 
                bg-[#1E1E1E]/90 border border-gray-700 
                rounded-xl px-4 py-3 pr-10 
                text-gray-200 text-sm
                shadow-[0_4px_20px_rgba(0,0,0,0.4)]
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                hover:border-gray-500 transition-all duration-200
              "
            >
              <option>Consulting & Advisory</option>
              <option>Brand Defence</option>
              <option>Social Media Intelligence</option>
              <option>Insurance Carriers</option>
              <option>Employers</option>
              <option>Law Firms</option>
              <option>General Enquiry</option>
              <option>Academia</option>
              <option>Request Risk profiling</option>
              <option>Request a Custom Program</option>
              <option>Support Your Team</option>
            </select>

            {/* Custom Arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm text-gray-100 mb-1">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us more about your intelligence needs..."
            className="w-full h-28 bg-[#1E1E1E] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 resize-none"
          />
          <p className="text-xs text-gray-500 mt-1">Minimum 20 characters</p>
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-start gap-2 mt-2">
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
            className="mt-1 accent-blue-500"
          />
          <p className="text-sm text-gray-300 leading-snug">
            I accept the terms and conditions of Webutation’s DPA (
            <Link href={'/pages/legal'}><span className="text-blue-400 underline cursor-pointer">
              Data Processing Agreement
            </span>)</Link> and authorize the company to contact me for relevant purposes.
          </p>
        </div>

        {/* Submit Button */}
        <button className="custom-button with-shadow bg-[#1057B5]">
          Submit <Toparrow />
        </button>
      </form>
    </div>
  );
}
