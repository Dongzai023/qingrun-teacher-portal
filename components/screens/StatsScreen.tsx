import React from 'react';
import { Calendar, LogIn, LogOut, Award } from 'lucide-react';

interface StatsScreenProps {
    onOpenLeave: () => void;
}

const StatsScreen: React.FC<StatsScreenProps> = ({ onOpenLeave }) => {
    // Circle calculations
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const progress = 98.5;
    const dashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="px-6 pb-28 pt-8">
            <header className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900">记录统计</h1>
                </div>
                <button className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-600 hover:text-primary transition-colors">
                    <Calendar size={20} />
                </button>
            </header>

            {/* Main Stats Card */}
            <div className="glass-card rounded-[32px] p-6 relative overflow-hidden mb-8">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                
                <div className="flex flex-col items-center">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">本月出勤率</p>
                    
                    <div className="relative flex items-center justify-center mb-8">
                        {/* SVG Ring Chart */}
                        <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 192 192">
                            <circle 
                                cx="96" cy="96" r={radius} 
                                stroke="#f1f5f9" strokeWidth="8" fill="transparent" 
                            />
                            <circle 
                                cx="96" cy="96" r={radius} 
                                stroke="currentColor" strokeWidth="8" fill="transparent" 
                                strokeDasharray={circumference} 
                                strokeDashoffset={dashoffset}
                                strokeLinecap="round"
                                className="text-primary transition-all duration-1000 ease-out" 
                            />
                        </svg>
                        
                        <div className="absolute flex flex-col items-center">
                            <span className="text-5xl font-light text-slate-900 tracking-tighter">98.5<span className="text-2xl font-medium">%</span></span>
                            <span className="text-[10px] text-accent-gold font-bold flex items-center gap-1 mt-1 bg-yellow-50 px-2 py-0.5 rounded-full border border-yellow-100">
                                <Award size={10} /> 前 1%
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 w-full pb-6 border-b border-slate-100/50">
                        <div className="text-center">
                            <p className="text-[10px] text-slate-400 font-bold mb-1">正常</p>
                            <p className="text-xl font-bold text-slate-800">21</p>
                        </div>
                        <div className="text-center border-l border-slate-100/50">
                            <p className="text-[10px] text-slate-400 font-bold mb-1">迟到</p>
                            <p className="text-xl font-bold text-slate-800">0</p>
                        </div>
                        <div className="text-center border-l border-slate-100/50">
                            <p className="text-[10px] text-slate-400 font-bold mb-1">缺勤</p>
                            <p className="text-xl font-bold text-slate-800">1</p>
                        </div>
                        <div className="text-center border-l border-slate-100/50">
                            <p className="text-[10px] text-slate-400 font-bold mb-1">请假</p>
                            <p className="text-xl font-bold text-slate-800">2</p>
                        </div>
                    </div>

                    <button onClick={onOpenLeave} className="w-full mt-6 flex items-center justify-center gap-2 py-3.5 bg-white/60 hover:bg-white border border-white rounded-xl transition-all group active:scale-95 shadow-sm">
                        <span className="text-sm font-bold text-blue-500">申请请假</span>
                    </button>
                </div>
            </div>

            {/* Weekly Overview */}
            <div className="mb-8">
                 <div className="flex justify-between items-end mb-4 px-2">
                    <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">周概览</h2>
                    <span className="text-[10px] text-primary font-bold flex items-center gap-1">
                        较上周 +2.4%
                    </span>
                </div>
                <div className="glass-card rounded-2xl p-5">
                    <div className="flex items-end justify-between h-24 gap-2">
                        {['一', '二', '三', '四', '五', '六', '日'].map((day, i) => {
                            const heights = ['80%', '95%', '100%', '90%', '85%', '20%', '20%'];
                            const isWeekend = i > 4;
                            return (
                                <div key={day} className={`flex-1 flex flex-col items-center gap-2 ${isWeekend ? 'opacity-40' : ''}`}>
                                    <div className={`w-full ${isWeekend ? 'bg-slate-100' : 'bg-primary/10'} rounded-full h-16 relative overflow-hidden flex items-end justify-center`}>
                                        <div 
                                            className={`w-full ${isWeekend ? 'bg-slate-300' : 'bg-primary'} rounded-t-sm transition-all duration-500`} 
                                            style={{ height: heights[i] }}
                                        ></div>
                                    </div>
                                    <span className="text-[10px] text-slate-400 font-bold">{day}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* History List */}
            <div className="space-y-4">
                <div className="flex justify-between items-center mb-2 px-2">
                    <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest">历史记录</h2>
                    <span className="text-xs text-slate-400 font-medium">2023年10月</span>
                </div>

                {/* Item 1 */}
                <div className="glass-panel rounded-2xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/60 flex flex-col items-center justify-center shadow-sm">
                            <span className="text-[10px] font-bold text-slate-400 leading-tight">10月</span>
                            <span className="text-lg font-bold text-slate-800 leading-tight">24</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 text-xs font-bold text-slate-700 mb-1">
                                <span className="flex items-center gap-1"><LogIn size={12} className="text-primary"/> 07:52</span>
                                <span className="flex items-center gap-1"><LogOut size={12} className="text-orange-400"/> 17:45</span>
                            </div>
                            <span className="text-[10px] text-slate-400">教师大门 - 东入口</span>
                        </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase">正常</span>
                </div>

                {/* Item 2 */}
                <div className="glass-panel rounded-2xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/60 flex flex-col items-center justify-center shadow-sm">
                            <span className="text-[10px] font-bold text-slate-400 leading-tight">10月</span>
                            <span className="text-lg font-bold text-slate-800 leading-tight">23</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 text-xs font-bold text-slate-700 mb-1">
                                <span className="flex items-center gap-1"><LogIn size={12} className="text-primary"/> 07:55</span>
                                <span className="flex items-center gap-1"><LogOut size={12} className="text-orange-400"/> 17:40</span>
                            </div>
                            <span className="text-[10px] text-slate-400">教师大门 - 东入口</span>
                        </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase">正常</span>
                </div>

                {/* Item 3 - Late */}
                 <div className="glass-panel rounded-2xl p-4 flex items-center justify-between opacity-80">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-red-50 flex flex-col items-center justify-center shadow-sm">
                            <span className="text-[10px] font-bold text-red-300 leading-tight">10月</span>
                            <span className="text-lg font-bold text-red-500 leading-tight">22</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 text-xs font-bold text-slate-700 mb-1">
                                <span className="flex items-center gap-1 text-red-500"><LogIn size={12}/> 09:12</span>
                                <span className="flex items-center gap-1"><LogOut size={12} className="text-orange-400"/> 18:00</span>
                            </div>
                            <span className="text-[10px] text-slate-400">教师大门 - 北入口</span>
                        </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-red-100 text-red-500 text-[10px] font-bold uppercase">迟到</span>
                </div>
            </div>
        </div>
    );
};

export default StatsScreen;