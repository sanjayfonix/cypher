'use client'
import { useEffect, useRef, useState } from "react";
import { BorderTravel, DropDown, DropUp, FingerPrint, FingerPrintSearch, MagIcon, PointerGlow, Tick } from '@/assets/icon';
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
      <div className="relative border border-[#515151] rounded-[32px] p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 sm:gap-8 ">
        <TravelingBorder  speed={100}/>

        {/* Left Column */}
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 flex-1">
          <div className="flex flex-col gap-3 sm:gap-4">
            <h2 className="font-sans text-white font-bold mt-6 lg:mt-0 text-[22px] sm:text-[28px] lg:text-[40px] leading-[1.3]">
              Custom Seminars
            </h2>
            <div className="text-[#E3E3E3] text-[0.9rem] sm:text-[1rem] font-inter font-normal max-w-[95%]">
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
        <div className="flex flex-1  justify-center items-center relative max-w-full mt-8 lg:mt-0">
          <SemicircularArcs viewWidth={570} viewHeight={300}/>
        </div>
        
      </div>
      

      {/* Second Row */}
      <div className={`flex flex-col sm:flex-row ${tabIndex!==-1?'items-start':'items-stretch'} gap-6 sm:gap-8`}>
        {/* Investigative Services Support */}
        <div onMouseEnter={()=>setTabIndex(0)} onMouseLeave={()=>setTabIndex(-1)} className="relative border border-[#515151] rounded-[32px]  p-8 flex-1 flex flex-col gap-4 sm:gap-6">
          <TravelingBorder />

          <div className="relative flex justify-center">
      {/* Background glow */}
      <div
        className="blur-[40px] md:blur-[60px] absolute animate-glow2 h-[100px]  w-[110%]  md:w-full"
        style={{
          width:'100%',
          background: "#157AFF",
          borderRadius:'50%',
          opacity:1.5,
          top: "33%",
          
          zIndex: 0,
        }}
      />

      {/* Main Image */}
      <div className="h-[291px] w-full flex items-center justify-center my-4">
      <FingerPrint/>
      </div>

      {/* Magnifier */}
      <div className="absolute top-1/3  left-[40%] z-20  h-[150px]">
        
     
        <MagIcon />
      </div>
    </div>

          <h2 className="font-sans font-bold text-[22px] sm:text-[28px] lg:text-[32px] leading-[1.3]">
            Investigative Services Support
          </h2>

          <div className="flex flex-row justify-between items-end">
            <p className="text-sm sm:text-base font-normal text-[#F1F1F1] font-inter max-w-[80%]">
              Our team extends your investigative capabilities with investigator-led support. We provide comprehensive intelligence services to:
            </p>
            <button
              style={{
                cursor:'pointer'
              }}
              onClick={() => setTabIndex(tabIndex === 0 ? -1 : 0)}
              className="flex relative top-5 left-2 justify-center items-center rounded-full flex-col gap-2.5 p-[9px_7px] w-8 h-8 border border-white opacity-100"
            >
              {tabIndex === 0 ? <DropUp /> : <DropDown />}
            </button>
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
        <div onMouseEnter={()=>setTabIndex(1)} onMouseLeave={()=>setTabIndex(-1)} ref={containerRef} className="relative  overflow-visible border border-[#515151] rounded-[32px] p-6 lg:p-8 flex-1 flex flex-col gap-4 sm:gap-6">
         <TravelingBorder />
        
           <div className="relative sm:my-16 lg:my-4 w-1/2  mx-auto md:mx-0 sm:w-full flex my-4 h-fit  ">
               
         <div
        className="blur-[40px] md:blur-[60px]  absolute animate-glow2 h-[70px] md:h-[90px]  w-[150%] -left-1/4 sm:-left-1/24 md:-left-0 sm:w-[110%] md:w-full"
        style={{
          background: "#157AFF",
          borderRadius:'50%',
          opacity:1.5,
          top: "35%",
          zIndex: 0,
        }}
      />
         <div className="absolute rounded-[32px] overflow-hidden inset-0  ">
        
          </div>
  <div className=" w-[200px] mx-auto md:w-[270px] lg:w-[297px] relative z-10 flex animate-ripple  justify-center items-center aspect-square rounded-full border border-[#0C438C]">
   
    <div className="flex animate-ripple delay-150 justify-center items-center w-[85%] h-[85%] rounded-full border border-[#0C438C]">
      <div className="relative  w-[80%] h-[80%] rounded-full animate-ripple delay-300 border border-[#0C438C]" />
    
    </div>
    
  </div>
  <img
      src="/book.png"
      className="absolute inset-0 m-auto w-[100%] h-[100%] object-contain animate-none"
    />
</div>
 

          <h2 className="font-sans font-bold text-[22px] sm:text-[28px] lg:text-[32px] leading-[1.3]">
            Continuing Education
          </h2>

          <div className="flex flex-row justify-between items-end">
            <p className=" text-sm sm:text-base font-normal text-[#F1F1F1] font-inter max-w-[75%]">
              We offer accredited CE courses to ensure professionals are always prepared for emerging fraud schemes and digital investigations.
            </p>   
            <button 

            onClick={()=>{
              if(tabIndex===1){
                setTabIndex(-1)
              }
              else{
                setTabIndex(1)
              }
            }} 
            className="relative top-5 left-2 flex justify-center items-center rounded-full flex-col gap-2.5 p-[9px_7px] w-8 h-8 border border-white opacity-100">

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
  speed = 150,
  wedgeLength = 80,
  minThickness = 0.2,
  maxThickness = 3,
  inset = 0,
  anticlockwise = false,
  styles,
}: {
  borderRadius?: number;
  speed?: number;
  wedgeLength?: number;
  minThickness?: number;
  maxThickness?: number;
  inset?: number;
  anticlockwise?: boolean;
  styles?:{};
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const pointerRef = useRef<SVGPathElement | null>(null);
  const [pathData, setPathData] = useState("");

  // 🔹 Generate rounded-rectangle path
  useEffect(() => {
    if (!containerRef.current) return;

    const updatePath = () => {
      const rect = containerRef.current!.getBoundingClientRect();
      const w = rect.width - inset * 2;
      const h = rect.height - inset * 2;
      const r = borderRadius;

      const newPath = `
M ${inset + r} ${inset}
H ${inset + w - r}
Q ${inset + w} ${inset} ${inset + w} ${inset + r}
V ${inset + h - r}
Q ${inset + w} ${inset + h} ${inset + w - r} ${inset + h}
H ${inset + r}
Q ${inset} ${inset + h} ${inset} ${inset + h - r}
V ${inset + r}
Q ${inset} ${inset} ${inset + r} ${inset}
Z`;
      setPathData(newPath);
    };

    updatePath();
    const ro = new ResizeObserver(updatePath);
    ro.observe(containerRef.current!);
    return () => ro.disconnect();
  }, [borderRadius, inset]);

  // 🔹 Animate pointer wedge along the path
  useEffect(() => {
    if (!pathRef.current || !pointerRef.current) return;

    const path = pathRef.current;
    const pointer = pointerRef.current;
    let start: number | null = null;
    let rafId: number;

    const length = path.getTotalLength();

    const animate = (t: number) => {
      if (start === null) start = t;
      const elapsed = (t - start) / 1000;

      const dist = anticlockwise
        ? (length - ((elapsed * speed) % length)) % length
        : (elapsed * speed) % length;

      const steps = 10;
      const stepSize = wedgeLength / steps;

      const top: { x: number; y: number }[] = [];
      const bottom: { x: number; y: number }[] = [];

      for (let i = 0; i <= steps; i++) {
        const d = anticlockwise
          ? (dist - i * stepSize + length) % length
          : (dist + i * stepSize) % length;

        const p1 = path.getPointAtLength(d);
        const p2 = path.getPointAtLength(
          (d + (anticlockwise ? -1 : 1) * 0.5 + length) % length
        );

        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        const nx = -dy / len;
        const ny = dx / len;

        const ratio = i / steps;
        const thickness = minThickness + ratio * (maxThickness - minThickness);

        top.push({ x: p1.x + nx * thickness, y: p1.y + ny * thickness });
        bottom.push({ x: p1.x - nx * thickness, y: p1.y - ny * thickness });
      }

      // 🔹 Short tapered front tip
      const last = path.getPointAtLength(
        (dist + (anticlockwise ? -wedgeLength : wedgeLength) + length) % length
      );
      const after = path.getPointAtLength(
        (dist + (anticlockwise ? -wedgeLength - 8 : wedgeLength + 8) + length) %
          length
      );
      const dxF = after.x - last.x;
      const dyF = after.y - last.y;
      const lenF = Math.sqrt(dxF * dxF + dyF * dyF) || 1;
      const tipFront = {
        x: last.x + (dxF / lenF), // short tip like reference SVG
        y: last.y + (dyF / lenF),
      };

      // 🔹 Build wedge path (hugging corners)
      let dStr = `M ${bottom[0].x},${bottom[0].y}`;
      for (let i = 1; i < bottom.length - 1; i++) {
        dStr += ` L ${bottom[i].x},${bottom[i].y}`;
      }
      dStr += ` L ${tipFront.x},${tipFront.y}`;
      for (let i = top.length - 2; i >= 0; i--) {
        dStr += ` L ${top[i].x},${top[i].y}`;
      }
      dStr += " Z";

      pointer.setAttribute("d", dStr);

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [pathData, speed, wedgeLength, minThickness, maxThickness, anticlockwise]);

  return (
    <div ref={containerRef} className="absolute z-20 inset-0 pointer-events-none">
      {pathData && (
        <svg className="absolute w-full h-full overflow-visible">
          <path ref={pathRef} d={pathData} fill="none" stroke="transparent" />
          <path
            ref={pointerRef}
            fill="url(#wedgeGrad)"
            filter="url(#travelShadow)"
          />
          <defs>
            <linearGradient id="wedgeGrad" x1="100%" y1="0" x2="0" y2="0">
              <stop stopColor="#167BFF" />
              <stop offset="1" stopColor="#4F9BFF" />
            </linearGradient>
            <filter id="travelShadow" x="0" y="0" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="1.5"
                floodColor="#157AFF"
                floodOpacity="0.6"
              />
            </filter>
          </defs>
        </svg>
      )}
    </div>
  );
}


