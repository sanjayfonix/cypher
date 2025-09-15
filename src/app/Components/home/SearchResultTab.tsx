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
  rowsData: RowBadgeProps[]; // Array of three rows
}

export default function SearchResultTab({
  icon: Icon,
  title,
  queryVal,
  date,
  rowsData,
}: SearchResultTabProps) {
  return (
    <div className="px-4 sm:px-7 py-5">
  
    <div
      className="flex flex-col gap-2.5 rounded-[12px] border border-[#696969] p-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(132, 132, 132, 0) 0%, rgba(21, 122, 255, 0.3) 100%)",
      }}
    >
       
      {/* Inner container */}
      <div className="flex flex-col gap-6 ">
        {/* First row */}
        <div className="flex items-center flex-row gap-6">
          {/* Icon */}
          <div
            className="flex items-center justify-center w-[70px] h-[70px] p-2 rounded-[100px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(3, 10, 20, 0.2) 28.22%, rgba(21, 122, 255, 0.2) 185.84%)",
            }}
          >
            <Icon className="text-white w-6 h-6" />
          </div>

          {/* Text container */}
          <div className="flex flex-col gap-2">
            <span className="font-sans font-medium text-[24px] text-white">
              {title}
            </span>

            <div className="flex flex-row gap-0">
              {/* User ID */}
              <div className="flex items-center justify-center gap-2.5 rounded-l-full px-4 py-[7px] bg-[#09346B80]">
                <span className="font-sans text-white text-lg font-normal">
                  User ID:
                </span>
              </div>

              {/* Query */}
              <div className="flex items-center justify-center gap-2.5 rounded-r-full px-6 py-[7px] bg-[#B1B1B129]">
                <span className="font-inter font-normal text-[16px] text-[#CACACA]">
                  Query: {queryVal}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Second row: 3 rows with badges and date */}
        <div className="flex flex-col gap-2.5">
          {rowsData.map((row, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center px-2 py-2 border-b border-b-[0.5px] border-b-[#B1B1B18A]"
            >
              <span className="font-inter font-normal text-[16px] text-white">
                {row.label}
              </span>

              
                <div
                  className="flex items-center justify-center gap-2.5 rounded-[16px] px-2 py-1"
                  style={{
                    backgroundColor: row.isValid
                      ? "#22A12133"
                      : "#D8201D33",
                  }}
                >
                  <span
                    className="font-inter font-normal text-[16px]"
                    style={{
                      color:row.isValid?'#22A121':'#D8201D'
                    }}
                  >
                    {row.isValid ? "True" : "False"}
                  </span>
                </div> 

            </div>
          ))}
          <div
              
              className="flex flex-row justify-between items-center px-2 py-2 "
            ><span className="font-inter font-normal text-[16px] text-white">
                {'Facebook Login Option'}
              </span>
              <span className="font-inter font-normal text-[16px] text-white">
                {date}
              </span>
</div>
          {/* <div className="font-inter font-normal text-[16px] text-white border-b-none">
                  {date}
                </div> */}
        </div>
      </div>
    </div>
    </div>
  );
}
