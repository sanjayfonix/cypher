import { IndustryBanner } from "@/app/Components/industries/IndustryBanner";
import CustomDiv from "@/app/Components/industries/WhyInsurance";

export default function IndustriesPage() {
  return (
    <div className="font-sans bg-black">
  <IndustryBanner/>
  <CustomDiv/>
    </div>
  );
}