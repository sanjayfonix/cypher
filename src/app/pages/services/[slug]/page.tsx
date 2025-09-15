import BlurCard from "@/app/Components/home/BlurCard";
import CorePrincipals from "@/app/Components/services/CorePrincipals";
import CurvedPathAnimation from "@/app/Components/services/CurvedAnimation";
import ServiceBlurCard from "@/app/Components/services/SeviceBlurCard";
import { TopBanner } from "@/app/Components/services/TopBanner";
import {WhyConsulting}  from "@/app/Components/services/WhyConsulting";
import { Grid } from "@/assets/icon";


export default function ServicesPage() {
  return (
    <div className="font-sans bg-black overflow-hidden relative">
      <TopBanner />
      <WhyConsulting />
      <CorePrincipals />

      {/* Blur Div with Glow */}
      

      
        
        <ServiceBlurCard />
      
    </div>
  );
}
