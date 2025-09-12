"use client";
import React, { useState } from 'react';

// Step components
const CaseTypeStep = ({ onNext }) => (
    <div className="p-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6">Select case types:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
                "Social Media Intelligence Reports", "Background Checks",
                "Medical Canvasses", "Surveillance",
                "Social Media Intelligence Search", "Gym Canvas",
                "Cell Phone Data (Loc8)", "Locate",
                "Brand Defense", "Expert Testimony",
                "Social Media Monitoring", "Others"
            ].map((item, index) => (
                <label key={index} className="flex items-center space-x-2 text-gray-300">
                    <input type="checkbox" className="form-checkbox bg-gray-700 text-blue-500 rounded-sm" />
                    <span>{item}</span>
                </label>
            ))}
        </div>
        <div className="flex justify-center mt-8">
            <button
                onClick={onNext}
                className="relative px-8 py-3 text-lg font-bold text-white transition-colors duration-300 transform bg-gradient-to-r from-blue-600 to-blue-800 rounded-full hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 shadow-[0_0_20px_rgba(22,123,255,0.7)]"
            >
                Next
            </button>
        </div>
    </div>
);

const ReferrerInformationStep = ({ onNext, onPrev }) => (
    <div className="p-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6">Referrer Information:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
                <label htmlFor="firstName" className="text-gray-400">First Name</label>
                <input type="text" id="firstName" placeholder="John" className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="lastName" className="text-gray-400">Last Name</label>
                <input type="text" id="lastName" placeholder="Doe" className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="companyName" className="text-gray-400">Company Name</label>
                <input type="text" id="companyName" placeholder="Lorem" className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="city" className="text-gray-400">City</label>
                <input type="text" id="city" placeholder="Ipsum" className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col md:col-span-2">
                <label htmlFor="state" className="text-gray-400">State</label>
                <select id="state" className="mt-1 p-2 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select your state</option>
                </select>
            </div>
            <div className="flex flex-col md:col-span-2">
                <label htmlFor="phone" className="text-gray-400">Phone Number</label>
                <input type="tel" id="phone" placeholder="00 0000 0000" className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col md:col-span-2">
                <label htmlFor="email" className="text-gray-400">Email</label>
                <input type="email" id="email" placeholder="john123@example.com" className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
            <button
                onClick={onPrev}
                className="relative px-8 py-3 text-lg font-bold text-gray-300 transition-colors duration-300 transform bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
                Back
            </button>
            <button
                onClick={onNext}
                className="relative px-8 py-3 text-lg font-bold text-white transition-colors duration-300 transform bg-gradient-to-r from-blue-600 to-blue-800 rounded-full hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 shadow-[0_0_20px_rgba(22,123,255,0.7)]"
            >
                Next
            </button>
        </div>
    </div>
);

const ClaimantInformationStep = ({ onNext, onPrev }) => (
    <div className="p-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6">Claimant Information:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
                <label htmlFor="claimFile" className="text-gray-400">Claim or File</label>
                <input type="text" id="claimFile" placeholder="John" className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="typeOfClaim" className="text-gray-400">Type of claim</label>
                <input type="text" id="typeOfClaim" placeholder="Doe" className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="subject" className="text-gray-400">Subject</label>
                <input type="text" id="subject" placeholder="Lorem" className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="address" className="text-gray-400">Address</label>
                <input type="text" id="address" placeholder="Ipsum" className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="ssn" className="text-gray-400">Last four of SS number</label>
                <input type="text" id="ssn" placeholder="Lorem" className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="dob" className="text-gray-400">DOB</label>
                <input type="text" id="dob" placeholder="Ipsum" className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="dol" className="text-gray-400">DOL</label>
                <input type="text" id="dol" placeholder="Lorem" className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="injury" className="text-gray-400">Injury</label>
                <input type="text" id="injury" placeholder="Ipsum" className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="phone" className="text-gray-400">Phone</label>
                <input type="tel" id="phone" placeholder="Lorem" className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-400">Email</label>
                <input type="email" id="email" placeholder="Ipsum" className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="employer" className="text-gray-400">Employer or insured</label>
                <input type="text" id="employer" placeholder="Lorem" className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="tpa" className="text-gray-400">TPA</label>
                <input type="text" id="tpa" placeholder="Ipsum" className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="represented" className="text-gray-400">Is subject represented</label>
                <input type="text" id="represented" placeholder="Lorem" className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="hobbies" className="text-gray-400">Hobbies</label>
                <input type="text" id="hobbies" placeholder="Ipsum" className="mt-1 p-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
            <button
                onClick={onPrev}
                className="relative px-8 py-3 text-lg font-bold text-gray-300 transition-colors duration-300 transform bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
                Back
            </button>
            <button
                onClick={onNext}
                className="relative px-8 py-3 text-lg font-bold text-white transition-colors duration-300 transform bg-gradient-to-r from-blue-600 to-blue-800 rounded-full hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 shadow-[0_0_20px_rgba(22,123,255,0.7)]"
            >
                Next
            </button>
        </div>
    </div>
);

const UploadDocumentsStep = ({ onPrev }) => (
    <div className="p-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6">Upload Documents:</h3>
        <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-600 rounded-lg bg-gray-900 text-gray-400 hover:bg-gray-800 transition-colors duration-200">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-gray-500 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            <p>Please attach any previous FROI, incident or police reports, BOPs, interrogatories, etc...</p>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
            <button
                onClick={onPrev}
                className="relative px-8 py-3 text-lg font-bold text-gray-300 transition-colors duration-300 transform bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
                Back
            </button>
            <button
                className="relative px-8 py-3 text-lg font-bold text-white transition-colors duration-300 transform bg-gradient-to-r from-blue-600 to-blue-800 rounded-full hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 shadow-[0_0_20px_rgba(22,123,255,0.7)]"
            >
                Submit Case
            </button>
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
        <div className=" container  text-white p-4 flex items-center justify-center">
            <div className=" mx-auto flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl backdrop-filter backdrop-blur-md bg-opacity-10"
                // style={{
                //     background: 'rgba(10, 25, 47, 0.4)',
                //     border: '1px solid rgba(255, 255, 255, 0.1)',
                // }}
            >
                {/* Left Sidebar */}
                <div className="w-1/3  p-8">
                    <h1 className="text-[48px] font-bold mb-2">Cyphr Case Details</h1>
                    <p className="text-gray-400 mb-8 text-sm">
                        If you could fill out as much of the information below that would be helpful. No worries if you don't have everything, we'll find the rest.
                    </p>
                    <div className="flex flex-col space-y-8">
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <div
                                    className={`relative flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all duration-300 ${
                                        index <= currentStep
                                            ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(22,123,255,0.7)]"
                                            : "bg-gray-800 text-gray-400"
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
                                <span className={`text-lg transition-colors duration-300 ${index <= currentStep ? "text-white" : "text-gray-400"}`}>
                                    {step.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content Area */}
                <div
                    className="w-2/3 p-4  rounded-3xl h-[900px] flex flex-col justify-between"
                    style={{
                        background: 'rgba(10, 25, 47, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                >
                    <CurrentComponent onNext={onNext} onPrev={onPrev} />
                </div>
            </div>
        </div>
    );
};

export default CaseDetails;
