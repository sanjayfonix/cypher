"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import Button from "./Button";
import { Toparrow } from "@/assets/icon";

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  // Refs for desktop dropdowns
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const industriesRef = useRef<HTMLDivElement | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const services = [
    { label: "Consulting and Advisory", href: "/pages/services/consulting" },
    { label: "Brand Defense", href: "/pages/services/brand-defence" },
    { label: "Social Media Intelligence", href: "/pages/services/social-intel" },
    { label: "Geospatial Cellular Forensics", href: "/pages/services/geospatial" },
  ];

  const industries = [
    { label: "Insurance Career", href: "/pages/industries/insurance" },
    { label: "Employer", href: "/pages/industries/employer" },
    { label: "Law Firm", href: "/pages/industries/law" },
    { label: "Academia", href: "/pages/industries/academia" },
  ];

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
    setOpenMenu(null);
  };

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node) &&
        industriesRef.current &&
        !industriesRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="flex justify-center px-6 lg:px-16 py-4 bg-black">
        <div className="w-full container bg-black flex items-center justify-between">
          {/* Mobile menu button */}
          <button className="md:hidden text-white mr-4" onClick={toggleSidebar}>
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex gap-2">
            <Image
              src="/images/SmallLogo.png"
              alt="Logo"
              width={203}
              height={28}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-nowrap whitespace-nowrap bg-[#3c414a] items-center gap-4 border border-white/20 rounded-full px-4 py-2 ">
            {/* Home */}
            <Link
              href="/"
              className={`px-3 py-1 text-sm rounded-full transition-all ${
                pathname === "/"
                  ? "bg-gray-100 text-black"
                  : "text-gray-100 hover:text-gray-300"
              }`}
            >
              Home
            </Link>

            {/* About */}
            <Link
              href="/pages/aboutus"
              className={`px-3 py-1 text-sm rounded-full transition-all ${
                pathname === "/pages/aboutus"
                  ? "bg-gray-100 text-black"
                  : "text-gray-100 hover:text-gray-300"
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => toggleMenu("services")}
                className="flex text-sm items-center gap-1 text-gray-100 cursor-pointer hover:text-gray-300"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openMenu === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMenu === "services" && (
                <div className="absolute mt-3 backdrop-blur-md text-white rounded-xl shadow-lg w-64 p-2 z-10">
                  {services.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className={`flex justify-between items-center px-4 py-2 rounded-lg w-full text-left ${
                        pathname === item.href
                          ? "bg-white/10"
                          : "hover:bg-[#8A8A8A]"
                      }`}
                      onClick={handleLinkClick}
                    >
                      {item.label}
                      <ArrowUpRight size={16} />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div ref={industriesRef} className="relative">
              <button
                onClick={() => toggleMenu("industries")}
                className="flex text-sm items-center gap-1 text-gray-100 cursor-pointer hover:text-gray-300"
              >
                Industries
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openMenu === "industries" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMenu === "industries" && (
                <div className="absolute mt-3 backdrop-blur-md text-white rounded-xl shadow-lg w-64 p-2 z-10">
                  {industries.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className={`flex justify-between items-center px-4 py-2 rounded-lg w-full text-left ${
                        pathname === item.href
                          ? "bg-white/10"
                          : "hover:bg-[#8A8A8A]"
                      }`}
                      onClick={handleLinkClick}
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
              href="/pages/legal"
              className={`px-3 py-1 rounded-full transition-all ${
                pathname === "/pages/legal"
                  ? "bg-gray-100 text-black"
                  : "text-gray-100 hover:text-gray-300"
              }`}
            >
              Legal
            </Link>
          </div>

          {/* Desktop Right Buttons */}
          <div className="hidden md:flex items-center gap-4 md:gap-2">
            <Link href={'/pages/contactus'}><button className="hidden lg:block min-w-[130px] custom-button with-border bg-transparent">
              Get in touch
            </button></Link>
            <button
              onClick={() => router.push("/pages/refer_case")}
              className="min-w-[160px] text-sm custom-button with-shadow bg-[#1057B5]"
            >
              Refer a Case
              <Toparrow />
            </button>
          </div>

          {/* Placeholder for mobile */}
          <div className="md:hidden invisible">
            <Menu size={24} />
          </div>
        </div>
      </nav>

      {/* ✅ Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-black z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex gap-2" onClick={handleLinkClick}>
              <Image
                src="/images/SmallLogo.png"
                alt="Logo"
                width={203}
                height={28}
              />
            </Link>
            <button onClick={toggleSidebar} className="text-white">
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {/* Home */}
            <Link
              href="/"
              className={`px-4 py-3 rounded-full transition-all ${
                pathname === "/"
                  ? "bg-gray-100 text-black"
                  : "text-gray-100 hover:bg-white/10"
              }`}
              onClick={handleLinkClick}
            >
              Home
            </Link>

            {/* About */}
            <Link
              href="/pages/aboutus"
              className={`px-4 py-3 rounded-full transition-all ${
                pathname === "/pages/aboutus"
                  ? "bg-gray-100 text-black"
                  : "text-gray-100 hover:bg-white/10"
              }`}
              onClick={handleLinkClick}
            >
              About Us
            </Link>

            {/* Services Dropdown (mobile click) */}
            <div className="relative">
              <button
                onClick={() =>
                  setOpenMenu(
                    openMenu === "services-mobile" ? null : "services-mobile"
                  )
                }
                className="flex items-center justify-between w-full px-4 py-3 rounded-full text-gray-100 cursor-pointer hover:bg-white/10"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openMenu === "services-mobile" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMenu === "services-mobile" && (
                <div className="mt-2 ml-6 bg-[#1A1A1A] text-white rounded-xl p-2">
                  {services.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className={`flex justify-between items-center px-4 py-2 rounded-lg w-full text-left ${
                        pathname === item.href
                          ? "bg-white/10"
                          : "hover:bg-white/10"
                      }`}
                      onClick={handleLinkClick}
                    >
                      {item.label}
                      <ArrowUpRight size={16} />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown (mobile click) */}
            <div className="relative">
              <button
                onClick={() =>
                  setOpenMenu(
                    openMenu === "industries-mobile" ? null : "industries-mobile"
                  )
                }
                className="flex items-center justify-between w-full px-4 py-3 rounded-full text-gray-100 cursor-pointer hover:bg-white/10"
              >
                Industries
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openMenu === "industries-mobile" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMenu === "industries-mobile" && (
                <div className="mt-2 ml-6 bg-[#1A1A1A] text-white rounded-xl p-2">
                  {industries.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className={`flex justify-between items-center px-4 py-2 rounded-lg w-full text-left ${
                        pathname === item.href
                          ? "bg-white/10"
                          : "hover:bg-white/10"
                      }`}
                      onClick={handleLinkClick}
                    >
                      {item.label}
                      <ArrowUpRight size={16} />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact */}
            <Link
              href="/pages/contactus"
              className={`px-4 py-3 rounded-full transition-all ${
                pathname === "/pages/contactus"
                  ? "bg-gray-100 text-black"
                  : "text-gray-100 hover:bg-white/10"
              }`}
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>

            {/* Legal */}
            <Link
              href="/pages/legal"
              className={`px-4 py-3 rounded-full transition-all ${
                pathname === "/pages/legal"
                  ? "bg-gray-100 text-black"
                  : "text-gray-100 hover:bg-white/10"
              }`}
              onClick={handleLinkClick}
            >
              Legal
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="mt-auto pt-8 flex flex-col space-y-4">
            <div className="w-full">
              <Button
                color="bg-transparent"
                text="Refer A Case"
                onClick={() => {
                  router.push("/pages/refer_case");
                  handleLinkClick();
                }}
                isBorder={true}
              />
            </div>
            <div className="w-full">
              <Link href={'/pages/contactus'}><Button
                color="bg-[#1057B5]"
                text="Get in touch"
                isIcon={true}
                
              /></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
