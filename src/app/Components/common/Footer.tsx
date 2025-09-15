import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// components/Footer.js
export default function Footer() {
  return (
    <footer
      className="text-white pt-16 pb-8 px-4 mt-8 md:px-8 relative overflow-hidden"
    >
      {/* Glow effects */}


      {/* Content */}
      <div className="relative  z-10 p-4">
        <div
          className="absolute pointer-events-none z-0 blur-[100.1px] -top-[31px] opacity-60 w-full h-10 bg-[#1057B5]"
        />

        <div
          className="absolute pointer-events-none z-0 blur-[50px] animate-blink"
          style={{
            width: 1440,
            height: 170,
            top: -95,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.3,
            borderRadius: "50%",
            backgroundColor: "#167BFF",
          }}
        />
      </div>
      <div className="container">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo + Description */}
          <div className="lg:col-span-2">
            <div className="flex gap-2 items-center">
              <Image
                src="/images/fotterimage2.png"
                alt="Footer Icon"
                width={50}
                height={50}
                className="mb-6 border border-[#042433]"
              />
              <Image
                src="/images/footer_logo_image.png"
                alt="Footer Logo"
                width={304}
                height={38}
                className="mb-6"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md text-[16px]">
              Turning complex data into clear intelligence. We empower
              organizations to investigate, analyze, and act with precision,
              speed, and ethics.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-semibold text-[20px] mb-10 text-gray-200 tracking-wider border-b-2 border-blue-500 inline-block pb-4">
              Services
            </h3>
            <ul className="space-y-6 ">
              <li>
                <Link href="/services/consulting" className="text-gray-200 hover:text-white transition-colors text-[16px] ">
                  Consulting and Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/social-intel" className="text-gray-200 hover:text-white transition-colors text-[16px]">
                  Social Media Intelligence
                </Link>
              </li>
              <li>
                <Link href="/services/brand-defence" className="text-gray-200 hover:text-white transition-colors text-[16px]">
                  Brand Defense
                </Link>
              </li>
              <li>
                <Link href="/services/geospatial" className="text-gray-200 hover:text-white transition-colors text-[16px]">
                  Geospatial Cellular Forensics
                </Link>
              </li>
            </ul>
          </div>

          {/* Company + Legal */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-[20px] mb-10 text-gray-200 tracking-wider border-b-2 border-blue-500 inline-block pb-4">
                Company
              </h3>
              <ul className="space-y-6">
                <li><Link href="/about" className="text-gray-200 hover:text-white transition-colors text-[16px]">About</Link></li>
                <li><Link href="/why-cyphr" className="text-gray-200 hover:text-white transition-colors text-[16px]">Why Cyphr</Link></li>
                <li><Link href="/contact" className="text-gray-200 hover:text-white transition-colors text-[16px]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[20px] mb-10 text-gray-200 tracking-wider border-b-2 border-blue-500 inline-block pb-4">
                Legal
              </h3>
              <ul className="space-y-6">
                <li><Link href="/privacy-policy" className="text-gray-200 hover:text-white transition-colors text-[16px]">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-200 hover:text-white transition-colors text-[16px]">Terms of Service</Link></li>
                <li><Link href="/data-processing" className="text-gray-200 hover:text-white transition-colors text-[16px]">Data Processing</Link></li>
                <li><Link href="/security" className="text-gray-200 hover:text-white transition-colors text-[16px]">Security</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t  border-gray-800 py-10 px-4 relative ">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-[16px]  md:mb-0">
              © 2025 Cyphr. All Right Reserved
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10">
              <Link href="/privacy-policy" className="text-gray-300 hover:text-white text-[16px] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-[16px] transition-colors">Terms of Service</Link>
              <Link href="/data-processing" className="text-gray-300 hover:text-white text-[16px] transition-colors">Data Processing</Link>
              <Link href="/security" className="text-gray-300 hover:text-white text-[16px] transition-colors">Security</Link>

              {/* Social Icons */}
              <div className="flex gap-5">
                <Link href="https://x.com" target="_blank" className="text-gray-500 hover:text-white transition-colors">
                  <Twitter size={18} />
                </Link>
                <Link href="https://linkedin.com" target="_blank" className="text-gray-500 hover:text-white transition-colors">
                  <Linkedin size={18} />
                </Link>
                <Link href="https://github.com" target="_blank" className="text-gray-500 hover:text-white transition-colors">
                  <Github size={18} />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
