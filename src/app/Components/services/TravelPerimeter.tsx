import { useEffect, useRef } from "react";

interface TravelingBorderProps {
  speed?: number;
  wedgeLength?: number;
  minThickness?: number;
  maxThickness?: number;
}



export const TravelingBorder: React.FC<TravelingBorderProps> = ({
  speed = 1,
  wedgeLength = 400, // elongated by default
  minThickness = 4,
  maxThickness = 46, // wider front by default
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const pointerRef = useRef<SVGPathElement | null>(null);
  const roRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const svg = svgRef.current;
    const path = pathRef.current;
    const pointer = pointerRef.current;
    if (!container || !svg || !path || !pointer) return;

    // Build / update SVG rect path to match container pixel size
    const setPath = () => {
      const rect = container.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width));
      const h = Math.max(1, Math.round(rect.height));

      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      // small inset to avoid degenerate 0/0 corners
      const inset = 0.5;
      const d = `M ${inset} ${inset} H ${w - inset} V ${h - inset} H ${inset} Z`;
      path.setAttribute("d", d);
    };

    setPath();

    // Watch for resize to keep path in sync
    if ("ResizeObserver" in window) {
      roRef.current = new ResizeObserver(() => {
        setPath();
      });
      roRef.current.observe(container);
    } else {
      // fallback
      
    }

    // Animation variables
    let total = path.getTotalLength();
    let progress = 0;
    let rafId = 0;

    // Helper: normalize length into [0, total)
    const norm = (v: number) => {
      // recalc total in case path changed
      total = path.getTotalLength();
      return ((v % total) + total) % total;
    };

    // Start animation on next frame (ensures layout ready)
    const start = () => {
      // clamp wedgeLength if it's larger than the perimeter
      const perimeter = path.getTotalLength();
      let localWedge = wedgeLength;
      if (localWedge >= perimeter) localWedge = Math.floor(perimeter * 0.5);

      const tipMultiplier = Math.max(12, Math.round(localWedge * 0.12)); // how far tip extends
      const tailExt = 6; // back tail extension

      const steps = 8; // more steps -> smoother / longer wedge
      const animate = () => {
        // move forward
        progress = norm(progress + speed);

        // recalc local values in case path resized
        total = path.getTotalLength();
        if (localWedge >= total) localWedge = Math.floor(total * 0.5);

        const step = localWedge / steps;
        const topPoints: { x: number; y: number }[] = [];
        const botPoints: { x: number; y: number }[] = [];

        for (let i = 0; i <= steps; i++) {
          const dist = norm(progress + i * step);
          const p1 = path.getPointAtLength(dist);
          const p2 = path.getPointAtLength(norm(dist + 0.1)); // small derivative offset

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

        // front tip (extended)
        const last = path.getPointAtLength(norm(progress + localWedge));
        const after = path.getPointAtLength(norm(progress + localWedge + tipMultiplier));
        const dxF = after.x - last.x;
        const dyF = after.y - last.y;
        const lenF = Math.sqrt(dxF * dxF + dyF * dyF) || 1;
        const tipFront = {
          x: last.x + (dxF / lenF) * tipMultiplier,
          y: last.y + (dyF / lenF) * tipMultiplier,
        };

        // back tip (short)
        const first = path.getPointAtLength(norm(progress));
        const before = path.getPointAtLength(norm(progress - tailExt));
        const dxB = first.x - before.x;
        const dyB = first.y - before.y;
        const lenB = Math.sqrt(dxB * dxB + dyB * dyB) || 1;
        const tipBack = {
          x: first.x - (dxB / lenB) * (tailExt * 0.75),
          y: first.y - (dyB / lenB) * (tailExt * 0.75),
        };

        // build polygon path
        let newD = `M ${tipBack.x},${tipBack.y}`;
        botPoints.forEach((pt) => (newD += ` L ${pt.x},${pt.y}`));
        newD += ` L ${tipFront.x},${tipFront.y}`;
        for (let i = topPoints.length - 1; i >= 0; i--) {
          newD += ` L ${topPoints[i].x},${topPoints[i].y}`;
        }
        newD += " Z";

        pointer.setAttribute("d", newD);

        rafId = requestAnimationFrame(animate);
      };

      rafId = requestAnimationFrame(animate);
    };

    // small delay start to ensure path length computed correctly across browsers
    const startTimeout = requestAnimationFrame(() => {
      // re-evaluate path before beginning
      setPath();
      // allow next frame for layout to settle
      requestAnimationFrame(start);
    });

    return () => {
      cancelAnimationFrame(startTimeout);
      cancelAnimationFrame(rafId);
      if (roRef.current) roRef.current.disconnect();
      else window.removeEventListener("resize", setPath);
    };
    // We intentionally do not include wedgeLength/minThickness/maxThickness in deps
    // because they are read-once when the animation starts. If you want changes to take
    // effect live, move them into state and include here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      <svg ref={svgRef} className="w-full h-full" preserveAspectRatio="none">
        {/* path is set dynamically to match container pixel size */}
        <path ref={pathRef} fill="none" stroke="transparent" />
        <path
          ref={pointerRef}
          fill="url(#travelGrad)"
          filter="url(#travelShadow)"
          style={{ transformOrigin: "0 0" }}
        />
        <defs>
          <linearGradient id="travelGrad" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0" stopColor="#167BFF" />
            <stop offset="1" stopColor="#4F9BFF" />
          </linearGradient>
          <filter id="travelShadow" x="0" y="0" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#157AFF" floodOpacity="0.7" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
