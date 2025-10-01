import CurrentOpportunities from "@/app/Components/careers/CurrentOpportunity";
import { CareerBanner } from "@/app/Components/careers/Header";
import LifeAtcyphr from "@/app/Components/careers/LifeAtCyphr";
import PotentialTeam from "@/app/Components/careers/Potential";
import WhyWorkAtcyphr from "@/app/Components/careers/Whywork";


export default function ContactPage() {
  return (
    <div >
     <CareerBanner/>
     <WhyWorkAtcyphr/>
     <CurrentOpportunities/>
     <LifeAtcyphr/>
     <PotentialTeam/>
    </div>
  );
}