import { LegalHeader } from "@/app/Components/legal/header";
import PolicyPage from "@/app/Components/legal/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal & Privacy Policy | Cyphr",
  description:
    "Review Cyphr's legal terms, privacy policy, and compliance standards. We are committed to ethical intelligence gathering and data protection.",
};

export default function LegalPage() {
  return (
    <div >
      <LegalHeader />
      <PolicyPage />
    </div>
  );
}