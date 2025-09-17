import CurrentOpportunities from "@/app/Components/careers/CurrentOpportunity";
import { CareerBanner } from "@/app/Components/careers/Header";
import LifeAtCyphr from "@/app/Components/careers/LifeAtCyphr";
import PotentialTeam from "@/app/Components/careers/Potential";
import WhyWorkAtCyphr from "@/app/Components/careers/Whywork";


export default function ContactPage() {
  return (
    <div >
     <CareerBanner/>
     <WhyWorkAtCyphr/>
     <CurrentOpportunities/>
     <LifeAtCyphr/>
     <PotentialTeam/>
    </div>
  );
}