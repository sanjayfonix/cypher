"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Toparrow } from "@/assets/icon";

import dynamic from "next/dynamic";

const HEADLINES = [
  "Investigative Intelligence Transformed",
  "Built by investigators for",
  "Find More, Connect More",
  "Be the Envy of Your Courtroom",
];

const ROLES = [
  "Investigators",
  "Journalists and Media",
  "Law Enforcement",
  "Government Agencies",
  "Law Firms",
  "Insurance Industry",
  "Social Media Monitoring",
"Facial Recognition",
"Object Recognition"
];

const AnimateBannerPaths = dynamic(() => import("./AnimatePath").then(mod => mod.AnimateBannerPaths), {
  ssr: false, // don’t render on server
  loading: () => <div className="h-[300px] w-full" /> // optional fallback
});

export default function HomeBanner() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [showRoles, setShowRoles] = useState(false);

  const TYPING_SPEED = 60;
  const DELETING_SPEED = 40;
  const PAUSE_AFTER_COMPLETE = 4000;
  const ROLE_DURATION = 2000;

  // Typewriter effect
  useEffect(() => {
    const currentHeadline = HEADLINES[headlineIndex];
    let timerId: number | undefined;

    if (!isDeleting && text.length < currentHeadline.length) {
      timerId = window.setTimeout(
        () => setText(currentHeadline.slice(0, text.length + 1)),
        TYPING_SPEED
      );
    } else if (!isDeleting && text.length === currentHeadline.length) {
      if (currentHeadline === "Built by investigators for") {
        setShowRoles(true);
        setRoleIndex(0);
      } else {
        timerId = window.setTimeout(() => setIsDeleting(true), PAUSE_AFTER_COMPLETE);
      }
    } else if (isDeleting && text.length > 0) {
      timerId = window.setTimeout(
        () => setText(currentHeadline.slice(0, text.length - 1)),
        DELETING_SPEED
      );
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setHeadlineIndex((s) => (s + 1) % HEADLINES.length);
    }

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [headlineIndex, text, isDeleting]);

  // Roles effect
  useEffect(() => {
    if (!showRoles) return;

    if (roleIndex < ROLES.length - 1) {
      const timer = setTimeout(() => setRoleIndex(roleIndex + 1), ROLE_DURATION);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowRoles(false);
        setText("");
        setHeadlineIndex((s) => (s + 1) % HEADLINES.length);
      }, ROLE_DURATION);
      return () => clearTimeout(timer);
    }
  }, [roleIndex, showRoles]);

  return (
    <div className="relative w-full bg-[url('/grid.png')] bg-no-repeat bg-top bg-cover overflow-hidden flex flex-col items-center justify-start py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-28">
      {/* Glow background layers */}
      <div className="absolute pointer-events-none z-0 blur-[120px] sm:blur-[160px] md:blur-[185.1px] -top-[20px] sm:-top-[28px] md:-top-[31px] opacity-60 w-full h-10 bg-[#1057B5]" />
      <div
        className="absolute pointer-events-none z-1 blur-[2px] sm:blur-[3px] animate-blink delay-75"
        style={{
          width: "50%", // wider for small screens
          height: 20,
          top: -12,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.9,
          borderRadius: "50%",
          backgroundColor: "#E8F2FF",
        }}
      />
      <div
        className="absolute pointer-events-none z-0 blur-[20px] sm:blur-[26.2px] animate-glow2"
        style={{
          width: "70%",
          height: 60,
          top: -36,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.6,
          borderRadius: "50%",
          backgroundColor: "#167BFF",
        }}
      />
      <div
        className="absolute pointer-events-none z-0 blur-[40px] sm:blur-[50px] animate-glow2"
        style={{
          width: "70%",
          height: 150,
          top: -80,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.3,
          borderRadius: "50%",
          backgroundColor: "#167BFF",
        }}
      />
      <div
        className="absolute pointer-events-none z-0 blur-[200px] sm:blur-[271.2px] animate-glow2"
        style={{
          width: "80%",
          height: 500,
          top: -280,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.4,
          borderRadius: "50%",
          backgroundColor: "#1470E8",
        }}
      />

      {/* Content */}
      <div className="flex flex-col items-center justify-start gap-4 sm:gap-6 md:gap-8 z-10 text-center w-full max-w-[98%]">
        {/* Headline */}
        <p className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-snug sm:leading-tight">
          {text}
          <span className="inline-block ml-1 animate-pulse text-blue-300">_</span>
        </p>

        {/* Roles */}
        {showRoles && text === "Built by investigators for" && (
          <div className="relative h-[2rem] sm:h-[2.5rem] md:h-[3rem] lg:h-[3.5rem] w-full overflow-visible">
            {ROLES.map((role, i) => (
              <span
                key={role}
                className={`absolute inset-0 flex items-start justify-center text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold text-blue-300 transition-opacity duration-700 ease-in-out ${
                  i === roleIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {role}
              </span>
            ))}
          </div>
        )}

        {/* Subtext */}
        <p className="text-[0.75rem] sm:text-sm md:text-base lg:text-[1rem] text-[#F1F1F1] leading-relaxed sm:leading-snug">
          Cyphr combines real world investigative experience that combines forensic expertise, OSINT disciplines and <br className="hidden lg:block"/> modern data intelligence to give you defensible answers when you need them the most.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-3 sm:mt-4 w-full sm:w-auto justify-center">
          <button
            onClick={() => {
              const navToSection = document.getElementById("contact-us");
              if (navToSection) {
                navToSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="custom-button with-shadow bg-[#1057B5]"
          >
            Book a Consultation
          </button>
          <Link href={"/pages/services/consulting"} className="w-full sm:w-auto">
            <button className="custom-button with-border bg-transparent w-full sm:w-auto">
              Explore Services <Toparrow />
            </button>
          </Link>
        </div>
        <div className="block sm:hidden mt-8"/>
        <div className="w-full">
        <AnimateBannerPaths />
        </div>
      </div>
    </div>
  );
}
