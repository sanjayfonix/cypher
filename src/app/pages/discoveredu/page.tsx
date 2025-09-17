import BookingForm from "@/app/Components/common/BookingForm";
import EducationCards from "@/app/Components/discoveredu/EducationCards";
import EducationPrograms from "@/app/Components/discoveredu/EducationPrograms";
import { TopBanner } from "@/app/Components/discoveredu/Header";
import EmpowerTeam from "@/app/Components/discoveredu/Knowledge";


export default function AboutPage() {
    return (
        <div >
            <TopBanner/>
            <EducationCards/>
            <EducationPrograms/>
            <EmpowerTeam/>
            <BookingForm />
        </div>
    );
}