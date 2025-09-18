"use client";

import { Toparrow } from "@/assets/icon";
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
            <div className="space-y-4 text-white">
                <p className="text-lg font-semibold">
                    Project Role : Application Lead
                </p>
                <p className="text-base">
                    Project Role Description : Lead the effort to design, build and
                    configure applications, acting as the primary point of contact.
                </p>
                <p className="text-base">Must have skills : SAP FI S/4HANA Accounting</p>
                <p className="text-base">Good to have skills : NA</p>
                <p className="text-base">
                    Minimum 5 year(s) of experience is required
                </p>
                <p className="text-base">
                    Educational Qualification : 15 years full time education
                </p>

                <p className="text-lg font-semibold">Summary:</p>
                <p className="text-base">
                    As an Application Lead, you will lead the effort to design, build, and
                    configure applications, acting as the primary point of contact. Your
                    typical day will involve collaborating with various teams to ensure
                    that application requirements are met, overseeing the development
                    process, and providing guidance to team members.
                </p>

                <p className="text-lg font-semibold">Roles & Responsibilities:</p>
                <p className="text-base">
                    - Expected to be an SME. <br />
                    - Collaborate and manage the team to perform. <br />
                    - Responsible for team decisions. <br />
                    - Engage with multiple teams and contribute on key decisions. <br />
                    - Provide solutions to problems for their immediate team and across
                    multiple teams. <br />
                    - Facilitate knowledge sharing sessions to enhance team capabilities.{" "}
                    <br />
                    - Monitor project progress and ensure timely delivery of milestones.
                </p>

                <p className="text-lg font-semibold">
                    Professional & Technical Skills:
                </p>
                <p className="text-base">
                    - Must To Have Skills: Proficiency in SAP FI S/4HANA Accounting.{" "}
                    <br />
                    - Strong understanding of financial accounting principles and
                    practices. <br />
                    - Experience with integration of SAP modules and third-party
                    applications. <br />
                    - Ability to analyze business requirements and translate them into
                    technical specifications. <br />
                    - Familiarity with SAP reporting tools and financial analysis.
                </p>

                <p className="text-lg font-semibold">Additional Information:</p>
                <p className="text-base">
                    The candidate should have minimum 5 years of experience in SAP FI
                    S/4HANA Accounting.
                </p>
            </div>
        ),
    },
    {
        title: "Qualification",
        content: <p>Minimum 5 years of investigative or forensic experience.</p>,
    },
    {
        title: "Locations",
        content: <p>Available Online & Onsite (Navi Mumbai, Delhi, Bangalore)</p>,
    },
    {
        title: "Additional Information",
        content: (
            <p>
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
            <div>
                <p>
                    We work with one shared purpose: to deliver on the promise of
                    technology and human ingenuity. Every day, more than 775,000 of us
                    help our stakeholders continuously reinvent. Together, we drive
                    positive change and deliver value.
                </p>
                <p>
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
            <p>
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
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleSection = (index: number) =>
        setOpenIndex(openIndex === index ? null : index);

    return (
        <div className="container mx-auto py-16 text-white">
            <h1 className="text-4xl font-bold mb-6">{opportunity.title}</h1>
            <p className="text-lg text-gray-300 mb-4">{opportunity.description}</p>

            <p className="text-sm text-gray-400">
                Job ID: {opportunity.id} | Slug: {opportunity.slug}
            </p>
            <div className="flex flex-wrap gap-2 mt-4 mb-10">
                <div className="md:flex items-center gap-4 md:gap-2">
                    <button
                        className="min-w-[160px] text-sm custom-button with-shadow bg-[#1057B5]">

                        Apply for this job

                    </button>
                    <button
                        className="hidden lg:block min-w-[130px] custom-button with-border bg-transparent "
                    >
                        Share
                        <Toparrow />
                    </button>

                </div>
            </div>
            {/* Accordion */}
            <div className="flex flex-col gap-[30px] mt-8">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="border-t border-[#167BFF] overflow-hidden"
                    >
                        {/* Header */}
                        <button
                            onClick={() => toggleSection(index)}
                            className="w-full flex justify-between items-center px-4 py-3 text-left"
                        >
                            <span className="font-bold text-2xl">{section.title}</span>
                            <span>{openIndex === index ? "−" : "+"}</span>
                        </button>

                        {/* Content */}
                        {openIndex === index && (
                            <div className="px-4 py-3 text-gray-300 bg-black/40">
                                {section.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
