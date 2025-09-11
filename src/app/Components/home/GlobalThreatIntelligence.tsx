// components/ThreatDetectionUI.tsx
'use client';
import { useState } from "react";

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  align:string;
}

interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlobalThreatIntelligence() {

    
  const [tabIndex,setTabIndex]=useState<number>(0);

  const timelineData = [
    {
      icon: '',
      title: 'Malintent',
      description: 'Active protection against evolving digital threats',
    },
    {
      icon: '',
      title: 'Investigation',
      description: 'Forensic examination of security incidents',
    },
    {
      icon: '',
      title: 'Risk Assessment',
      description: 'Continuous evaluation of vulnerability exposure',
    },
    {
      icon: '',
      title: 'Data Analysis',
      description: 'Pattern recognition across massive datasets',
    },
  ];



  const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const RiskIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <path d="m9 14 3-3 3 3" />
        <path d="M12 11v6" />
    </svg>
);

const DataAnalysisIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
    <path d="M3 3v18h18"></path>
    <path d="m19 9-5 5-4-4-3 3"></path>
  </svg>
);

const Label = ({ children, className }:LabelProps) => (
    <div className={`absolute text-sm text-gray-300 ${className}`}>
      {children}
    </div>
  );

  const TimelineItem = ({ icon, title, description, className,align }:TimelineItemProps) => (
    <div style={{alignSelf:align}} className={`relative flex justify-start items-start gap-4 p-2 ${className}`}>
        {/* Connector line */}
        {/* <div className="absolute top-12 w-0.5 h-full bg-gradient-to-t from-blue-600 via-blue-600/50 to-transparent -z-10"></div> */}

        <div className="relative h-20 w-20 bg-[linear-gradient(180deg,rgba(27,27,27,0.17)_28.22%,rgba(1,72,165,0.2)_185.84%)] shadow-[0_0_6.6px_3px_rgba(21,154,255,0.1)] rounded-full">
            <div className="bg-black p-4 rounded-full">
                {icon}
            </div>
        </div>
        <div>
        <h3 className=" text-xl font-semibold text-white">{title}</h3>
        <p className=" text-gray-400 max-w-xs">{description}</p>
        </div>
    </div>
);


const RadarChart = () => {
  const Label = ({ children, className }: LabelProps) => (
    <div className={`absolute text-sm text-gray-300 ${className}`}>
      {children}
    </div>
  );

  return (
    <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
      {/* Background radial gradient */}
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-blue-950/20 to-transparent rounded-full"></div>

      {/* Concentric Circles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-blue-500/20"
          style={{
            width: `${(i + 1) * 20}%`,
            height: `${(i + 1) * 20}%`,
          }}
        ></div>
      ))}
      
      {/* Crosshairs */}
      <div className="absolute w-full h-[1px] bg-blue-500/20"></div>
      <div className="absolute h-full w-[1px] bg-blue-500/20"></div>

      {/* Angled Line */}
      <div className="absolute w-full h-[1px] bg-blue-500/40 transform -rotate-45 scale-x-110"></div>
      <div className="absolute top-[21%] right-[21%] w-1.5 h-1.5 bg-blue-400 rounded-full"></div>


      {/* Labels */}
      <Label className="top-[30%] left-[10%]">Data Analysis</Label>
      <Label className="bottom-[20%] left-[25%]">Risk Assessment</Label>
      <Label className="top-[10%] right-[15%]">Investigation</Label>

      {/* Malintent Highlight */}
      <div className="absolute flex items-center justify-center w-[38%] h-[38%]">
        <div className="absolute w-full h-full border-2 border-red-500 rounded-full animate-pulse"></div>
        <div className="bg-red-600/80 text-white px-4 py-2 rounded-md shadow-lg z-10">
          Malintent
        </div>
      </div>
    </div>
  );
};



  return (
    <div className="bg-black  text-white flex flex-col items-center px-4 py-12">
      {/* Header */}
      <h1 className="text-5xl md:text-5xl font-bold mb-12 text-center">
        Global Threat Intelligence
      </h1>

      {/* Tabs */}
      <div className="flex rounded-4xl overflow-hidden w-full max-w-7xl mb-12 border border-gray-800">
        <button onClick={()=>setTabIndex(0)} style={{transition:'1s ease-out',boxShadow:tabIndex===0?'0px 0px 10px 0px #89BFFF inset,0px 0px 4px 0px #268AFF':'none',backgroundColor:tabIndex===0?'#1057B5':'#1F1F1FD6'}} className="flex-1 text-white py-3 pl-4 pr-2 flex items-center justify-center gap-2">
          <img src={'/shield-flash-line.svg'} style={{width:24,height:24,objectFit:'cover'}}/>
          <span className="text-xl font-medium font-sans">Threat Radar</span>
          {/* <Shield size={16} /> Threat Radar */}
        </button>
        <button onClick={()=>setTabIndex(1)} style={{transition:'1s ease-out',boxShadow:tabIndex===1?'0px 0px 10px 0px #89BFFF inset,0px 0px 4px 0px #268AFF':'none',backgroundColor:tabIndex===1?'#1057B5':'#1F1F1FD6'}} className="flex-1 justify-center text-white py-3 px-4 flex gap-2">
          
          <img src={'/Location.svg'} style={{width:24,height:24,objectFit:'cover'}}/>
           <span className="text-white text-xl font-sans font-medium">Loc8 Tracking</span>
        </button>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-2 max-w-3xl justify-start text-center mb-12">
        <h2 className="text-[2rem] font-bold font-sans text-white m-0 p-0">Threat Detection System</h2>
        <p className="text-[#F1F1F1] font-[1rem] font-inter font-normal">
          Our advanced radar system continuously scans the global landscape for
          malintent<br/> threats and vulnerabilities, providing real-time detection
          of emerging risks.
        </p>
      </div>

      <div className="bg-black text-white font-sans flex items-center justify-center py-6 px-8">
      <div className="w-full max-w-7xl mx-auto flex justify-start items-start gap-12">
        
       
          <RadarChart />
       

        {/* Right Side: Timeline */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-24">
            <TimelineItem align="flex-start" {...timelineData[0]} className="sm:mt-0" />
            <TimelineItem align="flex-start" {...timelineData[1]} className="" />
            <TimelineItem align="flex-end" {...timelineData[2]} className="sm:mt-0" />
            <TimelineItem align="flex-end" {...timelineData[3]} className="" />
        </div>

      </div>
    </div>

       </div>
    
  );
}






  
  
    





//     <div className="bg-black text-white font-sans min-h-screen w-full flex items-center justify-center p-4 sm:p-8">
//       <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-8">
        
//         {/* Left Side: Radar Chart */}
//         <div className="flex justify-center items-center">
//           <RadarChart />
//         </div>

//         {/* Right Side: Timeline */}
//         <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-24">
//             <TimelineItem {...timelineData[0]} className="sm:mt-0" />
//             <TimelineItem {...timelineData[1]} className="sm:mt-24" />
//             <TimelineItem {...timelineData[2]} className="sm:mt-0" />
//             <TimelineItem {...timelineData[3]} className="sm:mt-24" />
//         </div>

//       </div>
//     </div>
//   );
