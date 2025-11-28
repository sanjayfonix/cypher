"use client";
import { useState } from "react";
import { Mail, MapPin, ArrowRight, Phone, } from "lucide-react";

import { Bell, Email, Headquators } from "@/assets/icon";
import Button from "../common/Button";
import { PointerGrid } from "../home/GridAnimation";
import Link from "next/link";
import { GlassIcon } from "../home/GlassIcon";
import Head from "next/head";

export default function GetContact() {
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    <div className="mt-10">
      <div className="relative container text-white flex flex-col md:flex-row items-start justify-between p-6 md:p-12">
        
          
       
               <div className="hidden lg:block absolute z-30 left-0 bottom-0  -translate-x-1/3">
                            <div className="relative flex items-center justify-center">
                              <PointerGrid width={200} height={200} horizontal={{direction:'right',y:185 ,
                    fromX: 200,
                    toX: 80}}/>
                            </div>
                            </div>
                            
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_5%_100%,rgba(00,99,235,0.25),transparent_30%)] pointer-events-none" />

        {/* Left Side - Info */}
        <div className="md:w-1/2 relative z-10 mb-10 md:mb-0">
          <h2 className="text-[32px] md:text-[48px] font-bold mb-4">
            Get in touch
          </h2>
          <p className="text-gray-300 text-[14px] md:text-[16px] mb-6">
            Fill out the form or contact us directly to discuss how <br /> Cyphr
            can provide intelligence solutions tailored to your <br />{" "}
            organization's needs.
          </p>

          {/* Contact Info */}
          

          <div className="flex items-center gap-3 mb-4">
            
             <GlassIcon arcLength={150} size={46} icon={<Headquators />}>
             
            </GlassIcon>
            
            <div>
              <p className="text-gray-100 text-lg md:text-2xl font-bold">
                Location
              </p>
              <p className="text-gray-300">Philadelphia</p>
            </div>
          </div>
         <div className="flex items-center gap-3 mb-4">
            <GlassIcon arcLength={150} size={46} icon={<Email />}>
             
            </GlassIcon>
            <div>
              <p className="text-gray-100 text-lg md:text-2xl font-bold">
                Email ID
              </p>
              <p className="text-gray-300"> info@webutation.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-4">
            
              <GlassIcon arcLength={150} size={46} icon={<Phone color="#157AFF"/>}>
             
            </GlassIcon>
            
            <div>
              <p className="text-gray-100 text-lg md:text-2xl font-bold">
                Phone
              </p>
              <p className="text-gray-300">0101010100</p>
            </div>
          </div>

          <div className="border-b-2 border-gray-600 mr-8 my-6 hidden md:block"></div>

          <h3 className="text-[18px] md:text-[24px] mb-4 tracking-wide p-2">
            We're here to help with your investigative <br /> intelligence
            needs, Reach out to us today <br />
            for expert support
          </h3>
        </div>

        {/* Right Side - Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 md:pl-8 md:border-l md:border-gray-700 relative z-10 flex flex-col gap-4"
        >
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-100 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="John"
                className="w-full bg-gradient-to-b from-[#0E1014] to-[#3c414a]/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Minimum 2 characters
              </p>
            </div>

            <div>
              <label className="block text-sm text-gray-100 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full bg-gradient-to-b from-[#0E1014] to-[#3c414a]/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Minimum 2 characters
              </p>
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
              className="w-full bg-gradient-to-b from-[#0E1014] to-[#3c414a]/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Must be a valid email address
            </p>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-gray-100 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="00 0000 0000"
              className="w-full bg-gradient-to-b from-[#0E1014] to-[#3c414a]/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Numbers and “+” allowed
            </p>
          </div>

          {/* Select Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-100 mb-2">
              Services / Industry of Interest
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full bg-[#0E1014] border border-gray-700 rounded-xl px-4 py-3 text-gray-200 text-sm shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-500"
            >
              <option className="bg-[#0E1014] text-gray-200">
                Consulting & Advisory
              </option>
              <option className="bg-[#0E1014] text-gray-200">
                Brand Defence
              </option>
              <option className="bg-[#0E1014] text-gray-200">
                Social Media Intelligence
              </option>
              <option className="bg-[#0E1014] text-gray-200">
                Insurance Carriers
              </option>
              <option className="bg-[#0E1014] text-gray-200">Employers</option>
              <option className="bg-[#0E1014] text-gray-200">Law Firms</option>
              <option className="bg-[#0E1014] text-gray-200">
                General Enquiry
              </option>
              <option className="bg-[#0E1014] text-gray-200">Academia</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-100 mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us more about your intelligence needs..."
              className="w-full h-28 bg-gradient-to-b from-[#0E1014] to-[#3c414a]/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 resize-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              Minimum 20 characters
            </p>
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
            <p className="text-sm text-gray-300">
              I accept the terms and conditions of Webutation’s DPA (
              <Link href={'/pages/legal'}><span className="text-blue-400 underline cursor-pointer">
                Data Processing Agreement
              </span></Link>
              ) and authorize the company to contact me for relevant purposes.
            </p>
          </div>

          {/* Submit Button */}
          <Button
            color="bg-[#1057B5]"
            text="Explore Services"
            isIcon={true}
          />
        </form>
      </div>
    </div>
  );
}
