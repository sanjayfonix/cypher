import CurrentOpportunities from "@/app/Components/careers/CurrentOpportunity";
import { CareerBanner } from "@/app/Components/careers/Header";
import LifeAtcyphr from "@/app/Components/careers/LifeAtCyphr";
import PotentialTeam from "@/app/Components/careers/Potential";
import WhyWorkAtcyphr from "@/app/Components/careers/Whywork";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Careers at Cyphr | Join Our Intelligence Team",
  description:
    "Explore career opportunities at Cyphr. Join our team of experts in OSINT, forensic intelligence, and cybersecurity. See our latest job openings and internships.",
};
export default function ContactPage() {
  return (
    <div >
      <CareerBanner />
      <WhyWorkAtcyphr />
      <CurrentOpportunities />
      <LifeAtcyphr />
      <PotentialTeam />
    </div>
  );
}