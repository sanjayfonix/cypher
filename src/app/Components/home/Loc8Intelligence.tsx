'use client'
import { BlueHistoryIcon, BlueSearch5, BlueSearch6, BlueTargetIcon, Graph, HammerIcon, HistoryIcon, PatternIcon, Search5, Search6, TargetIcon } from "@/assets/icon";
import GridItem from "./GridItem";
import Image from "next/image";
import dynamic from "next/dynamic";


const TrackingAnimation = dynamic(() => import("./GraphAnimation"), {
  ssr: false,
  loading: () => <div className="h-[700px] w-full" /> // fallback placeholder
});

export default function Loc8Intelligence() {
  return (
    <div className="flex flex-col gap-12  ">

      <div className="flex flex-col gap-4">
        <h2 className="text-xl sm:text-2xl md:text-[2rem] font-bold font-sans text-white">
          Cellular Intelligence
        </h2>
        <p className="text-sm sm:text-base text-[#F1F1F1] font-inter font-normal max-w-[95%]">
          Cyphr's Cellular Intelligence provides cutting-edge capabilities to collect and analyze mobile network data, uncovering valuable insights into people’s behavior, location, and activities. This technology equips investigators with the tools to enhance threat detection, gather intelligence in real-time, and make informed decisions based on mobile device interactions.
        </p>
      </div>

      <div className="flex  flex-col py-5 gap-6 sm:flex-row">
        {/* Left Div → Image */}
        <div className="flex-1">
         <TrackingAnimation/>
        </div>



        {/* Right Div → 2x2 Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-6 mt-6 lg:mt-0">
          <GridItem
          hoverComponent={<BlueTargetIcon/>}
            icon={<TargetIcon />}
            text="Real-Time Location Data"
            subtext="Track individuals' movements in real-time, gaining insights into location patterns to aid investigations and support timely decisions."
            isCol={true}
          />
          <GridItem
            icon={<HistoryIcon />}
            hoverComponent={<BlueHistoryIcon/>}
            text="Location-Based Analytics"
            subtext="Analyze geographic hotspots and movement patterns to gain a comprehensive understanding of trends and behaviors over time."
            isCol={true}
          />
          <GridItem
            icon={<Search5 />}
            hoverComponent={<BlueSearch5/>}
            text="Behavioral Trend Recognition"
            subtext="Identify repetitive behaviors, routines, and patterns for proactive decision-making, improving security by predicting future actions."
            isCol={true}
          />
          <GridItem
            icon={<Search6 />}
            hoverComponent={<BlueSearch6/>}
            text="Cross-Network Integration"
            subtext="Integrate data from multiple mobile networks to provide a 360-degree view of individuals’ interactions and movements across regions."
            isCol={true}
          />
        </div>
      </div>
    </div>
  );
}


