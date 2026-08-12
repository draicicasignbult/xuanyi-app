export default function Zeji() {
  const auspiciousDays = [
    { date: '八月十五', weekday: '周三', label: '祈福吉日', score: '大吉', color: 'text-palace bg-palace-light' },
    { date: '八月十八', weekday: '周六', label: '嫁娶吉日', score: '大吉', color: 'text-palace bg-palace-light' },
    { date: '八月二十', weekday: '周一', label: '出行吉日', score: '吉', color: 'text-gold-dark bg-gold-50' },
    { date: '八月廿二', weekday: '周三', label: '开业吉日', score: '大吉', color: 'text-palace bg-palace-light' },
    { date: '八月廿五', weekday: '周六', label: '搬家吉日', score: '吉', color: 'text-gold-dark bg-gold-50' },
  ];

  return (
    <div className="min-h-screen bg-rice-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-b from-indigo/8 to-transparent pt-10 pb-6 px-4">
        <h2 className="text-xl font-serif font-bold text-indigo text-center tracking-wider">黄道择吉</h2>
        <p className="text-xs text-ink-light text-center mt-2 tracking-wider">
          择良辰吉日 · 助万事顺遂
        </p>

        {/* Month selector */}
        <div className="flex items-center justify-center gap-4 mt-5">
          <button className="w-8 h-8 rounded-full bg-white border border-rice-200 flex items-center justify-center
                             text-ink-light active:scale-95 transition-transform">
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 3L5 8L10 13" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="text-base font-serif font-bold text-ink-dark min-w-[100px] text-center">
            丙申月 · 仲秋
          </span>
          <button className="w-8 h-8 rounded-full bg-white border border-rice-200 flex items-center justify-center
                             text-ink-light active:scale-95 transition-transform">
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 3L11 8L6 13" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Quick filters */}
      <div className="px-4 flex gap-2 overflow-x-auto hide-scrollbar pb-2">
        {['全部', '嫁娶', '出行', '开业', '搬家', '祈福', '安葬'].map((f, i) => (
          <button
            key={f}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-colors
              ${i === 0
                ? 'bg-indigo text-white shadow-[0_2px_8px_rgba(27,42,74,0.2)]'
                : 'bg-white text-ink border border-rice-200'}`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Auspicious days list */}
      <div className="px-4 mt-4 space-y-3">
        {auspiciousDays.map((day, i) => (
          <div key={i} className="flex items-center gap-4 bg-white rounded-xl p-4
                                    border border-rice-200/50 shadow-sm
                                    active:bg-rice-50 transition-colors">
            {/* Date block */}
            <div className="w-16 text-center flex-shrink-0">
              <p className="text-lg font-serif font-bold text-ink-dark leading-none">{day.date.split('月')[1]}</p>
              <p className="text-[10px] text-ink-light mt-1">{day.date}</p>
              <p className="text-[10px] text-ink-light">{day.weekday}</p>
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-rice-200" />

            {/* Content */}
            <div className="flex-1">
              <h4 className="text-sm font-medium text-ink-dark font-serif">{day.label}</h4>
              <p className="text-[11px] text-ink-light mt-0.5">
                宜：{day.label.replace('吉日', '')} · 祭祀 · 会友
              </p>
            </div>

            {/* Score badge */}
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${day.color}`}>
              {day.score}
            </span>
          </div>
        ))}
      </div>

      {/* Today's summary */}
      <div className="px-4 mt-5">
        <div className="bg-gradient-to-r from-palace-light/50 to-amber-50/50 rounded-xl p-4
                        border border-palace/10">
          <h4 className="text-sm font-serif font-bold text-palace-dark">今日宜忌</h4>
          <div className="flex gap-6 mt-2">
            <div>
              <p className="text-[10px] text-palace font-medium mb-1">✅ 宜</p>
              <p className="text-xs text-ink">祈福 · 出行 · 嫁娶 · 开业 · 会友</p>
            </div>
            <div>
              <p className="text-[10px] text-ink-light font-medium mb-1">❌ 忌</p>
              <p className="text-xs text-ink">动土 · 安葬 · 争吵</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
