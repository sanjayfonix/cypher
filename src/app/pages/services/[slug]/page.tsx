import BlurCard from "@/app/Components/home/BlurCard";
import CorePrincipals from "@/app/Components/services/CorePrincipals";
import ServiceBlurCard from "@/app/Components/services/SeviceBlurCard";
import { TopBanner } from "@/app/Components/services/TopBanner";
import { WhyConsulting } from "@/app/Components/services/WhyConsulting";

export default function ServicesPage() {
  return (
    <div className="font-sans bg-black px-7 py-5">
    <TopBanner/>
    <WhyConsulting/>
    <CorePrincipals/>
    <ServiceBlurCard/>
    </div>
  );
}