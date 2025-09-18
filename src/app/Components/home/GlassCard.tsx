import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className = "" }: GlassCardProps) => {
  return (
    <div className={`relative rounded-[12px] overflow-hidden ${className}`}>
      {/* TOP-LEFT ARC BORDER */}
      <div
        className="absolute inset-0 rounded-[12px] pointer-events-none"
        style={{
          border: `1px solid rgba(255,255,255,0.6)`,
          WebkitMaskImage: `linear-gradient(
            to bottom right,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0) 40%
          )`,
          maskImage: `linear-gradient(
            to bottom right,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0) 40%
          )`,
        }}
      />

      {/* BOTTOM-RIGHT ARC BORDER */}
      <div
        className="absolute inset-0 rounded-[12px] pointer-events-none"
        style={{
          border: `1px solid rgba(255,255,255,0.6)`,
          WebkitMaskImage: `linear-gradient(
            to top left,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0) 40%
          )`,
          maskImage: `linear-gradient(
            to top left,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0) 40%
          )`,
        }}
      />

      {/* INNER RECTANGLE (frosted gradient) */}
      <div
        className="relative rounded-[12px] px-4 py-2 flex items-center gap-3"
        style={{
          background:
            "linear-gradient(180deg, rgba(27,27,27,0.17) 28.22%, rgba(1,72,165,0.2) 185.84%)",
          backdropFilter: "blur(10px)",
        }}
      >
        {children}
      </div>
    </div>
  );
};
