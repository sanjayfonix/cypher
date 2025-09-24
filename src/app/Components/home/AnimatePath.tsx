


"use client";
import React, { useEffect, useRef } from "react";
import {
  Badge,
  Database,
  FaceScan,
  FingerPrintSearch,
  Handshake,
  MiddleIcon,
  Peoples,
} from "@/assets/icon";
import { GlassIcon } from "./GlassIcon";

export const AnimatedPath: React.FC<{
  d: string;
  colorId: string;
  gradient: [string, string];
  offset?: number;
  speed?: number;
}> = ({ d, colorId, gradient, offset = 0, speed = 2 }) => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const pointerRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    const pointer = pointerRef.current;
    if (!path || !pointer) return;

    const total = path.getTotalLength();
    let progress = offset;

    const wedgeLength = 46;
    const minThickness = 1;
    const maxThickness = 3;

    let frameId: number;

    const animate = () => {
      progress = ((progress + speed) % (total - wedgeLength));

      const steps = 6;
      const step = wedgeLength / steps;

      const topPoints: { x: number; y: number }[] = [];
      const botPoints: { x: number; y: number }[] = [];

      for (let i = 0; i <= steps; i++) {
        const dist = progress + i * step;
        const p1 = path.getPointAtLength(dist);
        const p2 = path.getPointAtLength(dist + 0.01);

        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        const nx = -dy / len;
        const ny = dx / len;

        const t = i / steps;
        const thickness = minThickness + t * (maxThickness - minThickness);

        topPoints.push({ x: p1.x + nx * thickness, y: p1.y + ny * thickness });
        botPoints.push({ x: p1.x - nx * thickness, y: p1.y - ny * thickness });
      }

      // front tip
      const last = path.getPointAtLength(progress + wedgeLength);
      const after = path.getPointAtLength(progress + wedgeLength + 5);
      const dxF = after.x - last.x;
      const dyF = after.y - last.y;
      const lenF = Math.sqrt(dxF * dxF + dyF * dyF) || 1;
      const tipFront = {
        x: last.x + (dxF / lenF) * 6,
        y: last.y + (dyF / lenF) * 6,
      };

      // back tip
      const first = path.getPointAtLength(progress);
      const before = path.getPointAtLength(Math.max(0, progress - 5));
      const dxB = first.x - before.x;
      const dyB = first.y - before.y;
      const lenB = Math.sqrt(dxB * dxB + dyB * dyB) || 1;
      const tipBack = {
        x: first.x - (dxB / lenB) * 6,
        y: first.y - (dyB / lenB) * 6,
      };

      let newD = `M ${tipBack.x},${tipBack.y}`;
      botPoints.forEach((pt) => (newD += ` L ${pt.x},${pt.y}`));
      newD += ` L ${tipFront.x},${tipFront.y}`;
      for (let i = topPoints.length - 1; i >= 0; i--) {
        newD += ` L ${topPoints[i].x},${topPoints[i].y}`;
      }
      newD += " Z";

      // 🔹 Direct DOM update
      pointer.setAttribute("d", newD);

      frameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frameId);
  }, [offset, speed]);

  return (
    <>
     <g>
      <path ref={pathRef} d={d} fill="none" stroke="#0C438C" />
      <path ref={pointerRef} fill={`url(#${colorId})`} filter="url(#shadow)" />
      <defs>
        <linearGradient id={colorId} x1="1" y1="0" x2="0" y2="0">
          <stop stopColor={gradient[0]} />
          <stop offset="1" stopColor={gradient[1]} />
        </linearGradient>
      </defs>
      </g>
    </>
  );
}


const AnimatedPathWithPointer: React.FC<{
  d: string;
  colorId: string;
  gradient: [string, string];
  offset?: number;
  speed?: number;
}> = ({ d, colorId, gradient, offset = 0, speed = 2 }) => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const pointerRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    const pointer = pointerRef.current;
    if (!path || !pointer) return;

    const total = path.getTotalLength();
    let progress = offset;

    const wedgeLength = 46;
    const minThickness = 1;
    const maxThickness = 3;

    let frameId: number;

    const animate = () => {
      progress = ((progress + speed) % (total - wedgeLength));

      const steps = 6;
      const step = wedgeLength / steps;

      const topPoints: { x: number; y: number }[] = [];
      const botPoints: { x: number; y: number }[] = [];

      for (let i = 0; i <= steps; i++) {
        const dist = progress + i * step;
        const p1 = path.getPointAtLength(dist);
        const p2 = path.getPointAtLength(dist + 0.01);

        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        const nx = -dy / len;
        const ny = dx / len;

        const t = i / steps;
        const thickness = minThickness + t * (maxThickness - minThickness);

        topPoints.push({ x: p1.x + nx * thickness, y: p1.y + ny * thickness });
        botPoints.push({ x: p1.x - nx * thickness, y: p1.y - ny * thickness });
      }

      // front tip
      const last = path.getPointAtLength(progress + wedgeLength);
      const after = path.getPointAtLength(progress + wedgeLength + 5);
      const dxF = after.x - last.x;
      const dyF = after.y - last.y;
      const lenF = Math.sqrt(dxF * dxF + dyF * dyF) || 1;
      const tipFront = {
        x: last.x + (dxF / lenF) * 6,
        y: last.y + (dyF / lenF) * 6,
      };

      // back tip
      const first = path.getPointAtLength(progress);
      const before = path.getPointAtLength(Math.max(0, progress - 5));
      const dxB = first.x - before.x;
      const dyB = first.y - before.y;
      const lenB = Math.sqrt(dxB * dxB + dyB * dyB) || 1;
      const tipBack = {
        x: first.x - (dxB / lenB) * 6,
        y: first.y - (dyB / lenB) * 6,
      };

      let newD = `M ${tipBack.x},${tipBack.y}`;
      botPoints.forEach((pt) => (newD += ` L ${pt.x},${pt.y}`));
      newD += ` L ${tipFront.x},${tipFront.y}`;
      for (let i = topPoints.length - 1; i >= 0; i--) {
        newD += ` L ${topPoints[i].x},${topPoints[i].y}`;
      }
      newD += " Z";

      // 🔹 Direct DOM update
      pointer.setAttribute("d", newD);

      frameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frameId);
  }, [offset, speed]);

  return (
    <>
      <path ref={pathRef} d={d} fill="none" stroke="#0C438C" />
      <path ref={pointerRef} fill={`url(#${colorId})`} filter="url(#shadow)" />
      <defs>
        <linearGradient id={colorId} x1="1" y1="0" x2="0" y2="0">
          <stop stopColor={gradient[0]} />
          <stop offset="1" stopColor={gradient[1]} />
        </linearGradient>
      </defs>
    </>
  );
};

export const AnimateBannerPaths: React.FC = () => {
  return (
    <svg
      className="w-full max-w-[1300px] h-auto mx-auto"
      viewBox="0 0 1300 400"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
    >
      <svg
        x={"369"}
        y={"-105"}
        width="509"
        height="619"
        viewBox="0 0 509 509"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.6" filter="url(#filter0_f_1128_929)">
          <circle
            cx="254.5"
            cy="254.5"
            r="150.5"
            fill="#167BFF"
            fillOpacity="0.4"
          />
        </g>
        <ellipse
          opacity="0.9"
          cx="254.5"
          cy="261.5"
          rx="186.5"
          ry="156.5"
          fill="url(#paint0_linear_1128_929)"
        />
        <defs>
          <filter
            id="filter0_f_1128_929"
            x="0"
            y="0"
            width="509"
            height="509"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="52"
              result="effect1_foregroundBlur_1128_929"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1128_929"
            x1="254.5"
            y1="418"
            x2="254.5"
            y2="378.032"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#167BFF" />
            <stop offset="1" stopColor="#3B6499" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Concentric circles */}
      <circle
        className="animate-blink"
        cx="619"
        cy="169.75"
        r="73.5"
        stroke="#0C438C"
      />
      <circle
        className="animate-blink"
        opacity="0.2"
        cx="619"
        cy="171.75"
        r="90.5"
        stroke="#0C438C"
      />
      <circle
        className="animate-blink"
        opacity="0.1"
        cx="619"
        cy="171.75"
        r="108.5"
        stroke="#0C438C"
      />

      <g mask="url(#pointersMask)">
        <AnimatedPathWithPointer
          speed={1}
          d="M147 295H193.967C207.639 295 220.714 289.402 230.15 279.508L284.527 222.492C293.962 212.598 307.038 207 320.71 207H581
          M652 207H955.399C970.169 207 984.183 213.53 993.683 224.839L1037.64 277.161C1047.14 288.47 1061.15 295 1075.92 295H1091"
          colorId="grad1"
          gradient={["#016FFF", "#093C80"]}
          offset={0}
        />
        <AnimatedPathWithPointer
          speed={3}
          d="M147 49H167.374C184.77 49 200.916 58.0421 210.006 72.875L234.671 113.125C243.761 127.958 259.907 137 277.303 137H575 
          M658 137H917.289C930.961 137 944.037 131.402 953.472 121.508L1007.85 64.492C1017.28 54.5983 1030.36 49 1044.03 49H1091"
          colorId="grad2"
          gradient={["#016FFF", "#093C80"]}
          offset={100}
        />
        <AnimatedPathWithPointer
          speed={2}
          d="M95.3013 172C224.447 172 579.999 172 565.999 170 M670 172C1013.55 172 1142.7 172 1142.7 172"
          colorId="grad3"
          gradient={["#016FFF", "#093C80"]}
          offset={200}
        />
      </g>

      {/* Static icons & elements */}
      <foreignObject x="565.751" y="115.5" height={140} width={140}>
        <GlassIcon size={105} icon={<MiddleIcon />} />
      </foreignObject>
      <foreignObject x="62.7495" y="7" height={92} width={92}>
        <g filter="url(#filter0_d_1_437)">
          <div style={{ width: 84, height: 84, borderRadius: "50%" }}>
            <GlassIcon arcLength={220} isShadow={true} size={84} icon={<Peoples />} />
          </div>
        </g>
      </foreignObject>
      <foreignObject x="12.7495" y="120" height={92} width={92}>
        <g filter="url(#filter0_d_1_437)">
          <div style={{ width: 84, height: 84, borderRadius: "50%" }}>
            <GlassIcon arcLength={220} isShadow={true} size={84} icon={<FaceScan />} />
          </div>
        </g>
      </foreignObject>
      <foreignObject x="63.7495" y="250" height={95} width={95}>
        <GlassIcon arcLength={220} isShadow={true} size={84} icon={<FingerPrintSearch />} />
      </foreignObject>
      <foreignObject x="1090.75" y="7" height={92} width={92}>
        <g filter="url(#filter5_d_1_437)">
          <div style={{ width: 84, height: 84, borderRadius: "50%" }}>
            <GlassIcon arcLength={220} isShadow={true} size={84} icon={<Badge />} />
          </div>
        </g>
      </foreignObject>
      <foreignObject x="1142.5" y="129.5" height={92} width={92}>
        <g filter="url(#filter5_d_1_437)">
          <GlassIcon arcLength={220} isShadow={true} size={84} icon={<Database />} />
        </g>
      </foreignObject>
      <foreignObject x="1090.75" y="252" height={92} width={92}>
        <g filter="url(#filter5_d_1_437)">
          <GlassIcon arcLength={220} isShadow={true} size={84} icon={<Handshake />} />
        </g>
      </foreignObject>

      {/* Shared filters */}
      <defs>
        <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="shadow" x="0" y="0" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="2"
            floodColor="#157AFF"
            floodOpacity="0.5"
          />
        </filter>
        <filter
          id="filter0_f_1128_929"
          x="0"
          y="0"
          width="2000"
          height="2000"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="52"
            result="effect1_foregroundBlur_1128_929"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1128_929"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
          gradientUnits="userBoundingBox"
        >
          <stop stopColor="#167BFF" />
          <stop offset="1" stopColor="#3B6499" stopOpacity="0" />
        </linearGradient>

        <mask id="pointersMask">
          {/* Everything visible by default */}
          <rect x="0" y="0" width="1300" height="400" fill="white" />

          {/* Hide area for middle icon */}
          <rect
            x="565.75"
            y="115.5"
            width="106"
            height="106"
            rx="70"
            fill="black"
          />

          {/* Hide areas for corner icons */}
          <circle cx="105" cy="50" r="40" fill="black" />
          <circle cx="60" cy="160" r="35" fill="black" />
          <circle cx="100" cy="270" r="50" fill="black" />
          <circle cx="1115" cy="50" r="25" fill="black" />
          <circle cx="1165" cy="150" r="30" fill="black" />
          <circle cx="1115" cy="270" r="30" fill="black" />
        </mask>
      </defs>
    </svg>
  );
};








