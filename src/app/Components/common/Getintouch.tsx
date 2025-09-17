"use client";
import { useState } from "react";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import Button from "./Button";
import { Bell, Email, Headquators } from "@/assets/icon";
 
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
        <div id='contact-us' className="relative container  border border-[#5B5B5B] rounded-4xl text-white  flex flex-col md:flex-row items-start justify-between p-12  my-10  gap-10 overflow-hidden">
 
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_5%_100%,rgba(00,99,235,0.25),transparent_70%)] pointer-events-none" />
 
            {/* Left Side - Info */}
            <div className="md:w-1/2 relative z-10">
                <h3 className="text-[24px] font-semibold mb-4 tracking-wide p-2">
                    Every investigation we conduct is <br/> grounded in responsibility, <br/> transparency, and societal impact.
                </h3>
                <div className=" border-b border-[#3c414a] mr-8 my-6"></div>
                <h2 className="text-[48px] font-bold mb-4">Get in touch</h2>
                <p className="text-gray-300 text-[16px] mb-6">
                    Fill out the form or contact us directly to discuss how Cyphr can provide intelligence solutions tailored to your organization's needs.
                </p>
 
                <div className="flex items-center gap-3 mb-4">
                    <div className="border-t border-b rounded-t-full rounded-b-full">
                        <Email />
                    </div>
                    <div>
                        <p className="text-gray-100 text-2xl font-bold">Email Id</p>
                        <p className="text-gray-300">Loremipsum16@gmail.com</p>
 
                    </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="border-t border-b rounded-t-full rounded-b-full">
                        <Headquators />
                    </div>
                    <div>
                        <p className="text-gray-100 text-2xl font-bold">Headquaters</p>
                        <p className="text-gray-300">New York , NY</p>
 
                    </div>
                </div>
            </div>
 
            {/* Right Side - Form */}
            <form
                onSubmit={handleSubmit}
                className="md:w-1/2 pl-8 border-l border-[#3c414a] relative z-10 flex flex-col gap-4"
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
                            className="w-full bg-gradient-to-b from-[#0E1014] to-[#3c414a]/30  border-[0.5px] border-[#3C414A]  rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
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
                            className="w-full bg-gradient-to-b from-[#0E1014] to-[#3c414a]/30 border-[0.5px] border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
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
                        className="w-full bg-gradient-to-b from-[#0E1014] to-[#3c414a]/30 border-[0.5px] border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
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
                        className="w-full bg-gradient-to-b from-[#0E1014] to-[#3c414a]/30 border-[0.5px] border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">Numbers and “+” allowed</p>
                </div>
 
                {/* Select Dropdown */}
                <div >
                    <label className="block text-sm font-medium text-gray-100 mb-2">
                        Services / Industry of Interest
                    </label>
                    <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="
      w-full
      bg-[#0E1014]
      border-[0.5px] border-gray-700
      rounded-xl
      px-4 py-3
      text-gray-200
      text-sm
      shadow-[0_0_10px_rgba(0,0,0,0.5)]
      transition-all f
      duration-300
      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
      focus:border-blue-500
      hover:border-gray-500
    "
                    >
                        <option className="bg-[#0E1014] text-gray-200">Consulting & Advisory</option>
                        <option className="bg-[#0E1014] text-gray-200">Brand Defence</option>
                        <option className="bg-[#0E1014] text-gray-200">Social Media Intelligence</option>
                        <option className="bg-[#0E1014] text-gray-200">Insurance Carriers</option>
                        <option className="bg-[#0E1014] text-gray-200">Employers</option>
                        <option className="bg-[#0E1014] text-gray-200">Law Firms</option>
                        <option className="bg-[#0E1014] text-gray-200">General Enquiry</option>
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
                        className="w-full h-28 bg-gradient-to-b from-[#0E1014] to-[#3c414a]/30 border-[0.5px] border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 resize-none"
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
                    <p className="text-sm text-gray-300">
                        I accept the terms and conditions of Social Links’ DPA (
                        <span className="text-blue-400 underline cursor-pointer">
                            Data Processing Agreement
                        </span>) and authorize the company to contact me for relevant purposes.
                    </p>
                </div>
 
                {/* Submit Button with Glow */}
                <Button color="bg-[#1057B5]" text="Submit" isIcon={true} />
            </form>
 
        </div>
    );
}
 