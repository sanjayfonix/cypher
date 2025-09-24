import { AboutHeader } from "@/app/Components/about_us/about_header";
import { History } from "@/app/Components/about_us/history";
import MissionSection from "@/app/Components/about_us/mission";
import TeamSection from "@/app/Components/about_us/teams";
import WhyCyphr from "@/app/Components/about_us/whycyphr";
import BookingForm from "@/app/Components/common/BookingForm";
import ContactSection from "@/app/Components/common/Getintouch";

export default function AboutPage() {
  return (

    <div >
       <AboutHeader/>  
       <History/>
       <WhyCyphr/> 
  <TeamSection/> 
      <MissionSection/>
      <div className="px-4 "><ContactSection /></div>
    </div>
  );
}