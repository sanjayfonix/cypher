"use client";

import { Tick, Toparrow } from "@/assets/icon";
import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface KeySegmentsProps {
  data: {
    title: string;
    segments: Array<{
      title: string;
      subtitle: string;
      description: string;
      benefits: string[];
      buttonText: string;
      image: string;
      imagePosition: string;
    }>;
  };
}

export default function KeySegments({ data }: KeySegmentsProps) {
  const router = useRouter();
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8 md:px-16 overflow-x-hidden">
      {/* prevent container overflow */}
      <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center gap-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
          {data.title}
        </h2>

        {data.segments.map((segment, index) => {
          const isImageLeft = segment.imagePosition === "left";

          return (
            <div key={index} className="w-full flex flex-col lg:flex-row gap-8 items-center overflow-x-hidden">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className={`flex-1 min-w-0 flex justify-center ${isImageLeft ? "order-1 lg:order-1" : "order-1 lg:order-2"
                  }`}
              >
                <div className="w-full max-w-[500px]">
                  <Image
                    src={segment.image}
                    alt={segment.title}
                    width={900}
                    height={600}
                    className="w-full h-full object-contain"
                    priority={index === 0}
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: isImageLeft ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className={`flex-1 min-w-0 flex flex-col gap-6 ${isImageLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"
                  }`}
              >
                <h3 className="text-2xl lg:text-[2.25rem] font-bold font-sans">
                  {segment.title}
                </h3>

                <p className="text-base max-w-lg md:max-w-xl lg:max-w-2xl lg:text-lg">
                  {segment.description}
                </p>

                <div className="flex flex-col gap-3">
                  <h4 className="font-bold text-xl lg:text-2xl">{segment.subtitle}</h4>
                  <ul className="flex flex-col gap-2">
                    {segment.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-[#E3E3E3] text-base">
                        <span className="inline-flex w-auto h-auto shrink-0"><Tick /></span> <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sm:w-3/4 lg:w-1/2 mt-2">
                  <Link href={'/pages/contactus'}><button className='custom-button with-border bg-transparent'>{segment.buttonText} <Toparrow /></button></Link>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}





