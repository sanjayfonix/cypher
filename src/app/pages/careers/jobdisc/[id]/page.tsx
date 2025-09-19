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
            <div className="text-base font-normal font-inter tracking-normal text-[#A0A4AE]">
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
 
                <p className="mt-4 text-base font-normal font-inter tracki-normal text-white">Summary: <span className="text-[#A0A4AE]">
                    As an Application Lead, you will lead the effort to design, build, and
                    configure applications, acting as the primary point of contact. Your
                    typical day will involve collaborating with various teams to ensure
                    that application requirements are met, overseeing the development
                    process, and providing guidance to team members.
                </span></p>
               
 
                {/* <p className="text-lg font-semibold">Roles & Responsibilities:</p>
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
                </p> */}
 
                {/* <p className="text-lg font-semibold">
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
                </p> */}
            </div>
        ),
    },
    {
        title: "Qualification",
        content: <p className="text-white">Minimum 5 years of investigative or forensic experience.</p>,
    },
    {
        title: "Locations",
        content: <p className="text-white">Available Online & Onsite (Navi Mumbai, Delhi, Bangalore)</p>,
    },
    {
        title: "Additional Information",
        content: (
            <p className="text-white">
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
                <p className="text-white">
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
            <p className="text-white">
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
    const toggleSection = (index: number) =>{
        if(openIndex.includes(index)){
            const ind = openIndex.filter((opens)=>opens!==index);
            setOpenIndex(ind);
        }
        else{
            setOpenIndex([...openIndex,index]);
        }
    }
 
    return (
        <div className="container mx-auto py-16 text-white">
            <h1 className="text-4xl md:text-7xl font-sans tracking-normal text-white font-bold mb-4">{opportunity.title}</h1>
            <p className="text-base text-[#f1f1f1] mb-2">{opportunity.description}</p>
 
            <p className="text-sm text-gray-400">
                Job ID: {opportunity.id} | Slug: {opportunity.slug}
            </p>
            <div className="flex flex-wrap gap-2 mt-4 mb-16">
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
                        <div className="flex items-center justify-between mt-7">                      
                        <div className="font-bold font-sans text-white text-3xl md:text-5xl  text-left">{section.title}</div>
                        {openIndex.includes(index)? <div
                            onClick={() => toggleSection(index)}
                            className="pointer-cursor w-[33px] h-[3.67px] bg-white"
                        >
                           
                           
                        </div>:<PlusIcon onClick={() => toggleSection(index)} size={33} color="white" className="pointer-cursor"/>}
                        </div>
                        {/* Content */}
                        {openIndex.includes(index) && (
                            <div className="py-4 text-gray-300 bg-black/40">
                                {section.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
 
 