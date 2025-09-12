import BlurCard from "@/app/Components/home/BlurCard";
import GlobalThreatIntelligence from "@/app/Components/home/GlobalThreatIntelligence";
import { HomeBanner } from "@/app/Components/home/HomeBanner";
import HowItWorks from "@/app/Components/home/HowItWorks";
import SearchResultTab from "@/app/Components/home/SearchResultTab";
import {User,Facebook,Mail,} from 'lucide-react'

const tabsData = [
    {
      icon: User,
      title: "John Doe",
      queryVal: "Find Account",
      date: "2025-09-11",
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: true, isValue: true },
        { label: "Facebook Login Option:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
      ],
    },
    {
      icon: Facebook,
      title: "Jane Smith",
      queryVal: "Reset Password",
      date: "2025-09-10",
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: true, isValue: true },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
      ],
    },
    {
      icon: Mail,
      title: "Alex Johnson",
      queryVal: "Update Email",
      date: "2025-09-09",
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: true, isValue: true },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
        { label: "Facebook Login Option:", isValid: false, isValue: false },
      ],
    },
    {
      icon: User,
      title: "Emily Davis",
      queryVal: "Verify Account",
      date: "2025-09-08",
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: true, isValue: false },
        { label: "Facebook Login Option:", isValid: false, isValue: true },
        { label: "Facebook Login Option:", isValid: true, isValue: true },
      ],
    },
    {
      icon: Facebook,
      title: "Michael Brown",
      queryVal: "Deactivate Account",
      date: "2025-09-07",
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: false, isValue: false },
        { label: "Facebook Login Option:", isValid: true, isValue: true },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
      ],
    },
    {
      icon: Mail,
      title: "Sarah Wilson",
      queryVal: "Change Password",
      date: "2025-09-06",
      rowsData: [
        { label: "Has Multiple Accounts:", isValid: true, isValue: true },
        { label: "Facebook Login Option:", isValid: true, isValue: false },
        { label: "Facebook Login Option:", isValid: false, isValue: true },
      ],
    },
  ];
export default function HomePage() {
  return (
    <div className="w-full bg-[var(--primary)]">
     <HomeBanner/>
     <GlobalThreatIntelligence/>         
     <HowItWorks/>
     <BlurCard/>
    </div>
  );
}
