"use client";
import React, { useState } from "react";

// Step components (without buttons inside)
const CaseTypeStep = () => (
    <div className="p-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6">
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
                    className="flex items-center gap-3 border border-[#3c414a] rounded-xl bg-[#0a0a0a]/10 px-4 py-2 w-[269px] cursor-pointer transition hover:border-blue-500"
                >
                    <input
                        type="checkbox"
                        className="appearance-none h-5 w-5 border border-gray-400 rounded-sm checked:bg-blue-500 checked:border-blue-500 transition-all cursor-pointer"
                    />
                    <span className="text-gray-200 text-lg font-medium">{item}</span>
                </label>

            ))}
        </div>
    </div>
);

const ReferrerInformationStep = () => (
    <div className="p-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6">
            Referrer Information:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
                { id: "firstName", label: "First Name", type: "text", placeholder: "John" },
                { id: "lastName", label: "Last Name", type: "text", placeholder: "Doe" },
                { id: "companyName", label: "Company Name", type: "text", placeholder: "Lorem" },
                { id: "city", label: "City", type: "text", placeholder: "Ipsum" },
            ].map((field) => (
                <div className="flex flex-col" key={field.id}>
                    <label htmlFor={field.id} className="text-gray-400">
                        {field.label}
                    </label>
                    <input
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder}
                        className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            ))}

            <div className="flex flex-col md:col-span-2">
                <label htmlFor="state" className="text-gray-400">
                    State
                </label>
                <select
                    id="state"
                    className="mt-1 p-2 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option>Select your state</option>
                </select>
            </div>

            <div className="flex flex-col md:col-span-2">
                <label htmlFor="phone" className="text-gray-400">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    placeholder="00 0000 0000"
                    className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-col md:col-span-2">
                <label htmlFor="email" className="text-gray-400">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="john123@example.com"
                    className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    </div>
);

const ClaimantInformationStep = () => (
    <div className="p-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6">
            Claimant Information:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div className="flex flex-col" key={field.id}>
                    <label htmlFor={field.id} className="text-gray-400">
                        {field.label}
                    </label>
                    <input
                        type="text"
                        id={field.id}
                        placeholder="Enter here"
                        className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            ))}
        </div>
    </div>
);

const UploadDocumentsStep = () => (
    <div className="p-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6">
            Upload Documents:
        </h3>
        <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-600 rounded-lg bg-gray-900 text-gray-400 hover:bg-gray-800 transition-colors duration-200">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-gray-500 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
            </svg>
            <p>
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
            <div className="mx-auto flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl backdrop-filter backdrop-blur-md bg-opacity-10">
                {/* Left Sidebar */}
                <div className="w-1/3 p-8">
                    <h1 className="text-[48px] font-bold mb-2">Cyphr Case Details</h1>
                    <p className="text-gray-400 mb-8 text-sm">
                        If you could fill out as much of the information below that would be
                        helpful. No worries if you don't have everything, we'll find the
                        rest.
                    </p>
                    <div className="flex flex-col space-y-8">
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <div
                                    className={`relative flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all duration-300 ${index <= currentStep
                                        ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(22,123,255,0.7)]"
                                        : "bg-gray-200 text-blue-500"
                                        }`}
                                >
                                    {index < currentStep ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        index + 1
                                    )}
                                </div>
                                <span
                                    className={`text-lg transition-colors duration-300 ${index <= currentStep ? "text-white" : "text-gray-100"
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
                    className="relative w-2/3 p-4 rounded-3xl h-[887px] flex flex-col border border-[#5b5b5b]/50"
                >
                   
                    <div
                        className="absolute pointer-events-none z-0 blur-[26.2px] "
                        style={{
                            width: '50%',
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
                        className="absolute pointer-events-none z-0 blur-[271.2px] animate-blink"
                        style={{
                            width: '50%',
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
                        className="absolute pointer-events-none z-0 blur-[271.2px] "
                        style={{
                            width: '50%',
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
                    <div className="mt-4 flex justify-center gap-4">
                        {currentStep > 0 && (
                            <button
                                onClick={onPrev}
                                className="relative px-8 py-3 text-lg font-bold text-gray-300 transition-colors duration-300 transform bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                            >
                                Back
                            </button>
                        )}
                        {currentStep < steps.length - 1 ? (
                            <button
                                onClick={onNext}
                                className="relative px-8 py-3 text-lg font-bold text-white transition-colors duration-300 transform bg-gradient-to-r from-blue-600 to-blue-800 rounded-full hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 shadow-[0_0_20px_rgba(22,123,255,0.7)]"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                className="relative px-8 py-3 text-lg font-bold text-white transition-colors duration-300 transform bg-gradient-to-r from-blue-600 to-blue-800 rounded-full hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 shadow-[0_0_20px_rgba(22,123,255,0.7)]"
                            >
                                Submit Case
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseDetails;
