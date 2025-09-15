"use client";

import { Tick } from "@/assets/icon";
import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import { motion } from "framer-motion";

export default function KeySegments() {
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
                  "Detect inconsistencies between statements and digital footprints",
                  "Deny or challenge questionable claims",
                  "Reduce payouts and operational costs",
                  "Improve overall claims efficiency",
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#E3E3E3] text-base">
                    <span className="inline-flex w-5 h-5 shrink-0"><Tick/></span> <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:w-3/4 lg:w-1/2 mt-2">
              <Button text="Support Your TPA Team" isBorder isIcon color="bg-transparent" />
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
                  "Offer clients better terms by demonstrating reduced risk",
                  "Improve profitability with fraud-resistant assessments",
                  "Reduce exposure to fraudulent claims and liabilities",
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#E3E3E3] text-base">
                    <span className="inline-flex w-5 h-5 shrink-0"><Tick/></span> <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:w-3/4 lg:w-1/2 mt-2">
              <Button text="Request Risk Profiling" isBorder isIcon color="bg-transparent" />
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





