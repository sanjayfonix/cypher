import ContactSection from "@/app/Components/common/Getintouch";
import AnimatedPath from "@/app/Components/industries/AnimatedBanner";
import IndustriesBlurCard from "@/app/Components/industries/IndustriesBlurCard";
import { AnimationLoop, IndustryBanner } from "@/app/Components/industries/IndustryBanner";
import KeySegments from "@/app/Components/industries/KeySegments";
import { WhyIndustriesCarrier } from "@/app/Components/industries/WhyInsurance";



export default function IndustriesPage() {
  return (
    <>
    
    <div className="font-sans bg-black container">
      <IndustryBanner />
       <AnimationLoop />
      <WhyIndustriesCarrier />
      <KeySegments />
      <IndustriesBlurCard />
      <div className="px-4"><ContactSection /></div>
    </div>
    </>
  );
}