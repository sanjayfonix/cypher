"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedPathProps {
  pathD: string;
  stroke?: string;
  strokeWidth?: number;
  duration?: number;
  viewBox?: string;
  width?: string | number;
}

const AnimatedPath: React.FC<AnimatedPathProps> = ({
  pathD,
  stroke = "#0C438C",
  strokeWidth = 2,
  duration = 5000,
  viewBox = "0 -20 1440 300",
  width = "100%",
}) => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [pathLength, setPathLength] = useState(0);
  const [pos, setPos] = useState<{ x: number; y: number; angle: number }>({
    x: 0,
    y: 0,
    angle: 0,
  });

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [pathD]);

  useEffect(() => {
    if (!pathRef.current || pathLength === 0) return;

    let frameId: number;
    const delta = 0.5;

    const animate = (startTime: number) => {
      frameId = requestAnimationFrame((now) => {
        const elapsed = (now - startTime) % duration;
        const t = elapsed / duration;

        // animate along path
        const currentLength = pathLength - t * pathLength;
        const point = pathRef.current!.getPointAtLength(currentLength);

        const nextLength = Math.max(0, currentLength - delta);
        const nextPoint = pathRef.current!.getPointAtLength(nextLength);

        const angle =
          (Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * 180) /
          Math.PI;

        setPos({ x: point.x, y: point.y, angle });

        frameId = requestAnimationFrame(() => animate(startTime));
      });
    };

    const startTime = performance.now();
    animate(startTime);

    return () => cancelAnimationFrame(frameId);
  }, [pathLength, duration]);

  return (
    <svg
      width={width}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible"
    >
      {/* The path itself */}
      <path ref={pathRef} d={pathD} stroke={stroke} strokeWidth={strokeWidth} />

      {/* Pointer following the path */}
      {pathLength > 0 && (
        <g transform={`translate(${pos.x}, ${pos.y}) rotate(${pos.angle})`}>
          <g filter="url(#pointerFilter)" transform="translate(-63,-5)">
            <path
              d="M3 5.00037L60.5474 3.00037C60.5474 3.00037 63 4.21932 63 5.00037C63 5.78141 60.5474 7.00036 60.5474 7.00036L3 5.00037Z"
              fill="url(#pointerGradient)"
            />
          </g>

          <defs>
            <filter
              id="pointerFilter"
              x="0"
              y="0"
              width="66"
              height="10"
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
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>

            <linearGradient
              id="pointerGradient"
              x1="63"
              y1="5.00036"
              x2="3.00001"
              y2="5.00017"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#016FFF" />
              <stop offset="1" stopColor="#093C80" />
            </linearGradient>
          </defs>
        </g>
      )}
    </svg>
  );
};

export default AnimatedPath;







