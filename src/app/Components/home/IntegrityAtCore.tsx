
import { AcademiaIcon, EmployersIcon, InsuranceIcon, LawIcon } from "@/assets/icon";
import Link from "next/link";
import { GlassIcon } from "./GlassIcon";
import { GlassCard } from "./GlassCard";

const Items = [
  { id: 1, name: "Insurance Carriers", icon: <InsuranceIcon /> },
  { id: 2, name: "Employers", icon: <EmployersIcon /> },
  { id: 3, name: "Law Firms", icon: <LawIcon /> },
  { id: 4, name: "Academia", icon: <AcademiaIcon /> },
];

export default function IntegrityAtCore() {

  return (
    <div className="shadow-[0px_4px_4px_0px_#00000040] p-4 sm:p-6 md:p-10 container">
      <div className="relative w-full rounded-[32px] border border-[#6D6D6D] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/integrity.png')] bg-cover bg-center opacity-30 z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-8 sm:gap-14 md:gap-16 pt-8 sm:pt-[76px] px-4 sm:px-10 md:px-[68px] pb-8 sm:pb-[76px]">
          
          {/* Glow Circle */}
          <div
            className="absolute -z-1 animate-glow2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[60vw] sm:w-[200px] md:[300px] lg:w-[350px] aspect-square rounded-full 
            bg-[radial-gradient(circle,rgba(22,123,255,0.6)_0%,rgba(22,123,255,0.2)_100%)] 
            blur-[40px] "
          />

          {/* Top Cards */}
          <div className="flex flex-wrap justify-start mx-auto sm:justify-between items-start gap-4 max-w-[70%] sm:w-full sm:max-w-4xl">
            {Items.slice(0, 2).map((item) => (
             
                <Link
                  href={
                    item.id === 1
                      ? "/pages/industries/insurance"
                      : "/pages/industries/employer"
                  }
                >
                  <div
                    className={`${item.id===1?'md:mt-4':'mt-0'} ${item.id===1?'hover:-rotate-6':'hover:rotate-6'}  flex flex-row gap-3 sm:gap-4 items-center rounded-[8px] bg-[#09346Bb3] backdrop-blur-md py-2 px-3 sm:px-4 w-full sm:w-fit`}
                    
                  >
                    <div className="flex items-center justify-center rounded-full p-[0.5px] aspect-square shadow-[0px_0px_10px_0px_#157AFF66]">
                      <GlassIcon icon={item.icon} size={50} arcLength={150} />
                    </div>
                    <span className="font-sans font-bold text-base sm:text-lg md:text-xl text-white">
                      {item.name}
                    </span>
                  </div>
                </Link>
             
            ))}
          </div>

          {/* Center Text */}
          <div className="flex flex-col gap-3 sm:gap-4 opacity-100 items-center text-center max-w-[70%] sm:max-w-3xl">
            <h2 className="font-sans font-bold text-2xl sm:text-4xl md:text-5xl text-white leading-tight">
              Intelligence That Works For You.
            </h2>
            <p className="font-inter font-normal text-sm sm:text-base leading-6 text-[#F1F1F1] max-w-2xl">
              Whether you’re an insurer, employer, law firm, or investigator,
              Cyphr delivers reliable intelligence that saves costs, strengthens
              cases, and safeguards reputation.
            </p>
          </div>

          {/* Bottom Cards */}
          <div className="flex flex-wrap justify-start sm:justify-between items-start gap-4 mx-4 max-w-[70%] w-full sm:max-w-4xl">
            {Items.slice(2).map((item) => (
             
                <Link
                  href={
                    item.id === 3
                      ? "/pages/industries/law"
                      : "/pages/industries/academia"
                  }
                >
                 <div
  className={`
    ${item.id===3?'hover:rotate-6':'hover:-rotate-6'} flex flex-row gap-3 sm:gap-4 items-center 
    rounded-[8px] bg-[#09346Bb3] backdrop-blur-md py-2 px-3 sm:px-4 
    w-full sm:w-fit

    ${item.id === 3 ? "md:mt-4 md:ml-4" : ""} 
    ${item.id === 4 ? "md:mr-4" : ""}
  `}
>


                    <div className=" flex items-center justify-center rounded-full p-[0.5px] aspect-square shadow-[0px_0px_10px_0px_#157AFF66]">
                      <GlassIcon icon={item.icon} size={50} arcLength={150} />
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
