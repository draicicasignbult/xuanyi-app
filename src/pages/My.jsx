import ArrowRight from '../components/icons/ArrowRight';

const menuItems = [
  {
    label: '我的命盘',
    desc: '查看八字排盘与命局分析',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="#C41E2B" strokeWidth="1.3">
        <circle cx="10" cy="10" r="7"/>
        <circle cx="10" cy="10" r="3"/>
        <path d="M10 3V7M10 13V17M3 10H7M13 10H17" strokeLinecap="round"/>
      </svg>
    ),
    color: 'text-palace',
  },
  {
    label: '收藏吉日',
    desc: '已收藏的黄道吉日与时辰',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="#8B6914" strokeWidth="1.3">
        <rect x="3" y="3" width="14" height="14" rx="2"/>
        <path d="M3 8H17" strokeLinecap="round"/>
        <path d="M7 1V5M13 1V5" strokeLinecap="round"/>
        <circle cx="10" cy="12" r="1.5" fill="#8B6914"/>
      </svg>
    ),
    color: 'text-gold-dark',
  },
  {
    label: '专属壁纸',
    desc: '新中式国风运势壁纸下载',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="#2C3E6B" strokeWidth="1.3">
        <rect x="2" y="3" width="16" height="14" rx="2"/>
        <circle cx="8" cy="8" r="2"/>
        <path d="M2 15L6 11L9 14L12 10L18 15" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: 'text-indigo-light',
  },
  {
    label: '祈愿记录',
    desc: '查看过往许愿与还愿历史',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="#5B8C5A" strokeWidth="1.3">
        <path d="M10 17C6 14 3 11 3 7C3 4 5.5 2 8 2C9.5 2 10.5 3 10 4C9.5 3 10.5 2 12 2C14.5 2 17 4 17 7C17 11 14 14 10 17Z"/>
      </svg>
    ),
    color: 'text-jade',
  },
  {
    label: '设置',
    desc: '个人偏好与隐私管理',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="#6B6B6B" strokeWidth="1.3">
        <circle cx="10" cy="10" r="3"/>
        <path d="M10 1V4M10 16V19M1 10H4M16 10H19M3.5 3.5L5.5 5.5M14.5 14.5L16.5 16.5M3.5 16.5L5.5 14.5M14.5 5.5L16.5 3.5" strokeLinecap="round"/>
      </svg>
    ),
    color: 'text-ink',
  },
];

export default function My() {
  return (
    <div className="min-h-screen bg-mountain-silhouette relative overflow-hidden pb-24">
      {/* ===== Profile Section ===== */}
      <div className="relative z-10 flex flex-col items-center pt-16 pb-8">
        {/* Avatar with bronze ring */}
        <div className="relative">
          {/* Bronze outer ring */}
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-[#CD853F] via-[#B87333] to-[#8B6914] opacity-80"
               style={{ boxShadow: '0 2px 12px rgba(139,105,20,0.25)' }} />
          {/* Inner ring */}
          <div className="absolute -inset-0.5 rounded-full bg-rice-50" />
          {/* Avatar placeholder */}
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-rice-100 to-rice-200
                          border-2 border-[#B87333]/30 overflow-hidden flex items-center justify-center">
            <svg className="w-10 h-10 text-ink-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 21C4 17 7.5 14 12 14C16.5 14 20 17 20 21" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Nickname */}
        <h2 className="mt-4 text-lg font-serif font-bold text-ink-dark">青云居士</h2>
        <p className="text-xs text-ink-light mt-1 tracking-wider">甲戌年 · 丙子月 · 戊辰日</p>

        {/* Stats row */}
        <div className="flex items-center gap-8 mt-5">
          <div className="text-center">
            <p className="text-lg font-serif font-bold text-palace">12</p>
            <p className="text-[10px] text-ink-light mt-0.5">祈福次数</p>
          </div>
          <div className="w-px h-8 bg-ink-light/20" />
          <div className="text-center">
            <p className="text-lg font-serif font-bold text-indigo">8</p>
            <p className="text-[10px] text-ink-light mt-0.5">收藏吉日</p>
          </div>
          <div className="w-px h-8 bg-ink-light/20" />
          <div className="text-center">
            <p className="text-lg font-serif font-bold text-gold-DEFAULT">28</p>
            <p className="text-[10px] text-ink-light mt-0.5">连续签到</p>
          </div>
        </div>
      </div>

      {/* ===== Menu List ===== */}
      <div className="relative z-10 px-4">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-rice-200/50
                        shadow-[0_2px_16px_rgba(0,0,0,0.03)] overflow-hidden">
          {menuItems.map((item, i) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-4 px-5 py-4.5 text-left
                          active:bg-rice-50/80 transition-colors duration-150
                          ${i < menuItems.length - 1 ? 'border-b border-rice-200/40' : ''}`}
            >
              {/* Icon */}
              <div className="w-9 h-9 rounded-lg bg-rice-50 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h4 className={`text-sm font-medium ${item.color} font-serif`}>{item.label}</h4>
                <p className="text-[11px] text-ink-light mt-0.5 truncate">{item.desc}</p>
              </div>

              {/* Arrow */}
              <ArrowRight color="#C5C0B5" className="w-4 h-4 flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>

      {/* Version info */}
      <div className="relative z-10 text-center mt-8 pb-4">
        <p className="text-[10px] text-ink-light/50 tracking-wider">玄机 v1.0.0 · 传承千年智慧</p>
      </div>
    </div>
  );
}
