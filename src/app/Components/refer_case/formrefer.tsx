"use client";
import { Toparrow } from "@/assets/icon";
import React, { useState } from "react";

// Step components (without buttons inside)
const CaseTypeStep = () => (
    <div className="p-8">
        <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#FFFFFFCC] mb-10">
            Select case types:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
                "Social Media Intelligence Reports",
                "Background Checks",
                "Medical Canvasses",
                "Surveillance",
                "Social Media Intelligence Search",
                "Gym Canvas",
                "Cell Phone Data (Loc8)",
                "Locate",
                "Brand Defense",
                "Expert Testimony",
                "Social Media Monitoring",
                "Others",
            ].map((item, index) => (
                <label
                    key={index}
                    className="flex bg-[#FFFFFF1A] items-center gap-3  border-[#3C414A] border-[0.5px] rounded-lg  px-3 py-2 w-full cursor-pointer transition hover:border-blue-500"
                >
                    <input
                        type="checkbox"
                        className="appearance-none h-3 w-3 border border-[#FFFFFFCC] rounded-xs checked:bg-blue-500 checked:border-blue-500 transition-all cursor-pointer"
                    />
                    <span className="text-[#FFFFFFCC] text-sm font-normal font-inter">{item}</span>
                </label>

            ))}
        </div>
    </div>
);

const ReferrerInformationStep = () => (
    <div className="p-8">
        <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#FFFFFFCC] mb-6">
            Referrer Information:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
                { id: "firstName", label: "First Name", type: "text", placeholder: "John" },
                { id: "lastName", label: "Last Name", type: "text", placeholder: "Doe" },
                { id: "companyName", label: "Company Name", type: "text", placeholder: "Lorem" },
                { id: "city", label: "City", type: "text", placeholder: "Ipsum" },
            ].map((field) => (
                <div className="flex flex-col gap-2" key={field.id}>
                    <label htmlFor={field.id} className="text-white font-inter font-medium text-base">
                        {field.label}
                    </label>
                    <input
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder}
                        className=" py-3 px-[11px] bg-[#1E1E1E] rounded-lg border-[0.5px] border-[#3C414A] text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="font-normal font-inter text-xs text-[#A0A4AE]">Minimum 2 characters</p>
                </div>
            ))}

            <div className="flex flex-col md:col-span-2 gap-2">
                <label htmlFor="state" className="text-white text-base font-inter font-medium">
                    State
                </label>
                <select
                    id="state"
                    className=" py-2 px-[11px] bg-[#1E1E1E] border-[0.5px] border-[#3C414A] rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option>Select your state</option>
                </select>
            </div>

            <div className="flex flex-col md:col-span-2 gap-2">
                <label htmlFor="phone" className="text-white text-base font-inter font-medium">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    placeholder="00 0000 0000"
                    className="py-2 px-[11px] bg-[#1E1E1E] border-[0.5px] border-[#3C414A] rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                  <p className="font-normal font-inter text-xs text-[#A0A4AE]">Numbers and “+” allowed</p>
            </div>

            <div className="flex flex-col md:col-span-2 gap-2">
                <label htmlFor="email" className="text-white text-base font-inter font-medium">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="john123@example.com"
                    className="py-2 px-[11px] bg-[#1E1E1E] border-[0.5px] border-[#3C414A] rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
             <p className="font-normal font-inter text-xs text-[#A0A4AE]">Must be a valid email address</p>
            </div>
        </div>
    </div>
);

const ClaimantInformationStep = () => (
    <div className="p-8">
        <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#FFFFFFCC] mb-6">
            Claimant Information:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {[
                { id: "claimFile", label: "Claim or File" },
                { id: "typeOfClaim", label: "Type of claim" },
                { id: "subject", label: "Subject" },
                { id: "address", label: "Address" },
                { id: "ssn", label: "Last four of SS number" },
                { id: "dob", label: "DOB" },
                { id: "dol", label: "DOL" },
                { id: "injury", label: "Injury" },
                { id: "phone", label: "Phone" },
                { id: "email", label: "Email" },
                { id: "employer", label: "Employer or insured" },
                { id: "tpa", label: "TPA" },
                { id: "represented", label: "Is subject represented" },
                { id: "hobbies", label: "Hobbies" },
            ].map((field) => (
                <div className="flex flex-col gap-2" key={field.id}>
                    <label htmlFor={field.id} className="text-white text-base font-inter font-medium">
                        {field.label}
                    </label>
                    <input
                        type="text"
                        id={field.id}
                        placeholder="Enter here"
                        className="py-2 px-[11px] bg-[#1E1E1E] border-[0.5px] border-[#3C414A] rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            ))}
        </div>
    </div>
);

const UploadDocumentsStep = () => (
    <div className="p-8">
        <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mb-6">
            Upload Documents:
        </h3>
        <div className="flex flex-col gap-6 items-center justify-center p-8 border-[0.5px] border-[#3C414A] rounded-xl bg-[#1E1E1E] text-gray-400 hover:bg-gray-800 transition-colors duration-200">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 30V9.625L11 16.125L7.5 12.5L20 0L32.5 12.5L29 16.125L22.5 9.625V30H17.5ZM5 40C3.625 40 2.44833 39.5108 1.47 38.5325C0.491666 37.5542 0.00166667 36.3767 0 35V27.5H5V35H35V27.5H40V35C40 36.375 39.5108 37.5525 38.5325 38.5325C37.5542 39.5125 36.3767 40.0017 35 40H5Z" fill="white"/>
</svg>

            <p className="font-normal text-[#8A8A8A] text-sm font-inter">
                Please attach any previous FROI, incident or police reports, BOPs,
                interrogatories, etc...
            </p>
        </div>
    </div>
);

const steps = [
    { title: "Type of Case", component: CaseTypeStep },
    { title: "Referrer Information", component: ReferrerInformationStep },
    { title: "Claimant Information", component: ClaimantInformationStep },
    { title: "Upload Documents", component: UploadDocumentsStep },
];

const CaseDetails = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const onNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const onPrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const CurrentComponent = steps[currentStep].component;

    return (
        <div className="container text-white p-4 flex items-center justify-center">
  <div className="mx-auto flex flex-col md:flex-row rounded-4xl overflow-hidden shadow-2xl backdrop-filter backdrop-blur-md bg-opacity-10 w-full">
    
    {/* Left Sidebar */}
    <div className="w-full md:w-1/2 p-6 md:p-8">
      <h1 className="text-[32px] md:text-[48px] font-bold font-sans text-white mb-5 md:mb-7">
        Cyphr Case Details
      </h1>
      <p className="text-[#FFFFFFCC] font-medium text-lg md:text-2xl">
        If you could fill out as much of the information below that would be
        helpful. No worries if you don't have everything, we'll find the rest.
      </p>
      <div className="flex mx-[15px] md:mx-[25px] my-[25px] md:my-[55px] flex-col">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex flex-col justify-start gap-1 items-center">
              <div
                className={`${
                  index !== 0 ? "mt-1" : ""
                } relative flex items-center justify-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full font-bold transition-all duration-300 ${
                  index <= currentStep
                    ? "bg-[#167BFF] text-white shadow-[0_0_20px_rgba(22,123,255,0.7)]"
                    : "bg-white text-[#167BFF]"
                }`}
              >
                {index < currentStep ? (
                  <svg
                    width="20"
                    height="12"
                    viewBox="0 0 23 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8.21521L5.88451 12.0997M11.3228 5.88451L15.2073 2M8.21521 8.21521L12.0997 12.0997L21.4225 2"
                      stroke="white"
                      strokeWidth="2.3307"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              <div
                style={{
                  border:
                    index < currentStep
                      ? "0.5px solid #167BFF"
                      : "0.5px solid #FFFFFF",
                }}
                className={`w-0 ${index === 3 ? "hidden" : ""} border h-[40px] md:h-[50px]`}
              />
            </div>
            <span
              className={`mt-[10px] md:mt-[12.5px] text-base md:text-lg transition-colors duration-300 ${
                index <= currentStep ? "text-white" : "text-gray-100"
              }`}
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Right Content Area */}
    <div
      className="overflow-hidden relative w-full md:w-2/3 p-4 rounded-3xl min-h-[500px] md:h-auto flex flex-col border border-[#5B5B5B80]"
      style={{
        background:
          "linear-gradient(110.77deg, rgba(3, 10, 20, 0) 0%, rgba(22, 123, 255, 0.12) 91.47%)",
      }}
    >
      {/* Glow effects */}
      <div
        className="absolute pointer-events-none -z-1 blur-[16.2px]"
        style={{
          width: "80%",
          height: 78,
          top: -63,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.6,
          borderRadius: "50%",
          backgroundColor: "#167BFF",
        }}
      />
      <div
        className="absolute pointer-events-none z-0 blur-[271.2px] animate-blink"
        style={{
          width: "50%",
          height: 659,
          top: -551,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.4,
          borderRadius: "50%",
          backgroundColor: "#1470E8",
        }}
      />
      <div
        className="absolute pointer-events-none z-0 blur-[271.2px]"
        style={{
          width: "50%",
          height: 659,
          top: 451,
          left: "80%",
          transform: "translateX(-50%)",
          opacity: 0.4,
          borderRadius: "50%",
          backgroundColor: "#1470E8",
        }}
      />

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <CurrentComponent />
      </div>

      {/* Fixed Buttons */}
      <div className="mt-4 flex items-center sm:items-start flex-col sm:flex-row justify-center gap-4">
        {currentStep > 0 && (
          <button
            onClick={onPrev}
            className="custom-button relative bottom-4 with-shadow bg-[#1057B5] w-[80%] sm:w-[100px] mx-2"
          >
            Back
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button
            onClick={onNext}
            className="custom-button relative bottom-4 with-shadow bg-[#1057B5] w-[80%] sm:w-[300px] md:w-[500px]"
          >
            Next <Toparrow />
          </button>
        ) : (
          <button className="custom-button with-shadow relative bottom-4 bg-[#1057B5] mx-auto sm:mx-2 w-[80%] sm:w-[300px] md:w-[500px] ">
            Submit Case <Toparrow />
          </button>
        )}
      </div>
    </div>
  </div>
</div>

    );
};

export default CaseDetails;
