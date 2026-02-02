import { AboutHeader } from "@/app/Components/about_us/about_header";
import { History } from "@/app/Components/about_us/history";
import MissionSection from "@/app/Components/about_us/mission";
import ScrollHandler from "@/app/Components/about_us/ScrollHandler";
import TeamSection from "@/app/Components/about_us/teams";
import Whycyphr from "@/app/Components/about_us/whycyphr";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Cyphr | Leaders in Ethical Intelligence & OSINT",
  description:
    "Learn about Cyphr's mission to provide irrefutable, ethical intelligence. Meet our team of experts serving insurance, law, and corporate sectors with advanced OSINT solutions.",
};

export default function AboutPage() {
  return (
    <div>
      <ScrollHandler />
      <AboutHeader />
      <History />
      <Whycyphr />
      <TeamSection />
      <MissionSection />
      {/* <div className="px-4 "><ContactSection /></div> */}
    </div>
  );
}