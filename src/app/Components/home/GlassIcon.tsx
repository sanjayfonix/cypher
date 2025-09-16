
interface GlassIconProps { icon: React.ReactNode; size?: number; borderOpacity?: number; borderThickness?: number; arcLength?: number;fadeSize:number;} // how wide the arc is fadeSize?: number; // how much to fade at each end }

export const GlassIcon = ({
  icon,
  size = 70,
  borderOpacity = 0.6,
  borderThickness = 2,
}: GlassIconProps) => {
  return (
    <div
      className="relative flex items-center justify-center rounded-full"
      style={{ width: size, height: size }}
    >
      {/* Full circular border */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          border: `${borderThickness}px solid rgba(255,255,255,${borderOpacity})`,
          boxSizing: "border-box",
        }}
      />

      {/* Inner circle with gradient and glow */}
      <div
        className="relative w-full h-full rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(180deg, rgba(27,27,27,0.17) 28%, rgba(1,72,165,0.2) 185%)",
          boxShadow: "0 0 6.6px 3px rgba(21,154,255,0.1)",
        }}
      >
        {icon}
      </div>
    </div>
  );
};









