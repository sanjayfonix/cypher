"use client";
import React from "react";

type Direction = "left" | "right" | "up" | "down";

interface PointerGridProps {
  width?: number | string; // overall SVG width
  height?: number | string; // overall SVG height
  pointerWidth?: number;
  pointerHeight?: number;
  speed?: number; // seconds for one loop
  horizontal?: {
    y: number;
    fromX: number;
    toX: number;
    direction: "left" | "right";
  };
  vertical?: {
    x: number;
    fromY: number;
    toY: number;
    direction: "up" | "down";
  }[];
}

export const PointerGrid: React.FC<PointerGridProps> = ({
  width = "100%", // default responsive
  height = "100%",
  pointerWidth = 25,
  pointerHeight = 6,
  speed = 4,
  horizontal = {
    y: 184.982,
    fromX: 196.18,
    toX: 80.7358,
    direction: "left",
  },
  vertical = [
    { x: 139.143, fromY: 146.084, toY: 0, direction: "up" },
    { x: 139.143, fromY: 184.982, toY: 255, direction: "down" },
  ],
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 260"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 🔹 GRID */}
      <path
        d="M80.7358 106.186H109.44V0H110.44V106.186H139.143V0H140.143V106.186H168.847V0H169.847V106.186H195.59V107.186H169.847V145.084H195.885V146.084H169.847V183.982H196.18V184.982H169.847V222.879H196.476V223.879H169.847V255H168.847V223.879H140.143V255H139.143V223.879H110.44V255H109.44V223.879H80.7358V255H79.7358V223.879H1.75049V222.879H79.7358V184.982H1.45459V183.982H79.7358V146.084H1.15967V145.084H79.7358V107.186H0.864746V106.186H79.7358V0H80.7358V106.186ZM80.7358 222.879H109.44V184.982H80.7358V222.879ZM110.44 222.879H139.143V184.982H110.44V222.879ZM140.143 222.879H168.847V184.982H140.143V222.879ZM80.7358 183.982H109.44V146.084H80.7358V183.982ZM110.44 183.982H139.143V146.084H110.44V183.982ZM140.143 183.982H168.847V146.084H140.143V183.982ZM80.7358 107.186V145.084H109.44V107.186H80.7358ZM110.44 107.186V145.084H139.143V107.186H110.44ZM140.143 107.186V145.084H168.847V107.186H140.143Z"
        fill="url(#paint0_linear_grid)"
      />

      {/* 🔹 GRID GRADIENT */}
      <defs>
        <linearGradient
          id="paint0_linear_grid"
          x1="204.501"
          y1="242.466"
          x2="-25.5857"
          y2="106.208"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.1" />
          <stop offset="1" stopColor="#999999" stopOpacity="0" />
        </linearGradient>

        {/* 🔹 POINTER GRADIENT */}
        <linearGradient
          id="paint0_linear_pointer"
          x1="2.09898"
          y1="3.01866"
          x2="22.2954"
          y2="3.01871"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.024" stopColor="#C4DEFF" />
          <stop offset="0.63" stopColor="#006EFF" />
          <stop offset="1" stopColor="#093C80" />
        </linearGradient>

        <filter
          id="pointerShadow"
          x="0.099"
          y="0.197"
          width="24.196"
          height="5.643"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="drop1" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="drop1" result="drop2" />
          <feBlend mode="normal" in="SourceGraphic" in2="drop2" result="shape" />
        </filter>
      </defs>

      {/* 🔹 Pointer definition */}
      <defs>
        <g id="pointer">
          <path
            d="M22.2954 3.01865L2.92452 3.84004C2.92452 3.84004 2.09898 3.33943 2.09898 3.01865C2.09898 2.69788 2.92452 2.19727 2.92452 2.19727L22.2954 3.01865Z"
            fill="url(#paint0_linear_pointer)"
            filter="url(#pointerShadow)"
          />
        </g>
      </defs>

      {/* 🔹 Horizontal pointer */}
      {horizontal && (
        <>
          <path
            id="h-line"
            d={`M${horizontal.fromX} ${horizontal.y} H${horizontal.toX}`}
            stroke="transparent"
            fill="none"
          />
          <g
            transform={
              horizontal.direction === "left"
                ? "scale(-1,1) translate(27,-37) rotate(-180)"
                : "scale(1,-1) translate(25,43) rotate(-180)"
            }
          >
            <svg width={pointerWidth} height={pointerHeight} viewBox="0 0 25 6">
              <use href="#pointer" />
            </svg>
            <animateMotion
              dur={`${speed}s`}
              repeatCount="indefinite"
              keyPoints={horizontal.direction === "left" ? "0.5;1" : "0.5;0"}
              keyTimes="0;1"
              orient="auto"
            >
              <mpath href="#h-line" />
            </animateMotion>
          </g>
        </>
      )}

      {/* 🔹 Vertical pointers */}
      {vertical.map((v, idx) => (
        <g
          key={idx}
          transform={v.direction === "up" ? "rotate(90) translate(-25,-3)" : "rotate(-90) translate(0,-3)"}
        >
          <path
            id={`v-line-${idx}`}
            d={`M${v.x} ${v.fromY} V${v.toY}`}
            stroke="transparent"
            fill="none"
          />
          <svg width={pointerWidth} height={pointerHeight} viewBox="0 0 25 6">
            <use href="#pointer" />
          </svg>
          <animateMotion
            dur={`${speed}s`}
            repeatCount="indefinite"
            keyPoints="0;1"
            keyTimes="0;1"
            orient="auto"
          >
            <mpath href={`#v-line-${idx}`} />
          </animateMotion>
        </g>
      ))}
    </svg>
  );
};

