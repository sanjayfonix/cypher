import GetContact from "@/app/Components/contact_component/getintouch";
import { LegalBanner } from "@/app/Components/contact_component/legal_header";

export default function ContactPage() {
  return (
    <div className="">
      <LegalBanner />
      <GetContact />
    </div>
  );
}