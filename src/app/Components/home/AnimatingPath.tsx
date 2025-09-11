'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

export default function AnimatingPath() {
  const pointerRefs = useRef<SVGCircleElement[]>([]);
  const pathRefs = useRef<SVGPathElement[]>([]);

  const addPointerRef = (el: SVGCircleElement | null) => {
    if (el && !pointerRefs.current.includes(el)) pointerRefs.current.push(el);
  };
  const addPathRef = (el: SVGPathElement | null) => {
    if (el && !pathRefs.current.includes(el)) pathRefs.current.push(el);
  };

  useEffect(() => {
    // Wait until all pointers and paths are populated
    if (pointerRefs.current.length !== pathRefs.current.length) return;

    pointerRefs.current.forEach((pointer, i) => {
      gsap.to(pointer, {
        duration: 4,
        repeat: -1,
        ease: 'linear',
        motionPath: {
          path: pathRefs.current[i],
          align: pathRefs.current[i],
          alignOrigin: [0.5, 0.5],
          autoRotate: true, // important if you want pointer to follow curve rotation
        },
      });
    });
  }, []);

  return (
    <svg width="100%" height="400" viewBox="0 0 1200 400">
      {/* Paths */}
      <path
        ref={addPathRef}
        d="M50 200 C200 100, 400 300, 550 200"
        stroke="blue"
        strokeWidth="2"
        fill="transparent"
      />
      <path
        ref={addPathRef}
        d="M550 200 C700 100, 900 300, 1150 200"
        stroke="blue"
        strokeWidth="2"
        fill="transparent"
      />

      {/* Pointers */}
      <circle ref={addPointerRef} r="6" fill="#00f" />
      <circle ref={addPointerRef} r="6" fill="#00f" />
    </svg>
  );
}

