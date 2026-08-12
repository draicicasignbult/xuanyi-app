export default function ArrowRight({ className = "w-4 h-4", color = "#9B9B9B" }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.5">
      <path d="M6 3L11 8L6 13" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
