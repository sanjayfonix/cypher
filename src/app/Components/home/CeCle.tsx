"use client";

import React, { Fragment, useState } from "react";
import Link from "next/link";
import { Toparrow } from "@/assets/icon";
import { Dialog, Transition } from "@headlessui/react";
import BookingForm from "../common/BookingForm";

const CESessions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Section */}
      <div className="flex justify-center container items-center mt-6 px-4 sm:px-0">
        <div className="w-full  border border-[#6D6D6D]/50 p-6 sm:p-10 md:p-12 bg-gradient-to-b from-black via-[#030A14] to-[#167BFF]/70 rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
            
            {/* Left Section */}
            <div className="flex-1 text-white text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-[32px] font-bold mb-4">
                Book Us for Accredited CE & CLE Sessions
              </h1>

              <p className="text-base sm:text-lg md:text-[16px] text-[#F1F1F1] mb-6 font-light leading-relaxed">
                Empower your team with expert insights into OSINT, fraud prevention,
                <br className="hidden sm:block" />
                and digital investigations.
                <br className="hidden sm:block" /> 
                Earn CE/CLE credits while staying ahead of emerging risks.
              </p>

              {/* Buttons */}
              <div className=" flex flex-col sm:flex-row gap-3 sm:gap-5 mt-4 sm:mt-6 w-full sm:w-auto">
                <button
                  onClick={() => setIsOpen(true)}
                  className="text-ellipses whitespace-nowrap custom-button with-shadow bg-[#1057B5] text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-3 rounded-xl"
                >
                  Book a Speaking Session <Toparrow />
                </button>

                <Link href={"/pages/discoveredu"} className="text-ellipses whitespace-nowrap block max-xs:hidden w-full sm:w-auto">
                  <button className="text-sm custom-button with-border bg-transparent  sm:text-base px-4 py-3 sm:px-6 sm:py-3 rounded-xl w-full">
                    Discover Our Educational Programs <Toparrow />
                  </button>
                </Link>
                                <Link href={"/pages/discoveredu"} className="hidden max-xs:block w-full sm:w-auto">
                  <button className="text-sm custom-button with-border bg-transparent  sm:text-base px-4 py-3 sm:px-6 sm:py-3 rounded-xl w-full">
                   Educational Programs <Toparrow />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Section: Image */}
            <div className="flex-shrink-0 w-full max-w-sm sm:max-w-md lg:max-w-xs">
              <img
                src="/images/cle.png"
                alt="People in a meeting discussing"
                className="rounded-2xl w-full h-auto object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal (commented) */}
      {/* 
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl bg-[#0E1014] rounded-3xl shadow-2xl p-4 md:p-8 overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
            >
              ×
            </button>

            <BookingForm />
          </div>
        </div>
      )} 
      */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 overflow-y-auto" onClose={()=>setIsOpen(false)}>
          {/* Background overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
          <div className="fixed inset-0 backdrop-blur-sm bg-white/20" />
          </Transition.Child>
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
            >
              <Dialog.Panel
  className="w-full max-w-7xl no-scrollbar transform overflow-hidden rounded-2xl p-6  transition-all relative
             max-h-[95vh] overflow-y-auto"
>
                {/* Insert your form here */}
                <BookingForm isForm={true}/>

                {/* Close Button */}
                <button
                  onClick={()=>setIsOpen(false)}
                  className="absolute text-white top-12 right-14  hover:text-blue-500"
                >
                  ✕
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CESessions;
