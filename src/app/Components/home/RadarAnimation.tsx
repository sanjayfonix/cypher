"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SIZE = 600;
const CX = SIZE / 2;
const CY = SIZE / 2;
const RADIUS = 310;

// helper
function precise(num: number, decimals = 4) {
  return parseFloat(num.toFixed(decimals));
}

type Point = {
  id: string;
  label: string;
  x: number;
  y: number;
  color?: string;
};

const points: Point[] = [
  (() => {
    const angle = 22;
    const r = RADIUS - 24;
    return {
      id: "investigation",
      label: "Investigation",
      x: precise(CX + r * Math.cos((angle * Math.PI) / 180)),
      y: precise(CY + r * Math.sin((angle * Math.PI) / 180)),
      color: "#cfe9ff",
    };
  })(),
  (() => {
    const angle = 145;
    const r = RADIUS - 120;
    return {
      id: "data",
      label: "Data Analysis",
      x: precise(CX + r * Math.cos((angle * Math.PI) / 180)),
      y: precise(CY + r * Math.sin((angle * Math.PI) / 180)),
      color: "#7fb7ff",
    };
  })(),
  (() => {
    const angle = 220;
    const r = RADIUS - 90;
    return {
      id: "risk",
      label: "Risk Assessment",
      x: precise(CX + r * Math.cos((angle * Math.PI) / 180)),
      y: precise(CY + r * Math.sin((angle * Math.PI) / 180)),
      color: "#7fb7ff",
    };
  })(),
  (() => {
    const angle = 10;
    const r = 40;
    return {
      id: "malintent",
      label: "Malintent",
      x: precise(CX + r * Math.cos((angle * Math.PI) / 180) + 18),
      y: precise(CY + r * Math.sin((angle * Math.PI) / 180) - 4),
      color: "#ff3d6e",
    };
  })(),
];

// ✅ Install navigation guard once
function installNavigationGuardOnce() {
  if (typeof window === "undefined") return;
  const w = window as any;
  if (w.__navGuardInstalled) return;
  w.__navGuardInstalled = true;

  const markNav = () => {
    w.__navigationStarted = true;
    setTimeout(() => {
      w.__navigationStarted = false;
    }, 2500);
  };

  document.addEventListener(
    "click",
    (e) => {
      try {
        let el = e.target as HTMLElement | null;
        while (el && el.tagName !== "A") el = el.parentElement;
        if (el && (el as HTMLAnchorElement).getAttribute) {
          const href = (el as HTMLAnchorElement).getAttribute("href");
          const target = (el as HTMLAnchorElement).getAttribute("target");
          if (href && href.startsWith("/") && target !== "_blank") {
            markNav();
          }
        }
      } catch {}
    },
    { capture: true, passive: true }
  );

  window.addEventListener(
    "popstate",
    () => {
      markNav();
    },
    { passive: true }
  );
}

export default function RadarAccurate({ size = 420 }: { size?: number }) {
  const [angle, setAngle] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number | null>(null);
  const [activeHit, setActiveHit] = useState<string | null>(null);
  const hitTimeout = useRef<number | null>(null);

  // Sweep loop
  useEffect(() => {
  installNavigationGuardOnce();

  // ✅ Reset nav flag when Radar mounts
  (window as any).__navigationStarted = false;

  const speedDegPerSec = 20;

  function tick(now: number) {
    if ((window as any).__navigationStarted) {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      return;
    }

    if (lastRef.current === null) {
      lastRef.current = now;
    }
    const dt = (now - (lastRef.current as number)) / 1000;
    lastRef.current = now;
    setAngle((a) => (a + speedDegPerSec * dt) % 360);
    rafRef.current = requestAnimationFrame(tick);
  }

  lastRef.current = performance.now();
  rafRef.current = requestAnimationFrame(tick);

  return () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    if (hitTimeout.current) {
      window.clearTimeout(hitTimeout.current);
      hitTimeout.current = null;
    }
  };
}, []);

  // Hit detection
  useEffect(() => {
    const thresholdDeg = 3.0;
    for (const p of points) {
      const dx = p.x - CX;
      const dy = p.y - CY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const pointAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
      const normalizedPointAngle = (pointAngle + 360) % 360;
      const diff = Math.abs(((normalizedPointAngle - angle + 540) % 360) - 180);

      if (diff <= thresholdDeg && dist <= RADIUS + 2) {
        if (activeHit !== p.id) {
          setActiveHit(p.id);
          if (hitTimeout.current) window.clearTimeout(hitTimeout.current);
          hitTimeout.current = window.setTimeout(() => {
            setActiveHit(null);
            hitTimeout.current = null;
          }, 700);
        }
        return;
      }
    }
  }, [angle, activeHit]);

  // Label helper
  function Label({ x, y, text }: { x: number; y: number; text: string }) {
    return (
      <g transform={`translate(${x},${y})`}>
        <rect
          x={6}
          y={-12}
          rx={6}
          ry={6}
          width={text.length * 6 + 18}
          height={18}
          fill="#051a2b"
          opacity={0.55}
        />
        <text
          x={text === "Investigation" ? -20 : 12}
          y={
            text === "Risk Assessment"
              ? -30
              : text === "Data Analysis"
              ? -15
              : 12
          }
          fontSize={14}
          fill="#d9f0ff"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          {text}
        </text>
      </g>
    );
  }

  return (
    <div className="flex items-center justify-start">
      <svg
        viewBox={`0 0 ${SIZE + 40} ${SIZE}`}
        width={size}
        height={size}
        className="w-full h-full max-w-full rounded-full drop-shadow-lg"
      >
        <defs>
          <radialGradient id="bgGrad" cx="50%" cy="45%">
            <stop offset="0%" stopColor="#071726" />
            <stop offset="65%" stopColor="#071f36" />
            <stop offset="100%" stopColor="#041428" />
          </radialGradient>
          <linearGradient id="sweepGrad" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#aee9ff" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#7fd3ff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#00a6ff" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Background grid + circles */}
        <g>
          <circle cx={CX} cy={CY} r={RADIUS + 18} fill="url(#bgGrad)" />
          {[60, 140, 220, 300].map((r, i) => (
            <circle
              key={i}
              cx={CX}
              cy={CY}
              r={r}
              stroke="#10324a"
              strokeWidth={2}
              fill="none"
              opacity={0.6}
            />
          ))}
          <line
            x1={CX}
            y1={CY - RADIUS - 10}
            x2={CX}
            y2={CY + RADIUS + 10}
            stroke="#0b445f"
          />
          <line
            x1={CX - RADIUS - 10}
            y1={CY}
            x2={CX + RADIUS + 10}
            y2={CY}
            stroke="#0b445f"
          />
        </g>

        {/* Malintent special node */}
        <g>
          <circle
            cx={points[3].x}
            cy={points[3].y}
            r={36}
            fill="none"
            stroke="rgba(255,61,110,0.35)"
            strokeWidth={2}
          />
          <circle
            cx={points[3].x}
            cy={points[3].y}
            r={26}
            fill="none"
            stroke="rgba(255,61,110,0.5)"
            strokeWidth={2}
          />
          <circle
            cx={points[3].x}
            cy={points[3].y}
            r={18}
            fill="rgba(255,61,110,0.25)"
          />
          <circle cx={points[3].x} cy={points[3].y} r={10} fill={points[3].color} />
          <rect
            x={points[3].x - 42}
            y={points[3].y - 12}
            width={84}
            height={24}
            rx={4}
            ry={4}
            fill="rgba(255,61,110,0.6)"
            stroke="rgba(255,61,110,0.8)"
            strokeWidth={1}
          />
          <text
            x={points[3].x}
            y={points[3].y + 6}
            textAnchor="middle"
            fontSize={16}
            fill="#fff"
            fontWeight="600"
          >
            Malintent
          </text>
        </g>

        {/* Labels for other nodes */}
        <Label x={points[0].x - 18} y={points[0].y - 36} text={points[0].label} />
        <Label x={points[1].x - 54} y={points[1].y - 8} text={points[1].label} />
        <Label x={points[2].x - 68} y={points[2].y + 8} text={points[2].label} />

        {/* Points */}
        {points.slice(0, 3).map((p) => (
          <g key={p.id}>
            {(p.id === "data" || p.id === "risk" || p.id === "investigation") && (
              <circle
                cx={p.x}
                cy={p.y}
                r={12}
                fill="none"
                stroke="#4fc3f7"
                strokeWidth={1.5}
                opacity={0.8}
              />
            )}
            <circle cx={p.x} cy={p.y} r={6} fill={p.color} opacity={0.95} />
            <circle cx={p.x} cy={p.y} r={2} fill="#eaffff" />
          </g>
        ))}

        {/* Sweep Beam */}
        <g transform={`rotate(${angle}, ${CX}, ${CY})`}>
          <line
            x1={CX}
            y1={CY}
            x2={CX + RADIUS + 12}
            y2={CY}
            stroke="#9fe7ff"
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        </g>

        {/* Ripples */}
        {points.map((p) => (
          <g key={`r-${p.id}`}>
            <AnimatePresence>
              {activeHit === p.id && (
                <>
                  <motion.circle
                    cx={p.x}
                    cy={p.y}
                    r={10}
                    fill="none"
                    stroke={p.id === "malintent" ? "#ff4d7a" : "#72c8ff"}
                    strokeWidth={2}
                    initial={{ opacity: 0.95, r: 6 }}
                    animate={{ r: 40, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  {(p.id === "data" || p.id === "risk" || p.id === "investigation") && (
                    <motion.circle
                      cx={p.x}
                      cy={p.y}
                      r={12}
                      fill="none"
                      stroke="#4fc3f7"
                      strokeWidth={1.5}
                      initial={{ scale: 1, opacity: 0.9 }}
                      animate={{ scale: 1.6, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  )}
                </>
              )}
            </AnimatePresence>
          </g>
        ))}

        {/* Center glow */}
        <circle cx={CX} cy={CY} r={6} fill="#082a3a" opacity={0.9} />
      </svg>
    </div>
  );
}
