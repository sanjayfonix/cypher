import AnimatedPath from "@/app/Components/industries/AnimatedBanner";
import IndustriesBlurCard from "@/app/Components/industries/IndustriesBlurCard";
import { IndustryBanner } from "@/app/Components/industries/IndustryBanner";
import KeySegments from "@/app/Components/industries/KeySegments";
import { WhyIndustriesCarrier } from "@/app/Components/industries/WhyInsurance";



export default function IndustriesPage() {
  return (
    <div className="font-sans bg-black">
 <IndustryBanner/>
  <WhyIndustriesCarrier/>
   <KeySegments/>
  <IndustriesBlurCard/>  

    </div>
  );
}