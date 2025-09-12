import Image from 'next/image';

export default function CorePrincipals() {
  return (
    <div className="flex flex-col gap-12 p-6 sm:p-12 lg:p-20 bg-black text-white">
      {/* Heading */}
      <h1 className="font-['IBM Plex Sans'] font-bold text-[32px] sm:text-[40px] lg:text-[48px] text-center">
        Core Principals
      </h1>

      {/* Custom Seminars */}
      <div className="border border-[#6D6D6D] rounded-[32px] p-6 sm:p-8 flex flex-col lg:flex-row gap-8 overflow-hidden">
        {/* Left Column */}
        <div className="flex flex-col gap-12 flex-1">
          <div className='flex flex-col gap-4'>  
          <h2 className="font-sans text-white font-bold text-[28px] sm:text-[32px] lg:text-[40px] leading-[1.3]">
            Custom Seminars
          </h2>
          <div className='text-[#E3E3E3] text-[1rem] font-inter font-normal max-w-[80%]'>Tailored seminars to equip your team with the skills to detect and mitigate intelligence threats. we offer practical tools and roadmaps to help you stay ahead.</div>
          </div>
          <ul className="flex flex-col gap-3 font-['Inter'] text-[#E3E3E3] text-[14px] sm:text-[16px]">
            <li className="flex items-center gap-2">
              <div className="w-[15px] h-[15px] bg-[#157AFF] rounded-full" />
              Fraud case studies and prevention strategies
            </li>
            <li className="flex items-center gap-2">
              <div className="w-[15px] h-[15px] bg-[#157AFF] rounded-full" />
              Practical checklists and roadmaps
            </li>
            <li className="flex items-center gap-2">
              <div className="w-[15px] h-[15px] bg-[#157AFF] rounded-full" />
              Insights into evolving intelligence threats
            </li>
            <li className="flex items-center gap-2">
              <div className="w-[15px] h-[15px] bg-[#157AFF] rounded-full" />
              Sector-specific fraud use cases
            </li>
          </ul>
        </div>

        {/* Right Column: Nested Dashed Semi-Circles */}
        <div className="flex-1 flex justify-center items-center relative max-w-full">
          <svg
            className="max-w-full "
            viewBox="0 0 555 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="dashedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="11.54%" stopColor="rgba(204, 204, 204, 0.3)" />
                <stop offset="100%" stopColor="rgba(3, 10, 20, 0.3)" />
              </linearGradient>
            </defs>
            {/* First semi-circle */}
            <path
              d="M 0 249 A 277.5 277.5 0 0 1 555 249"
              stroke="url(#dashedGradient)"
              strokeWidth="2"
              strokeDasharray="12 12"
              fill="none"
            />
            {/* Second semi-circle */}
            <path
              d="M 54.41 249 A 223 223 0 0 1 500.59 249"
              stroke="url(#dashedGradient)"
              strokeWidth="2"
              strokeDasharray="12 12"
              fill="none"
            />
            {/* Third semi-circle */}
            <path
              d="M 101.9 249 A 176 176 0 0 1 453.1 249"
              stroke="url(#dashedGradient)"
              strokeWidth="2"
              strokeDasharray="12 12"
              fill="none"
            />
            {/* Fourth semi-circle */}
            <path
              d="M 158.29 249 A 119 119 0 0 1 396.71 249"
              stroke="url(#dashedGradient)"
              strokeWidth="2"
              strokeDasharray="12 12"
              fill="none"
            />
          </svg>
        </div>
      </div>
<div className='flex w-[100%] justify-between'>
      {/* Investigative Services Support */}
      <div className="border border-[#6D6D6D] rounded-[32px] p-6 sm:p-8 relative flex flex-col gap-6">
        <img
          src="/fingerprint.png"
          alt="fingerprint"
          className="mx-auto relative z-10 max-w-[60%]"
        />
        <h2 className="font-sans font-bold text-[28px] sm:text-[32px] lg:text-[40px] leading-[1.3]">
          Investigative Services Support
        </h2>
        <ul className="flex flex-col gap-3 font-['Inter'] text-[#E3E3E3] text-[14px] sm:text-[16px]">
          <li className="flex items-center gap-2">
            <div className="w-[15px] h-[15px] bg-[#157AFF] rounded-full" />
            Support Item 1
          </li>
          <li className="flex items-center gap-2">
            <div className="w-[15px] h-[15px] bg-[#157AFF] rounded-full" />
            Support Item 2
          </li>
        </ul>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] max-w-[539px] h-[35px] bg-white opacity-20 blur-[134.6px]" />
      </div>

      {/* Continuing Education */}
      <div className="border border-[#6D6D6D] rounded-[32px] p-6 sm:p-8 min-h-[400px] lg:min-h-[500px] flex flex-col gap-6 relative">
        <h2 className="font-['IBM Plex Sans'] font-bold text-[28px] sm:text-[32px] lg:text-[40px] leading-[1.3]">
          Continuing Education
        </h2>
        <div className="relative mx-auto mt-10 w-[300px] h-[300px] max-w-full">
          <div className="absolute top-[40px] left-[50%] -translate-x-1/2 w-[297px] h-[286px] rounded-full border border-[#0C438C]" />
          <div className="absolute top-[63.62px] left-[50%] -translate-x-1/2 w-[247.95px] h-[238.77px] rounded-full border border-[#0C438C]" />
          <div className="absolute top-[85.92px] left-[50%] -translate-x-1/2 w-[201.63px] h-[194.16px] rounded-full border border-[#0C438C]" />
          <img
            src="/education-icon.png"
            alt="education icon"
            className="relative z-10 mx-auto max-w-[50%]"
          />
        </div>
      </div>
    </div>
    </div>
  );
}
