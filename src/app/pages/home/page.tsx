import GlobalThreatIntelligence from "@/app/Components/home/GlobalThreatIntelligence";
import { HomeBanner } from "@/app/Components/home/HomeBanner";


export default function HomePage() {
  return (
    <div className="w-full bg-[var(--primary)]">
     <HomeBanner/>
     <GlobalThreatIntelligence/>
    </div>
  );
}
