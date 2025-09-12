import Button from "../common/Button"; // Make sure to import your Button component

export default function HowItWorks() {
  return (
    <div className="flex flex-col lg:flex-row items-center p-6 sm:p-12 lg:p-20 gap-8 lg:gap-12 bg-black bg-[url('/grid.png')] bg-fill bg-repeat">
      {/* Left Column */}
      <div className="h-full flex flex-col gap-4 justify-start items-start text-center lg:text-left max-w-xl">
        {/* First Text */}
        <h1 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] tracking-normal text-white">
          How it works
        </h1>

        {/* Second Text */}
        <p className="text-left font-inter font-normal text-sm sm:text-base md:text-lg text-white">
          Using advanced algorithms, OSINT methodology and investigative technologies, Webutation
          scours social media, public records, and other digital footprints to provide actionable
          intelligence.
        </p>
      </div>

      {/* Right Column */}
      <div className="relative h-full flex flex-col gap-6 lg:gap-8 items-center w-full max-w-3xl">
        <div className="absolute -top-2 bg-[#167BFF] h-7 w-full max-w-[38.5rem] align-middle blur-[63.8px]"></div>

        <div className="flex flex-col gap-0 w-full">
          {/* First Div - Top Row */}
          <div className="flex flex-col sm:flex-row justify-center w-full gap-2 sm:gap-4 p-4 rounded-t-[12px] bg-[#09346B]">
            {/* First inner div */}
            <div className="border border-[#167BFF] bg-[#0C448C] rounded-lg px-4 py-2 sm:py-3">
              <span className="font-sans font-bold text-lg sm:text-xl md:text-2xl text-white">
                All in One
              </span>
            </div>

            {/* Second inner div */}
            <div className="rounded-lg px-4 py-2 sm:py-3">
              <span className="font-sans font-normal text-lg sm:text-xl md:text-2xl text-[#E3E3E3]">
                OSINT
              </span>
            </div>

            {/* Third inner div */}
            <div className="rounded-lg px-4 py-2 sm:py-3">
              <span className="font-sans font-normal text-lg sm:text-xl md:text-2xl text-[#E3E3E3]">
                Data Breach
              </span>
            </div>
          </div>

          {/* Second Div - Bottom Content */}
          <div className="flex flex-col gap-6 sm:gap-8 p-4 sm:p-6 md:p-8 rounded-b-[12px] bg-black shadow-[inset_0_0_30px_0_#157AFF80]">
            {/* First Row inside Bottom Div */}
            <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
              {/* Input */}
              <input
                type="text"
                placeholder="Enter text..."
                className="w-full sm:flex-1 rounded-[38px] border border-[#515151] bg-[#1E1E1E] px-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:outline-none"
              />

              {/* Button Component */}
              <Button
                isIcon={true}
                isBorder={false}
                color="bg-[#1057B5]"
                text="Search Now"
              />
            </div>

            {/* Placeholder for next row content */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-100">
              {/* First Div - Username */}
              <div className="flex items-center justify-center gap-2.5 rounded-[3rem] border-[1.2px] px-4 py-2 sm:py-3 bg-[#E8F2FF] border-[#157AFF]">
                <span className="font-sans font-medium text-[#1E1E1E] text-base sm:text-lg md:text-xl">
                  Username
                </span>
              </div>

              {/* Second Div - Phone Number */}
              <div className="flex  items-center justify-center gap-2.5 rounded-[3rem] px-4 py-2 sm:py-3 bg-[#515151]">
                <span className="font-sans font-normal text-base sm:text-lg md:text-xl text-black">
                  Phone Number
                </span>
              </div>

              {/* Third Div - Email */}
              <div className="flex items-center justify-center gap-2.5 rounded-[3rem] px-4 py-2 sm:py-3 bg-[#515151]">
                <span className="font-sans font-normal text-base sm:text-lg md:text-xl text-black">
                  Email
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="font-inter font-normal text-white text-xs sm:text-sm text-center">
          Search by username, phone number, or email to confidentially look up information.
        </p>
      </div>
    </div>
  );
}

