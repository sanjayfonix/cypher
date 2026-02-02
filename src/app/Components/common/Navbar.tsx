"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowUpRight, Menu, X, Search, Play } from "lucide-react";
import Button from "./Button";
import { Toparrow } from "@/assets/icon";

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showDropDown, setShowDropDown] = useState(-1);
  const [showServicesDown, setShowServicesDown] = useState(false);
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);
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

  const navigateAndClose = async (href: string) => {
    // push returns a Promise; close the UI after navigation completes
    await router.push(href)
    setIsSidebarOpen(false);
    setOpenMenu(null);

  };


  const services = [
    {
      label: "Social Media Intelligence",
      href: "/pages/services/social-intel",
      description: "We don’t just scrape data — we decode human behavior at scale. Our analysts and proprietary workflows extract threats, fraud patterns, influence operations, and high-value signals hiding inside millions of digital conversations. Whether you’re protecting a brand, an election, or a national interest, our Social Media Intelligence solutions deliver legally-defensible, context-rich insight drawn from open and restricted sources with precision tradecraft."
    },
    {
      label: "Consulting and Advisory",
      href: "/pages/services/consulting",
      description: "Cyphr’s advisory practice empowers leaders to act with confidence in a world where data, misinformation, and digital risk converge. Our team of veteran investigators, intelligence officers, and OSINT innovators consult directly with C-suites, legal counsel, and national security agencies to design intelligence programs that work in the field — not just on paper. We deliver strategic calibration: assessing your current posture, building resilience in your workflows, and integrating trusted intelligence frameworks built to uncover, interpret, and neutralize risk."
    },
    {
      label: "Geospatial Cellular Forensics",
      href: "/pages/services/geospatial",
      description: "Where digital meets physical, Cyphr delivers truth. Our geospatial and cellular forensics capabilities reconstruct movement, communication, and intent from complex data ecosystems — turning raw signals into actionable intelligence that stands up to legal and technical scrutiny. From mapping threat networks and locating suspected fraud operations to validating alibis or tracing logistics breaches, our fusion of geolocation analytics and mobile forensics produces precision-level situational awareness you can trust."
    },
    {
      label: "Brand Defense",
      href: "/pages/services/brand-defence",
      description: "Cyphr’s Brand Defense solutions combine OSINT, threat intelligence, and sentiment analysis to detect, dismantle, and deter digital threats before they escalate into financial, reputational, or legal crises. Whether the threat stems from disinformation, counterfeit products, executive impersonation, or coordinated smear campaigns, our analysts build real-time visibility and mitigation plans that shield your brand where it’s most vulnerable — online."
    },
  ];

  const industries = [
    { label: "Insurance Carrier", href: "/pages/industries/insurance" },
    { label: "Employer", href: "/pages/industries/employer" },
    { label: "Law Firm", href: "/pages/industries/law" },
    { label: "Academia", href: "/pages/industries/academia" },
  ];

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
    setOpenMenu(null);
    setShowDropDown(-1);
    setShowServicesDown(false);
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
          <button className="lg:hidden text-white mr-4" onClick={toggleSidebar}>
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex gap-2">
            <Image
              src="/images/SmallLogo.png"
              alt="Cyphr Logo"
              width={203}
              height={28}
              className="h-auto w-auto "
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-nowrap whitespace-nowrap bg-[#3c414a] items-center gap-4 border border-white/20 rounded-full px-4 py-2 ">
            {/* Home */}
            <Link

              href="/"
              className={`px-3 py-1 text-sm rounded-full transition-all ${pathname === "/"
                ? "bg-gray-100 text-black"
                : "text-gray-100 hover:text-gray-300"
                }`}
            >
              Home
            </Link>

            {/* About */}
            <Link

              href="/pages/aboutus"
              className={`px-3 py-1 text-sm rounded-full transition-all ${pathname === "/pages/aboutus"
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
                  className={`transition-transform ${openMenu === "services" ? "rotate-180" : ""
                    }`}
                />
              </button>
              {openMenu === "services" && (
                <div className="absolute mt-5 backdrop-blur-xl border border-white/10 text-white rounded-2xl shadow-2xl w-[500px] p-6 z-50 flex gap-8">
                  {/* Left Section: Services List */}
                  <div className="flex-1 flex flex-col gap-1">
                    <p className="text-[10px] font-bold text-white ml-2 mb-3 uppercase tracking-widest px-2">Key Services</p>
                    {services.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className={`group relative flex justify-between items-center px-4 py-2.5 rounded-xl w-full text-left transition-all ${pathname === item.href
                          ? "bg-white/10"
                          : "hover:bg-white/5"
                          }`}
                        onClick={handleLinkClick}
                      >
                        {item.label}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />

                        {/* Tooltip */}
                        <div className="absolute left-0 top-full mt-2 w-80 p-4 bg-[#0E1014] border border-white/10 rounded-xl shadow-2xl z-[60] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none translate-y-2 group-hover:translate-y-0 whitespace-normal">
                          <p className="text-xs text-gray-300 leading-relaxed font-normal">
                            {item.description}
                          </p>
                          {/* Arrow (optional, visual flair) */}
                          <div className="absolute -top-1 left-8 w-2 h-2 bg-[#0E1014] border-t border-l border-white/10 rotate-45" />
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Right Section: Video Preview */}
                  <div className="w-[200px] flex flex-col gap-4">
                    <p className="text-[10px] font-bold text-white uppercase tracking-widest">Social Media Monitoring</p>
                    {/* <p className="text-[13px] text-white font-normal tracking-tighter mb-0.5 max-w-full whitespace-normal">This video is a demonstration of OneWatch, an upcoming social media monitoring product currently under development</p> */}
                    <div
                      onClick={() => setIsVideoDialogOpen(true)}
                      className="relative group cursor-pointer aspect-[4/3] bg-white/5 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center transition-all hover:border-blue-500/50 hover:scale-[1.02]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Placeholder for Video Thumbnail */}
                      <div className="absolute inset-0 bg-[url('/services2.png')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity" />

                      <div className="z-10 bg-white/10 p-3 rounded-full backdrop-blur-md group-hover:scale-110 transition-transform border border-white/20">
                        <Play size={20} className="fill-white text-white translate-x-0.5" />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex flex-col items-start">
                        <span className="text-[10px] text-blue-400 font-bold uppercase tracking-tighter mb-0.5">Preview</span>
                        <p className="text-xs text-white font-semibold">Watch Demo</p>
                      </div>

                    </div>
                  </div>

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
                  className={`transition-transform ${openMenu === "industries" ? "rotate-180" : ""
                    }`}
                />
              </button>
              {openMenu === "industries" && (
                <div className="absolute mt-3 backdrop-blur-md text-white rounded-xl shadow-lg w-64 p-2 z-10">
                  {industries.map((item, index) => (
                    <Link

                      key={index}
                      href={item.href}
                      className={`flex justify-between items-center px-4 py-2 rounded-lg w-full text-left ${pathname === item.href
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
              className={`px-3 py-1 rounded-full transition-all ${pathname === "/pages/legal"
                ? "bg-gray-100 text-black"
                : "text-gray-100 hover:text-gray-300"
                }`}
            >
              Legal
            </Link>
          </div>

          {/* Desktop Right Buttons */}
          <div className="hidden lg:flex items-center gap-4 md:gap-2">
            <button
              onClick={() => {
                router.push('/pages/contactus')
              }}
              className="hidden lg:block min-w-[130px] custom-button with-border bg-transparent"
            >
              Get in touch
            </button>
            <button
              onClick={() => router.push("/pages/refer_case")}
              className="min-w-[160px] cursor-pointer whitespace-nowrap text-sm custom-button with-shadow bg-[#1057B5]"
            >
              Refer a Case
              <Toparrow />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('how-it-works');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                  router.push('/#how-it-works');
                  setTimeout(() => {
                    const element = document.getElementById('how-it-works');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 300);
                }
              }}
              className="custom-button with-border bg-transparent w-full"
            >
              <Search size={20} /> <span>Search</span>
            </button>
          </div>

          {/* Placeholder for mobile */}
          <div className="lg:hidden invisible">
            <Menu size={24} />
          </div>

        </div>
      </nav>

      {/* ✅ Mobile Sidebar (fixed patch for dropdown navigation) */}
      <div
        className={`fixed overflow-y-auto top-0 left-0 h-full w-80 bg-black z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        // stopPropagation so clicks inside the sidebar don't accidentally hit the overlay
        onClick={(e) => e.stopPropagation()}
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
              className={`px-4 py-3 rounded-full transition-all ${pathname === "/"
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
              className={`px-4 py-3 rounded-full transition-all ${pathname === "/pages/aboutus"
                ? "bg-gray-100 text-black"
                : "text-gray-100 hover:bg-white/10"
                }`}
              onClick={handleLinkClick}
            >
              About Us
            </Link>

            {/* Services (mobile) - NOTE: using button + router.push + delayed close */}
            <div className="relative">
              <button
                onClick={() => {
                  if (showDropDown === 1) {
                    setShowDropDown(-1)
                  }
                  else {
                    setShowDropDown(1)
                  }
                }}
                className="flex items-center justify-between w-full px-4 py-3 rounded-full text-gray-100 cursor-pointer hover:bg-white/10"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${openMenu === "services-mobile" ? "rotate-180" : ""
                    }`}
                />
              </button>


              <div className={`${showDropDown === 1 ? 'block' : 'hidden'} mt-2 ml-4 bg-[#111111] text-white rounded-2xl p-2 border border-white/5`}>
                <div className="p-2">
                  <p className="text-[10px] font-bold text-white mb-2 uppercase tracking-widest px-2">Key Services</p>
                  {services.map((item, index) => (
                    <Link key={index} href={item.href} onClick={handleLinkClick}>
                      <button
                        type="button"
                        className={`flex justify-between items-center px-4 py-3 rounded-xl w-full text-left transition-all ${pathname === item.href ? "bg-white/10" : "hover:bg-white/5"
                          }`}
                      >
                        <span className="text-sm">{item.label}</span>
                        <ArrowUpRight size={16} className="opacity-50" />
                      </button>
                    </Link>
                  ))}
                </div>

                {/* Mobile Social Media Monitoring Section */}
                <div className="mt-2 p-4 border-t border-white/5">
                  <p className="text-[10px] font-bold text-white mb-4 uppercase tracking-widest px-1">Social Media Monitoring</p>
                  <div
                    onClick={() => {
                      setIsVideoDialogOpen(true);
                      setIsSidebarOpen(false);
                    }}
                    className="relative aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center transition-active active:scale-[0.98]"
                  >
                    <div className="absolute inset-0 bg-[url('/services2.png')] bg-cover bg-center opacity-40" />
                    <div className="z-10 bg-white/10 p-4 rounded-full backdrop-blur-md border border-white/20">
                      <Play size={24} className="fill-white text-white translate-x-0.5" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-sm text-white font-semibold">Watch Demo Video</p>
                      <p className="text-[10px] text-gray-400">Social Media Monitoring in Action</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Industries (mobile) - same pattern */}
            <div className="relative">
              <button
                onClick={() => {
                  setOpenMenu(
                    openMenu === "industries-mobile" ? null : "industries-mobile"
                  )
                  if (showDropDown === 0) {
                    setShowDropDown(-1)
                  }
                  else {
                    setShowDropDown(0);
                  }
                }
                }
                className="flex items-center justify-between w-full px-4 py-3 rounded-full text-gray-100 cursor-pointer hover:bg-white/10"
              >
                Industries
                <ChevronDown
                  size={16}
                  className={`transition-transform ${openMenu === "industries-mobile" ? "rotate-180" : ""
                    }`}
                />
              </button>


              <div className={`${showDropDown === 0 ? 'block' : 'hidden'} mt-2 ml-6 bg-[#1A1A1A] text-white rounded-xl p-2`}>
                {industries.map((item, index) => (
                  <Link href={item.href}><button
                    key={index}
                    type="button"
                    className={`flex justify-between items-center px-4 py-2 rounded-lg w-full text-left ${pathname === item.href ? "bg-white/10" : "hover:bg-[#8A8A8A]"
                      }`}
                    onClick={handleLinkClick}
                  >
                    {item.label}
                    <ArrowUpRight size={16} />
                  </button></Link>
                ))}
              </div>

            </div>

            {/* Contact */}
            <Link
              href="/pages/contactus"
              className={`px-4 py-3 rounded-full transition-all ${pathname === "/pages/contactus"
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
              className={`px-4 py-3 rounded-full transition-all ${pathname === "/pages/legal"
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
              <Link onClick={handleLinkClick} href={'/pages/refer_case'}>
                <button className="custom-button with-border bg-transparent w-full">
                  Refer a case <Toparrow />
                </button>
              </Link>
            </div>
            <div className="w-full">

              <button
                onClick={() => {
                  const element = document.getElementById('contact-us');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    router.push('/#contact-us');
                    setTimeout(() => {
                      const element = document.getElementById('contact-us');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                      }
                    }, 500);
                  }
                  setIsSidebarOpen(false);
                }}
                className="custom-button with-shadow bg-[#1057B5] w-full"
              >
                Get in touch <Toparrow />
              </button>


            </div>
            <Link onClick={handleLinkClick} href={'/'}>
              <button className="custom-button with-border bg-transparent w-full">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>


      {/* Video Dialog */}
      {isVideoDialogOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-sm transition-all duration-300">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] border border-white/10 transform transition-transform animate-in zoom-in-95">
            <button
              onClick={() => setIsVideoDialogOpen(false)}
              className="absolute top-6 right-6 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all text-white hover:rotate-90 group"
            >
              <X size={24} className="group-hover:scale-110 transition-transform" />
            </button>
            <div className="absolute inset-0 flex items-center justify-center">
              <video
                src="/videos/Socialmedia.mp4"
                className="w-full h-full object-contain"
                controls
                autoPlay
              />
            </div>
          </div>
          {/* Backdrop Blur Click to Close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setIsVideoDialogOpen(false)}
          />
        </div>
      )}

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
