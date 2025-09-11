import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  color?: string; // Tailwind class like "bg-blue-500" or custom hex via style
  isBorder?: boolean; // Tailwind border class e.g. "border border-gray-300"
  isIcon?: boolean;
  icon?: ReactNode; // Pass an icon component if isIcon is true
  onClick?: () => void;
};

export default function Button({
  text,
  color = "bg-blue-600",
  isBorder = false,
  isIcon = false,
  icon,
  onClick,
}: ButtonProps) {
  return (
    <button
    style={{
    boxShadow:isBorder===false? "0px 0px 10px 0px #89BFFF inset, 0px 0px 4px 0px #268AFF":'none',
    border:isBorder?'1px solid #D5D5D5':'none'
  }}
      onClick={onClick}
      className={
        `flex items-center justify-center rounded-4xl px-[0.55rem] py-2 sm:px-4 sm:py-3 text-sm sm:text-base font-medium transition-all duration-200
        ${color}
        text-white
        text-[0.7rem]
        sm:text-[1rem]
        font-medium
        gap-2`
      }
    >      
      {text}
      {isIcon && <img src={'/arrow-down-right.svg'} className="w-6 h-6 object-cover"/> }
    </button>
  );
}
