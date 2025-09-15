"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Toparrow } from "@/assets/icon";

const HEADLINES = [
  "Investigative Intelligence Transformed",
  "Built by investigators for",
  "Find More, Connect More",
  "Be the Envy of Your Courtroom",
];

const ROLES = [
  "Journalists and Media",
  "Law Enforcement",
  "Government Agencies",
  "Law Firms",
  "Insurance Industry",
];

export default function HomeBanner() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [showRoles, setShowRoles] = useState(false);

  const TYPING_SPEED =60;
  const DELETING_SPEED = 40;
  const PAUSE_AFTER_COMPLETE = 4000;
  const ROLE_DURATION = 2000;

  // Typewriter effect for all headlines
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
        // After typing this headline, show roles once
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

  // Show roles one by one only once
  useEffect(() => {
    if (!showRoles) return;

    if (roleIndex < ROLES.length - 1) {
      const timer = setTimeout(() => setRoleIndex(roleIndex + 1), ROLE_DURATION);
      return () => clearTimeout(timer);
    } else {
      // After last role, move to next headline
      const timer = setTimeout(() => {
        setShowRoles(false);
        setText("");
        setHeadlineIndex((s) => (s + 1) % HEADLINES.length);
      }, ROLE_DURATION);
      return () => clearTimeout(timer);
    }
  }, [roleIndex, showRoles]);

  return (
    <div className="relative w-full bg-[url('/grid.png')] bg-no-repeat bg-top bg-cover overflow-hidden flex flex-col items-center justify-start py-20 px-6 sm:px-12 lg:px-28">
      {/* Glow background layers */}
      <div className="absolute pointer-events-none z-0 blur-[185.1px] -top-[31px] opacity-60 w-full h-10 bg-[#1057B5]" />
      <div
        className="absolute pointer-events-none z-1 blur-[3px] animate-blink"
        style={{
          width: "30%",
          height: 26,
          top: -16,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.9,
          borderRadius: "50%",
          backgroundColor: "#E8F2FF",
        }}
      />
      <div
        className="absolute pointer-events-none z-0 blur-[26.2px] animate-blink"
        style={{
          width: "50%",
          height: 78,
          top: -43,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.6,
          borderRadius: "50%",
          backgroundColor: "#167BFF",
        }}
      />
      <div
        className="absolute pointer-events-none z-0 blur-[50px] animate-blink"
        style={{
          width: "50%",
          height: 192,
          top: -95,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.3,
          borderRadius: "50%",
          backgroundColor: "#167BFF",
        }}
      />
      <div
        className="absolute pointer-events-none z-0 blur-[271.2px] animate-blink"
        style={{
          width: "50%",
          height: 659,
          top: -351,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.4,
          borderRadius: "50%",
          backgroundColor: "#1470E8",
        }}
      />

      {/* Content */}
      <div className="flex flex-col items-center justify-start gap-6 z-10 text-center max-w-[900px]">
        <p className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          {text}
          <span className="inline-block ml-1 animate-pulse text-blue-300">_</span>
        </p>

        {showRoles && text === "Built by investigators for" && (
          <div className="relative h-[2.5rem] sm:h-[3rem] md:h-[3.5rem] w-full overflow-visible">
            {ROLES.map((role, i) => (
              <span
                key={role}
                className={`absolute inset-0 flex items-start justify-center text-3xl sm:text-5xl lg:text-6xl  font-bold text-blue-300 transition-opacity duration-700 ease-in-out ${
                  i === roleIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {role}
              </span>
            ))}
          </div>
        )}

        <p className="text-xs sm:text-base md:text-[1rem] text-[#F1F1F1]">
          Cyphr combines OSINT, forensic expertise, and modern data intelligence to give you
          <br />
          defensible answers when you need them most.
        </p>

        <div className="flex gap-3 sm:gap-5 mt-[0.9rem] w-full sm:w-auto justify-center">
          <button className="custom-button with-shadow bg-[#1057B5]">
            Book a Consultation
          </button>
          <Link href={"/pages/services/consulting"}>
            <button className="custom-button with-border bg-transparent">
              Explore Services <Toparrow />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}



