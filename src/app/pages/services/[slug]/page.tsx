import ContactSection from "@/app/Components/common/Getintouch";
import CorePrincipals from "@/app/Components/services/CorePrincipals";
import ServiceBlurCard from "@/app/Components/services/SeviceBlurCard";
import { TopBanner } from "@/app/Components/services/TopBanner";
import { WhyConsulting } from "@/app/Components/services/WhyConsulting";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

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
          "Strategic intelligence consulting for cyber resilience, compliance, and risk. Partner with Cyphr's experts to strengthen your defense posture.",
        images: [
          {
            url: "https://cyphr.io/assets/og-consulting.jpg",
            width: 1200,
            height: 630,
            alt: "Cyphr Consulting & Advisory",
          },
        ],
        url: "https://cyphr.io/consulting-advisory",
        type: "website",
        siteName: "Cyphr",
      },
      twitter: {
        card: "summary_large_image",
        title: "Cyber Intelligence Consulting & Advisory | Cyphr",
        description:
          "Expert advisory that transforms data, governance, and strategic intelligence into lasting protection.",
        images: ["https://cyphr.io/assets/og-consulting.jpg"],
      },
      alternates: {
        canonical: "https://cypher.txogavideo.in/consulting",
      },
      robots: {
        index: true,
        follow: true,
      },
    },

    "social-intel": {
      title:
        "Social Media Intelligence | OSINT & Digital Threat Detection | Cyphr",
      description:
        "Transform real‑time digital chatter into actionable intelligence. Cyphr’s Social Media Intelligence detects fraud, influence ops, and cyber threats before they escalate.",
      openGraph: {
        title:
          "Social Media Intelligence | OSINT & Digital Threat Detection | Cyphr",
        description:
          "Turn digital noise into actionable intelligence. Cyphr's Social Media Intelligence monitors social platforms to detect cyber, fraud, and influence threats early.",
        images: [
          {
            url: "https://cyphr.io/assets/og-social-intel.jpg",
            width: 1200,
            height: 630,
            alt: "Cyphr Social Media Intelligence",
          },
        ],
        url: "https://cyphr.io/social-media-intelligence",
        type: "website",
        siteName: "Cyphr",
      },
      twitter: {
        card: "summary_large_image",
        title: "Social Media Intelligence | Cyphr",
        description:
          "Detect and disrupt digital threats with real-time Social Media Intelligence powered by Cyphr.",
        images: ["https://cyphr.io/assets/og-social-intel.jpg"],
      },
      alternates: {
        canonical: "https://cypher.txogavideo.in/social-intel",
      },
      robots: {
        index: true,
        follow: true,
      },
    },

    geospatial: {
      title:
        "Geospatial & Cellular Forensics | Location-Based Intelligence | Cyphr",
      description:
        "Cyphr fuses geospatial, telecom, and satellite data to reconstruct movements, uncover fraud, and deliver legally defensible intelligence in complex investigations.",
      openGraph: {
        title:
          "Geospatial & Cellular Forensics | Location-Based Intelligence | Cyphr",
        description:
          "Map movements, reconstruct timelines, and uncover truth with Cyphr's geospatial and cellular forensics — proven intelligence with legal integrity.",
        images: [
          {
            url: "https://cyphr.io/assets/og-geospatial.jpg",
            width: 1200,
            height: 630,
            alt: "Cyphr Geospatial & Cellular Forensics",
          },
        ],
        url: "https://cyphr.io/geospatial-cellular-forensics",
        type: "website",
        siteName: "Cyphr",
      },
      twitter: {
        card: "summary_large_image",
        title: "Geospatial & Cellular Forensics | Cyphr",
        description:
          "Legally defensible geospatial and cellular intelligence for investigations, fraud, and security operations.",
        images: ["https://cyphr.io/assets/og-geospatial.jpg"],
      },
      alternates: {
        canonical: "https://cypher.txogavideo.in/geospatial",
      },
      robots: {
        index: true,
        follow: true,
      },
    },

    "brand-defense": {
      title:
        "Brand Defense & Reputation Intelligence | OSINT & Threat Monitoring | Cyphr",
      description:
        "Protect your brand from digital attacks. Cyphr’s Brand Defense identifies disinformation, impersonation, and fraud threats fast—before trust and assets are lost.",
      openGraph: {
        title:
          "Brand Defense & Reputation Intelligence | OSINT & Threat Monitoring | Cyphr",
        description:
          "Defend your brand before it's under attack. Cyphr monitors and neutralizes disinformation, impersonation, and digital sabotage across global networks.",
        images: [
          {
            url: "https://cyphr.io/assets/og-brand-defense.jpg",
            width: 1200,
            height: 630,
            alt: "Cyphr Brand Defense & Reputation Intelligence",
          },
        ],
        url: "https://cyphr.io/brand-defense",
        type: "website",
        siteName: "Cyphr",
      },
      twitter: {
        card: "summary_large_image",
        title: "Brand Defense & Reputation Intelligence | Cyphr",
        description:
          "Protect your reputation with Cyphr's advanced OSINT monitoring and rapid response to digital threats.",
        images: ["https://cyphr.io/assets/og-brand-defense.jpg"],
      },
      alternates: {
        canonical: "https://cypher.txogavideo.in/brand-defense",
      },
      robots: {
        index: true,
        follow: true,
      },
    },
  };

  return {
    metadataBase: new URL("https://cyphr.io"),
    ...(metadataMap[slug] || metadataMap["consult"]),
  };
}

/* ---------------- PAGE CONTENT ---------------- */

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
  },

  socialIntelligence: {
    topBanner: {
      heading: {
        id: 1,
        text: "Take a decisive advantage",
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
  },

  geospatial: {
    topBanner: {
      heading: {
        id: 1,
        text: "Any person, any group, anywhere, any time: Game Over…",
      },
      description: {
        id: 2,
        list: [
          "Leverage ethically sourced cellular device data to offer a new competitive advantage to your digital investigative needs",
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
  },

  brandDefense: {
    topBanner: {
      heading: {
        id: 1,
        text: "Defend Your Brand Before It's Under Attack",
      },
      description: {
        id: 2,
        list: [
          "Monitor and neutralize disinformation, impersonation, and digital sabotage across global networks",
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
  },
};

export default async function ServicesPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const switchContent = () => {
    switch (slug) {
      case "consult":
        return serviceData.consult.topBanner;
      case "geospatial":
        return serviceData.geospatial.topBanner;
      case "social-intel":
        return serviceData.socialIntelligence.topBanner;
      case "brand-defense":
        return serviceData.brandDefense.topBanner;
      default:
        return serviceData.consult.topBanner;
    }
  };

  return (
    <div className="font-sans overflow-hidden relative">
      <TopBanner content={switchContent()} />
      <WhyConsulting />
      <div className="container">
        <CorePrincipals />
      </div>
      <ServiceBlurCard />
      <ContactSection />
    </div>
  );
}
