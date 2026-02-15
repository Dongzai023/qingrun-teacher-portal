import React from 'react';
import { Settings, LogOut, ChevronRight, User, Bell, Shield, HelpCircle } from 'lucide-react';
import { ASSETS } from '../../constants';

interface ProfileScreenProps {
  onOpenProgress: () => void;
  onLogout: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onOpenProgress, onLogout }) => {
  return (
    <div className="pb-28">
      {/* Header */}
      <div className="relative h-64 overflow-hidden">
         <img src={ASSETS.bg_campus} className="w-full h-full object-cover filter blur-[2px] opacity-80" alt="Cover" />
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-light"></div>
      </div>

      <div className="px-6 -mt-20 relative z-10">
        {/* Profile Card */}
        <div className="glass-card rounded-[32px] p-6 text-center shadow-xl">
             <div className="relative inline-block mb-4">
                 <img src={ASSETS.avatar_main} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md" alt="Profile" />
                 <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full border-4 border-white flex items-center justify-center">
                    <User size={14} className="text-white" />
                 </div>
             </div>
             
             <h2 className="text-2xl font-bold text-slate-800">树苗哥哥</h2>
             <p className="text-sm text-slate-500 font-medium mb-4">T09283 · 高级教师</p>
             
             <div className="flex justify-center gap-3 mb-6">
                 <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">技术组</span>
                 <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">教研室</span>
             </div>

             <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-6">
                 <div onClick={onOpenProgress} className="cursor-pointer active:opacity-60">
                     <p className="text-xl font-bold text-slate-800">4</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">审批中</p>
                 </div>
                 <div>
                     <p className="text-xl font-bold text-slate-800">12</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">剩余年假</p>
                 </div>
                 <div>
                     <p className="text-xl font-bold text-slate-800">0</p>
                     <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">本月迟到</p>
                 </div>
             </div>
        </div>

        {/* Menu Items */}
        <div className="mt-8 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">账户设置</h3>
            
            <div className="glass-panel rounded-2xl overflow-hidden">
                <button className="w-full p-4 flex items-center justify-between hover:bg-white/50 transition-colors border-b border-white/50">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                            <User size={18} />
                        </div>
                        <span className="text-sm font-bold text-slate-700">个人信息</span>
                    </div>
                    <ChevronRight size={18} className="text-slate-300" />
                </button>
                <button className="w-full p-4 flex items-center justify-between hover:bg-white/50 transition-colors border-b border-white/50">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
                            <Bell size={18} />
                        </div>
                        <span className="text-sm font-bold text-slate-700">通知设置</span>
                    </div>
                    <ChevronRight size={18} className="text-slate-300" />
                </button>
                <button className="w-full p-4 flex items-center justify-between hover:bg-white/50 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-green-50 text-green-500 flex items-center justify-center">
                            <Shield size={18} />
                        </div>
                        <span className="text-sm font-bold text-slate-700">账号安全</span>
                    </div>
                    <ChevronRight size={18} className="text-slate-300" />
                </button>
            </div>

            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2 mt-6">更多</h3>
            
            <div className="glass-panel rounded-2xl overflow-hidden">
                 <button className="w-full p-4 flex items-center justify-between hover:bg-white/50 transition-colors border-b border-white/50">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center">
                            <Settings size={18} />
                        </div>
                        <span className="text-sm font-bold text-slate-700">系统通用</span>
                    </div>
                    <ChevronRight size={18} className="text-slate-300" />
                </button>
                <button className="w-full p-4 flex items-center justify-between hover:bg-white/50 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-cyan-50 text-cyan-500 flex items-center justify-center">
                            <HelpCircle size={18} />
                        </div>
                        <span className="text-sm font-bold text-slate-700">帮助与反馈</span>
                    </div>
                    <ChevronRight size={18} className="text-slate-300" />
                </button>
            </div>
            
            <button 
                onClick={onLogout}
                className="w-full mt-6 p-4 rounded-2xl bg-red-50 text-red-500 font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
                <LogOut size={18} />
                退出登录
            </button>
            
            <p className="text-center text-[10px] text-slate-400 pt-6 pb-2">Version 2.4.0 (Build 20250403)</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;