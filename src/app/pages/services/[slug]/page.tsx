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
        "Strategic intelligence consulting for cyber resilience, compliance, and risk. Partner with Cyphr's experts to strengthen your defense posture.",
      openGraph: {
        title:
          "Cyber Intelligence Consulting & Advisory | Strategic OSINT Experts | Cyphr",
        description:
          "Strategic intelligence consulting for cyber resilience, compliance, and risk.",
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
    },
    // ... rest unchanged
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
          // "Leverage advanced intelligence techniques and unique data sources to enhance security, prevent fraud, and inform critical decisions", 
          // "Take command of your own destiny – build robust risk management frameworks, optimize investigative processes, and achieve a decisive competitive edge in today's dynamic landscape",
          // "Unlock actionable insights and secure your future" 

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
    }
  },
  socialIntelligence: {
    topBanner: {
      heading: {
        id: 1,
        text: "Take a decisive advantage ",
      },
      description: {
        id: 2,
        list: [
          "Turn social media intelligence into a powerful tool for investigations, risk assessment, and litigation support",

          // Transform the chaotic world of online data into actionable and legally defensible intelligence 

          // Present comprehensive, courtroom-ready reports 

          // Provide clear and compelling narratives 
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
          "Leverage ethically sourced cellular device data to offer a new competitive advantage to your digital investigative needs"

          // Provide unparalleled insights into location-based intelligence & forensics 

          // Utilize advanced techniques to extract and analyze location data points, movement patterns, and network connections from mobile devices globally 

          // Deliver actionable geospatial intelligence, transforming raw data into a clear and legally defensible understanding of individual or group movements for your company 
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
  }
};

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const switchContent = () => {
    switch (slug) {
      case 'consult':
        return serviceData.consult.topBanner;

      case 'geospatial':
        return serviceData.geospatial.topBanner;

      case 'social-intel':
        return serviceData.socialIntelligence.topBanner;
      default:
        return serviceData.consult.topBanner;
    }
  }
  return (
    <div className="font-sans overflow-hidden relative">
      {/* <p>{params!=null && slug}</p> */}
      <TopBanner content={switchContent()} />
      <WhyConsulting />
      <div className="container">
        <CorePrincipals />
      </div>
      <VideoSection videoName="Socialmedia" />
      <ServiceBlurCard />
      <ContactSection />

    </div>
  );
}
