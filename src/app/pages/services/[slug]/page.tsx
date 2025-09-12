import CorePrincipals from "@/app/Components/services/CorePrincipals";
import { TopBanner } from "@/app/Components/services/TopBanner";
import { WhyConsulting } from "@/app/Components/services/WhyConsulting";

export default function ServicesPage() {
  return (
    <div className="font-sans bg-black px-7 py-5">
    <TopBanner/>
    <WhyConsulting/>
    <CorePrincipals/>
    </div>
  );
}