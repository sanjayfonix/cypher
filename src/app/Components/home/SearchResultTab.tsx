import { LucideIcon } from "lucide-react";

interface RowBadgeProps {
  isValid: boolean;
  isValue: boolean;
  label: string;
}

interface SearchResultTabProps {
  icon: LucideIcon;
  title: string;
  queryVal: string;
  date: string;
  rowsData: RowBadgeProps[];
}

export default function SearchResultTab({
  icon: Icon,
  title,
  queryVal,
  date,
  rowsData,
}: SearchResultTabProps) {
  return (
    <div className="px-4 sm:px-6 md:px-8 py-5">
      <div
        className="flex flex-col gap-3 sm:gap-4 md:gap-6 rounded-xl border border-[#696969] p-4 sm:p-6"
        style={{
          background:
            "linear-gradient(180deg, rgba(132, 132, 132, 0) 0%, rgba(21, 122, 255, 0.3) 100%)",
        }}
      >
        {/* First row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          {/* Icon */}
          <div
            className="flex items-center justify-center min-w-[56px] sm:min-w-[64px] md:min-w-[70px] aspect-square p-2 rounded-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(3, 10, 20, 0.2) 28.22%, rgba(21, 122, 255, 0.2) 185.84%)",
            }}
          >
            <Icon className="text-white w-full" />
          </div>

          {/* Text container */}
          <div className="flex flex-col gap-2 w-full">
            <span className="font-sans font-medium text-lg sm:text-xl md:text-2xl text-white">
              {title}
            </span>

            {/* User ID + Query */}
           <div className="flex sm:flex-row flex-wrap gap-2 sm:gap-0 w-full">
  {/* User ID Block */}
  <div className="flex items-center gap-2.5 px-3 sm:px-4 py-1.5 
                  rounded-t-full sm:rounded-l-full sm:rounded-tr-none 
                  bg-[#09346B80]">
    <span className="font-sans text-white text-sm sm:text-base">
      User ID:
    </span>
  </div>

  {/* Query Block */}
  <div className="flex items-center gap-2.5 px-4 sm:px-6 py-1.5 
                  rounded-b-full sm:rounded-r-full sm:rounded-bl-none 
                  bg-[#B1B1B129] min-w-0 flex-1">
    <span className="font-inter font-normal text-sm sm:text-base text-[#CACACA] truncate">
      Query: {queryVal}
    </span>
  </div>
</div>

          </div>
        </div>

        {/* Second row: data rows */}
        <div className="flex flex-col gap-2">
          {rowsData.map((row, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center px-1 sm:px-2 py-2 border-b border-b-[0.5px] border-b-[#B1B1B18A]"
            >
              <span className="font-inter font-normal text-sm sm:text-base text-white">
                {row.label}
              </span>

              <div
                className="flex items-center justify-center gap-2.5 rounded-xl px-2 sm:px-3 py-1"
                style={{
                  backgroundColor: row.isValid
                    ? "#22A12133"
                    : "#D8201D33",
                }}
              >
                <span
                  className="font-inter font-normal text-sm sm:text-base"
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
          <div className="flex flex-row justify-between items-center px-1 sm:px-2 py-2">
            <span className="font-inter font-normal text-sm sm:text-base text-white">
              Facebook Login Option
            </span>
            <span className="font-inter font-normal text-sm sm:text-base text-white">
              {date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
