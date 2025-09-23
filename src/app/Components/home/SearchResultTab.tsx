import { LucideIcon } from "lucide-react";

interface RowBadgeProps {
  isValid: boolean;
  isValue: boolean;
  label: string;
}

interface SearchResultTabProps {
  icon: React.ReactNode;
  title: string;
  queryVal: string;
  date: string;
  rowsData: RowBadgeProps[];
}

export default function SearchResultTab({
  icon,
  title,
  queryVal,
  date,
  rowsData,
}: SearchResultTabProps) {
  return (
    <div className="px-2 sm:px-4 md:px-6 py-3 w-full">
      <div
        className="flex flex-col gap-3 sm:gap-4 md:gap-5 rounded-xl border border-[#696969] p-3 sm:p-5 w-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(132, 132, 132, 0) 0%, rgba(21, 122, 255, 0.3) 100%)",
        }}
      >
        {/* First row */}
        <div className="flex flex-col items-center sm:items-start sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full">
          {/* Icon */}
          
            {icon}
          

          {/* Text container */}
          <div className="flex flex-col gap-2 min-w-0 flex-1">
            <span className="font-sans font-medium text-base sm:text-xl md:text-2xl text-white break-words text-center sm:text-left">
              {title}
            </span>

            {/* User ID + Query */}
            <div className="flex flex-row items-center sm:gap-0 max-w-[90%]">
              {/* User ID + Query */}
<div className="flex flex-wrap sm:flex-nowrap items-center max-w-full gap-0">
  {/* User ID Block */}
  <div className="flex items-center gap-2.5 px-3 sm:px-4 py-1.5 rounded-t-full rounded-l-full rounded-tr-none bg-[#09346B80] min-w-0">
    <span className="font-sans text-white text-xs sm:text-sm md:text-base truncate">
      User ID 
    </span>
  </div>

  {/* Query Block */}
  <div className="flex items-center gap-2.5 px-3 sm:px-6 py-1.5 rounded-b-full rounded-r-full rounded-bl-none bg-[#B1B1B129] min-w-0 flex-1">
    <span className="font-inter font-normal text-xs sm:text-sm md:text-base text-[#CACACA] truncate">
      Query: {queryVal}
    </span>
  </div>
</div>

            </div>
          </div>
        </div>

        {/* Second row: data rows */}
        <div className="flex flex-col gap-2 w-full">
          {rowsData.map((row, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 px-1 sm:px-2 py-2 border-b-[0.5px] border-b-[#B1B1B18A] min-w-0"
            >
              <span className="font-inter font-normal text-xs sm:text-sm md:text-base text-white break-words flex-1 min-w-0">
                {row.label}
              </span>

              <div
                className="flex items-center justify-center gap-2.5 rounded-full px-2 sm:px-3 py-1 flex-shrink-0"
                style={{
                  backgroundColor: row.isValid ? "#22A12133" : "#D8201D33",
                }}
              >
                <span
                  className="font-inter font-normal text-xs sm:text-sm md:text-base"
                  style={{
                    color: row.isValid ? "#22A121" : "#D8201D",
                  }}
                >
                  {row.isValid ? "True" : "False"}
                </span>
              </div>
            </div>
          ))}

          {/* Date row */}
          <div className="flex flex-row flex-wrap justify-between items-start sm:items-center gap-2 sm:gap-0 px-1 sm:px-2 py-2 min-w-0 w-full">
            <span className="font-inter font-normal text-xs sm:text-sm md:text-base text-white">
              Facebook Login Option
            </span>
            <span className="font-inter font-normal text-xs sm:text-sm md:text-base text-white truncate">
              {date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
