import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/common/Navbar";
import Footer from "./Components/common/Footer";

import { IBM_Plex_Sans } from "next/font/google";


const ibmPlex = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cyphr | Investigative Intelligence & Global Threat Solutions",
  description: "Transform your investigative capabilities with Cyphr. Built by investigators for investigators, we provide advanced global threat intelligence, OSINT solutions, and defensible digital integrity services.",
  keywords: ["Investigative Intelligence", "Global Threat Intelligence", "OSINT", "Digital Integrity", "Cyber Security", "Risk Assessment", "Threat Detection", "Cyphr"],
  openGraph: {
    title: "Cyphr | Investigative Intelligence & Global Threat Solutions",
    description: "Transform your investigative capabilities with Cyphr. Built by investigators for investigators, we provide advanced global threat intelligence, OSINT solutions, and defensible digital integrity services.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlex.className} ${geistMono.variable}  antialiased flex flex-col min-h-screen bg-black text-white `}
      >
        {/* Navbar at top */}
        <div className="sticky top-0 z-55 shadow-md">
          <Navbar />
        </div>


        {/* Main content takes all remaining height */}
        <main className="flex-1">{children}

        </main>

        {/* Footer sticks to bottom */}
        <Footer />
      </body>
    </html>
  );
}
