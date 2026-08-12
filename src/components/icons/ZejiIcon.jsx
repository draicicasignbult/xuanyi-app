export default function ZejiIcon({ className = "w-6 h-6", active = false }) {
  const color = active ? "#C41E2B" : "#6B6B6B";
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      {/* Calendar / Almanac icon */}
      <rect x="3" y="4" width="18" height="17" rx="2"/>
      <path d="M3 10H21" strokeLinecap="round"/>
      <path d="M8 2V6M16 2V6" strokeLinecap="round"/>
      {/* Chinese character 吉 simplified */}
      <path d="M8 14H16" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M12 14V19" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M9 16.5H15" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}
