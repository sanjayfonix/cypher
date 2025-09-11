import GlobalThreatIntelligence from "@/app/Components/home/GlobalThreatIntelligence";
import { HomeBanner } from "@/app/Components/home/HomeBanner";
import HowItWorks from "@/app/Components/home/HowItWorks";


export default function HomePage() {
  return (
    <div className="w-full bg-[var(--primary)]">
     <HomeBanner/>
     <GlobalThreatIntelligence/>
     <HowItWorks/>
    </div>
  );
}
