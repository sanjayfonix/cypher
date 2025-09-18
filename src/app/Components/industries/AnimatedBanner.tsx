import React, { useEffect, useRef, useState } from "react";
import { GlassIcon } from "../home/GlassIcon";
import { IndustryIcon1, Peoples } from "@/assets/icon";

type Pos = { x: number; y: number; angle: number };

const POINTER_D = "M0 0 L36 -4 C38 -4 40 -2 40 0 C40 2 38 4 36 4 L0 0 Z";

// GlassIcon definitions (positions & radius)
const ICONS = [
  { cx: 1120 + 50, cy: 20 + 50, r: 50 },   // (x=1120,y=20,w=100,h=100)
  { cx: 1220 + 50, cy: 235 + 50, r: 50 },  // (x=1220,y=235,w=100,h=100)
  { cx: 920 + 50,  cy: 325 + 50, r: 50 },  // (x=920,y=325,w=100,h=100)
];

const AnimatedPath: React.FC = () => {
  const path1Ref = useRef<SVGPathElement | null>(null);
  const path2Ref = useRef<SVGPathElement | null>(null);
  const path3Ref = useRef<SVGPathElement | null>(null);

  const [lengths, setLengths] = useState<number[]>([0, 0, 0]);
  const [poses, setPoses] = useState<Pos[]>([
    { x: 0, y: 0, angle: 0 },
    { x: 0, y: 0, angle: 0 },
    { x: 0, y: 0, angle: 0 },
  ]);

  useEffect(() => {
    const p1 = path1Ref.current;
    const p2 = path2Ref.current;
    const p3 = path3Ref.current;
    if (p1 && p2 && p3) {
      setLengths([p1.getTotalLength(), p2.getTotalLength(), p3.getTotalLength()]);
    }
  }, []);

  useEffect(() => {
    let raf = 0;
    const durations = [10000, 12000, 8000];
    const delta = 26;
    const start = performance.now();

    const animate = () => {
      const now = performance.now();
      const newPoses: Pos[] = [
        { x: 0, y: 0, angle: 0 },
        { x: 0, y: 0, angle: 0 },
        { x: 0, y: 0, angle: 0 },
      ];

      const paths = [path1Ref.current, path2Ref.current, path3Ref.current];

      for (let i = 0; i < 3; i++) {
        const path = paths[i];
        const L = lengths[i] || 0;
        if (!path || L === 0) continue;

        const t = ((now - start) % durations[i]) / durations[i];
        const curLen = t * L;

        const p = path.getPointAtLength(curLen);
        const nextLen = Math.min(L, curLen + delta);
        const nextP = path.getPointAtLength(nextLen);

        const angle = (Math.atan2(nextP.y - p.y, nextP.x - p.x) * 180) / Math.PI;
        newPoses[i] = { x: p.x, y: p.y, angle };
      }

      setPoses(newPoses);
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [lengths]);

  return (
    <svg
      width="1440"
      height="527"
      viewBox="0 0 1440 527"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      {/* Invisible guide paths (full, for animation) */}
      <path
        ref={path1Ref}
        d="M0.018569 203.466H948.446C958.731 203.466 968.766 200.295 977.182 194.384L1239.62 10.0775C1248.03 4.16653 1258.07 0.994873 1268.35 0.994873H1487.43"
        stroke="transparent"
        fill="none"
      />
      <path
        ref={path2Ref}
        d="M0.0185547 444.523H248.582C261.03 444.523 273.029 439.881 282.235 431.503L341.529 377.544C350.735 369.166 362.734 364.523 375.182 364.523H1037.03C1046.58 364.523 1055.93 367.259 1063.97 372.406L1293.28 519.113C1301.33 524.26 1310.68 526.995 1320.23 526.995H1487.43"
        stroke="transparent"
        fill="none"
      />
      <path
        ref={path3Ref}
        d="M-0.000244141 284H1665"
        stroke="transparent"
        fill="none"
      />

      {/* Visible display paths with gaps for icons */}
      {/* path1 and path2 are curved — leaving them full for now */}
      <path
        d="M0.018569 203.466H948.446C958.731 203.466 968.766 200.295 977.182 194.384L1239.62 10.0775C1248.03 4.16653 1258.07 0.994873 1268.35 0.994873H1487.43"
        stroke="#0C438C"
        strokeWidth={1.5}
        fill="none"
      />
      <path
        d="M0.0185547 444.523H248.582C261.03 444.523 273.029 439.881 282.235 431.503L341.529 377.544C350.735 369.166 362.734 364.523 375.182 364.523H1037.03C1046.58 364.523 1055.93 367.259 1063.97 372.406L1293.28 519.113C1301.33 524.26 1310.68 526.995 1320.23 526.995H1487.43"
        stroke="#0C438C"
        strokeWidth={1.5}
        fill="none"
      />
      {/* path3 with gaps around icons */}
      <path d="M0 284H1220" stroke="#0C438C" strokeWidth={1.5} />
      <path d="M1320 284H1665" stroke="#0C438C" strokeWidth={1.5} />

      {/* Pointers (move on invisible guide paths) */}
      <g transform={`translate(${poses[0].x}, ${poses[0].y}) rotate(${poses[0].angle})`}>
        <path d={POINTER_D} fill="url(#g0)" />
      </g>
      <g transform={`translate(${poses[1].x}, ${poses[1].y}) rotate(${poses[1].angle})`}>
        <path d={POINTER_D} fill="url(#g1)" />
      </g>
      <g transform={`translate(${poses[2].x}, ${poses[2].y}) rotate(${poses[2].angle})`}>
        <path d={POINTER_D} fill="url(#g2)" />
      </g>
      <foreignObject x="1127" y="18" height={100} width={100}>
     
      <GlassIcon size={84} icon={<Peoples/>} />
      </foreignObject>
      <foreignObject x="1227" y="230" height={100} width={100}>
        <GlassIcon size={84} icon={<Peoples />} />
      </foreignObject>
      <foreignObject x="920" y="325" height={100} width={100}>
        <GlassIcon size={84} icon={<IndustryIcon1/>} />
      </foreignObject>
      
      <defs>
        <filter id="iconGlow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur stdDeviation="12" result="blur" />
  </filter>
        <linearGradient id="g0" x1="0" y1="0" x2="40" y2="0">
          <stop stopColor="#016FFF" />
          <stop offset="1" stopColor="#093C80" />
        </linearGradient>
        <linearGradient id="g1" x1="0" y1="0" x2="40" y2="0">
          <stop stopColor="#016FFF" />
          <stop offset="1" stopColor="#093C80" />
        </linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="40" y2="0">
          <stop stopColor="#016FFF" />
          <stop offset="1" stopColor="#093C80" />
        </linearGradient>
        <filter id="filter1">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="50"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 0.6 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_2341"/>
<feBlend mode="normal" in="BackgroundImageFix" in2="effect1_dropShadow_222_2341" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
</filter>
      </defs>
    </svg>
  );
};

export default AnimatedPath;



