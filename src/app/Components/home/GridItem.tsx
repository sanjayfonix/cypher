import { inter } from "@/app/layout";
interface GridItemProps {
    icon:React.ReactNode;
    text:string;
    subtext:string;
    isCol:boolean;

}



export default function GridItem({ icon, text, subtext, isCol = true }: GridItemProps) {
  return (
    <div
      className={`flex ${isCol ? "flex-col" : "flex-row"} gap-4 
                  sm:gap-6 md:gap-8 lg:gap-10`}
    >
      {/* Circular Avatar */}
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
                   p-2 flex items-center justify-center rounded-full 
                   bg-[linear-gradient(180deg,rgba(27,27,27,0.17)_28.22%,rgba(1,72,165,0.2)_185.84%)] 
                   shadow-[0_0_6.6px_3px_#159AFF1A]"
      >
        {icon}
      </div>

      {/* Text + Subtext */}
      <div className="flex flex-col gap-1 sm:gap-2">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-sans text-white">
          {text}
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-[#F1F1F1]">
          {subtext}
        </p>
      </div>
    </div>
  );
}
