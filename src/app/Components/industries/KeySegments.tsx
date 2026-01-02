"use client";

import { Tick, Toparrow } from "@/assets/icon";
import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function KeySegments() {
  const router = useRouter();
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8 md:px-16 overflow-x-hidden">
      {/* prevent container overflow */}
      <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center gap-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
          Key Segments We Support
        </h2>

        {/* FIRST BLOCK */}
        <div className="w-full flex flex-col lg:flex-row gap-8 items-center overflow-x-hidden">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} // avoid pushing outside
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex-1 min-w-0 flex justify-center"
          >
            <div className="w-full max-w-[500px]">
              <Image
                src="/industries1.png"
                alt="Fraud Detection and Claims Analysis"
                width={900}
                height={600}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} // use px value instead of %
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex-1 min-w-0 flex flex-col gap-6"
          >
            <h3 className="text-2xl lg:text-[2.25rem] font-bold font-sans">
              Third-Party Administrators (TPAs)
            </h3>

            <p className="text-base max-w-lg md:max-w-xl lg:max-w-2xl lg:text-lg">
              TPAs face pressure to process claims quickly while minimizing fraud.
              Cyphr strengthens their value proposition with actionable, legally
              defensible intelligence.
            </p>

            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-xl lg:text-2xl">We help TPAs:</h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Aggressively combat fraudulent claims and optimize claims management through actionable, legally defensible intelligence",
                  "Uncover inconsistencies between claimants' statements and their digital footprint, providing irrefutable evidence of fraudulent activity that traditional methods often miss",
                  "Deny or challenge questionable claims, minimize payouts, reduce operational costs, and improve overall claims processing efficiency",
                  "Enhancing their value proposition to insurance carriers and self-insured employers",

                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#E3E3E3] text-base">
                    <span className="inline-flex w-auto h-auto shrink-0"><Tick /></span> <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:w-3/4 lg:w-1/2 mt-2">
              <button onClick={() => {
                const element = document.getElementById('industry-contact-us') || document.getElementById('contact-us');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                  router.push('/#contact-us');
                  setTimeout(() => {
                    const element = document.getElementById('contact-us');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 500);
                }
              }} className='custom-button with-border bg-transparent'>Support Your TPA Team <Toparrow /></button>
            </div>
          </motion.div>
        </div>

        {/* SECOND BLOCK */}
        <div className="w-full flex flex-col lg:flex-row gap-8 items-center overflow-x-hidden">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="order-2 lg:order-1 flex-1 min-w-0 flex flex-col gap-6"
          >
            <h3 className="text-2xl lg:text-[2.25rem] font-bold font-sans">
              Brokers & Reinsurers
            </h3>

            <p className="text-base max-w-lg md:max-w-xl lg:max-w-2xl lg:text-lg">
              For brokers and reinsurers, every decision carries financial exposure.
              Cyphr provides comprehensive risk profiles and due diligence support
              that enables smarter underwriting and portfolio management.
            </p>

            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-xl lg:text-2xl">With Cyphr, you can:</h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Offer a critical edge in risk assessment and due diligence through actionable, legally defensible intelligence",
                  "Deliver a comprehensive risk profile of potential clients and investments",
                  "Secure better terms for your clients by demonstrating reduced risk",
                  "Enable reinsurance companies to make more informed decisions about underwriting and portfolio management",
                  "Improve profit and reduce exposure to fraudulent claims",

                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#E3E3E3] text-base">
                    <span className="inline-flex w-auto h-auto shrink-0"><Tick /></span> <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:w-3/4 lg:w-1/2 mt-2">
              <button onClick={() => {
                const element = document.getElementById('industry-contact-us') || document.getElementById('contact-us');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                  router.push('/#contact-us');
                  setTimeout(() => {
                    const element = document.getElementById('contact-us');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 500);
                }

              }} className="custom-button bg-transparent with-border" >Request Risk Profiling <Toparrow /></button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="order-1 lg:order-2 flex-1 min-w-0 flex justify-center"
          >
            <div className="w-full max-w-[500px]">
              <Image
                src="/industries2.png"
                alt="Fraud Detection and Claims Analysis"
                width={900}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}





