export default function PlumIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="#C41E2B" strokeWidth="1.2">
      {/* Plum blossom - 5 petals */}
      <circle cx="10" cy="10" r="2" fill="#C41E2B" opacity="0.3"/>
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <ellipse key={i} cx={10 + 4.5 * Math.cos(angle * Math.PI/180)} cy={10 + 4.5 * Math.sin(angle * Math.PI/180)}
          rx="2.2" ry="1.8" transform={`rotate(${angle} ${10+4.5*Math.cos(angle*Math.PI/180)} ${10+4.5*Math.sin(angle*Math.PI/180)})`}
          fill="#F5E6E8" stroke="#C41E2B" strokeWidth="0.8"/>
      ))}
    </svg>
  );
}
