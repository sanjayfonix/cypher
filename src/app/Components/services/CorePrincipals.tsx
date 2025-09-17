'use client'
import { useEffect, useRef, useState } from "react";
import { BorderTravel, DropDown, DropUp, MagIcon, PointerGlow, Tick } from '@/assets/icon';
import Image from 'next/image';
import SemicircularArcs from "./CurvedAnimation";

interface TravelingBorderProps {
  borderRadius?: number; // default 32
  pointerWidth?: number; // default 66
  pointerHeight?: number; // default 10
  animationDuration?: number; // default 6s
  speed?:number;
}


export default function CorePrincipals() {
  const [tabIndex, setTabIndex] = useState(-1);
 const imageUrl = "/fingerprint.png";

 const containerRef = useRef<HTMLDivElement | null>(null);
  const [path, setPath] = useState("");

  useEffect(() => {
    function updatePath() {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const r = 32; // border-radius

      // Generate rounded-rect path
      const newPath = `M${r} 0 
        H${w - r} 
        Q${w} 0 ${w} ${r} 
        V${h - r} 
        Q${w} ${h} ${w - r} ${h} 
        H${r} 
        Q0 ${h} 0 ${h - r} 
        V${r} 
        Q0 0 ${r} 0 Z`;

      setPath(newPath);
    }

    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, []);
  return (
    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-10 lg:p-20 bg-black text-white">
      {/* Heading */}
      <h1 className="font-sans font-bold text-[20px] sm:text-[36px] lg:text-[48px] text-center leading-tight">
        Core Pillars of Consulting & Advisory
      </h1>

      {/* Custom Seminars */}
      <div className="relative border border-[#6D6D6D] rounded-[32px] p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 sm:gap-8 ">
        <TravelingBorder speed={100}/>

        {/* Left Column */}
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 flex-1">
          <div className="flex flex-col gap-3 sm:gap-4">
            <h2 className="font-sans text-white font-bold mt-6 lg:mt-0 text-[22px] sm:text-[28px] lg:text-[40px] leading-[1.3]">
              Custom Seminars
            </h2>
            <div className="text-[#E3E3E3] text-[0.9rem] sm:text-[1rem] font-inter font-normal max-w-[85%]">
              Tailored seminars to equip your team with the skills to detect and mitigate intelligence threats. We offer practical tools and roadmaps to help you stay ahead.
            </div>
          </div>
          <ul className="flex flex-col gap-2 sm:gap-3 font-['Inter'] text-[#E3E3E3] text-[13px] sm:text-[15px] lg:text-[16px]">
            <li className="flex items-center gap-2"><Tick/> Fraud case studies and prevention strategies</li>
            <li className="flex items-center gap-2"><Tick/> Practical checklists and roadmaps</li>
            <li className="flex items-center gap-2"><Tick/> Insights into evolving intelligence threats</li>
            <li className="flex items-center gap-2"><Tick/> Sector-specific fraud use cases</li>
          </ul>
        </div>

        {/* Right Column: Dashed Semi-Circles */}
        <div className="flex flex-1  justify-center items-center relative max-w-1/2">
          <SemicircularArcs viewWidth={500} viewHeight={400}/>
        </div>
        
      </div>
      

      {/* Second Row */}
      <div className={`flex flex-col sm:flex-row ${tabIndex!==-1?'items-start':'items-stretch'} gap-6 sm:gap-8`}>
        {/* Investigative Services Support */}
        <div className="relative border border-[#6D6D6D] rounded-[32px]  p-8 flex-1 flex flex-col gap-4 sm:gap-6">
          <TravelingBorder />

          <div className="relative flex justify-center">
      {/* Background glow */}
      <div
        className="absolute animate-glow"
        style={{
          width: "80%",
          height: "50%",
          background: "#157AFF",
          opacity: 1.5,
          filter: "blur(90px)",
          borderRadius: "50%",
          top: "30%",
         
          zIndex: 0,
        }}
      />

      {/* Main Image */}
      <img
        src={imageUrl}
        alt="fingerprint"
        className="my-4 lg:h-70 mt-7 mx-auto relative z-10 max-w-[60%]"
      />

      {/* Magnifier */}
      <div className="absolute md:top-1/4 top-1/8 left-[40%] z-20  h-[150px]">
        
     
        <MagIcon />
      </div>
    </div>

          <h2 className="font-sans font-bold text-[22px] sm:text-[28px] lg:text-[32px] leading-[1.3]">
            Investigative Services Support
          </h2>

          <div className="flex flex-row justify-between items-end">
            <p className="max-w-[80%] text-sm sm:text-base font-normal text-[#F1F1F1] font-inter">
              Our team extends your investigative capabilities with investigator-led support. We provide comprehensive intelligence services to:
            </p>
            <div
              onClick={() => setTabIndex(tabIndex === 0 ? -1 : 0)}
              className="flex relative top-5 left-2 justify-center items-center rounded-full flex-col gap-2.5 p-[9px_7px] w-8 h-8 border border-white opacity-100"
            >
              {tabIndex === 0 ? <DropUp /> : <DropDown />}
            </div>
          </div>

          {tabIndex === 0 && (
            <ul className="flex flex-col gap-2 sm:gap-3 font-['Inter'] text-[#E3E3E3] text-[13px] sm:text-[15px] lg:text-[16px] mt-4 lg:mt-0">
              <li className="flex items-center gap-2"><Tick/> Uncover hidden connections and threats</li>
              <li className="flex items-center gap-2"><Tick/> Validate evidence with digital forensics</li>
              <li className="flex items-center gap-2"><Tick/> Deliver courtroom-ready reports</li>
              <li className="flex items-center gap-2"><Tick/> Support or augment your existing investigations</li>
            </ul>
          )}
        </div>

        {/* Continuing Education */}
        <div ref={containerRef} className="relative  overflow-visible border border-[#6D6D6D] rounded-[32px] p-6 lg:p-8 flex-1 flex flex-col gap-4 sm:gap-6">
         <TravelingBorder />
         
         <div className="absolute rounded-[32px] overflow-hidden inset-0  ">
          <div
            className="absolute animate-glow w-[100%] h-40 rounded-full -top-[25%] blur-[100px]"
            style={{
              
              background: "#157AFF",
              opacity: 1.2,
      
             
              zIndex: 0,
            }}
          />
          </div>
          <div className="relative mb-4 mx-auto w-[200px] my-4 md:w-[270px] lg:w-[297px]">
  <div className="flex animate-ripple  justify-center items-center aspect-square w-full  rounded-full border border-[#0C438C]">
    <div className="flex animate-ripple delay-150 justify-center items-center w-[85%] h-[85%] rounded-full border border-[#0C438C]">
      <div className="relative  w-[80%] h-[80%] rounded-full animate-ripple delay-300 border border-[#0C438C]" />
      <img className="absolute w-full h-full" src="/book.png" />
    </div>
  </div>
</div>


          <h2 className="font-sans font-bold text-[22px] sm:text-[28px] lg:text-[40px] leading-[1.3]">
            Continuing Education
          </h2>

          <div className="flex flex-row justify-between items-end">
            <p className="max-w-[75%] text-sm sm:text-base font-normal text-[#F1F1F1] font-inter">
              We offer accredited CE courses to ensure professionals are always prepared for emerging fraud schemes and digital investigations.
            </p>
            <button onClick={()=>{
              if(tabIndex===1){
                setTabIndex(-1)
              }
              else{
                setTabIndex(1)
              }
            }} className="relative top-2 left-2 flex justify-center items-center rounded-full flex-col gap-2.5 p-[9px_7px] w-8 h-8 border border-white opacity-100">
            {tabIndex === 1 ? <DropUp /> : <DropDown />}
            </button>

           
              
          </div>
           {tabIndex === 1 && (
            <ul className="flex flex-col gap-2 sm:gap-3 font-['Inter'] text-[#E3E3E3] text-[13px] sm:text-[15px] lg:text-[16px] mt-4 lg:mt-0">
              <li className="flex items-center gap-2"><Tick/> Uncover hidden connections and threats</li>
              <li className="flex items-center gap-2"><Tick/> Validate evidence with digital forensics</li>
              <li className="flex items-center gap-2"><Tick/> Deliver courtroom-ready reports</li>
              <li className="flex items-center gap-2"><Tick/> Support or augment your existing investigations</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}






export function TravelingBorder({
  borderRadius = 32,
  speed = 150, // px per second
  scale = 0.5, // shrink the pointer so it fits corners
  inset = 2,
}: {
  borderRadius?: number;
  speed?: number;
  scale?: number;
  inset?: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const pointerRef = useRef<SVGPathElement | null>(null);
  const [pathData, setPathData] = useState("");

  useEffect(() => {
    if (!containerRef.current) return;

    const updatePath = () => {
      const rect = containerRef.current!.getBoundingClientRect();
      const w = rect.width - inset * 2;
      const h = rect.height - inset * 2;
      const r = borderRadius;

      const newPath = `
M ${inset + r} ${inset}
L ${inset + w - r} ${inset}
C ${inset + w - r/2} ${inset} ${inset + w} ${inset + r/2} ${inset + w} ${inset + r}
L ${inset + w} ${inset + h - r}
C ${inset + w} ${inset + h - r/2} ${inset + w - r/2} ${inset + h} ${inset + w - r} ${inset + h}
L ${inset + r} ${inset + h}
C ${inset + r/2} ${inset + h} ${inset} ${inset + h - r/2} ${inset} ${inset + h - r}
L ${inset} ${inset + r}
C ${inset} ${inset + r/2} ${inset + r/2} ${inset} ${inset + r} ${inset}
Z`;

      setPathData(newPath);
    };

    updatePath();
    const ro = new ResizeObserver(updatePath);
    ro.observe(containerRef.current!);
    return () => ro.disconnect();
  }, [borderRadius, inset]);

  useEffect(() => {
    if (!pathRef.current || !pointerRef.current) return;
    const pathEl = pathRef.current;
    const pointerEl = pointerRef.current;
    let start: number | null = null;
    const length = pathEl.getTotalLength();

    const animate = (t: number) => {
      if (start === null) start = t;
      const elapsed = (t - start) / 1000;
      const dist = (elapsed * speed) % length;

      const point = pathEl.getPointAtLength(dist);
      const next = pathEl.getPointAtLength((dist + 1) % length);
      const angle =
        (Math.atan2(next.y - point.y, next.x - point.x) * 180) / Math.PI;

      pointerEl.setAttribute(
        "transform",
        `translate(${point.x},${point.y}) rotate(${angle}) scale(${scale}) translate(-31.5,-5)`
      );

      requestAnimationFrame(animate);
    };

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [pathData, speed, scale]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      {pathData && (
        <svg className="absolute w-full h-full overflow-visible">
          {/* invisible path for measurement */}
          <path ref={pathRef} d={pathData} fill="none" stroke="transparent" />

          {/* Original pointer path, centered and scaled */}
          <path
            ref={pointerRef}
            d="M3 5.00037L60.5474 3.00037C60.5474 3.00037 63 4.21932 63 5.00037C63 5.78141 60.5474 7.00036 60.5474 7.00036L3 5.00037Z"
            fill="url(#capsuleGrad)"
          />

          <defs>
            <linearGradient
              id="capsuleGrad"
              x1="63"
              y1="5"
              x2="0"
              y2="5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#016FFF" />
              <stop offset="1" stopColor="#093C80" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
}
