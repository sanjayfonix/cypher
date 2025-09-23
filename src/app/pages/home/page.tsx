import ContactSection from "@/app/Components/common/Getintouch";
import BlurCard from "@/app/Components/home/BlurCard";
import CESessions from "@/app/Components/home/CeCle";
import GlobalThreatIntelligence from "@/app/Components/home/GlobalThreatIntelligence";
import { PointerGrid } from "@/app/Components/home/GridAnimation";



import  HomeBanner  from "@/app/Components/home/HomeBanner";
import HowItWorks from "@/app/Components/home/HowItWorks";
import IntegrityAtCore from "@/app/Components/home/IntegrityAtCore";

import SearchResultTab from "@/app/Components/home/SearchResultTab";
import WhereInvestigation from "@/app/Components/home/WhereInvestigation";
import {User,Facebook,Mail,} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="w-full bg-[var(--primary)] container">
     <HomeBanner/>
    <GlobalThreatIntelligence/> 
      <WhereInvestigation/>
     <HowItWorks/> 
       <IntegrityAtCore/>
     <BlurCard/> 
     <div className="p-4 lg:p-0">
     <ContactSection />
     </div>
     <CESessions/>
     
    </div>  
  );
}
