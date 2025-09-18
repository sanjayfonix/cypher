'use client';

import React,{useState} from 'react';

export default function SemicircularArcs({
  viewWidth = 556,   // default original design width
  viewHeight = 300,  // default original design height
}: {
  viewWidth?: number;
  viewHeight?: number;
}) {
  const pointerPositions = [
    { cx: 385, cy: 20 },
    { cx: 335, cy: 160 },
    { cx: 150, cy: 90 },
  ];

  const texts = ['Fraud Detection', 'Digital Forensics', 'OSINT'];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-[800px] mx-auto">
      <svg
        className="w-full h-auto"
        viewBox={`0 0 ${viewWidth} ${viewHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Arcs */}
        <path
          d="M397.711 250 C397.711 221.622 385.151 194.406 362.795 174.34 C340.438 154.273 310.117 143 278.5 143 C246.883 143 216.561 154.273 194.205 174.34 C171.848 194.406 159.289 221.622 159.289 250"
          stroke="url(#paint0_linear_222_2088)"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeDasharray="12 12"
        />
        <path
          d="M455.091 250 C455.091 208.096 436.538 167.908 403.514 138.277 C370.489 108.646 325.698 92 278.995 92 C232.291 92 187.5 108.646 154.476 138.277 C121.451 167.908 102.898 208.096 102.898 250"
          stroke="url(#paint1_linear_222_2088)"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeDasharray="12 12"
        />
        <path
          d="M501.588 250 C501.588 196.957 478.084 146.086 436.247 108.579 C394.41 71.0714 337.667 50 278.5 50 C219.333 50 162.59 71.0714 120.753 108.579 C78.9155 146.086 55.4116 196.957 55.4116 250"
          stroke="url(#paint2_linear_222_2088)"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeDasharray="12 12"
        />
        <path
          d="M556 250 C556 183.961 526.763 120.627 474.722 73.9304 C422.681 27.2339 352.098 1 278.5 1 C204.902 0.999995 134.319 27.2338 82.2779 73.9304 C30.2365 120.627 1.00001 183.961 1 250 "
          stroke="url(#paint3_linear_222_2088)"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeDasharray="12 12"
        />

        {/* Pointers */}
        {pointerPositions.map((pos, i) => (
          <circle
          className='pointer-circle'
          onMouseEnter={()=>setHoveredIndex(i)}
          onMouseLeave={()=>setHoveredIndex(null)}
            key={i}
            cx={pos.cx}
            cy={pos.cy}
            r={6}
            fill="#838383"
          />
        ))}






        {/* Labels */}
        {pointerPositions.map((pos, i) => (
  <foreignObject
  key={`label-${i}`}
  x={i === 0 ? pos.cx + 20 : i === 1 ? pos.cx + 20 : pos.cx + 10}
  y={i === 0 ? pos.cy + 10 : i === 1 ? pos.cy - 10 : pos.cy - 70}
  width={170}
  height={40}
>
  <div
    
    className="gap-4 flex p-2 w-fit rounded-sm border text-sm  font-normal"
    style={{ position: "relative",color:hoveredIndex===i?'blue':'#6B6B6B' }}
  >
    {texts[i]}
  </div>
</foreignObject>
))}
        {/* Gradients */}
        <defs>
          <linearGradient id="paint0_linear_222_2088" x1="278.5" y1="143" x2="278.5" y2="250">
            <stop offset="0.115385" stopColor="#CCCCCC" />
            <stop offset="1" stopColor="#030A14" />
          </linearGradient>
          <linearGradient id="paint1_linear_222_2088" x1="278.995" y1="92" x2="278.995" y2="250">
            <stop offset="0.115385" stopColor="#CCCCCC" />
            <stop offset="1" stopColor="#030A14" />
          </linearGradient>
          <linearGradient id="paint2_linear_222_2088" x1="278.5" y1="50" x2="278.5" y2="250">
            <stop offset="0.115385" stopColor="#CCCCCC" />
            <stop offset="1" stopColor="#030A14" />
          </linearGradient>
          <linearGradient id="paint3_linear_222_2088" x1="278.5" y1="1" x2="278.5" y2="250">
            <stop offset="0.115385" stopColor="#CCCCCC" />
            <stop offset="1" stopColor="#030A14" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
