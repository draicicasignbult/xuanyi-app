import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from './icons/HomeIcon';
import PaipanIcon from './icons/PaipanIcon';
import ZejiIcon from './icons/ZejiIcon';
import MyIcon from './icons/MyIcon';

const tabs = [
  { path: '/',       label: '首页', Icon: HomeIcon },
  { path: '/paipan', label: '排盘', Icon: PaipanIcon },
  { path: '/qifu',   label: '祈福', Icon: null }, // center floating button
  { path: '/zeji',   label: '择吉', Icon: ZejiIcon },
  { path: '/my',     label: '我的', Icon: MyIcon },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname === '/' ? '/' : '/' + location.pathname.split('/')[1];

  const isQifuActive = currentPath === '/qifu' || currentPath === '/xuyuan';

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pb-safe">
      <div className="relative bg-rice-100/95 backdrop-blur-sm border-t border-gold-dark/20 shadow-[0_-2px_20px_rgba(0,0,0,0.06)]">
        <div className="flex items-end justify-around h-16">
          {tabs.map((tab) => {
            const isActive = tab.path === '/qifu' ? isQifuActive : currentPath === tab.path;

            // Center item (祈福) - just a spacer
            if (tab.path === '/qifu') {
              return <div key={tab.path} className="w-12 h-full" />;
            }

            const Icon = tab.Icon;
            return (
              <button
                key={tab.path}
                onClick={() => navigate(tab.path)}
                className="flex flex-col items-center justify-center gap-0.5 px-3 py-2 min-w-[56px] transition-colors duration-200"
              >
                <Icon active={isActive} className="w-6 h-6" />
                <span
                  className={`text-[11px] font-medium tracking-wide ${
                    isActive ? 'text-palace' : 'text-ink'
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Center floating button - Jade/Compass style */}
        <button
          onClick={() => navigate('/xuyuan')}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-[22px] animate-float-jade
                     w-14 h-14 rounded-full flex items-center justify-center
                     bg-gradient-to-br from-gold-glow via-gold-DEFAULT to-gold-dark
                     shadow-[0_4px_20px_rgba(184,150,62,0.4),0_0_40px_rgba(184,150,62,0.15),inset_0_1px_0_rgba(255,255,255,0.3)]
                     border-2 border-gold-light/60
                     active:scale-95 transition-transform duration-150"
        >
          {/* Inner jade ring */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-jade-light/30 via-jade-DEFAULT/20 to-jade-dark/30
                          border border-gold-light/40 flex items-center justify-center
                          shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]">
            {/* Simplified compass/compass symbol */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#FEF9F0" strokeWidth="1.3">
              <circle cx="12" cy="12" r="8"/>
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 4V9M12 15V20M4 12H9M15 12H20" strokeLinecap="round"/>
              {/* Direction marks */}
              <path d="M12 3L13 9" strokeLinecap="round" strokeWidth="1.5"/>
              <path d="M12 21L11 15" strokeLinecap="round" strokeWidth="1.5"/>
            </svg>
          </div>
        </button>

        {/* Label below floating button */}
        <span
          className={`absolute left-1/2 -translate-x-1/2 top-12 text-[11px] font-medium tracking-wide whitespace-nowrap ${
            isQifuActive ? 'text-palace' : 'text-ink'
          }`}
        >
          祈福
        </span>
      </div>
    </nav>
  );
}
