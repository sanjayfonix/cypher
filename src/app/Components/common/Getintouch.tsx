"use client";
import { useState } from "react";
import { Mail, MapPin, ArrowRight } from "lucide-react";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
  };

  return (
    <div className="relative w-full border border-gray-600 rounded-4xl text-white  flex flex-col md:flex-row items-start justify-between p-12 my-10 gap-10 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_5%_100%,rgba(00,99,235,0.25),transparent_70%)] pointer-events-none" />
      
      {/* Left Side - Info */}
      <div className="md:w-1/2 relative z-10">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-wide p-2">
          Every investigation we conduct is grounded in responsibility, transparency, and societal impact.
        </h3>
        <div className=" border-b-2 border-gray-600 my-6"></div>
        <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
        <p className="text-gray-300 mb-6">
          Fill out the form or contact us directly to discuss how Cyphr can provide intelligence solutions tailored to your organization's needs.
        </p>

        <div className="flex items-center gap-3 mb-4">
          <Mail className="text-blue-400" size={20} />
          <p className="text-gray-300">Loremipsum16@gmail.com</p>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="text-blue-400" size={20} />
          <p className="text-gray-300">New York, NY</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2  rounded-2xl p-8 shadow-xl relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="John"
              className="w-full bg-gradient-to-b from-[#0d0f14] to-[#0b0d12] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className="w-full bg-gradient-to-b from-[#0d0f14] to-[#0b0d12] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="John123@example.com"
            className="w-full bg-gradient-to-b from-[#0d0f14] to-[#0b0d12] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm text-gray-300 mb-1">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="00 0000 0000"
            className="w-full bg-gradient-to-b from-[#0d0f14] to-[#0b0d12] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm text-gray-300 mb-1">Services/Industry of interest</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full bg-gradient-to-b from-[#0d0f14] to-[#0b0d12] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
          >
            <option>Consulting & Advisory</option>
            <option>Brand Defence</option>
            <option>Social Media Intelligence</option>
            <option>Geospatial Cellular Forensics</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block text-sm text-gray-300 mb-1">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us more about your intelligence needs..."
            className="w-full h-28 bg-gradient-to-b from-[#0d0f14] to-[#0b0d12] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 resize-none"
          ></textarea>
        </div>

        <div className="flex items-start mt-4 gap-2">
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
            </span>) and authorize the company to contact me for relevant purposes
          </p>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 mt-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium py-3 rounded-full shadow-lg transition-all"
        >
          Submit <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
}
