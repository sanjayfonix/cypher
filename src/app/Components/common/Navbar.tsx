"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp, ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

export default function Navbar() {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null); // for collapsible sections
  const router = useRouter();

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

  const handleLinkClick = () => setSidebarOpen(false);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <nav className="flex justify-center px-6 lg:px-16 py-4 bg-black">
      <div className="w-full container bg-black flex items-center justify-between">
        {/* Mobile Menu Button (Left side) */}
        <div className="md:hidden">
          <Menu
            size={28}
            className="text-white cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />
        </div>

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
        <div className="hidden md:flex bg-[#3c414a] items-center gap-6 border border-white/20 rounded-full px-6 py-2">
          <Link
            href="/"
            className={`px-4 py-1 rounded-full transition-all ${
              pathname === "/" ? "bg-gray-100 text-black" : "text-gray-100 hover:text-gray-300"
            }`}
          >
            Home
          </Link>
          <Link
            href="/pages/aboutus"
            className={`px-4 py-1 rounded-full transition-all ${
              pathname === "/pages/aboutus"
                ? "bg-gray-100 text-black"
                : "text-gray-100 hover:text-gray-300"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/pages/contactus"
            className={`px-4 py-1 rounded-full transition-all ${
              pathname === "/pages/contactus"
                ? "bg-gray-100 text-black"
                : "text-gray-100 hover:text-gray-300"
            }`}
          >
            Contact Us
          </Link>
          <Link
            href="/pages/legal"
            className={`px-4 py-1 rounded-full transition-all ${
              pathname === "/pages/legal"
                ? "bg-gray-100 text-black"
                : "text-gray-100 hover:text-gray-300"
            }`}
          >
            Legal
          </Link>
        </div>

        {/* Desktop Right Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            color="bg-transparent"
            text="Refer A Case"
            onClick={() => router.push("/pages/refer_case")}
            isBorder={true}
          />
          <Button color="bg-[#1057B5]" text="Get in touch" isIcon={true} />
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 left-0 h-full w-72 bg-[#111] shadow-xl z-50 flex flex-col"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              {/* Top Section (Logo + Close) */}
              <div className="flex justify-between items-center p-5 border-b border-white/10">
                <Image src="/images/SmallLogo.png" alt="Logo" width={120} height={30} />
                <X
                  className="text-white cursor-pointer"
                  onClick={() => setSidebarOpen(false)}
                />
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <Link href="/" className="block text-gray-100 py-2 hover:text-blue-400" onClick={handleLinkClick}>
                  Home
                </Link>
                <Link href="/pages/aboutus" className="block text-gray-100 py-2 hover:text-blue-400" onClick={handleLinkClick}>
                  About Us
                </Link>

                {/* Collapsible Services */}
                <div className="py-2">
                  <button
                    className="flex justify-between items-center w-full text-gray-400 hover:text-blue-400"
                    onClick={() => toggleSection("services")}
                  >
                    Services
                    {openSection === "services" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  <AnimatePresence>
                    {openSection === "services" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        {services.map((s, i) => (
                          <Link
                            key={i}
                            href={s.href}
                            className="block text-gray-100 hover:text-blue-400 pl-4 py-1"
                            onClick={handleLinkClick}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Collapsible Industries */}
                <div className="py-2">
                  <button
                    className="flex justify-between items-center w-full text-gray-400 hover:text-blue-400"
                    onClick={() => toggleSection("industries")}
                  >
                    Industries
                    {openSection === "industries" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  <AnimatePresence>
                    {openSection === "industries" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        {industries.map((s, i) => (
                          <Link
                            key={i}
                            href={s.href}
                            className="block text-gray-100 hover:text-blue-400 pl-4 py-1"
                            onClick={handleLinkClick}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/pages/contactus" className="block text-gray-100 py-2 hover:text-blue-400" onClick={handleLinkClick}>
                  Contact Us
                </Link>
                <Link href="/pages/legal" className="block text-gray-100 py-2 hover:text-blue-400" onClick={handleLinkClick}>
                  Legal
                </Link>
              </div>

              {/* Bottom Fixed Buttons */}
              <div className="p-5 border-t border-white/10 flex flex-col gap-3">
                <Button
                  color="bg-transparent"
                  text="Refer A Case"
                  onClick={() => {
                    router.push("/pages/refer_case");
                    setSidebarOpen(false);
                  }}
                  isBorder={true}
                />
                <Button color="bg-[#1057B5]" text="Get in touch" isIcon={true} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
