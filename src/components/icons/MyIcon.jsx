export default function MyIcon({ className = "w-6 h-6", active = false }) {
  const color = active ? "#C41E2B" : "#6B6B6B";
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      {/* Person / profile silhouette */}
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 21C4 17 7.5 14 12 14C16.5 14 20 17 20 21" strokeLinecap="round"/>
    </svg>
  );
}
