'use client'
import { useEffect, useRef } from "react";

interface TravelingBorderProps {
  barLength?: number;
  barThickness?: number;
}

export const TravelingBorder: React.FC<TravelingBorderProps> = ({
  barLength = 25,
  barThickness = 5,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const bar = barRef.current;
    if (!container || !bar) return;

    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      const { width, height } = container.getBoundingClientRect();
      if (width === 0 || height === 0) {
        requestAnimationFrame(animate);
        return;
      }

      const perimeter = 2 * (width + height);
      const speed = 0.05; // pixels per ms
      const distance = (elapsed * speed) % perimeter;

      let x = 0,
        y = 0,
        rotation = 0;

      if (distance < width) {
        x = distance;
        y = 0;
        rotation = 0; // top edge
      } else if (distance < width + height) {
        x = width;
        y = distance - width;
        rotation = 90; // right edge
      } else if (distance < 2 * width + height) {
        x = width - (distance - (width + height));
        y = height;
        rotation = 180; // bottom edge
      } else {
        x = 0;
        y = height - (distance - (2 * width + height));
        rotation = 270; // left edge
      }

      bar.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full pointer-events-none"
    >
      <div
        ref={barRef}
        className="absolute bg-gradient-to-t from-[#167BFF] to-[#4F9BFF] shadow-[0_0_3px_#157AFF]"
        style={{ width: `${barLength}px`, height: `${barThickness}px`, transformOrigin: "center" }}
      />
    </div>
  );
};



