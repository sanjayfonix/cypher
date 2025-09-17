import { Fotterico1, Fotterico2, Fotterico3 } from "@/assets/icon";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// components/Footer.js
export default function Footer() {
  return (
    <footer className="text-white pt-16 pb-8 px-4 mt-8 md:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="relative z-10 p-4">
        <div className="absolute pointer-events-none z-0 blur-[100.1px] -top-[31px] opacity-60 w-full h-10 bg-[#1057B5]" />
        <div
          className="absolute pointer-events-none z-0 blur-[50px]"
          style={{
            width: "100%",
            maxWidth: "1440px",
            height: "170px",
            top: "-95px",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.3,
            borderRadius: "50%",
            backgroundColor: "#167BFF",
          }}
        />
      </div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo + Description - Full width on mobile, spans 2 columns on larger screens */}
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start mb-6">
              <Image
                src="/images/fotterimage2.png"
                alt="Footer Icon"
                width={50}
                height={50}
                className="border border-[#042433]"
              />
              <Image
                src="/images/footer_logo_image.png"
                alt="Footer Logo"
                width={304}
                height={38}
                className="max-w-[80%] sm:max-w-full"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md text-[16px] text-center sm:text-left mx-auto sm:mx-0">
              Turning complex data into clear intelligence. We empower
              organizations to investigate, analyze, and act with precision,
              speed, and ethics.
            </p>
          </div>

          {/* Services Section */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-[20px] mb-6 sm:mb-10 text-gray-200 tracking-wider border-b-2 border-blue-500 inline-block pb-2 sm:pb-4">
              Services
            </h3>
            <ul className="space-y-4 sm:space-y-6">
              <li>
                <Link href="/pages/services/consulting" className="text-gray-200 hover:text-white transition-colors text-[16px] block">
                  Consulting and Advisory
                </Link>
              </li>
              <li>
                <Link href="/pages/services/social-intel" className="text-gray-200 hover:text-white transition-colors text-[16px] block">
                  Social Media Intelligence
                </Link>
              </li>
              <li>
                <Link href="/pages/services/brand-defence" className="text-gray-200 hover:text-white transition-colors text-[16px] block">
                  Brand Defense
                </Link>
              </li>
              <li>
                <Link href="/pages/services/geospatial" className="text-gray-200 hover:text-white transition-colors text-[16px] block">
                  Geospatial Cellular Forensics
                </Link>
              </li>
            </ul>
          </div>

          {/* Company + Legal - Stack on mobile, side by side on larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-[20px] mb-6 sm:mb-10 text-gray-200 tracking-wider border-b-2 border-blue-500 inline-block pb-2 sm:pb-4">
                Company
              </h3>
              <ul className="space-y-4 sm:space-y-6">
                <li><Link href="/pages/aboutus" className="text-gray-200 hover:text-white transition-colors text-[16px] block">About</Link></li>
                <li><Link href="/pages/aboutus" className="text-gray-200 hover:text-white transition-colors text-[16px] block">Why Cyphr</Link></li>
                <li><Link href="/pages/contactus" className="text-gray-200 hover:text-white transition-colors text-[16px] block">Contact</Link></li>
                <li><Link href="/pages/careers" className="text-gray-200 hover:text-white transition-colors text-[16px] block">Career</Link></li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-[20px] mb-6 sm:mb-10 text-gray-200 tracking-wider border-b-2 border-blue-500 inline-block pb-2 sm:pb-4">
                Legal
              </h3>
              <ul className="space-y-4 sm:space-y-6">
                <li><Link href="/pages/legal" className="text-gray-200 hover:text-white transition-colors text-[16px] block">Privacy Policy</Link></li>
                <li><Link href="/pages/legal" className="text-gray-200 hover:text-white transition-colors text-[16px] block">Terms of Service</Link></li>
                <li><Link href="/pages/legal" className="text-gray-200 hover:text-white transition-colors text-[16px] block">Data Processing</Link></li>
                <li><Link href="/pages/legal" className="text-gray-200 hover:text-white transition-colors text-[16px] block">Security</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8 sm:py-10 px-4 relative">
          <div className="flex flex-col w-full md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-gray-300 text-[16px] order-2 md:order-1">
              © 2025 Cyphr. All Right Reserved
            </p>
            
            <div className="flex flex-col w-1/2 sm:flex-row items-center  justify-between gap-6 order-1 md:order-2">
              {/* Legal Links - Stack on mobile, row on larger screens */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-4 md:gap-6">
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white text-[16px] transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-300 hover:text-white text-[16px] transition-colors">Terms of Service</Link>
                <Link href="/data-processing" className="text-gray-300 hover:text-white text-[16px] transition-colors">Data Processing</Link>
                <Link href="/security" className="text-gray-300 hover:text-white text-[16px] transition-colors">Security</Link>
              </div>

              {/* Social Icons */}
              <div className="flex gap-[18px] justify-center">
                <Link href="https://x.com" target="_blank" className="text-gray-500 hover:text-white transition-colors">
                  <Fotterico1/>
                </Link>
                <Link href="https://linkedin.com" target="_blank" className="text-gray-500 hover:text-white transition-colors">
                  <Fotterico2/>
                </Link>
                <Link href="https://github.com" target="_blank" className="text-gray-500 hover:text-white transition-colors">
                  <Fotterico3/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}