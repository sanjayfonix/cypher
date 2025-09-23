"use client";

import { motion, Transition } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

// Nodes for hexagon-like polygon
const nodes = [
  { x: 300, y: 220, place: "Los Angeles" },
  { x: 500, y: 230, place: "San Diego" },
  { x: 460, y: 80, place: "Phoenix" },
  { x: 100, y: 50, place: "Las Vegas" },
  { x: 200, y: 150, place: "Santa Barbara" },
  { x: 100, y: 300, place: "North Hollywood" },
];

const edgeTimes = [
  ["7:30", "8:45"],
  ["8:45", "10:15"],
  ["10:15", "12:30"],
  ["12:30", "3:45"],
  ["3:45", "5:30"],
  ["5:30", "7:00"],
];

const bounceTransition: Transition = {
  duration: 0.95,
  repeat: Infinity,
  repeatType: "loop",
  ease: "easeInOut",
};

export default function TrackingAnimation() {
  const [progress, setProgress] = useState(0);
  const [pos, setPos] = useState({ x: nodes[0].x, y: nodes[0].y });
  const [activeEdge, setActiveEdge] = useState([0, 1]);

  const { segmentLengths, totalLength } = useMemo(() => {
    const lens = [];
    let total = 0;
    for (let i = 0; i < nodes.length; i++) {
      const next = (i + 1) % nodes.length;
      const dx = nodes[next].x - nodes[i].x;
      const dy = nodes[next].y - nodes[i].y;
      const len = Math.hypot(dx, dy);
      lens.push(len);
      total += len;
    }
    return { segmentLengths: lens, totalLength: total };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = (prev + 0.00025) % 1;
        const dist = next * totalLength;
        let cum = 0;
        let segIndex = 0;

        for (let i = 0; i < segmentLengths.length; i++) {
          if (cum + segmentLengths[i] >= dist) {
            segIndex = i;
            break;
          }
          cum += segmentLengths[i];
        }

        const segLen = segmentLengths[segIndex] || 1;
        const localDist = Math.max(0, dist - cum);
        const t = segLen === 0 ? 0 : localDist / segLen;

        const a = nodes[segIndex];
        const b = nodes[(segIndex + 1) % nodes.length];
        const x = a.x + (b.x - a.x) * t;
        const y = a.y + (b.y - a.y) * t;

        setPos({ x, y });
        setActiveEdge([segIndex, (segIndex + 1) % nodes.length]);

        return next;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [segmentLengths, totalLength]);

  const pathData =
    `M ${nodes[0].x} ${nodes[0].y} ` +
    nodes
      .slice(1)
      .map((n) => `L ${n.x} ${n.y}`)
      .join(" ") +
    ` Z`;

  const rippleConfigs = [
    { duration: 1, size: 12, color: "#C20000", delay: 0 },
    { duration: 2, size: 26, color: "#A30000", delay: 0.2 },
    { duration: 2.3, size: 26, color: "#A30000", delay: 0.2 },
    { duration: 2.5, size: 28, color: "#69D4FF", delay: 0.4, cxOffset: -5 },
  ];

  return (
    <div className="relative w-full h-[300px] sm:h-[1000px] md:h-[900px] lg:[700px] bg-[#0a0f1a] overflow-hidden">
      {/* === FULL BACKGROUND GRID === */}
      <svg
        viewBox="0 0 700 800"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#1C2C44"
              strokeWidth="1"
            />
          </pattern>

          {/* drop shadow filter */}
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="10"
              floodColor="#000"
              floodOpacity="0.45"
            />
          </filter>

          {/* glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* === TOP LEFT LABEL === */}
      <div className="absolute top-6 left-6 z-20 px-3 py-2 border border-[#3B6AB1] bg-[#0a0f1a]/80 rounded">
        <p className="text-[14px] md:text-[16px] text-white font-medium">
          Loc8 Tracking: Subject A
        </p>
        <p className="text-[14px] md:text-[16px] text-red-500 font-semibold">
          {edgeTimes[activeEdge[0]].join("-")}
        </p>
      </div>

      {/* === POLYGON + POINTER === */}
      <svg
        viewBox="0 -100 550 700"
        className="absolute inset-0 w-full h-full mt-12 sm:mt-0"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Polygon path */}
        <path d={pathData} fill="none" stroke="#3B6AB1" strokeWidth="1.5" />

        {/* Nodes */}
        {nodes.map((node, i) => {
          const isActive = activeEdge.includes(i);
          const edgeIndex = activeEdge[0];
          let timeLabel = "";
          if (i === activeEdge[0]) timeLabel = edgeTimes[edgeIndex][0];
          if (i === activeEdge[1]) timeLabel = edgeTimes[edgeIndex][1];

          return (
            <g key={i}>
              <circle
                cx={node.x}
                cy={node.y}
                r={6}
                fill={isActive ? "#69D4FF" : "#3B6AB1"}
                strokeWidth={isActive ? 1.5 : 0}
              />
              {isActive && (
                <g>
                  <text
                    x={node.x}
                    y={node.y - 28}
                    textAnchor="middle"
                    fill="white"
                    style={{ fontSize: "12px", fontWeight: 500 }}
                  >
                    {timeLabel}
                  </text>
                  <text
                    x={node.x}
                    y={node.y - 15}
                    textAnchor="middle"
                    fill="white"
                    style={{ fontSize: "12px", fontWeight: 500 }}
                  >
                    {node.place}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* Moving pointer + ripple */}
        <g transform={`translate(${pos.x}, ${pos.y})`}>
          {/* Shadow ellipse */}
          <motion.ellipse
            cx={0}
            cy={16}
            rx={12}
            ry={5}
            opacity={0.45}
            fill="#000"
            filter="url(#softShadow)"
            animate={{
              scale: [1, 0.78, 1],
              opacity: [0.45, 0.2, 0.45],
            }}
            style={{ transformOrigin: "center" }}
          />

          {/* Red pointer */}
          <motion.circle
            r={7.2}
            fill="#C20000"
            style={{ filter: "url(#glow)" }}
            animate={{ y: [0, -10, 0], scale: [1, 1.03, 1] }}
            
          />

          {/* Ripple rings */}
          {rippleConfigs.map((cfg, idx) => (
            <motion.circle
              key={idx}
              cx={cfg.cxOffset || 0}
              cy={0}
              fill="none"
              stroke={cfg.color}
              strokeWidth={1.6}
              initial={{ r: 0, opacity: 1 }}
              animate={{ r: cfg.size, opacity: 0, y: [-0.6, -4, -6] }}
              transition={{
                duration: cfg.duration,
                ease: "easeOut",
                repeat: Infinity,
                delay: cfg.delay,
                repeatDelay: 0.18,
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}



