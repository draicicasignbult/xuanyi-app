export default function BambooIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="#5B8C5A" strokeWidth="1.2">
      {/* Bamboo leaf */}
      <path d="M10 18V5" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 8L3 3" strokeLinecap="round"/>
      <path d="M10 6L17 1" strokeLinecap="round"/>
      <path d="M10 11L4 8" strokeLinecap="round"/>
      <path d="M10 14L16 9" strokeLinecap="round"/>
      {/* Node */}
      <line x1="8" y1="14" x2="12" y2="14" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
