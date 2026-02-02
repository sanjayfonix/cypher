import ContactSection from "@/app/Components/common/Getintouch";
import CorePrincipals from "@/app/Components/services/CorePrincipals";
import ServiceBlurCard from "@/app/Components/services/SeviceBlurCard";
import { TopBanner } from "@/app/Components/services/TopBanner";
import { WhyConsulting } from "@/app/Components/services/WhyConsulting";
import { VideoSection } from "@/app/Components/services/VideoSection";
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
    consult: {
      title:
        "Cyber Intelligence Consulting & Advisory | Strategic OSINT Experts | Cyphr",
      description:
        "Empower decisions with expert intelligence strategy. Cyphr’s Consulting & Advisory services strengthen cyber resilience, compliance, and operational security at scale.",
      openGraph: {
        title:
          "Cyber Intelligence Consulting & Advisory | Strategic OSINT Experts | Cyphr",
        description:
          "Strategic intelligence consulting for cyber resilience, compliance, and risk.",
        images: [
          {
            url: `/services1.png`,
            width: 1200,
            height: 630,
            alt: "Cyphr Consulting & Advisory",
          },
        ],
        url: "https://cypher.txogavideo.in/consulting-advisory",
        type: "website",
        siteName: "Cyphr",
      },
    },
    "social-intel": {
      title: "Social Media Intelligence | OSINT & Digital Investigation | Cyphr",
      description: "Transform real‑time digital chatter into actionable intelligence. Cyphr’s Social Media Intelligence detects fraud, influence ops, and cyber threats before they escalate.",
      openGraph: {
        title: "Social Media Intelligence | OSINT & Digital Investigation | Cyphr",
        description: "Transform real-time digital chatter into actionable intelligence. Cyphr’s Social Media Intelligence detects fraud, influence ops, and cyber threats before they escalate.",
        images: [
          {
            url: `/services2.png`,
            width: 1200,
            height: 630,
            alt: "Cyphr Social Media Intelligence",
          },
        ],
        url: "https://cypher.txogavideo.in/social-intelligence",
        type: "website",
        siteName: "Cyphr",
      },
    },
    geospatial: {
      title: "Geospatial & Cellular Forensics | Location Intelligence | Cyphr",
      description: "Precision geospatial intelligence and cellular forensics for investigations, fraud detection, and threat network mapping.",
      openGraph: {
        title: "Geospatial & Cellular Forensics | Location Intelligence | Cyphr",
        description: "Cyphr fuses geospatial, telecom, and satellite data to reconstruct movements, uncover fraud, and deliver legally defensible intelligence in complex investigations.",
        images: [
          {
            url: "/services3.png",
            width: 1200,
            height: 630,
            alt: "Cyphr Geospatial Intelligence",
          },
        ],
        url: "https://cypher.txogavideo.in/geospatial-forensics",
        type: "website",
        siteName: "Cyphr",
      },
    },
    "brand-defence": {
      title: "Brand Defense & Reputation Protection | Digital Threat Intelligence | Cyphr",
      description: "Protect your brand with real-time threat intelligence, counter-disinformation operations, and comprehensive digital reputation management.",
      openGraph: {
        title: "Brand Defense & Reputation Protection | Digital Threat Intelligence | Cyphr",
        description: "Protect your brand from digital attacks. Cyphr’s Brand Defense identifies disinformation, impersonation, and fraud threats fast—before trust and assets are lost.",
        images: [
          {
            url: "/services1.png",
            width: 1200,
            height: 630,
            alt: "Cyphr Brand Defense",
          },
        ],
        url: "https://cypher.txogavideo.in/brand-defence",
        type: "website",
        siteName: "Cyphr",
      },
    },
  };

  return {
    metadataBase: new URL("https://cyphr.io"),
    ...(metadataMap[slug] || metadataMap["consult"]),
  };
}

const serviceData = {
  consult: {
    topBanner: {
      heading: {
        id: 1,
        text: "Transform Complex Data Into Your Strategic Advantage",
      },
      description: {
        id: 2,
        list: [
          "Navigate digital risks and uncover hidden opportunities to protect yourself, your company, and your employees",
        ],
      },
      primaryButton: {
        id: 3,
        text: "Start Investigating",
      },
      secondaryButton: {
        id: 4,
        text: "Book a Consultation",
      },
    },
    whySection: {
      title: "Why Consulting & Advisory?",
      items: [
        {
          text: "Leverage advanced intelligence techniques and unique data sources to enhance security, prevent fraud, and inform critical decisions",
          img: "/services1.png",
        },
        {
          text: "Unlock actionable insights and secure your future",
          img: "/services3.png",
        },
        {
          text: "Take command of your own destiny – build robust risk management frameworks, optimize investigative processes, and achieve a decisive competitive edge in today's dynamic landscape",
          img: "/services2.png",
        },
      ],
    },
    corePrincipals: {
      title: "Core Pillars of Consulting & Advisory",
      customSeminars: {
        title: "Custom Seminars",
        description: "Tailored seminars to equip your team with the skills to detect and mitigate intelligence threats. We offer practical tools and roadmaps to help you stay ahead.",
        benefits: [
          "Fraud case studies and prevention strategies",
          "Practical checklists and roadmaps",
          "Insights into evolving intelligence threats",
          "Sector-specific fraud use cases",
        ],
      },
      investigativeServices: {
        title: "Investigative Services Support",
        description: "Our team extends your investigative capabilities with investigator-led support. We provide comprehensive intelligence services to:",
        benefits: [
          "Uncover hidden connections and threats",
          "Validate evidence with digital forensics",
          "Deliver courtroom-ready reports",
          "Support or augment your existing investigations",
        ],
      },
      continuingEducation: {
        title: "Continuing Education",
        description: "We offer accredited CE, CLE courses to ensure professionals are always prepared for emerging fraud schemes and digital investigations.",
        benefits: [
          "Stay ahead of evolving cyber and fraud tactics",
          "Enhance professional skills and credentials",
          "Learn through real-world case studies",
          "Meet compliance and accreditation requirements",
        ],
      },
    },
    blurCard: {
      title: "Take Command of Your Future.",
      description: "With Cyphr's Consulting & Advisory services, you'll gain the knowledge, tools, and strategies to act decisively in an unpredictable world.",
      buttonText: "Book a Consultation",
    },
  },
  socialIntelligence: {
    topBanner: {
      heading: {
        id: 1,
        text: "Turn Social Chaos Into Strategic Clarity",
      },
      description: {
        id: 2,
        list: [
          "Turn social media intelligence into a powerful tool for investigations, risk assessment, and litigation support",
        ],
      },
      primaryButton: {
        id: 3,
        text: "Start Investigating",
      },
      secondaryButton: {
        id: 4,
        text: "Book a Consultation",
      },
    },
    whySection: {
      title: "Why Social Media Intelligence?",
      items: [
        {
          text: "We don't just scrape data — we decode human behavior at scale",
          img: "/services1.png",
        },
        {
          text: "Extract threats, fraud patterns, influence operations, and high-value signals hiding inside millions of digital conversations",
          img: "/services3.png",
        },
        {
          text: "Deliver legally-defensible, context-rich insight drawn from open and restricted sources with precision tradecraft",
          img: "/services2.png",
        },
      ],
    },
    corePrincipals: {
      title: "Core Benefits of Social Media Intelligence",
      customSeminars: {
        title: "Early Threat Detection",
        description: "Cyphr turns the chaos of global social platforms into clarity and action. Our analysts and proprietary workflows extract actionable intelligence from vast digital landscapes.",
        benefits: [
          "Early detection of insider threats and fraud",
          "Identify coordinated digital campaigns",
          "Monitor emerging threat patterns",
          "Track influence operations in real-time",
        ],
      },
      investigativeServices: {
        title: "Real-Time Intelligence",
        description: "Whether you're protecting a brand, an election, or a national interest, our Social Media Intelligence solutions deliver precise insights:",
        benefits: [
          "Real-time visibility into narratives and sentiment shifts",
          "Track emerging risks as they develop",
          "Monitor brand mentions and threats",
          "Analyze global conversation patterns",
        ],
      },
      continuingEducation: {
        title: "Actionable Insights",
        description: "Our intelligence feeds are tailored for government agencies, insurers, and enterprises to inform critical decisions.",
        benefits: [
          "Actionable insight for legal decisions",
          "Support operational and security strategies",
          "Courtroom-ready intelligence reports",
          "Customized intelligence feeds for your needs",
        ],
      },
    },
    blurCard: {
      title: "Decode the Digital World",
      description: "Transform the chaotic world of online data into actionable and legally defensible intelligence that informs your most critical decisions.",
      buttonText: "Get Started",
    },
  },
  geospatial: {
    topBanner: {
      heading: {
        id: 1,
        text: "Where digital meets physical, Cyphr delivers truth.",
      },
      description: {
        id: 2,
        list: [
          "Our geospatial and cellular forensics capabilities reconstruct movement, communication, and intent from complex data ecosystems",
        ],
      },
      primaryButton: {
        id: 3,
        text: "Start Investigating",
      },
      secondaryButton: {
        id: 4,
        text: "Book a Consultation",
      },
    },
    whySection: {
      title: "Why Geospatial & Cellular Forensics?",
      items: [
        {
          text: "Provide unparalleled insights into location-based intelligence & forensics",
          img: "/services1.png",
        },
        {
          text: "Utilize advanced techniques to extract and analyze location data points, movement patterns, and network connections from mobile devices globally",
          img: "/services3.png",
        },
        {
          text: "Deliver actionable geospatial intelligence, transforming raw data into a clear and legally defensible understanding of individual or group movements",
          img: "/services2.png",
        },
      ],
    },
    corePrincipals: {
      title: "Core Capabilities of Geospatial Intelligence",
      customSeminars: {
        title: "Movement Reconstruction",
        description: "Where digital meets physical, Cyphr delivers truth. Our geospatial capabilities reconstruct movement, communication, and intent from complex data ecosystems.",
        benefits: [
          "Reconstruct timelines and movements with verified cellular intelligence",
          "Track movement patterns across time and space",
          "Validate alibis with precision data",
          "Map individual and group trajectories",
        ],
      },
      investigativeServices: {
        title: "Network Mapping",
        description: "Turn raw signals into actionable intelligence that stands up to legal and technical scrutiny for law enforcement and corporate investigations.",
        benefits: [
          "Map threat actor networks and connections",
          "Identify cross-border patterns and operations",
          "Trace insurance fraud operations",
          "Support legal proceedings with verified data",
        ],
      },
      continuingEducation: {
        title: "Multi-Source Intelligence",
        description: "Our fusion of geolocation analytics and mobile forensics produces precision-level situational awareness you can trust.",
        benefits: [
          "Integrate satellite, WiFi, and tower data",
          "Multidimensional clarity from diverse sources",
          "Comprehensive location intelligence",
          "Verified metadata intelligence for investigations",
        ],
      },
    },
    blurCard: {
      title: "Precision Intelligence You Can Trust",
      description: "From mapping threat networks to validating alibis, our geospatial and cellular forensics capabilities deliver truth with technical and legal precision.",
      buttonText: "Learn More",
    },
  },
  brandDefense: {
    topBanner: {
      heading: {
        id: 1,
        text: "Your Brand is Both an Asset and a Target",
      },
      description: {
        id: 2,
        list: [
          "Protect your digital reputation before threats escalate into financial, reputational, or legal crises",
        ],
      },
      primaryButton: {
        id: 3,
        text: "Start Investigating",
      },
      secondaryButton: {
        id: 4,
        text: "Book a Consultation",
      },
    },
    whySection: {
      title: "Why Brand Defense?",
      items: [
        {
          text: "Combine OSINT, threat intelligence, and sentiment analysis to detect digital threats before they escalate",
          img: "/services1.png",
        },
        {
          text: "Build real-time visibility and mitigation plans that shield your brand where it's most vulnerable — online",
          img: "/services3.png",
        },
        {
          text: "Dismantle and deter threats from disinformation, counterfeit products, executive impersonation, or coordinated smear campaigns",
          img: "/services2.png",
        },
      ],
    },
    corePrincipals: {
      title: "Core Pillars of Brand Defense",
      customSeminars: {
        title: "Continuous Monitoring",
        description: "Cyphr's Brand Defense solutions provide 24/7 protection across social and dark web ecosystems to safeguard your reputation.",
        benefits: [
          "Continuous brand and executive protection",
          "Monitor social media and dark web threats",
          "Track brand mentions across digital platforms",
          "Identify impersonation attempts in real-time",
        ],
      },
      investigativeServices: {
        title: "Threat Response",
        description: "Early warning and rapid response for reputational manipulation, digital harassment, and coordinated attacks on your brand.",
        benefits: [
          "Early warning systems for emerging threats",
          "Rapid response to digital harassment",
          "Coordinate counter-disinformation operations",
          "Restore narrative control effectively",
        ],
      },
      continuingEducation: {
        title: "Legal & Compliance Support",
        description: "Data-backed intelligence that supports litigation, compliance, and stakeholder trust with courtroom-ready documentation.",
        benefits: [
          "Support litigation with verified intelligence",
          "Ensure compliance with regulations",
          "Build stakeholder trust with transparency",
          "Provide legally defensible documentation",
        ],
      },
    },
    blurCard: {
      title: "Shield Your Brand Online",
      description: "Detect, dismantle, and deter digital threats with real-time intelligence and proactive defense strategies that protect what matters most.",
      buttonText: "Protect Your Brand",
    },
  },
};

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const getCurrentServiceData = () => {
    switch (slug) {
      case 'consult':
        return serviceData.consult;
      case 'geospatial':
        return serviceData.geospatial;
      case 'social-intel':
        return serviceData.socialIntelligence;
      case 'brand-defence':
        return serviceData.brandDefense;
      default:
        return serviceData.consult;
    }
  }

  const currentData = getCurrentServiceData();

  return (
    <div className="font-sans overflow-hidden relative">
      <TopBanner content={currentData.topBanner} />
      <WhyConsulting data={currentData.whySection} />
      {/* {slug === 'social-intel' && <VideoSection videoName="Socialmedia" />} */}
      <div className="container">
        <CorePrincipals data={currentData.corePrincipals} />
      </div>
      <VideoSection videoName="Socialmedia" />

      <ServiceBlurCard data={currentData.blurCard} />
      <ContactSection />
    </div>
  );
}
