"use client";
 
import { Toparrow } from "@/assets/icon";
import { PlusIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { useState } from "react"; // ✅ Added import
 
const opportunities = [
    {
        id: 1,
        slug: "data-intelligence-analyst",
        title: "Data Intelligence Analyst",
        description:
            "Data Intelligence involves analyzing large datasets using machine learning, AI, and data mining to extract actionable insights, identify trends, and inform decisions.",
    },
    {
        id: 2,
        slug: "forensic-data-engineer",
        title: "Forensic Data Engineer",
        description:
            "A Forensic Data Engineer retrieves, analyzes, and preserves digital evidence from systems and networks to support legal investigations and cybercrime cases.",
    },
    {
        id: 3,
        slug: "client-engagement-manager",
        title: "Client Engagement Manager",
        description:
            "A Client Engagement Manager oversees client relationships, ensuring satisfaction, addressing needs, and driving business growth through tailored solutions and communication.",
    },
    {
        id: 4,
        slug: "osint-investigator",
        title: "OSINT Investigator",
        description:
            "An OSINT Investigator collects and analyzes publicly available information from online sources to support investigations, uncover threats, and gather intelligence.",
    },
    {
        id: 5,
        slug: "security-intelligence-analyst",
        title: "Security Intelligence Analyst",
        description:
            "Corporate security teams use OSINT to detect threats to people, assets, and reputation. Your work helps safeguard the business, mitigate risks, and ensure operational continuity.",
    },
    {
        id: 6,
        slug: "private-investigator",
        title: "Private Investigator",
        description:
            "Private investigators increasingly rely on OSINT to locate individuals, uncover hidden assets, and verify facts. Using public records and social media, you enhance investigations and help clients solve complex cases.",
    },
];
 
// ✅ Accordion sections
const sections = [
    {
        title: "Job Description",
        content: (
            <div className="text-sm sm:text-base font-normal font-inter tracking-normal text-[#A0A4AE]">
                <p>
                    <span className="text-white">Project Role :</span> Application Lead
                </p>
                <p>
                    <span className="text-white">Project Role Description :</span> Lead the effort to design, build and
                    configure applications, acting as the primary point of contact.
                </p>
                <p><span className="text-white">Must have skills :</span> SAP FI S/4HANA Accounting</p>
                <p><span className="text-white">Good to have skills :</span> NA</p>
                <p>
                    Minimum 5 year(s) of experience is required
                </p>
                <p>
                    <span className="text-white">Educational Qualification :</span> 15 years full time education
                </p>

                <p className="mt-4 text-sm sm:text-base font-normal font-inter text-white">
                    Summary: <span className="text-[#A0A4AE]">
                        As an Application Lead, you will lead the effort to design, build, and
                        configure applications, acting as the primary point of contact. Your
                        typical day will involve collaborating with various teams to ensure
                        that application requirements are met, overseeing the development
                        process, and providing guidance to team members.
                    </span>
                </p>
            </div>
        ),
    },
    {
        title: "Qualification",
        content: <p className="text-sm sm:text-base text-white">Minimum 5 years of investigative or forensic experience.</p>,
    },
    {
        title: "Locations",
        content: <p className="text-sm sm:text-base text-white">Available Online & Onsite (Navi Mumbai, Delhi, Bangalore)</p>,
    },
    {
        title: "Additional Information",
        content: (
            <p className="text-sm sm:text-base text-white">
                Equal Employment Opportunity Statement All employment decisions shall be
                made without regard to age, race, creed, color, religion, sex, national
                origin, ancestry, disability status, veteran status, sexual orientation,
                gender identity or expression, genetic information, marital status,
                citizenship status or any other basis as protected by law.
            </p>
        ),
    },
    {
        title: "About Accenture",
        content: (
            <div className="text-sm sm:text-base text-white">
                <p>
                    We work with one shared purpose: to deliver on the promise of
                    technology and human ingenuity. Every day, more than 775,000 of us
                    help our stakeholders continuously reinvent. Together, we drive
                    positive change and deliver value.
                </p>
                <p className="mt-2">
                    At Accenture, we see well-being holistically, supporting our people’s
                    physical, mental, and financial health. We also provide opportunities
                    to keep skills relevant through certifications, learning, and diverse
                    work experiences.
                </p>
            </div>
        ),
    },
    {
        title: "Important Notice",
        content: (
            <p className="text-sm sm:text-base text-white">
                We have been alerted to fraudulent messages asking job seekers to set up
                payment to cover various costs. No one is ever required to pay for
                employment at Accenture. If contacted, do not respond and report
                immediately.
            </p>
        ),
    },
];
 
export default function OpportunityPage({ params }: any) {
    const id = Number(params.id);
    const opportunity = opportunities.find((job) => job.id === id);
 
    if (!opportunity) return notFound();
 
    // Accordion state
    const [openIndex, setOpenIndex] = useState<number[]>([]);
    const toggleSection = (index: number) => {
        if (openIndex.includes(index)) {
            const ind = openIndex.filter((opens) => opens !== index);
            setOpenIndex(ind);
        }
        else {
            setOpenIndex([...openIndex, index]);
        }
    }
 
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-white">
            {/* Title */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-sans tracking-normal text-white font-bold mb-4">
                {opportunity.title}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#f1f1f1] mb-2">{opportunity.description}</p>
            <p className="text-xs sm:text-sm text-gray-400">
                Job ID: {opportunity.id} | Slug: {opportunity.slug}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mt-6 mb-12">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full">
                    <button
                        className="w-full sm:w-auto min-w-[160px] text-sm custom-button with-shadow bg-[#1057B5]"
                    >
                        Apply for this job
                    </button>
                    <button
                        className="hidden lg:block min-w-[130px] custom-button with-border bg-transparent"
                    >
                        Share
                        <Toparrow />
                    </button>
                </div>
            </div>

            {/* Accordion */}
            <div className="flex flex-col gap-[24px] sm:gap-[30px] mt-6 sm:mt-8">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="border-t border-[#167BFF] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mt-5 sm:mt-7">
                            <div className="font-bold font-sans text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white text-left">
                                {section.title}
                            </div>
                            {openIndex.includes(index) ? (
                                <div
                                    onClick={() => toggleSection(index)}
                                    className="cursor-pointer w-[28px] sm:w-[33px] h-[3px] bg-white"
                                />
                            ) : (
                                <PlusIcon
                                    onClick={() => toggleSection(index)}
                                    size={28}
                                    className="sm:size-[33px] text-white cursor-pointer"
                                />
                            )}
                        </div>

                        {/* Content */}
                        {openIndex.includes(index) && (
                            <div className="py-3 sm:py-4 text-gray-300 bg-black/40 rounded-md mt-2">
                                {section.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
 
 