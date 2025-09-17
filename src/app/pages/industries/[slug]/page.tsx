import ContactSection from "@/app/Components/common/Getintouch";
import AnimatedPath from "@/app/Components/industries/AnimatedBanner";
import IndustriesBlurCard from "@/app/Components/industries/IndustriesBlurCard";
import { IndustryBanner } from "@/app/Components/industries/IndustryBanner";
import KeySegments from "@/app/Components/industries/KeySegments";
import { WhyIndustriesCarrier } from "@/app/Components/industries/WhyInsurance";



export default function IndustriesPage() {
  return (
    <div className="font-sans bg-black container">
      <IndustryBanner />
      <div className="absolute z-0 top-[34%] w-[calc(100%)]">
          <AnimatedPath pathD="M1487.43 0.994873H1268.35C1258.07 0.994873 1248.03 4.16653 1239.62 10.0775L977.182 194.384C968.766 200.295 958.731 203.466 948.446 203.466H0.018569"/>
          <AnimatedPath pathD="M1665 1.00037C1221.36 1.00037 -0.000244141 1.00037 -0.000244141 1.00037" />
          <AnimatedPath pathD="M1487.43 162.995H1320.23C1310.68 162.995 1301.33 160.26 1293.28 155.113L1063.97 8.40564C1055.93 3.25861 1046.58 0.523331 1037.03 0.523331H375.182C362.734 0.523331 350.735 5.16603 341.529 13.5437L282.235 67.503C273.029 75.8806 261.03 80.5233 248.582 80.5233H0.0185547"/>
          {/* ANIMATED PATHS */}
         </div>
      <WhyIndustriesCarrier />
      <KeySegments />
      <IndustriesBlurCard />
      <ContactSection />
    </div>
  );
}