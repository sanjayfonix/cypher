import Button from "../common/Button"; // Make sure to import your Button component

export default function HowItWorks() {
  return (
    <div className="flex flex-row items-center p-20 gap-12 bg-black bg-[url('/grid.png')] bg-cover bg-no-repeat">
      
      {/* Left Column */}
      <div className="flex flex-col gap-4 justify-start items-start">
        {/* First Text */}
        <h1 className="font-sans font-bold text-[3rem] tracking-normal text-white">
          How it works
        </h1>

        {/* Second Text */}
        <p className="font-inter font-normal text-[1rem] tracking-normal text-white">
          Using advanced algorithms, OSINT methodology and investigative technologies, Webutation
          scours social media, public records, and other digital footprints to provide actionable
          intelligence.
        </p>
      </div>

     
      {/* Right Column */}
      <div className="relative flex flex-col gap-8 items-center">
        <div className="absolute -top-2 bg-[#167BFF] h-7 w-[38.5rem] align-middle blur-[63.8px]"></div>
        <div className="flex flex-col gap-0">
        {/* First Div - Top Row */}
        <div className="flex justify-center flex-row w-[670px] h-[88px] gap-4 p-4 rounded-t-[12px]  bg-[#09346B]">
          {/* First inner div */}
          <div className="border border-[#167BFF] bg-[#0C448C] rounded-lg px-4 py-3">
            <span className="font-sans font-bold text-2xl text-white">All in One</span>
          </div>

          {/* Second inner div */}
          <div className="rounded-lg px-4 py-3">
            <span className="font-sans font-normal text-2xl text-[#E3E3E3]">OSINT</span>
          </div>

          {/* Third inner div */}
          <div className="rounded-lg px-4 py-3">
            <span className="font-sans font-normal text-2xl text-[#E3E3E3]">Data Breach</span>
          </div>
        </div>

        {/* Second Div - Bottom Content */}
        <div className="flex flex-col gap-8 p-8 rounded-b-[12px] bg-black shadow-[inset_0_0_30px_0_#157AFF80]">
          
          {/* First Row inside Bottom Div */}
          <div className="flex flex-row gap-4 items-center">
            {/* Input */}
            <input
              type="text"
              placeholder="Enter text..."
              className="w-[27rem] rounded-[38px] border border-[#515151] bg-[#1E1E1E] px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
            />

            {/* Button Component */}
            <Button isIcon={true} isBorder={false} color="bg-[#1057B5]" text="Search Now" />
          </div>

          {/* Placeholder for next row content */}
          <div className="w-full h-20 bg-[#111111] rounded-md flex items-center justify-center text-gray-400">
            Second row content goes here
          </div>
          </div>
        </div>
        <p className="font-inter font-normal text-white text-sm">Search by username, phone number, or email to confidentially look up information.</p>
      
      </div>
    </div>
  );
}
