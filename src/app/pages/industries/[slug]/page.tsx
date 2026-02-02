import ContactSection from "@/app/Components/common/Getintouch";
import AnimatedPath from "@/app/Components/industries/AnimatedBanner";
import IndustriesBlurCard from "@/app/Components/industries/IndustriesBlurCard";
import { AnimationLoop, IndustryBanner } from "@/app/Components/industries/IndustryBanner";
import KeySegments from "@/app/Components/industries/KeySegments";
import { WhyIndustriesCarrier } from "@/app/Components/industries/WhyInsurance";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;

  const metadataMap: Record<string, Metadata> = {
    insurance: {
      title:
        "Insurance Fraud Detection & Risk Intelligence | OSINT Solutions | Cyphr",
      description:
        "Detect fraudulent claims early, build accurate risk profiles, and reduce costs with Cyphr's investigator-led OSINT intelligence for insurance carriers, TPAs, brokers, and reinsurers.",
      openGraph: {
        title:
          "Insurance Fraud Detection & Risk Intelligence | OSINT Solutions | Cyphr",
        description:
          "Empower insurance carriers to deny fraudulent claims, recover funds, and improve profitability with irrefutable digital evidence and actionable intelligence.",
        images: [
          {
            url: `/industries1.png`,
            width: 1200,
            height: 630,
            alt: "Cyphr Insurance Intelligence Solutions",
          },
        ],
        url: "https://cyphr.io/pages/industries/insurance",
        type: "website",
        siteName: "Cyphr",
      },
    },
    employer: {
      title:
        "Employee Background Screening & Workplace Safety | OSINT for Employers | Cyphr",
      description:
        "Safeguard your workforce with comprehensive OSINT intelligence. Detect insider threats, conduct ethical background screening, and protect your organization from digital risks.",
      openGraph: {
        title:
          "Employee Background Screening & Workplace Safety | OSINT for Employers | Cyphr",
        description:
          "Proactively detect fraud, insider threats, and online risks. Cyphr helps employers vet candidates, monitor threats, and maintain compliance while protecting workplace safety.",
        images: [
          {
            url: `/industries2.png`,
            width: 1200,
            height: 630,
            alt: "Cyphr Employer Intelligence Solutions",
          },
        ],
        url: "https://cyphr.io/pages/industries/employer",
        type: "website",
        siteName: "Cyphr",
      },
    },
    law: {
      title:
        "Legal Intelligence & Digital Evidence | OSINT for Law Firms | Cyphr",
      description:
        "Accelerate case preparation with court-admissible OSINT. Uncover hidden evidence, conduct due diligence, and build winning litigation strategies with defensible digital intelligence.",
      openGraph: {
        title:
          "Legal Intelligence & Digital Evidence | OSINT for Law Firms | Cyphr",
        description:
          "Law firms trust Cyphr for rapid discovery, asset tracing, and witness verification. Strengthen depositions and courtroom presentations with irrefutable digital evidence.",
        images: [
          {
            url: "/industries1.png",
            width: 1200,
            height: 630,
            alt: "Cyphr Legal Intelligence Solutions",
          },
        ],
        url: "https://cyphr.io/pages/industries/law",
        type: "website",
        siteName: "Cyphr",
      },
    },
    academia: {
      title:
        "Academic Research Integrity & Campus Security | OSINT for Universities | Cyphr",
      description:
        "Defend academic integrity and campus safety with ethical OSINT. Combat plagiarism, detect threats, counter misinformation, and protect institutional reputation.",
      openGraph: {
        title:
          "Academic Research Integrity & Campus Security | OSINT for Universities | Cyphr",
        description:
          "Academia trusts Cyphr to verify research, ensure campus security, and combat misinformation with reliable intelligence that upholds academic freedom and privacy.",
        images: [
          {
            url: "/industries2.png",
            width: 1200,
            height: 630,
            alt: "Cyphr Academic Intelligence Solutions",
          },
        ],
        url: "https://cyphr.io/pages/industries/academia",
        type: "website",
        siteName: "Cyphr",
      },
    },
  };

  return {
    metadataBase: new URL("https://cyphr.io"),
    ...(metadataMap[slug] || metadataMap["insurance"]),
  };
}

const industryData = {
  insurance: {
    topBanner: {
      heading: {
        id: 1,
        text: "Leverage investigator-led approaches to deliver irrefutable evidence of fraudulent activity",
      },
      description: {
        id: 2,
        list: [
          "We empower insurance carriers to deny claims, recover funds, and deter future fraud, resulting in significant cost savings and improved profitability",
        ],
      },
      primaryButton: {
        id: 3,
        text: "Start Investigating",
      },
      secondaryButton: {
        id: 4,
        text: "Talk to an Expert",
      },
    },
    whySection: {
      title: "Why Insurance Carriers Choose Cyphr",
      problemTitle: "Problem",
      problemDescription: "Managing risks and detecting fraud can be complex and time-sensitive. With inconsistent claimant statements and rising fraudulent activity, insurance carriers face challenges in making accurate assessments while protecting their bottom line.",
      benefits: [
        {
          title: "Detect Fraud Early",
          description: "Identify fraudulent claims quickly by analyzing digital footprints and claimant data, reducing risk before it impacts your business.",
        },
        {
          title: "Build Better Risk Profiles",
          description: "Create accurate risk profiles and assess client risks to make better underwriting decisions and improve risk management.",
        },
        {
          title: "Reduce Costs and Improve Efficiency",
          description: "Minimize payouts and improve operational efficiency by detecting fraud and streamlining the claims process.",
        },
        {
          title: "Ensure Legal Compliance",
          description: "Ensure fraud detection and investigations are legally defensible, providing courtroom-ready reports and compliance.",
        },
      ],
    },
    keySegments: {
      title: "Key Segments We Support",
      segments: [
        {
          title: "Third-Party Administrators (TPAs)",
          subtitle: "We help TPAs:",
          description: "TPAs face pressure to process claims quickly while minimizing fraud. Cyphr strengthens their value proposition with actionable, legally defensible intelligence.",
          benefits: [
            "Aggressively combat fraudulent claims and optimize claims management through actionable, legally defensible intelligence",
            "Uncover inconsistencies between claimants' statements and their digital footprint, providing irrefutable evidence of fraudulent activity that traditional methods often miss",
            "Deny or challenge questionable claims, minimize payouts, reduce operational costs, and improve overall claims processing efficiency",
            "Enhancing their value proposition to insurance carriers and self-insured employers",
          ],
          buttonText: "Support Your TPA Team",
          image: "/industries1.png",
          imagePosition: "left",
        },
        {
          title: "Brokers & Reinsurers",
          subtitle: "With Cyphr, you can:",
          description: "For brokers and reinsurers, every decision carries financial exposure. Cyphr provides comprehensive risk profiles and due diligence support that enables smarter underwriting and portfolio management.",
          benefits: [
            "Offer a critical edge in risk assessment and due diligence through actionable, legally defensible intelligence",
            "Deliver a comprehensive risk profile of potential clients and investments",
            "Secure better terms for your clients by demonstrating reduced risk",
            "Enable reinsurance companies to make more informed decisions about underwriting and portfolio management",
            "Improve profit and reduce exposure to fraudulent claims",
          ],
          buttonText: "Request Risk Profiling",
          image: "/industries2.png",
          imagePosition: "right",
        },
      ],
    },
    blurCard: {
      title: "Strengthen Your Defenses. Protect Your Bottom Line.",
      description: "Cyphr gives insurance carriers the tools to stay ahead of fraud, reduce costs, and secure long-term profitability.",
      primaryButtonText: "Start Investigating",
      secondaryButtonText: "Explore Our Services",
    },
  },
  employer: {
    topBanner: {
      heading: {
        id: 1,
        text: "Employers Trust Cyphr to Safeguard Workforces in a Digital World",
      },
      description: {
        id: 2,
        list: [
          "Proactively detect various types of fraud, insider threats, conduct ethical background screening, and protect your organization from online risks that impact safety, productivity, and reputation",
          "In today's connected workplaces, employers face rising challenges from social media-fueled misconduct, insider threats, harassment, fraud, and reputational damage. Cyphr transforms public and social data into actionable, defensible intelligence, empowering HR, security, and leadership teams to vet candidates thoroughly, monitor for emerging risks, and respond swiftly to incidents while maintaining compliance and privacy standards",
        ],
      },
      primaryButton: {
        id: 3,
        text: "Start Investigating",
      },
      secondaryButton: {
        id: 4,
        text: "Talk to an Expert",
      },
    },
    whySection: {
      title: "Why Employers Choose Cyphr",
      problemTitle: "Problem",
      problemDescription: "Manual reviews of social profiles and public records are time-consuming, incomplete, and prone to bias, leading to missed threats, legal exposure, and higher turnover costs.",
      benefits: [
        {
          title: "Early Identification of Red Flags",
          description: "Early identification of red flags in candidate backgrounds, including hidden fraud, extremism, or harassment patterns via comprehensive OSINT analysis.",
        },
        {
          title: "Real-Time Threat Monitoring",
          description: "Real-time monitoring for insider threats, workplace violence indicators, or digital footprints that contradict reported behaviors.",
        },
        {
          title: "Reduced Risk of Incidents",
          description: "Reduced risk of costly incidents by uncovering inconsistencies between employee statements and online activity—providing irrefutable, court-ready evidence when needed.",
        },
        {
          title: "Streamlined Compliance",
          description: "Streamlined compliance with labor laws, data privacy regulations (e.g., GDPR/CCPA), and ethical guidelines through transparent, auditable intelligence processes. Enhanced workplace safety and culture by addressing online harassment or radicalization before escalation.",
        },
      ],
    },
    keySegments: {
      title: "Key Segments We Support",
      segments: [
        {
          title: "Corporate HR & Talent Acquisition Teams",
          subtitle: "We help HR leaders:",
          description: "We help HR leaders build safer, more efficient hiring processes with comprehensive intelligence.",
          benefits: [
            "Accelerate secure hiring with fast, accurate pre-employment intelligence that uncovers risks traditional checks miss",
            "Build defensible screening processes that reduce bias and support diversity goals",
            "Minimize exposure to negligent hiring claims with documented, verifiable insights",
            "Strengthen employee wellness programs by detecting early signs of distress or external threats",
          ],
          buttonText: "Support Your HR & TA Team",
          image: "/industries1.png",
          imagePosition: "left",
        },
        {
          title: "Corporate Security & Risk Management",
          subtitle: "We enable security teams to:",
          description: "We enable security teams to proactively identify and mitigate threats before they impact your organization.",
          benefits: [
            "Proactively map potential insider networks or external influences targeting your organization",
            "Respond to incidents with rapid, multi-source intelligence for investigations and mitigation",
            "Integrate OSINT into existing risk frameworks for ongoing vigilance without invasive monitoring",
          ],
          buttonText: "Request Risk Profiling",
          image: "/industries2.png",
          imagePosition: "right",
        },
      ],
    },
    blurCard: {
      title: "Strengthen Your Workforce. Protect Your Future.",
      description: "Cyphr equips employers with cutting-edge digital intelligence to foster safer, more resilient organizations, reducing liabilities, boosting trust, and driving long-term success.",
      primaryButtonText: "Start Protecting Your Team Today",
      secondaryButtonText: "Explore Our Services",
    },
  },
  law: {
    topBanner: {
      heading: {
        id: 1,
        text: "Law Firms Trust Cyphr to Uncover Truth in Complex Digital Landscapes",
      },
      description: {
        id: 2,
        list: [
          "Accelerate case preparation, strengthen due diligence, and build winning strategies with court-admissible OSINT intelligence that uncovers hidden evidence and counters misinformation",
          "Litigation, due diligence, and client representation demand speed, accuracy, and defensibility in an era of digital deception and vast online footprints. Cyphr delivers precise, ethically sourced intelligence to attorneys, paralegals, and investigators—revealing connections, assets, timelines, and contradictions that traditional discovery often overlooks",
        ],
      },
      primaryButton: {
        id: 3,
        text: "Start Investigating",
      },
      secondaryButton: {
        id: 4,
        text: "Talk to an Expert",
      },
    },
    whySection: {
      title: "Why Law Firms Choose Cyphr",
      problemTitle: "Problem",
      problemDescription: "Fragmented public data sources and manual searches waste billable hours and risk missing critical facts, exposing cases to surprises or weaker positions. In-house personnel are not equipped for expert searching outside of simple 'Googling'.",
      benefits: [
        {
          title: "Rapid Discovery",
          description: "Rapid discovery of witness backgrounds, social connections, and digital contradictions for stronger depositions and cross-examinations.",
        },
        {
          title: "Comprehensive Asset Tracing",
          description: "Comprehensive asset tracing, network mapping, and location verification to support fraud, IP, family, or commercial disputes.",
        },
        {
          title: "Early Detection of Threats",
          description: "Early detection of adversarial tactics like disinformation or fabricated alibis, with intelligence that holds up under scrutiny.",
        },
        {
          title: "Enhanced E-Discovery",
          description: "Enhanced e-discovery and investigative efficiency through automated, auditable OSINT collection compliant with ethical and bar rules. Defensible reports and visualizations that bolster motions, negotiations, and courtroom presentations.",
        },
      ],
    },
    keySegments: {
      title: "Key Segments We Support",
      segments: [
        {
          title: "Litigation & Trial Teams",
          subtitle: "We empower attorneys to:",
          description: "We empower attorneys to build compelling cases with irrefutable digital evidence.",
          benefits: [
            "Uncover irrefutable evidence from social, geospatial, and public records to build compelling narratives",
            "Validate or refute claims with timeline reconstructions and metadata analysis",
            "Counter opponent tactics like coordinated online attacks or false narratives",
          ],
          buttonText: "Support Your Legal Team",
          image: "/industries1.png",
          imagePosition: "left",
        },
        {
          title: "Corporate & Compliance Practices",
          subtitle: "We support firms in:",
          description: "We support firms in conducting thorough due diligence and providing strategic counsel.",
          benefits: [
            "Conducting thorough due diligence on clients, partners, or targets with risk-profiling intelligence",
            "Advising on regulatory matters with insights into fraud patterns or compliance gaps",
            "Providing litigation support that minimizes surprises and maximizes leverage",
          ],
          buttonText: "Request Compliance Profiling",
          image: "/industries2.png",
          imagePosition: "right",
        },
      ],
    },
    blurCard: {
      title: "Arm Your Practice with Unassailable Intelligence.",
      description: "Cyphr gives law firms the digital edge to win cases, protect clients, and elevate outcomes in an increasingly complex legal environment.",
      primaryButtonText: "Unlock Powerful Insights Now",
      secondaryButtonText: "Explore Our Services",
    },
  },
  academia: {
    topBanner: {
      heading: {
        id: 1,
        text: "Academia Trusts Cyphr to Defend Integrity and Safety in the Digital Era",
      },
      description: {
        id: 2,
        list: [
          "Safeguard research, ensure campus security, and combat misinformation with reliable OSINT intelligence that verifies facts and detects emerging threats",
          "Universities and research institutions navigate growing digital risks, from plagiarism and IP theft to campus radicalization, harassment, and disinformation campaigns that undermine credibility and safety. Cyphr provides ethical, precise intelligence to administrators, security teams, and researchers, enabling proactive protection while upholding academic freedom and privacy",
        ],
      },
      primaryButton: {
        id: 3,
        text: "Start Investigating",
      },
      secondaryButton: {
        id: 4,
        text: "Talk to an Expert",
      },
    },
    whySection: {
      title: "Why Academia Chooses Cyphr",
      problemTitle: "Problem",
      problemDescription: "Overwhelmed by scattered online information, institutions struggle to verify research, respond to threats, or maintain institutional trust—leading to reputational harm or safety gaps.",
      benefits: [
        {
          title: "Verification of Research",
          description: "Verification of research claims, sources, and collaborations through deep public data analysis to combat academic misconduct.",
        },
        {
          title: "Early Threat Detection",
          description: "Early threat detection for campus safety, including online indicators of violence, extremism, or harassment.",
        },
        {
          title: "Misinformation Mapping",
          description: "Mapping of misinformation networks targeting your institution, faculty, or students to restore narrative control.",
        },
        {
          title: "Enhanced Compliance",
          description: "Compliance with data protection laws and ethical standards via transparent, non-intrusive OSINT methods. Enhanced grant applications, partnerships, and alumni relations with risk-reduced intelligence.",
        },
      ],
    },
    keySegments: {
      title: "Key Segments We Support",
      segments: [
        {
          title: "Campus Security & Student Affairs",
          subtitle: "We assist teams in:",
          description: "We assist teams in maintaining safe, secure campus environments through proactive intelligence.",
          benefits: [
            "Monitoring for emerging threats like online radicalization or targeted harassment",
            "Investigating incidents with verifiable digital evidence for swift, fair resolution",
            "Building safer environments through proactive risk awareness without overreach",
          ],
          buttonText: "Support Your Campus",
          image: "/industries1.png",
          imagePosition: "left",
        },
        {
          title: "Research Integrity & Compliance Offices",
          subtitle: "We enable offices to:",
          description: "We enable offices to protect institutional reputation and maintain academic excellence.",
          benefits: [
            "Detect plagiarism, data fabrication, or undisclosed conflicts via OSINT cross-checks",
            "Support investigations into academic fraud with auditable, defensible findings",
            "Protect intellectual property and institutional reputation from online threats",
          ],
          buttonText: "Request Research Integrity",
          image: "/industries2.png",
          imagePosition: "right",
        },
      ],
    },
    blurCard: {
      title: "Fortify Knowledge. Preserve Trust.",
      description: "Cyphr empowers academia with modern intelligence tools to maintain scholarly excellence, ensure safety, and counter digital deception—safeguarding the future of education and discovery.",
      primaryButtonText: "Start Investigating",
      secondaryButtonText: "Explore Our Services",
    },
  },
};

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const getCurrentIndustryData = () => {
    switch (slug) {
      case 'insurance':
        return industryData.insurance;
      case 'law':
        return industryData.law;
      case 'employer':
        return industryData.employer;
      case 'academia':
        return industryData.academia;
      default:
        return industryData.insurance;
    }
  };

  const currentData = getCurrentIndustryData();

  return (
    <>
      <div className="font-sans bg-black container">
        <IndustryBanner content={currentData.topBanner} />
        <AnimationLoop />
        <WhyIndustriesCarrier data={currentData.whySection} />
        <KeySegments data={currentData.keySegments} />
        <IndustriesBlurCard data={currentData.blurCard} />
        {/* <div id='industry-contact-us' className="px-4 scroll-mt-22"><ContactSection /></div> */}
      </div>
    </>
  );
}