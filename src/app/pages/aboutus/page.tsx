import { AboutHeader } from "@/app/Components/about_us/about_header";
import MissionSection from "@/app/Components/about_us/mission";
import TeamSection from "@/app/Components/about_us/teams";
import WhyCyphr from "@/app/Components/about_us/whycyphr";
import ContactSection from "@/app/Components/common/Getintouch";

export default function AboutPage() {
  return (
    <div >
      <AboutHeader/>
      <WhyCyphr/>
      <TeamSection/>
      <MissionSection/>
      <ContactSection />
    </div>
  );
}