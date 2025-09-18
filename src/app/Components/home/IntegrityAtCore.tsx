import { AcademiaIcon, EmployersIcon, Icon2, InsuranceIcon, LawIcon } from "@/assets/icon";
import { TravelingBorder } from "../services/CorePrincipals";
import Link from "next/link";
import { GlassIcon } from "./GlassIcon";

const Items = [
  { id: 1, name: "Insurance Carriers", icon: <InsuranceIcon /> },
  { id: 2, name: "Employers", icon: <EmployersIcon /> },
  { id: 3, name: "Law Firms", icon: <LawIcon /> },
  { id: 4, name: "Academia", icon: <AcademiaIcon /> },
];

export default function IntegrityAtCore() {
  return (
    <div className="shadow-[0px_4px_4px_0px_#00000040] p-4 sm:p-6 md:p-10">
      <div className="relative w-full rounded-[32px] border border-[#6D6D6D] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/integrity.png')] bg-cover bg-center opacity-30 z-0" />

        {/* Content */}
        <div className="relative z-10 w-full items-center flex flex-col gap-10 sm:gap-16 pt-8 sm:pt-[76px] px-4 sm:px-[68px] pb-8 sm:pb-[76px]">
          {/* Glow Circle (no fixed width/height, uses % + aspect ratio) */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
     w-[25vw] sm:w-[250px] aspect-square rounded-full 
     bg-[radial-gradient(circle,rgba(22,123,255,0.6)_0%,rgba(22,123,255,0.2)_100%)] 
     blur-[40px] animate-glow" />

          {/* Top Cards */}
          
          <div className=" flex w-[80%] flex-wrap justify-between items-start gap-4">
            {Items.slice(0, 2).map((item) => (
              <Link href={item.id===1?'/pages/industries/insurance':'/pages/industries/employer'}><div
                key={item.id}
                className=" flex  flex-row gap-3 sm:gap-4 items-center rounded-[8px] bg-[#09346B80] py-2 px-3 sm:px-4"
                style={{ marginTop: item.id === 1 ? 16 : 0 }}
              >
                 
                <div  className="flex items-center justify-center rounded-full p-[0.5px] aspect-square sm:p-[0.5px] shadow-[0px_0px_10px_0px_#157AFF66]">
                  <GlassIcon icon={item.icon} size={60} arcLength={150}/>
                </div>
                <span className="font-sans font-bold text-base sm:text-lg md:text-xl text-white">
                  {item.name}
                </span>
              </div></Link>
            ))}
          </div>
       
          {/* Center Text */}
          <div className="flex flex-col gap-3 sm:gap-4 opacity-100 items-center text-center">
            <h2 className="font-sans font-bold text-2xl sm:text-4xl md:text-5xl max-w-3xl text-white leading-tight">
              Intelligence That Works For You.
            </h2>
            <p className="font-inter font-normal text-sm sm:text-base leading-6 text-[#F1F1F1] max-w-2xl">
              Whether you’re an insurer, employer, law firm, or investigator, Cyphr delivers reliable intelligence that saves costs, strengthens cases, and safeguards reputation.
            </p>
          </div>

          {/* Bottom Cards */}
          <div className="flex w-[80%]  flex-wrap justify-between items-start gap-4 ">
            {Items.slice(2).map((item) => (
              <Link href={item.id===3?'/pages/industries/law':'/pages/industries/academia'}><div
                key={`bottom-${item.id}`}
                className={`flex flex-row ml-0 sm:${item.id===3 ? "ml-4" :"ml-0"} items-center gap-3 sm:gap-4 rounded-[8px] bg-[#09346B80] py-2 px-3 sm:px-4`}
                style={{
                  marginRight:item.id==4?'5%':0,
                  marginLeft:item.id === 3 ? 16 : 0,
                  marginTop: item.id === 3 ? 16 : 0,
                }}
              >
                <div className="flex items-center justify-center rounded-full  p-[0.5px] aspect-square sm:p-[0.5px] shadow-[0px_0px_10px_0px_#157AFF66]">
                   <GlassIcon icon={item.icon} size={60} arcLength={150}/>
                </div>
                <span className="font-sans font-bold text-base sm:text-lg md:text-xl text-white">
                  {item.name}
                </span>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}



