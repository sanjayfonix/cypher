// components/GlassShieldRefined.tsx
import React from "react";

interface GlassIconProps {
  icon: React.ReactNode;
  size?: number;
  borderOpacity?: number;
  borderThickness?: number;
  arcLength?: number; // how wide the arc is
  fadeSize?: number;  // how much to fade at each end
}

export const GlassIcon = ({
  icon,
  size = 96,
  borderOpacity = 0.75,
  borderThickness = 1,
  arcLength = 110,
  fadeSize = 45,
}: GlassIconProps) => {
  const solidStart = fadeSize;
  const solidEnd = arcLength - fadeSize;

  return (
    <div
      className="relative flex items-center justify-center rounded-full"
      style={{ width: size, height: size }}
    >
     {/* TOP-LEFT ARC */}
<div
  className="absolute inset-0 rounded-full pointer-events-none"
  style={{
    border: `${borderThickness}px solid rgba(255,255,255,${borderOpacity})`,
    WebkitMaskImage: `conic-gradient(
      from 450deg,   /* top-left corner */
      rgba(0,0,0,0) 0deg,
      rgba(0,0,0,1) ${fadeSize}deg,
      rgba(0,0,0,1) ${arcLength - fadeSize}deg,
      rgba(0,0,0,0) ${arcLength}deg
    )`,
    maskImage: `conic-gradient(
      from 225deg, 
      rgba(0,0,0,0) 0deg,
      rgba(0,0,0,1) ${fadeSize}deg,
      rgba(0,0,0,1) ${arcLength - fadeSize}deg,
      rgba(0,0,0,0) ${arcLength}deg
    )`,
  }}
/>

{/* BOTTOM-RIGHT ARC */}
<div
  className="absolute inset-0 rounded-full pointer-events-none"
  style={{
    border: `${borderThickness}px solid rgba(255,255,255,${borderOpacity})`,
    WebkitMaskImage: `conic-gradient(
      from -105deg,    /* bottom-right corner */
      rgba(0,0,0,0) 0deg,
      rgba(0,0,0,1) ${fadeSize}deg,
      rgba(0,0,0,1) ${arcLength - fadeSize}deg,
      rgba(0,0,0,0) ${arcLength}deg
    )`,
    maskImage: `conic-gradient(
      from 45deg, 
      rgba(0,0,0,0) 0deg,
      rgba(0,0,0,1) ${fadeSize}deg,
      rgba(0,0,0,1) ${arcLength - fadeSize}deg,
      rgba(0,0,0,0) ${arcLength}deg
    )`,
  }}
/>

      {/* INNER CIRCLE */}
      <div
        className="
          relative w-full h-full rounded-full p-2 flex items-center justify-center
          bg-[linear-gradient(180deg,rgba(27,27,27,0.17)_28.22%,rgba(1,72,165,0.2)_185.84%)]
          shadow-[0_0_6.6px_3px_#159AFF1A]
        "
      >
        {icon}
      </div>
    </div>
  );
};






