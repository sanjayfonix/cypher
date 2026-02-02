"use client";
 
import { Toparrow } from "@/assets/icon";
import { PlusIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { useState } from "react"; // ✅ Added import
 
const opportunities = [
    {
        id: 1,
        slug: "osint-knowledge-base-intern",
        title: "OSINT Knowledge Base Intern (Unpaid)",
        type: "Internship",
        location: "Remote",
        commitment: "Flexible, Part-Time",
        email: "careers@cyphr.llc",
        description: "Hands-On Experience with Cutting-Edge Tools. Are you a college student eager to break into the world of Open-Source Intelligence (OSINT)? Do you want practical, hands-on experience with a wide array of OSINT tools—from command-line utilities to advanced web-based platforms?",
        fullDetails: {
            whatYouDo: [
                "Test and evaluate diverse OSINT tools, including command-line utilities, web applications, and specialized software",
                "Work in Linux-based environments, install tools via command line, and apply core OSINT methodologies",
                "Build skills in virtual machine (VM) setups and Python scripting tailored for intelligence gathering and analysis",
                "Explore state-of-the-art OSINT techniques used in cybersecurity, investigations, threat intelligence, and risk mitigation",
                "Contribute to building and curating a comprehensive knowledge base of OSINT resources, tools, and best practices"
            ],
            whatYouGain: [
                "Direct, industry-relevant experience with tools and workflows powering real-world intelligence operations",
                "Deepened proficiency in Linux commands, command-line tooling, software installation, and scripting for OSINT",
                "A strong letter of recommendation, professional reference, and resume-boosting experience from a recognized OSINT pioneer",
                "Exposure to OSINT case-work through our 'Junior Analyst' program",
                "Hands-on involvement in real-world projects that accelerate careers in intelligence, cybersecurity, investigations, or related fields"
            ],
            whoShouldApply: [
                "U.S. citizens currently enrolled in a college or university program (preferably in cybersecurity, intelligence studies, computer science, criminal justice, or a related field)",
                "Students passionate about exploring OSINT and gaining practical, tradecraft-focused experience",
                "Self-starters comfortable with command-line interfaces, Linux basics, and introductory Python scripting",
                "Motivated learners driven by open-source intelligence, technology, and ethical data-driven decision-making"
            ],
            additionalInfo: "This is an unpaid internship offering unparalleled real-world exposure, networking in the intelligence community, and a solid foundation in OSINT. Additionally, high-performing interns may be offered the opportunity to take on paid case-work (separate agreement, paid per project—not part of this internship nor required)."
        }
    },
    {
        id: 2,
        slug: "junior-developer-intern",
        title: "Junior Developer Intern (Unpaid)",
        type: "Internship",
        location: "Remote",
        commitment: "Flexible, Part-Time",
        email: "careers@cyphr.llc",
        description: "Gain Production-Level Experience. Are you a college student passionate about software development and ready to contribute to real production systems? At Cyphr—the parent company of Webutation and innovator in OSINT-powered intelligence platforms—this internship lets you build features for distributed monitoring tools, AI integrations, and scalable data solutions.",
        fullDetails: {
            whatYouDo: [
                "Design, develop, and test features for our distributed intelligence and monitoring platform",
                "Create real-time dashboards, alert systems, and visualizations using modern web technologies",
                "Integrate APIs, implement natural language processing (NLP) elements, and handle time-series data (e.g., TimescaleDB)",
                "Write clean, scalable code in Python (with asyncio), JavaScript, and other languages as projects require",
                "Participate in ideation for future AI enhancements, large-scale data scraping (with evasion techniques), and system optimizations",
                "Debug, performance-tune, document code, and gain exposure to Docker containers and distributed architectures"
            ],
            whatYouGain: [
                "Authentic experience building enterprise-grade monitoring, AI-enhanced, and OSINT-integrated systems",
                "Portfolio pieces featuring production-level code and impactful projects",
                "Networking in tech and intelligence sectors with professionals driving innovation",
                "Mastery of modern development practices, distributed systems, data handling, and AI/OSINT intersections"
            ],
            whoShouldApply: [
                "U.S. citizens currently enrolled in a college or university program",
                "Students majoring in Computer Science, Computer Engineering, Software Engineering, or related fields",
                "Self-motivated problem-solvers excited to identify needs and deliver solutions",
                "Those interested in monitoring systems, ethical data scraping, AI, and intelligence technologies"
            ],
            requiredSkills: [
                "Object-oriented programming principles",
                "Python proficiency (asyncio basics a plus)",
                "Web fundamentals (HTML, CSS, JavaScript) and REST API concepts",
                "Test-driven development awareness",
                "Git/version control experience",
                "Task decomposition and problem-solving",
                "IDE proficiency (e.g., VS Code)",
                "Data structures, basic algorithms, SQL/time-series data",
                "API/JSON/HTTP knowledge",
                "Docker basics and containers",
                "Real-time concepts (webhooks, polling, event-driven)"
            ],
            additionalInfo: "This unpaid internship delivers invaluable production experience and career acceleration in a dynamic intelligence-tech environment. Additionally, high-performing interns may be offered the opportunity to take on paid case-work (separate agreement, paid per project—not part of this internship nor required)."
        }
    },
    {
        id: 3,
        slug: "content-product-development-intern",
        title: "Content & Product Development Intern (Unpaid)",
        type: "Internship",
        location: "Remote",
        commitment: "Flexible, Part-Time",
        email: "marketing@cyphr.llc",
        description: "Gain Hands-On Marketing Experience. Are you a college student or emerging professional passionate about high-impact writing, product storytelling, and strategic content? Cyphr—parent company of Webutation and pioneer in OSINT-driven intelligence—seeks interns to craft compelling narratives for elite audiences in government, policy, and professional sectors.",
        fullDetails: {
            whatYouDo: [
                "Write engaging, authoritative articles for U.S. senators, lobbying groups, industry journals, and thought-leadership platforms",
                "Develop professional bios for speakers at high-profile conferences and events",
                "Support product development by creating descriptions, report templates, and user-facing materials",
                "Edit and refresh website content to boost engagement and clarity",
                "Produce marketing assets like brochures, flyers, sales collateral, and branding guides",
                "Contribute to content strategy, messaging, and positioning initiatives"
            ],
            whatYouGain: [
                "Experience crafting content that influences policy, decisions, and industry standards",
                "Exposure to high-stakes writing for government and professional stakeholders",
                "Practical skills in marketing, product development, and strategic communications",
                "A letter of recommendation, professional reference, and portfolio-strengthening work",
                "Access to OSINT case-work via our 'Junior Analyst' program",
                "Real contributions to projects that launch careers in journalism, marketing, public affairs, or intelligence communications"
            ],
            whoShouldApply: [
                "Students enrolled in communications, journalism, political science, marketing, or related programs",
                "Strong, precise writers eager to hone professional craft",
                "Researchers comfortable drafting, editing, and refining high-quality materials",
                "Self-starters passionate about storytelling, public affairs, and intelligence branding",
                "Preferred: Writing samples, contest wins, or prior work for review; native/near-native English fluency in reading/writing"
            ],
            additionalInfo: "This unpaid internship builds a powerful foundation in elite content creation and marketing. Additionally, high-performing interns may be offered the opportunity to take on paid case-work (separate agreement, paid per project—not part of this internship nor required)."
        }
    },
    {
        id: 4,
        slug: "data-privacy-solutions-architect",
        title: "Data Privacy Solutions Architect",
        type: "Contractor/SOW",
        location: "Remote, with potential for U.S. travel (U.S. Citizens Only)",
        commitment: "Full-Time",
        email: "devops@cyphr.llc",
        description: "Cyphr, the parent company of Webutation and a leader in ethical intelligence and privacy-focused solutions, seeks a Data Privacy Solutions Architect to help clients minimize data exposure to big tech and cyber risks.",
        fullDetails: {
            responsibilities: [
                "Partner with clients to map privacy/cybersecurity needs, focusing on blocking unintended data flows to large platforms",
                "Deploy and maintain privacy-preserving hardware (phones, laptops, routers, firewalls, secure storage) with encryption and local processing",
                "Block unauthorized sharing to third-party processors and big tech via precise configurations",
                "Integrate solutions into client environments, emphasizing secure storage, processing, and transmission",
                "Audit hardware for privacy/security vulnerabilities and align with emerging standards",
                "Document configurations, guidelines, and deployment processes",
                "Provide implementation support, troubleshooting, and cross-team collaboration (security, dev, legal)"
            ],
            qualifications: [
                "Bachelor's in Computer Engineering, Information Security, or equivalent experience",
                "Hands-on hardware expertise (cell phones, laptops, networking gear, secure devices)",
                "Deep knowledge of privacy principles, laws (GDPR, CCPA), and data protection best practices",
                "Experience with VPNs, TLS/SSL, encryption, anonymization, and pseudonymization",
                "Awareness of cloud/IoT/mobile privacy risks tied to big tech collection",
                "Auditing skills and problem-solving for independent/team work",
                "Strong communication to explain tech to non-technical stakeholders"
            ],
            preferredSkills: [
                "Enterprise privacy solutions adapted to personal/home use",
                "Privacy-focused OS/tools knowledge",
                "Certifications (CISSP, CISM, CIPP)"
            ],
            whatWeOffer: [
                "Competitive contractor compensation",
                "Dynamic, mission-driven remote environment",
                "Direct impact on global privacy and intelligence ethics",
                "Flexible arrangements with growth potential"
            ]
        }
    }
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
 // Function to generate sections based on opportunity
const getSections = (opportunity: any) => {
    const sections = [
        {
            title: "Overview",
            content: (
                <div className="text-sm sm:text-base font-normal font-inter text-[#A0A4AE] space-y-3 p-4">
                    <p><span className="text-white font-semibold">Position:</span> {opportunity.title}</p>
                    <p><span className="text-white font-semibold">Type:</span> {opportunity.type}</p>
                    <p><span className="text-white font-semibold">Location:</span> {opportunity.location}</p>
                    <p><span className="text-white font-semibold">Commitment:</span> {opportunity.commitment}</p>
                    <p><span className="text-white font-semibold">Contact:</span> <a href={`mailto:${opportunity.email}`} className="text-[#167BFF] hover:underline">{opportunity.email}</a></p>
                    <p className="mt-4 text-white">{opportunity.description}</p>
                </div>
            ),
        },
    ];

    // Add What You'll Do section
    if (opportunity.fullDetails?.whatYouDo) {
        sections.push({
            title: "What You'll Do",
            content: (
                <ul className="text-sm sm:text-base text-[#A0A4AE] space-y-2 list-disc list-inside p-4">
                    {opportunity.fullDetails.whatYouDo.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            ),
        });
    }

    // Add Responsibilities section (for contractor roles)
    if (opportunity.fullDetails?.responsibilities) {
        sections.push({
            title: "Responsibilities",
            content: (
                <ul className="text-sm sm:text-base text-[#A0A4AE] space-y-2 list-disc list-inside p-4">
                    {opportunity.fullDetails.responsibilities.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            ),
        });
    }

    // Add What You'll Gain section
    if (opportunity.fullDetails?.whatYouGain) {
        sections.push({
            title: "What You'll Gain",
            content: (
                <ul className="text-sm sm:text-base text-[#A0A4AE] space-y-2 list-disc list-inside p-4">
                    {opportunity.fullDetails.whatYouGain.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            ),
        });
    }

    // Add Who Should Apply section
    if (opportunity.fullDetails?.whoShouldApply) {
        sections.push({
            title: "Who Should Apply",
            content: (
                <ul className="text-sm sm:text-base text-[#A0A4AE] space-y-2 list-disc list-inside p-4">
                    {opportunity.fullDetails.whoShouldApply.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            ),
        });
    }

    // Add Qualifications section
    if (opportunity.fullDetails?.qualifications) {
        sections.push({
            title: "Qualifications",
            content: (
                <ul className="text-sm sm:text-base text-[#A0A4AE] space-y-2 list-disc list-inside p-4">
                    {opportunity.fullDetails.qualifications.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            ),
        });
    }

    // Add Required Skills section
    if (opportunity.fullDetails?.requiredSkills) {
        sections.push({
            title: "Required Skills",
            content: (
                <ul className="text-sm sm:text-base text-[#A0A4AE] space-y-2 list-disc list-inside p-4">
                    {opportunity.fullDetails.requiredSkills.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            ),
        });
    }

    // Add Preferred Skills section
    if (opportunity.fullDetails?.preferredSkills) {
        sections.push({
            title: "Preferred Skills",
            content: (
                <ul className="text-sm sm:text-base text-[#A0A4AE] space-y-2 list-disc list-inside p-4">
                    {opportunity.fullDetails.preferredSkills.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            ),
        });
    }

    // Add What We Offer section
    if (opportunity.fullDetails?.whatWeOffer) {
        sections.push({
            title: "What We Offer",
            content: (
                <ul className="text-sm sm:text-base text-[#A0A4AE] space-y-2 list-disc list-inside p-4">
                    {opportunity.fullDetails.whatWeOffer.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            ),
        });
    }

    // Add Additional Information section
    if (opportunity.fullDetails?.additionalInfo) {
        sections.push({
            title: "Additional Information",
            content: (
                <p className="text-sm sm:text-base text-[#A0A4AE] p-4 leading-relaxed">
                    {opportunity.fullDetails.additionalInfo}
                </p>
            ),
        });
    }

    // Add About Cyphr section
    sections.push({
        title: "About Cyphr",
        content: (
            <div className="text-sm sm:text-base text-[#A0A4AE] p-4 space-y-3">
                <p>
                    Cyphr is the parent company of Webutation and a pioneer in OSINT-driven intelligence solutions. We blend investigative expertise, forensic intelligence, and cutting-edge technology to uncover truth, safeguard organizations, and drive meaningful impact.
                </p>
                <p>
                    Our team works across industries—insurance, law, government, finance, and cybersecurity—delivering actionable intelligence that protects businesses, institutions, and society from hidden risks.
                </p>
            </div>
        ),
    });

    return sections;
};
export default function OpportunityPage({ params }: any) {
    const id = Number(params.id);
    const opportunity = opportunities.find((job) => job.id === id);
 
    if (!opportunity) return notFound();

    // Generate sections dynamically based on opportunity
    const sections = getSections(opportunity);
 
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

            {/* Metadata */}
            <div className="mb-6 space-y-2">
                <div className="flex flex-wrap gap-4 text-sm sm:text-base">
                    <span className="text-[#167BFF] font-semibold">{opportunity.type}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-[#F1F1F1]">{opportunity.location}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-[#F1F1F1]">{opportunity.commitment}</span>
                </div>
                <p className="text-sm sm:text-base">
                    <span className="text-gray-400">Contact:</span>{" "}
                    <a href={`mailto:${opportunity.email}`} className="text-[#167BFF] hover:underline">
                        {opportunity.email}
                    </a>
                </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mt-6 mb-12">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full">
                    <a
                        href={`mailto:${opportunity.email}?subject=Application for ${opportunity.title}`}
                        className="w-full sm:w-auto min-w-[160px] text-center text-sm custom-button with-shadow bg-[#1057B5]"
                    >
                        Apply for this job
                    </a>
                    <button
                        onClick={() => {
                            if (navigator.share) {
                                navigator.share({
                                    title: opportunity.title,
                                    text: opportunity.description,
                                    url: window.location.href
                                });
                            }
                        }}
                        className="hidden lg:block w-full sm:w-fit custom-button with-border bg-transparent"
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
 
 