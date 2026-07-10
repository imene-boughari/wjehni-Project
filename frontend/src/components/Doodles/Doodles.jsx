import "./Doodles.css";

// Petit amas de traits discontinus + une forme arrondie en pointillés.
export const DashDoodle = ({ className }) => (
  <svg className={`doodle ${className || ""}`} viewBox="0 0 220 220" fill="none">
    <path
      d="M10 30 L35 20 M15 55 L40 45 M10 80 L38 72 M5 105 L32 100 M20 130 L45 122 M15 155 L42 148 M25 178 L50 172"
      stroke="#1a1a1a"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M60 10 C 90 5, 100 40, 70 55 C 45 68, 55 95, 90 90"
      stroke="#1a1a1a"
      strokeWidth="2.5"
      strokeDasharray="6 6"
      strokeLinecap="round"
    />
  </svg>
);

// Petite flèche/éclat rouge avec ombre portée (utilisée dans la navbar).
export const ShardArrow = ({ className }) => (
  <svg className={`shard-arrow ${className || ""}`} viewBox="0 0 40 40" fill="none">
    <polygon points="4,20 22,4 16,20 24,36" fill="#F00000" />
  </svg>
);