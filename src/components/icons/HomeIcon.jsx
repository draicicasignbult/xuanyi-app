export default function HomeIcon({ className = "w-6 h-6", active = false }) {
  const color = active ? "#C41E2B" : "#6B6B6B";
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      {/* Traditional Chinese roof / house */}
      <path d="M3 10L12 3L21 10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 9V20H19V9" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="9" y="14" width="6" height="6" rx="1" fill={active ? color : "none"} stroke={color} strokeWidth="1.2"/>
    </svg>
  );
}
