import React from 'react';
import { MoreHorizontal, Disc, ChevronRight, X, Check, Clock, Moon } from 'lucide-react';
import { ASSETS } from '../../constants';

interface HomeScreenProps {
  onOpenStats: () => void;
  onOpenLeave: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onOpenStats, onOpenLeave }) => {
  return (
    <div className="pb-10">
      {/* Top Navigation / WeChat Bar */}
      <div className="sticky top-0 z-30 bg-white/70 backdrop-blur-xl border-b border-slate-100 pt-safe">
        <div className="h-11 flex items-center justify-between px-4">
           <div className="w-8"></div>
           <div className="font-semibold text-slate-800">Weixin</div>
           <div className="flex items-center gap-3 bg-white/50 border border-slate-200 rounded-full px-3 py-1">
             <MoreHorizontal size={16} className="text-slate-800" />
             <div className="w-[1px] h-3 bg-slate-300"></div>
             <Disc size={16} className="text-slate-800" />
           </div>
        </div>
        <div className="py-2 text-center">
             <h1 className="text-sm font-bold text-slate-800">清润中学教师签到系统</h1>
        </div>
      </div>

      {/* Hero Header */}
      <div className="relative h-72 rounded-b-[40px] overflow-hidden shadow-xl shadow-primary/5 mx-auto">
        <img src={ASSETS.bg_campus} className="w-full h-full object-cover" alt="Header" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-16 left-8 text-white">
            <p className="text-lg font-light opacity-90">欢迎回来，</p>
            <h2 className="text-3xl font-bold leading-tight mt-1">美好的一天<br/>从这里开始</h2>
        </div>
      </div>

      {/* User Card */}
      <div className="relative z-10 mx-6 -mt-10">
        <div className="glass-panel p-5 rounded-[24px] flex items-center gap-4 shadow-lg">
            <div className="relative">
                <img src={ASSETS.avatar_main} className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-sm" alt="User" />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white shadow-sm">
                    TOP 24
                </div>
            </div>
            <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800">树苗哥哥</h3>
                <p className="text-xs text-slate-500 mt-1">张晓东 · 技术组</p>
                <div className="flex gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-md">在职</span>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-md">教师</span>
                </div>
            </div>
        </div>
      </div>

      {/* Check-in Cards Scroller */}
      <div className="mt-8 px-6">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-800">今日签到</h3>
            <span className="text-xs font-bold text-slate-400 bg-white px-3 py-1 rounded-full shadow-sm">4个时段</span>
        </div>
        
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-6 px-6 snap-x">
            {/* Card 1: Missed */}
            <div className="snap-start flex-shrink-0 w-32 bg-white rounded-3xl p-4 border border-red-100 relative overflow-hidden flex flex-col justify-between h-40 shadow-sm">
                <div className="absolute top-0 right-0 w-12 h-12 bg-red-50 rounded-bl-3xl"></div>
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 mb-2">
                    <X size={16} strokeWidth={3} />
                </div>
                <div>
                    <p className="text-xs text-slate-400 mb-1">早间</p>
                    <p className="text-lg font-bold text-slate-800">06:30</p>
                    <p className="text-[10px] text-slate-400 mb-2">~ 08:59</p>
                    <div className="w-full py-1 bg-red-500 text-white text-[10px] font-bold text-center rounded-lg shadow-red-200 shadow-md">未签</div>
                </div>
            </div>

            {/* Card 2: Checked (Active) */}
            <div className="snap-start flex-shrink-0 w-32 bg-gradient-to-br from-[#11d45f] to-[#0eb350] rounded-3xl p-4 text-white relative overflow-hidden flex flex-col justify-between h-40 shadow-lg shadow-primary/30 ring-4 ring-primary/10">
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2 shadow-inner">
                    <Check size={16} strokeWidth={3} />
                </div>
                <div className="relative z-10">
                    <p className="text-xs text-green-100 mb-1">上午</p>
                    <p className="text-lg font-bold">09:00</p>
                    <p className="text-[10px] text-green-100 mb-2">~ 12:00</p>
                    <div className="w-full py-1 bg-white text-primary text-[10px] font-bold text-center rounded-lg shadow-sm">已签</div>
                </div>
            </div>

            {/* Card 3: Pending */}
            <div className="snap-start flex-shrink-0 w-32 bg-white rounded-3xl p-4 border border-slate-100 relative overflow-hidden flex flex-col justify-between h-40 shadow-sm opacity-60">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-2">
                    <Clock size={16} strokeWidth={3} />
                </div>
                <div>
                    <p className="text-xs text-slate-400 mb-1">下午</p>
                    <p className="text-lg font-bold text-slate-800">13:30</p>
                    <p className="text-[10px] text-slate-400 mb-2">~ 16:20</p>
                    <div className="w-full py-1 bg-slate-100 text-slate-500 text-[10px] font-bold text-center rounded-lg">待签</div>
                </div>
            </div>

             {/* Card 4: Evening */}
             <div className="snap-start flex-shrink-0 w-32 bg-white rounded-3xl p-4 border border-slate-100 relative overflow-hidden flex flex-col justify-between h-40 shadow-sm opacity-60">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-2">
                    <Moon size={16} strokeWidth={3} />
                </div>
                <div>
                    <p className="text-xs text-slate-400 mb-1">晚间</p>
                    <p className="text-lg font-bold text-slate-800">16:21</p>
                    <p className="text-[10px] text-slate-400 mb-2">~ 21:20</p>
                    <div className="w-full py-1 bg-slate-100 text-slate-500 text-[10px] font-bold text-center rounded-lg">待签</div>
                </div>
            </div>
        </div>
      </div>

      {/* Main Action Area */}
      <div className="mt-8 flex flex-col items-center justify-center py-6">
          <div className="text-center mb-8">
              <p className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-1">Current Time</p>
              <h1 className="text-5xl font-mono font-bold text-slate-800 tracking-tighter">
                11:42<span className="text-3xl text-slate-300 ml-1">:39</span>
              </h1>
              <div className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 rounded-full bg-white border border-slate-100 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-xs font-medium text-slate-500">2025/04/03 · 周四</span>
              </div>
          </div>

          <button className="relative group w-48 h-48 rounded-full flex items-center justify-center transition-transform active:scale-95">
              {/* Pulse Effects */}
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-20 duration-1000"></div>
              <div className="absolute inset-4 border border-primary/30 border-dashed rounded-full animate-[spin_10s_linear_infinite]"></div>
              
              {/* Main Button */}
              <div className="relative w-40 h-40 bg-gradient-to-b from-[#1ce66f] to-[#0eb350] rounded-full shadow-[0_20px_40px_-10px_rgba(17,212,95,0.5)] flex flex-col items-center justify-center border-[6px] border-white/40 backdrop-blur-sm z-20">
                   <svg viewBox="0 0 24 24" fill="none" className="w-14 h-14 text-white mb-1 drop-shadow-md" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 6" />
                     <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
                     <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
                     <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
                     <path d="M8.65 22c.21-.66.45-1.32.57-2" />
                     <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
                     <path d="M2 16h.01" />
                     <path d="M21.8 16c.2-2 .131-5.354 0-6" />
                     <path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2" />
                   </svg>
                   <span className="text-2xl font-bold text-white tracking-widest drop-shadow-sm">签到</span>
                   <span className="text-[9px] text-green-100 uppercase tracking-widest mt-1 opacity-90">Tap to Check-in</span>
              </div>
          </button>
      </div>

      {/* Stats Entry */}
      <div className="px-6 mt-4 pb-20">
          <button onClick={onOpenStats} className="w-full bg-white rounded-[24px] p-4 flex items-center justify-between shadow-lg shadow-slate-200/50 border border-slate-100 group">
              <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                     </svg>
                  </div>
                  <div className="text-left">
                      <h4 className="font-bold text-slate-800">数据统计</h4>
                      <p className="text-xs text-slate-400">查看历史考勤记录与异常</p>
                  </div>
              </div>
              <ChevronRight className="text-slate-300" />
          </button>
      </div>
    </div>
  );
};

export default HomeScreen;