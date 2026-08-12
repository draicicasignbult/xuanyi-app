export default function CoinIcon({ className = "w-5 h-5", filled = false }) {
  const fill = filled ? "#B8963E" : "none";
  const stroke = filled ? "#B8963E" : "#C9A96E";
  return (
    <svg className={className} viewBox="0 0 20 20" fill={fill} stroke={stroke} strokeWidth="1.2">
      {/* Ancient Chinese coin shape: circle with square hole */}
      <circle cx="10" cy="10" r="8"/>
      <rect x="7" y="7" width="6" height="6" rx="0.5" fill={filled ? "#FEF9F0" : "none"}/>
    </svg>
  );
}
