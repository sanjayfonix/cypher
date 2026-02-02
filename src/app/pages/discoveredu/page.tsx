import BookingForm from "@/app/Components/common/BookingForm";
import EducationCards from "@/app/Components/discoveredu/EducationCards";
import EducationPrograms from "@/app/Components/discoveredu/EducationPrograms";
import { TopBanner } from "@/app/Components/discoveredu/Header";
import EmpowerTeam from "@/app/Components/discoveredu/Knowledge";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "DiscoverEdu | Accredited Intelligence Training & Seminars | Cyphr",
    description:
        "Advance your professional skills with Cyphr's DiscoverEdu. CE & CLE accredited courses in fraud detection, OSINT, and financial forensics for investigators and legal pros.",
};
export default function AboutPage() {
    return (
        <div >
            <TopBanner />
            <EducationCards />
            <EducationPrograms />
            <EmpowerTeam />
            <div id="booking-form" className="scroll-mt-12">
                <BookingForm />
            </div>
        </div>
    );
}