import { useNavigate } from 'react-router-dom';

const wishes = [
  { text: '愿得一心人，白首不相离', id: 1 },
  { text: '家人平安健康，岁岁常相见', id: 2 },
  { text: '事业蒸蒸日上，财源广进', id: 3 },
  { text: '金榜题名，学业有成', id: 4 },
  { text: '山河无恙，国泰民安', id: 5 },
  { text: '所求皆如愿，所行化坦途', id: 6 },
];

const elements = [
  { name: '金', color: '#E8D5A3', delay: 0 },
  { name: '木', color: '#7CB77C', delay: 2 },
  { name: '水', color: '#5B9BD5', delay: 4 },
  { name: '火', color: '#C41E2B', delay: 6 },
  { name: '土', color: '#C9A96E', delay: 8 },
];

export default function Xuyuan() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-dark via-indigo to-[#0a0f1a] relative overflow-hidden">
      {/* ===== Starfield background ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.7,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* ===== Top bar with back button ===== */}
      <div className="relative z-20 px-4 pt-5 pb-3 flex items-center">
        <button
          onClick={() => navigate(-1)}
          className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/15
                     flex items-center justify-center text-white/70 active:scale-95 transition-transform"
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 4L6 10L12 16" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="text-white/50 text-sm ml-3 font-serif tracking-wider">许愿</span>
      </div>

      {/* ===== Danmu (wish scrolling banner) ===== */}
      <div className="relative z-10 overflow-hidden h-10 mb-6">
        <div className="flex gap-8 absolute" style={{ animation: 'danmu-scroll 25s linear infinite' }}>
          {[...wishes, ...wishes].map((w, i) => (
            <div key={i} className="flex items-center gap-2 whitespace-nowrap bg-white/8 backdrop-blur-sm
                                      rounded-full px-4 py-1.5 border border-white/10">
              <span className="text-sm">🏮</span>
              <span className="text-white/60 text-xs font-serif">{w.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Center: Armillary Sphere / Star Compass ===== */}
      <div className="relative z-10 flex justify-center items-center my-8">
        <div className="relative w-72 h-72 flex items-center justify-center">
          {/* Outer glow */}
          <div className="absolute w-72 h-72 rounded-full
                          bg-[radial-gradient(circle,rgba(184,150,62,0.15)_0%,transparent_60%)]
                          animate-glow-pulse" />

          {/* Outer ring - rotating */}
          <div className="absolute w-64 h-64 rounded-full border border-gold-light/20 animate-spin-slow" />

          {/* Middle ring - counter rotating */}
          <div className="absolute w-52 h-52 rounded-full border border-gold-light/25 animate-spin-slow-reverse" />

          {/* Inner ring */}
          <div className="absolute w-40 h-40 rounded-full border border-gold-light/30 animate-spin-slow"
               style={{ animationDuration: '30s' }} />

          {/* Cross lines */}
          <div className="absolute w-64 h-[1px] bg-gold-light/15 animate-spin-slow-reverse"
               style={{ animationDuration: '35s' }} />
          <div className="absolute w-[1px] h-64 bg-gold-light/15 animate-spin-slow-reverse"
               style={{ animationDuration: '35s' }} />
          <div className="absolute w-56 h-[1px] bg-gold-light/10 rotate-45 animate-spin-slow"
               style={{ animationDuration: '28s' }} />
          <div className="absolute w-56 h-[1px] bg-gold-light/10 -rotate-45 animate-spin-slow"
               style={{ animationDuration: '28s' }} />

          {/* Center core - glowing gold sphere */}
          <div className="absolute w-20 h-20 rounded-full
                          bg-gradient-to-br from-gold-glow via-gold-DEFAULT to-gold-dark
                          shadow-[0_0_40px_rgba(184,150,62,0.6),0_0_80px_rgba(184,150,62,0.3)]
                          border-2 border-gold-light/40
                          flex items-center justify-center">
            {/* Bagua symbol simplified */}
            <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="#FEF9F0" strokeWidth="1">
              <circle cx="20" cy="20" r="14" opacity="0.6"/>
              <path d="M20 6V12M20 28V34M6 20H12M28 20H34" strokeLinecap="round" opacity="0.5"/>
              <circle cx="20" cy="20" r="3" fill="#FEF9F0" opacity="0.4"/>
            </svg>
          </div>

          {/* Five elements pearls orbiting */}
          {elements.map((el, i) => {
            const angle = (i * 72) * Math.PI / 180;
            return (
              <div
                key={el.name}
                className="absolute"
                style={{
                  animation: `orbit ${8 + i * 1.5}s linear infinite`,
                  animationDelay: `${el.delay}s`,
                }}
              >
                <div
                  className="w-5 h-5 rounded-full shadow-lg flex items-center justify-center text-[9px] font-serif"
                  style={{
                    backgroundColor: el.color,
                    boxShadow: `0 0 15px ${el.color}, 0 0 30px ${el.color}40`,
                  }}
                >
                  <span className="text-white/90 text-[8px]">{el.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== Center text ===== */}
      <div className="relative z-10 text-center mt-4 mb-8">
        <h3 className="text-xl font-serif text-gold-glow tracking-[0.3em]"
            style={{ textShadow: '0 2px 20px rgba(232,213,163,0.3)' }}>
          祈愿上达
        </h3>
        <p className="text-gold-light/50 text-sm tracking-[0.25em] mt-2 font-serif">
          天官赐福
        </p>
      </div>

      {/* ===== Bottom button ===== */}
      <div className="relative z-10 px-8 pb-8">
        <button className="w-full py-4 rounded-full text-lg font-serif font-bold tracking-[0.2em]
                           bg-gradient-to-r from-gold-dark/80 via-gold-DEFAULT/60 to-gold-dark/80
                           backdrop-blur-sm
                           border border-gold-light/50
                           text-gold-glow
                           shadow-[0_4px_30px_rgba(184,150,62,0.35),0_0_0_1px_rgba(184,150,62,0.2)]
                           active:scale-[0.98] transition-all duration-200"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
          诚心祈愿
        </button>
      </div>
    </div>
  );
}
