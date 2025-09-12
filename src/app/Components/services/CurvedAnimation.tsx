'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

export default function CurvedPathAnimation() {
  const pointerRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const paths = ['#arc1', '#arc2', '#arc3', '#arc4'];

  useEffect(() => {
    pointerRefs.forEach((ref, i) => {
      const pointer = ref.current;
      if (!pointer) return;

      gsap.to(pointer, {
        duration: 6 + i, // staggered speed
        repeat: -1,
        ease: 'power1.inOut',
        motionPath: {
          path: paths[i],
          align: paths[i],
          alignOrigin: [0.5, 0.5],
        },
      });
    });
  }, []);

  return (
    <div className="relative w-full h-[400px]">
      {/* Moving circular divs */}
      {pointerRefs.map((ref, i) => (
        <div
          key={i}
          ref={ref}
          className="w-6 h-6 bg-white rounded-full absolute shadow-lg"
        />
      ))}

      {/* SVG arcs */}
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 241 160">
        {/* Outermost Arc */}
        <path
          id="arc1"
          d="M239 140 C239 100 220 60 204 40 C188 20 152 0 121 0 C90 0 54 20 38 40 C22 60 3 100 3 140"
          stroke="url(#gradient1)"
          strokeWidth="2"
          strokeDasharray="12 12"
          fill="transparent"
        />
        {/* Second Arc */}
        <path
          id="arc2"
          d="M239 120 C239 90 220 55 204 35 C188 15 152 0 121 0 C90 0 54 15 38 35 C22 55 3 90 3 120"
          stroke="url(#gradient2)"
          strokeWidth="2"
          strokeDasharray="12 12"
          fill="transparent"
        />
        {/* Third Arc */}
        <path
          id="arc3"
          d="M239 100 C239 75 220 45 204 28 C188 11 152 0 121 0 C90 0 54 11 38 28 C22 45 3 75 3 100"
          stroke="url(#gradient3)"
          strokeWidth="2"
          strokeDasharray="12 12"
          fill="transparent"
        />
        {/* Innermost Arc */}
        <path
          id="arc4"
          d="M239 80 C239 60 220 35 204 20 C188 5 152 0 121 0 C90 0 54 5 38 20 C22 35 3 60 3 80"
          stroke="url(#gradient4)"
          strokeWidth="2"
          strokeDasharray="12 12"
          fill="transparent"
        />

        <defs>
          <linearGradient id="gradient1" x1="121" y1="0" x2="121" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0.1" stopColor="#CCCCCC"/>
            <stop offset="1" stopColor="#030A14"/>
          </linearGradient>
          <linearGradient id="gradient2" x1="121" y1="0" x2="121" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0.1" stopColor="#AAAAAA"/>
            <stop offset="1" stopColor="#020811"/>
          </linearGradient>
          <linearGradient id="gradient3" x1="121" y1="0" x2="121" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0.1" stopColor="#888888"/>
            <stop offset="1" stopColor="#01060A"/>
          </linearGradient>
          <linearGradient id="gradient4" x1="121" y1="0" x2="121" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0.1" stopColor="#666666"/>
            <stop offset="1" stopColor="#000"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

