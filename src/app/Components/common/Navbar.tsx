"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
  const pathname = usePathname(); // Get current route
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const router = useRouter();

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const services = [
    { label: "Consulting and Advisory", href: "/pages/services/consulting" },
    { label: "Brand Defence", href: "/pages/services/brand-defence" },
    { label: "Social Media Intelligence", href: "/pages/services/social-intel" },
    { label: "Geospatial Cellular Forensics", href: "/pages/services/geospatial" },
  ];

  const industries = [
    { label: "Insurance Career", href: "/pages/industries/insurance" },
    { label: "Employer", href: "/pages/industries/employer" },
    { label: "Law Firm", href: "/pages/industries/law" },
    { label: "Academia", href: "/pages/industries/academia" },
  ];

  return (
    <nav className="flex justify-center px-6 lg:px-16 py-4 bg-black">
      <div className="w-full containerr bg-black flex items-center justify-between">
        {/* Left Logo */}
        <Link href="/" className="flex gap-2">
          <Image
            src="/images/SmallLogo.png"
            alt="Logo"
            width={203}
            height={28}
          />
        </Link>

        {/* Menu Links */}
        <div className="hidden md:flex bg-[#3c414a] items-center gap-6 border border-white/20 rounded-full px-6 py-2">
          {/* Home */}
          <Link
            href="/"
            className={`px-4 py-1 rounded-full transition-all ${pathname === "/" ? "bg-gray-100 text-black" : "text-gray-100 hover:text-gray-300"}`}
          >
            Home
          </Link>

          {/* About */}
          <Link
            href="/pages/aboutus"
            className={`px-4 py-1 rounded-full transition-all ${pathname === "/pages/aboutus" ? "bg-gray-100 text-black" : "text-gray-100 hover:text-gray-300"}`}
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("services")}
              className="flex items-center gap-1 text-gray-100 cursor-pointer hover:text-gray-300"
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform ${openMenu === "services" ? "rotate-180" : ""}`}
              />
            </button>
            {openMenu === "services" && (
              <div className="absolute mt-3 bg-[#1A1A1A] text-white rounded-xl shadow-lg w-64 p-2">
                {services.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`flex justify-between items-center px-4 py-2 rounded-lg w-full text-left ${pathname === item.href ? "bg-white/10" : "hover:bg-white/10"}`}
                  >
                    {item.label}
                    <ArrowUpRight size={16} />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("industries")}
              className="flex items-center gap-1 text-gray-100 cursor-pointer hover:text-gray-300"
            >
              Industries
              <ChevronDown
                size={16}
                className={`transition-transform ${openMenu === "industries" ? "rotate-180" : ""}`}
              />
            </button>
            {openMenu === "industries" && (
              <div className="absolute mt-3 bg-[#1A1A1A] text-white rounded-xl shadow-lg w-64 p-2">
                {industries.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`flex justify-between items-center px-4 py-2 rounded-lg w-full text-left ${pathname === item.href ? "bg-white/10" : "hover:bg-white/10"}`}
                  >
                    {item.label}
                    <ArrowUpRight size={16} />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Legal */}
          <Link
            href="/pages/contactus"
            className={`px-4 py-1 rounded-full transition-all ${pathname === "/pages/contactus" ? "bg-gray-100 text-black" : "text-gray-100 hover:text-gray-300"}`}
          >
            Contact Us
          </Link>
          <Link
            href="/pages/legal"
            className={`px-4 py-1 rounded-full transition-all ${pathname === "/pages/legal" ? "bg-gray-100 text-black" : "text-gray-100 hover:text-gray-300"}`}
          >
            Legal
          </Link>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">

          <Button
            color="bg-transparent"
            text="Refer A Case"
            onClick={() => router.push("/pages/refer_case")} // 👈 passing function directly
            isBorder={true}
          />

          <Button color="bg-[#1057B5]" text="Get in touch" isIcon={true} />

        </div>
      </div>
    </nav>
  );
}
