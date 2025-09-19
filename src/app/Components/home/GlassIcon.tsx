'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GlassIconProps {
  icon: React.ReactNode;
  hoverComp?: React.ReactNode;       // optional hover replacement
  isHoverProperty?: boolean;         // 👈 toggle hover swap
  size?: number;
  borderOpacity?: number;
  borderThickness?: number;
  arcLength?: number;
  fadeSize?: number;
}

export const GlassIcon = ({
  icon,
  hoverComp,
  isHoverProperty,           // 👈 default: no hover swap
  size = 96,
  borderOpacity = 0.75,
  borderThickness = 1,
  arcLength = 130,
  fadeSize = 45,
}: GlassIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative aspect-square flex items-center justify-center rounded-full"
      style={{ width: size, height: size }}
      onMouseEnter={() => isHoverProperty && setIsHovered(true)}   // 👈 only trigger if allowed
      onMouseLeave={() => isHoverProperty && setIsHovered(false)}
    >
      {/* TOP-LEFT ARC */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          border: `${borderThickness}px solid rgba(255,255,255,${borderOpacity})`,
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
        
          {isHoverProperty && isHovered  ? (
            <motion.div
              key="hoverComp"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center"
            >
              {hoverComp}
            </motion.div>
          ) : (
            <motion.div
              key="icon"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center"
            >
              {icon}
            </motion.div>
          )}
        
      </div>
    </div>
  );
};







