import { AcademiaIcon, EmployersIcon, InsuranceIcon, LawIcon } from "@/assets/icon";

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
        <div className="relative z-10 w-full flex flex-col gap-10 sm:gap-16 pt-8 sm:pt-[76px] px-4 sm:px-[68px] pb-8 sm:pb-[76px]">
          {/* Glow Circle (no fixed width/height, uses % + aspect ratio) */}
          <div className="absolute top-1/3 left-[45%] aspect-square max-w-[25vw] sm:max-w-[160px] rounded-full bg-[radial-gradient(circle,rgba(22,123,255,0.6)_0%,rgba(22,123,255,0.2)_100%)] blur-[40px] sm:blur-[50px]" />

          {/* Top Cards */}
          <div className="flex flex-wrap justify-between items-start gap-4 sm:gap-0">
            {Items.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="flex flex-row gap-3 sm:gap-4 items-center rounded-[8px] bg-[#09346B80] py-2 px-3 sm:px-4"
                style={{ marginTop: item.id === 1 ? 16 : 0 }}
              >
                <div className="flex items-center justify-center rounded-full p-3 sm:p-4 bg-[linear-gradient(180deg,rgba(47,47,47,0.17)_28.22%,rgba(1,72,165,0.2)_185.84%)] shadow-[0px_0px_10px_0px_#157AFF66]">
                  {item.icon}
                </div>
                <span className="font-sans font-bold text-base sm:text-lg md:text-xl text-white">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Center Text */}
          <div className="flex flex-col gap-3 sm:gap-4 opacity-100 items-center text-center">
            <h2 className="font-sans font-bold text-2xl sm:text-4xl md:text-5xl text-white leading-tight">
              Intelligence That Works For You.
            </h2>
            <p className="font-inter font-normal text-sm sm:text-base leading-6 text-[#F1F1F1] max-w-2xl">
              Whether you’re an insurer, employer, law firm, or investigator, Cyphr delivers reliable intelligence that saves costs, strengthens cases, and safeguards reputation.
            </p>
          </div>

          {/* Bottom Cards */}
          <div className="flex flex-wrap justify-between items-start gap-4 sm:gap-0">
            {Items.slice(2).map((item) => (
              <div
                key={`bottom-${item.id}`}
                className="flex flex-row items-center gap-3 sm:gap-4 rounded-[8px] bg-[#09346B80] py-2 px-3 sm:px-4"
                style={{
                  marginLeft: item.id === 3 ? 16 : 0,
                  marginTop: item.id === 3 ? 16 : 0,
                }}
              >
                <div className="flex items-center justify-center rounded-full p-3 sm:p-4 bg-[linear-gradient(180deg,rgba(47,47,47,0.17)_28.22%,rgba(1,72,165,0.2)_185.84%)] shadow-[0px_0px_10px_0px_#157AFF66]">
                  {item.icon}
                </div>
                <span className="font-sans font-bold text-base sm:text-lg md:text-xl text-white">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



