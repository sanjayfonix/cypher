import { fetchPhoneSearchResult } from "@/api/apiFunctions";
import ContactSection from "@/app/Components/common/Getintouch";
import BlurCard from "@/app/Components/home/BlurCard";
import CESessions from "@/app/Components/home/CeCle";
import GlobalThreatIntelligence from "@/app/Components/home/GlobalThreatIntelligence";
import { AltGrid } from "@/app/Components/home/GridAnimation2";



import HomeBanner from "@/app/Components/home/HomeBanner";
import HowItWorks from "@/app/Components/home/HowItWorks";
import IntegrityAtCore from "@/app/Components/home/IntegrityAtCore";


import WhereInvestigation from "@/app/Components/home/WhereInvestigation";


export default async function HomePage() {
  //  const seachResult = await fetchSearchResult('',{
  //   type:'email',
  //   query:'hatk808@gmail.com',
  //   OstIndAKey:process.env.apiKey!
  //  })
  return (
    <div className=" bg-[var(--primary)] ">
      <HomeBanner />
      <GlobalThreatIntelligence />
      <WhereInvestigation />
      <HowItWorks />
      <IntegrityAtCore />
      <BlurCard />
      <div className="container p-4 lg:p-12 mb-16">
        <ContactSection />
      </div>
      <div className="mt-8 sm:p-4 lg:p-12 mb-16">
        <CESessions />
      </div>
    </div>
  );
}
