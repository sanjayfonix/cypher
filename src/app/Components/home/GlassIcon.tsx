'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

interface GlassIconProps {
  icon: React.ReactNode;
  hoverComp?: React.ReactNode;
  isHoverProperty?: boolean;
  size?:number;
  borderOpacity?: number;
  borderThickness?: number;
  arcLength?: number;
  fadeSize?: number;
  isShadow?:boolean;
}

export const GlassIcon = ({
  icon,
  hoverComp,
  isHoverProperty=false,
  size,
  borderOpacity = 0.75,
  borderThickness = 1,
  arcLength = 130,
  fadeSize = 45,
  isShadow=false,
}: GlassIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (

    <div
      className={`relative ${isHoverProperty?'cursor-pointer':''} aspect-square flex items-center justify-center rounded-full`}
      style={{
        width: size?size:'clamp(40px, 10vw, 60px)',
        height:size?size:'clamp(40px, 10vw, 60px)',
        boxShadow:isShadow===true?'0px 3px 6px #157AFF8A':'none'
        
 // 🔹 added shadow
      }}
      onMouseEnter={() => isHoverProperty && setIsHovered(true)}
      onMouseLeave={() => isHoverProperty && setIsHovered(false)}
    >
      {/* TOP-LEFT ARC */}
      
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          border: `${borderThickness}px solid rgba(255,255,255,${borderOpacity})`,    
           width:size,
           height:size,
          WebkitMaskImage: `conic-gradient(
            from 270deg,
            rgba(0,0,0,0) 0deg,
            rgba(0,0,0,1) ${fadeSize}deg,
            rgba(0,0,0,1) ${arcLength - fadeSize}deg,
            rgba(0,0,0,0) ${arcLength}deg
          )`,
          maskImage: `conic-gradient(
            from 250deg,
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
            from -105deg,
            rgba(0,0,0,0) 0deg,
            rgba(0,0,0,1) ${fadeSize}deg,
            rgba(0,0,0,1) ${arcLength - fadeSize}deg,
            rgba(0,0,0,0) ${arcLength}deg
          )`,
          maskImage: `conic-gradient(
            from 65deg,
            rgba(0,0,0,0) 0deg,
            rgba(0,0,0,1) ${fadeSize}deg,
            rgba(0,0,0,1) ${arcLength - fadeSize}deg,
            rgba(0,0,0,0) ${arcLength}deg
          )`,
        }}
      />

      {/* INNER CIRCLE */}
      <div
      
        className="relative w-full h-full rounded-full p-2 flex items-center justify-center
                   bg-[linear-gradient(180deg,rgba(27,27,27,0.17)_28.22%,rgba(1,72,165,0.2)_185.84%)]"
      >
        {isHoverProperty && isHovered ? (
          
            hoverComp
          
        ) : (
          
            icon
          
        )}
      </div>
    </div>
    
  );
};








