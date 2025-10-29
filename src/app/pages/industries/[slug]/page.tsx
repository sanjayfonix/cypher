import ContactSection from "@/app/Components/common/Getintouch";
import AnimatedPath from "@/app/Components/industries/AnimatedBanner";
import IndustriesBlurCard from "@/app/Components/industries/IndustriesBlurCard";
import { AnimationLoop, IndustryBanner } from "@/app/Components/industries/IndustryBanner";
import KeySegments from "@/app/Components/industries/KeySegments";
import { WhyIndustriesCarrier } from "@/app/Components/industries/WhyInsurance";

const industryData = {
  insurance:{
    topBanner:{
  heading: {
    id: 1,
    text: "Leverage investigator-led approaches to deliver irrefutable evidence of fraudulent activity ",
  },
  description: {
    id: 2,
    list: [
      "We empower insurance carriers to deny claims, recover funds, and deter future fraud, resulting in significant cost savings and improved profitability ",
      
      
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
}
  },
  employer:{
    topBanner:{
  heading: {
    id: 1,
    text: "Employers would choose Webutation for its expertise in transforming vast amounts of public deep web and social media data into comprehensive, actionable intelligence that supports better decision-making, fraud detection, and risk mitigation. Webutation’s social media intelligence capabilities provide employers a chance to proactively manage risk and identify other potential threats",
  },
  description: {
    id: 2,
    list: [
     "Proactively manage risk and reduce insurance costs by offering direct access to cutting-edge digital intelligence solutions", 

"Conduct comprehensive background checks, monitor for potential threats (including workplace violence and insider threats), and investigate suspicious claims", 

"Gain actionable insights to create a safer, more productive work environment, reduce fraudulent claims, and ultimately lower your insurance premiums"

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
    text: "Talk to an Expert",
  },
},
  },
  law:{
      topBanner:{
  heading: {
    id: 1,
    text: "Be the envy of your courtroom… ",
  },
  description: {
    id: 2,
    list: [
   "Build stronger cases",

"Better protect client interests", 

"Deliver superior outcomes" 

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
    text: "Talk to an Expert",
  },
},
  },
  academia:{
      topBanner:{
  heading: {
    id: 1,
   
    text: "Identify at-risk students, monitor potential threats, and intervene before tragedy strikes",
  },
  description: {
    id: 2,
    list: [
    "Establish a more proactive solution to combat the growing threats of social media-related harm, including school violence, cyberbullying, and exposure to inappropriate content" 
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
  }
};

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
   const { slug } = await params; 

  const switchContent=()=>{
   switch(slug){
    case 'insurance':
      return industryData.insurance.topBanner;
     
    case 'law':
      return industryData.law.topBanner;
    
    case 'employer':
      return industryData.employer.topBanner;
    case 'academia':
      return industryData.academia.topBanner;
      default:
        return industryData.insurance.topBanner;
   }
  }
  return (
    <>
    
    <div className="font-sans bg-black container">
      <IndustryBanner content={switchContent()}/>
       <AnimationLoop />
      <WhyIndustriesCarrier />
      <KeySegments />
      <IndustriesBlurCard />
      <div className="px-4"><ContactSection /></div>
    </div>
    </>
  );
}