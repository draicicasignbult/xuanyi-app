export default function Jiefu() {
  return (
    <div className="min-h-screen bg-palace relative overflow-hidden pb-24">
      {/* ===== Background patterns ===== */}
      {/* Golden cloud pattern overlay */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 25%, #E8D5A3 1px, transparent 1px),
            radial-gradient(circle at 75% 20%, #E8D5A3 1.5px, transparent 1.5px),
            radial-gradient(circle at 30% 60%, #E8D5A3 1px, transparent 1px),
            radial-gradient(circle at 65% 55%, #E8D5A3 2px, transparent 2px),
            radial-gradient(circle at 50% 35%, #E8D5A3 1px, transparent 1px),
            radial-gradient(circle at 85% 70%, #E8D5A3 1.5px, transparent 1.5px),
            radial-gradient(circle at 10% 80%, #E8D5A3 1px, transparent 1px),
            radial-gradient(circle at 45% 75%, #E8D5A3 1px, transparent 1px),
            radial-gradient(ellipse at 50% 0%, rgba(232,213,163,0.3) 0%, transparent 60%),
            radial-gradient(ellipse at 50% 100%, rgba(139,26,43,0.8) 0%, transparent 50%)
          `,
          backgroundSize: '100% 100%',
        }}
      />

      {/* Water ripple subtle pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(232,213,163,0.5) 40px, rgba(232,213,163,0.5) 41px),
            repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(232,213,163,0.3) 60px, rgba(232,213,163,0.3) 61px)
          `,
        }}
      />

      {/* ===== Top text ===== */}
      <div className="relative z-10 pt-16 pb-8 text-center">
        <div className="inline-block">
          <div className="flex items-center justify-center gap-1 mb-1">
            <div className="w-8 h-[1px] bg-gold-light/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold-light/60" />
            <div className="w-8 h-[1px] bg-gold-light/40" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-gold-glow tracking-[0.3em]"
              style={{ textShadow: '0 2px 20px rgba(232,213,163,0.4)' }}>
            紫气东来
          </h2>
          <p className="text-sm text-gold-light/70 tracking-[0.2em] mt-1.5 font-serif">
            财源广进
          </p>
          <div className="flex items-center justify-center gap-1 mt-1">
            <div className="w-8 h-[1px] bg-gold-light/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold-light/60" />
            <div className="w-8 h-[1px] bg-gold-light/40" />
          </div>
        </div>
      </div>

      {/* ===== Center: Golden Treasure Vessel (聚宝盆 / 青铜鼎) ===== */}
      <div className="relative z-10 flex justify-center items-center mt-4 mb-8">
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 w-56 h-56 -m-8 rounded-full
                          bg-[radial-gradient(circle,rgba(232,213,163,0.2)_0%,transparent_70%)]
                          animate-glow-pulse" />

          {/* Vessel placeholder block */}
          <div className="relative w-48 h-48 rounded-3xl
                          bg-gradient-to-b from-gold-glow via-gold-DEFAULT to-gold-dark
                          shadow-[0_0_60px_rgba(184,150,62,0.5),0_0_100px_rgba(184,150,62,0.2),0_10px_40px_rgba(0,0,0,0.3)]
                          border-2 border-gold-light/40
                          flex items-center justify-center
                          overflow-hidden">
            {/* Inner decorative pattern */}
            <div className="absolute inset-2 rounded-[18px] border border-gold-light/20" />
            <div className="absolute inset-4 rounded-2xl border border-gold-light/15" />

            {/* Simplified vessel silhouette */}
            <svg className="w-24 h-24 relative z-10" viewBox="0 0 100 100" fill="none">
              {/* Tripod / Ding shape */}
              <path d="M25 35L35 75H65L75 35Z" fill="#8B6914" stroke="#E8D5A3" strokeWidth="1.5" opacity="0.6"/>
              <rect x="20" y="15" width="60" height="25" rx="8" fill="#B8963E" stroke="#E8D5A3" strokeWidth="1" opacity="0.7"/>
              {/* Ears/handles */}
              <path d="M20 20L12 10L10 12L20 28" fill="#8B6914" stroke="#E8D5A3" strokeWidth="1" opacity="0.6"/>
              <path d="M80 20L88 10L90 12L80 28" fill="#8B6914" stroke="#E8D5A3" strokeWidth="1" opacity="0.6"/>
              {/* Legs */}
              <rect x="28" y="72" width="10" height="15" rx="3" fill="#8B6914" stroke="#E8D5A3" strokeWidth="0.8" opacity="0.6"/>
              <rect x="45" y="72" width="10" height="15" rx="3" fill="#8B6914" stroke="#E8D5A3" strokeWidth="0.8" opacity="0.6"/>
              <rect x="62" y="72" width="10" height="15" rx="3" fill="#8B6914" stroke="#E8D5A3" strokeWidth="0.8" opacity="0.6"/>
              {/* Gold ingot symbol inside */}
              <ellipse cx="50" cy="48" rx="20" ry="10" fill="#E8D5A3" stroke="#FEF9F0" strokeWidth="0.8" opacity="0.8"/>
              <rect x="38" y="42" width="24" height="6" rx="3" fill="#FEF9F0" opacity="0.4"/>
            </svg>
          </div>

          {/* Gold particles around vessel */}
          {[...Array(12)].map((_, i) => (
            <div key={i}
              className="absolute w-1 h-1 rounded-full bg-gold-glow"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${5 + Math.random() * 90}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: 0.3 + Math.random() * 0.5,
                boxShadow: '0 0 6px rgba(232,213,163,0.6)',
              }}
            />
          ))}
        </div>
      </div>

      {/* ===== Subtitle ===== */}
      <div className="relative z-10 text-center mb-10">
        <p className="text-gold-light/60 text-xs tracking-[0.3em] font-serif">— 心诚则灵 —</p>
      </div>

      {/* ===== Bottom button ===== */}
      <div className="relative z-10 px-8">
        <button className="w-full py-4 rounded-full text-lg font-serif font-bold tracking-[0.2em]
                           bg-gradient-to-r from-jade-dark/60 via-jade-DEFAULT/50 to-jade-dark/60
                           backdrop-blur-sm
                           border border-gold-light/50
                           text-gold-glow
                           shadow-[0_4px_30px_rgba(91,140,90,0.3),0_0_0_1px_rgba(184,150,62,0.3),inset_0_1px_0_rgba(255,255,255,0.15)]
                           active:scale-[0.98] transition-all duration-200"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
          迎福接运
        </button>
        <p className="text-center text-gold-light/30 text-xs mt-3 tracking-wider">
          诚心迎福 · 福泽绵长
        </p>
      </div>
    </div>
  );
}
