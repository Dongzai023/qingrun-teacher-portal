import React from 'react';
import { Home, BarChart2, Bell, User } from 'lucide-react';
import { TabState } from '../types';

interface BottomNavProps {
  activeTab: TabState;
  onTabChange: (tab: TabState) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="absolute bottom-0 left-0 right-0 glass-panel rounded-t-[32px] px-8 pb-8 pt-4 flex justify-between items-end z-40 border-t border-white/60">
      <button 
        onClick={() => onTabChange('home')}
        className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-primary' : 'text-slate-400'}`}
      >
        <Home size={24} strokeWidth={activeTab === 'home' ? 2.5 : 2} />
        <span className="text-[10px] font-bold">首页</span>
      </button>

      <button 
        onClick={() => onTabChange('stats')}
        className={`flex flex-col items-center gap-1 ${activeTab === 'stats' ? 'text-primary' : 'text-slate-400'}`}
      >
        <BarChart2 size={24} strokeWidth={activeTab === 'stats' ? 2.5 : 2} />
        <span className="text-[10px] font-bold">统计</span>
      </button>

      <div className="relative -top-6">
        <button 
          className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 border-4 border-white/80 active:scale-95 transition-transform"
          onClick={() => onTabChange('home')}
        >
           <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M12 10a2 2 0 0 0-2 2c0 1.07.93 2 2.07 1.93A2.01 2.01 0 0 0 14 12a2 2 0 0 0-2-2z" />
             <path d="M19 12a7.1 7.1 0 0 0-2.3-5.2M8.9 18.9A7.1 7.1 0 0 0 12 19M5.2 5.2A11.9 11.9 0 0 0 2.2 11.8M18.7 18.7A11.9 11.9 0 0 0 21.8 12.2" />
             <path d="M15.3 15.3a5 5 0 0 0 0-6.6" />
           </svg>
        </button>
      </div>

      <button className="flex flex-col items-center gap-1 text-slate-400">
        <Bell size={24} strokeWidth={2} />
        <span className="text-[10px] font-bold">消息</span>
      </button>

      <button 
        onClick={() => onTabChange('profile')}
        className={`flex flex-col items-center gap-1 ${activeTab === 'profile' ? 'text-primary' : 'text-slate-400'}`}
      >
        <User size={24} strokeWidth={activeTab === 'profile' ? 2.5 : 2} />
        <span className="text-[10px] font-bold">个人中心</span>
      </button>
    </nav>
  );
};

export default BottomNav;