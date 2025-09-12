import { Graph } from "@/assets/icon";
import GridItem from "./GridItem";

export default function Loc8Intelligence() {
  return (
    <div className="flex flex-col gap-12  sm:px-7">

        <div className="flex flex-col gap-4">
      <h2 className="text-xl sm:text-2xl md:text-[2rem] font-bold font-sans text-white">
          Loc8 Cellular Intelligence
        </h2>
        <p className="text-sm sm:text-base text-[#F1F1F1] font-inter font-normal ">
          Our proprietary Loc8 technology transforms mobile device data into powerful investigative intelligence, providing unprecedented insights into movement patterns and behaviors.
        </p>
        </div>

        <div className="flex flex-col py-5 px-4 gap-6 sm:flex-row">
      {/* Left Div → Image */}
      <div className="flex-1">
        <img
          src="/placeholder-image.png"
          alt="Left"
          className="w-64 h-64 sm:h-80 md:h-full object-cover rounded-lg"
        />
      </div>
      
    

      {/* Right Div → 2x2 Grid */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-6 mt-6 lg:mt-0">
        <GridItem
          icon={<Graph />}
          text="Precise Location Tracking"
          subtext="Track subjects with extraordinary accuracy through cellular app data integration."
          isCol={true}
        />
        <GridItem
          icon={<Graph />}
          text="Legal-Grade Evidence"
          subtext="Generate defensible, court-admissible location reports for legal proceedings."
          isCol={true}
        />
        <GridItem
          icon={<Graph />}
          text="Historical Movement Analysis"
          subtext="Reconstruct past movements with detailed timestamp and location data."
          isCol={true}
        />
        <GridItem
          icon={<Graph />}
          text="Pattern Recognition"
          subtext="Identify behavioral patterns and routines through AI-powered analysis."
          isCol={true}
        />
      </div>
      </div>
    </div>
  );
}


