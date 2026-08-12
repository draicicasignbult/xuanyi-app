import PlumIcon from '../components/icons/PlumIcon';
import BambooIcon from '../components/icons/BambooIcon';
import CoinIcon from '../components/icons/CoinIcon';
import ArrowRight from '../components/icons/ArrowRight';

const indicators = [
  { label: '财运', value: 4, total: 5 },
  { label: '事业', value: 3, total: 5 },
  { label: '桃花', value: 5, total: 5 },
  { label: '健康', value: 4, total: 5 },
];

const reports = [
  { title: '八字命理深度批断', desc: '详析命局旺衰，洞见一生运势起伏', color: 'bg-palace' },
  { title: '流年大运精算', desc: '推演十年大运，把握人生关键节点', color: 'bg-indigo' },
  { title: '五行调候指南', desc: '调和五行能量，增补命局所缺', color: 'bg-jade' },
  { title: '婚配八字合盘', desc: '合婚纳吉，看姻缘深浅与相处之道', color: 'bg-gold' },
];

const tools = [
  { label: '四柱', icon: '🏛️', bg: 'from-amber-50 to-orange-50' },
  { label: '六爻', icon: '🪙', bg: 'from-yellow-50 to-amber-50' },
  { label: '紫微', icon: '⭐', bg: 'from-purple-50 to-indigo-50' },
  { label: '黄历', icon: '📜', bg: 'from-red-50 to-rose-50' },
  { label: '风水', icon: '🧭', bg: 'from-teal-50 to-emerald-50' },
  { label: '手相', icon: '✋', bg: 'from-pink-50 to-rose-50' },
  { label: '解梦', icon: '🌙', bg: 'from-indigo-50 to-blue-50' },
  { label: '取名', icon: '🖊️', bg: 'from-stone-50 to-neutral-50' },
  { label: '面相', icon: '👤', bg: 'from-orange-50 to-yellow-50' },
  { label: '生肖', icon: '🐉', bg: 'from-slate-50 to-gray-50' },
];

const articleList = [
  { title: '甲木日主春季运势详解', tag: '日主', tagColor: 'text-palace bg-palace-light' },
  { title: '正官格女命婚姻特征', tag: '格局', tagColor: 'text-indigo bg-indigo-50' },
  { title: '流月吉日速查表·本月', tag: '择吉', tagColor: 'text-jade bg-jade-50' },
  { title: '八字看财运：偏财旺的配置', tag: '财运', tagColor: 'text-gold-dark bg-gold-50' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-rice-50 pb-24">
      {/* ===== 顶部签到区 ===== */}
      <div className="bg-crimson-pattern px-5 pt-5 pb-4 rounded-b-2xl shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-palace/70 font-medium">甲辰年 · 仲秋</p>
            <h2 className="text-xl font-serif font-bold text-palace-dark mt-0.5">早安，青云</h2>
          </div>
          <button className="flex items-center gap-1.5 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full
                             border border-palace/20 text-palace text-sm font-medium
                             active:scale-95 transition-transform">
            <span>签到纳福</span>
            <ArrowRight color="#C41E2B" className="w-3.5 h-3.5" />
          </button>
        </div>
        {/* Date info */}
        <div className="mt-3 flex items-center gap-3 text-xs text-palace/50">
          <span>农历七月廿八</span>
          <span className="w-1 h-1 rounded-full bg-palace/30" />
          <span>丙申月 · 甲子日</span>
          <span className="w-1 h-1 rounded-full bg-palace/30" />
          <span>宜：祈福 出行 嫁娶</span>
        </div>
      </div>

      {/* ===== 核心日运卡片 ===== */}
      <div className="px-4 -mt-2 relative z-10">
        <div className="bg-white rounded-2xl p-5 border border-gold-light/30
                        shadow-[0_4px_24px_rgba(0,0,0,0.04),0_0_0_1px_rgba(201,169,110,0.15)]">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-palace to-palace-dark
                              flex items-center justify-center text-white text-xs font-bold">青</div>
              <span className="font-medium text-ink-dark font-serif">青云</span>
            </div>
            <button className="flex items-center gap-1 text-xs text-gold-DEFAULT hover:text-gold-dark transition-colors">
              查看专属日运
              <ArrowRight color="#B8963E" className="w-3 h-3" />
            </button>
          </div>

          {/* Main content row */}
          <div className="flex items-center gap-5">
            {/* Left: Score */}
            <div className="flex flex-col items-center min-w-[80px]">
              <span className="text-[56px] font-serif font-bold text-palace leading-none">85</span>
              <span className="text-xs text-ink mt-1 tracking-wider">今日综合指数</span>
            </div>

            {/* Divider */}
            <div className="w-px h-16 bg-gold-light/30" />

            {/* Middle: Tips */}
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-2">
                <PlumIcon className="w-4 h-4" />
                <span className="text-sm text-ink-dark">逢贵人 · 诸事顺遂</span>
              </div>
              <div className="flex items-center gap-2">
                <BambooIcon className="w-4 h-4" />
                <span className="text-sm text-ink-dark">宜静心 · 戒骄戒躁</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-ink-light">🌅</span>
                <span className="text-xs text-ink-light">吉时：巳时 (9-11点)</span>
              </div>
            </div>

            {/* Right: Indicators with coin rating */}
            <div className="flex flex-col gap-2.5 min-w-[72px]">
              {indicators.map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <span className="text-xs text-ink w-8">{item.label}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: item.total }).map((_, i) => (
                      <CoinIcon key={i} filled={i < item.value} className="w-3.5 h-3.5" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== 报告模块 - 横向滚动 ===== */}
      <div className="mt-6">
        <div className="px-4 flex items-center justify-between mb-3">
          <h3 className="text-base font-serif font-bold text-ink-dark">命理精批</h3>
          <button className="flex items-center gap-1 text-xs text-ink-light">
            全部 <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto px-4 hide-scrollbar pb-2">
          {reports.map((r, i) => (
            <div key={i} className="flex-shrink-0 w-[200px] bg-rice-100 rounded-xl p-4
                                      border border-rice-200/60 shadow-sm
                                      active:scale-[0.98] transition-transform">
              {/* Red seal stamp */}
              <div className={`w-10 h-10 ${r.color} rounded-full flex items-center justify-center
                                text-white text-[10px] font-serif font-bold mb-3
                                shadow-[0_2px_8px_rgba(0,0,0,0.15)] rotate-[-8deg]`}>
                批
              </div>
              <h4 className="text-sm font-bold text-ink-dark font-serif leading-snug">{r.title}</h4>
              <p className="text-xs text-ink-light mt-1.5 leading-relaxed">{r.desc}</p>
              <div className="mt-3 flex items-center gap-1 text-xs text-gold-DEFAULT">
                <span>立即查看</span>
                <ArrowRight color="#B8963E" className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== 工具区网格 5x2 ===== */}
      <div className="mt-6 px-4">
        <h3 className="text-base font-serif font-bold text-ink-dark mb-3">玄学工具箱</h3>
        <div className="grid grid-cols-5 gap-2">
          {tools.map((t, i) => (
            <button key={i} className="flex flex-col items-center gap-1.5 py-3 px-1 rounded-xl
                                        bg-gradient-to-b active:scale-95 transition-transform
                                        border border-rice-200/40 shadow-sm"
                    style={{ backgroundImage: `linear-gradient(to bottom, ${t.bg.split(' ')[1] === 'from-amber-50' ? '#fffbeb' : '#fafaf9'}, #f5f0e8)` }}>
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.bg}
                                flex items-center justify-center text-lg
                                shadow-[0_2px_6px_rgba(0,0,0,0.06)]`}>
                {t.icon}
              </div>
              <span className="text-[11px] text-ink-dark font-medium">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ===== 测试列表区 ===== */}
      <div className="mt-6 px-4">
        <h3 className="text-base font-serif font-bold text-ink-dark mb-3">命理知识</h3>
        <div className="space-y-2">
          {articleList.map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4
                                      border border-rice-200/50 shadow-sm
                                      active:bg-rice-50 transition-colors">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>
                <h4 className="text-sm font-medium text-indigo truncate font-serif">{item.title}</h4>
              </div>
              <ArrowRight color="#9B9B9B" className="w-4 h-4 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom spacer for breathing room */}
      <div className="h-4" />
    </div>
  );
}
