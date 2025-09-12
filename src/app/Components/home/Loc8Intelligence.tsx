import { Graph } from "@/assets/icon";
import GridItem from "./GridItem";

export default function Loc8Intelligence() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 py-5 px-4 sm:px-7">
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
          text="AI-Powered Insights"
          subtext="Leverage advanced machine learning to detect risks faster than ever."
          isCol={true}
        />
        <GridItem
          icon={<Graph />}
          text="Fraud Detection"
          subtext="Identify and mitigate suspicious activities in real time."
          isCol={true}
        />
        <GridItem
          icon={<Graph />}
          text="Brand Protection"
          subtext="Safeguard your brand’s reputation from digital threats."
          isCol={true}
        />
      </div>
    </div>
  );
}


