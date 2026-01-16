"use client";
import { AboutHeader } from "@/app/Components/about_us/about_header";
import { History } from "@/app/Components/about_us/history";
import MissionSection from "@/app/Components/about_us/mission";
import TeamSection from "@/app/Components/about_us/teams";
import Whycyphr from "@/app/Components/about_us/whycyphr";
import ContactSection from "@/app/Components/common/Getintouch";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    // Handle hash navigation on page load
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - 80;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, []);

  return (

    <div >
      <AboutHeader />
      <History />
      <Whycyphr />
      <TeamSection />
      <MissionSection />
      <div className="px-4 "><ContactSection /></div>
    </div>
  );
}