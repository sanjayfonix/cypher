import { inter } from "@/app/layout";
import { GlassIcon } from "./GlassIcon";
import { Shield } from "@/assets/icon";


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
      <GlassIcon icon={icon}/>
      
      

      {/* Text + Subtext */}
      <div className="flex flex-col gap-1 sm:gap-2">
        <h3 className="max-w-[90%] text-lg sm:text-xl md:text-2xl font-bold font-sans text-white">
          {text}
        </h3>
        <p className="max-w-[90%] text-sm sm:text-base md:text-base font-normal text-[#F1F1F1]">
          {subtext}
        </p>
      </div>
    </div>
  );
}
