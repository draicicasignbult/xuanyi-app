export default function PaipanIcon({ className = "w-6 h-6", active = false }) {
  const color = active ? "#C41E2B" : "#6B6B6B";
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      {/* Bagua / compass shape */}
      <circle cx="12" cy="12" r="9"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="12" cy="12" r="1.5" fill={color}/>
      <path d="M12 3V8M12 16V21M3 12H8M16 12H21" strokeLinecap="round"/>
      <path d="M5.5 5.5L9 9M15 15L18.5 18.5M5.5 18.5L9 15M15 9L18.5 5.5" strokeLinecap="round" strokeWidth="1"/>
    </svg>
  );
}
