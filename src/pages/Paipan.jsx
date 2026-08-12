export default function Paipan() {
  return (
    <div className="min-h-screen bg-rice-50 flex flex-col items-center justify-center pb-24">
      {/* Decorative top */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-indigo/5 to-transparent pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        {/* Compass icon */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo/10 to-indigo/5
                        border border-indigo/15 flex items-center justify-center
                        shadow-[0_0_40px_rgba(27,42,74,0.08)]">
          <svg className="w-12 h-12 text-indigo/40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="24" cy="24" r="18"/>
            <circle cx="24" cy="24" r="8"/>
            <circle cx="24" cy="24" r="2" fill="currentColor"/>
            <path d="M24 6V16M24 32V42M6 24H16M32 24H42" strokeLinecap="round"/>
            <path d="M11 11L17 17M31 31L37 37M11 37L17 31M31 17L37 11" strokeLinecap="round" strokeWidth="0.8"/>
          </svg>
        </div>

        <h2 className="text-2xl font-serif font-bold text-indigo mb-2">四柱八字 · 排盘</h2>
        <p className="text-sm text-ink-light leading-relaxed max-w-xs mx-auto">
          输入您的出生年月日时，系统将精准推算您的八字命盘、十神格局与大运流年。
        </p>

        {/* Placeholder form hint */}
        <div className="mt-8 p-6 bg-white rounded-2xl border border-rice-200/50 shadow-sm text-left space-y-4">
          <div className="flex items-center gap-3 text-sm text-ink-light">
            <div className="w-8 h-8 rounded-full bg-indigo/5 flex items-center justify-center text-indigo/40 text-xs">年</div>
            <span className="text-ink">阳历生日选择</span>
            <div className="flex-1 h-px bg-rice-200" />
          </div>
          <div className="flex items-center gap-3 text-sm text-ink-light">
            <div className="w-8 h-8 rounded-full bg-indigo/5 flex items-center justify-center text-indigo/40 text-xs">时</div>
            <span className="text-ink">出生时辰选择</span>
            <div className="flex-1 h-px bg-rice-200" />
          </div>
          <div className="flex items-center gap-3 text-sm text-ink-light">
            <div className="w-8 h-8 rounded-full bg-indigo/5 flex items-center justify-center text-indigo/40 text-xs">性</div>
            <span className="text-ink">性别选择</span>
            <div className="flex-1 h-px bg-rice-200" />
          </div>
        </div>

        <button className="mt-6 px-10 py-3 rounded-full bg-gradient-to-r from-indigo to-indigo-light
                           text-white font-serif text-sm tracking-wider
                           shadow-[0_4px_16px_rgba(27,42,74,0.25)]
                           active:scale-95 transition-transform">
          开始排盘
        </button>
      </div>
    </div>
  );
}
