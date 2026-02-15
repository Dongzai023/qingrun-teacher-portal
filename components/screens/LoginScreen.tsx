import React, { useState } from 'react';
import { User, Lock, ArrowRight } from 'lucide-react';
import { ASSETS } from '../../constants';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden flex flex-col items-center justify-center p-6">
      {/* Background Image with blur */}
      <div className="absolute inset-0 z-0">
         <img 
            src={ASSETS.bg_campus} 
            alt="Campus" 
            className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-white/40 backdrop-blur-sm bg-gradient-to-b from-white/30 to-white/70"></div>
      </div>

      <div className="relative z-10 w-full max-w-sm">
        <div className="text-center mb-10">
            <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl border border-white">
                <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72z"/>
                </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">清润中学教师签到系统</h1>
            <p className="text-slate-500 mt-2 text-xs font-medium tracking-widest uppercase">卓越教育 · 清润同行</p>
        </div>

        <div className="glass-panel p-8 rounded-3xl shadow-2xl">
            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">工号 / 手机号</label>
                    <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                        <input 
                            type="text" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="请输入您的工号或手机号"
                            className="w-full bg-white/60 border border-white rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-800 placeholder:text-slate-400"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">密码</label>
                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="请输入登录密码"
                            className="w-full bg-white/60 border border-white rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-800 placeholder:text-slate-400"
                        />
                    </div>
                </div>

                <div className="flex justify-between items-center text-sm px-1">
                    <button className="text-primary font-bold">注册账号</button>
                    <button className="text-slate-500">忘记密码？</button>
                </div>

                <button 
                    onClick={onLogin}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 active:scale-95 transition-all mt-4"
                >
                    <ArrowRight size={20} />
                    <span>登 录</span>
                </button>
            </div>

            <div className="mt-8 relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-300/50"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                    <span className="bg-white/40 px-4 text-slate-400 rounded-full backdrop-blur-sm">其他方式登录</span>
                </div>
            </div>

            <button className="w-full mt-6 bg-white/60 border border-white hover:bg-white text-slate-700 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all">
                <svg className="w-5 h-5 text-[#07C160]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.527 3.655 1.446 5.161L2.12 21.84l4.864-1.28A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm4.184 14.125c-.244.342-.486.637-.872.784-.336.128-.687.172-1.041.172-1.42 0-3.355-.83-4.576-2.051-1.221-1.221-2.051-3.156-2.051-4.576 0-.354.044-.705.172-1.041.147-.386.442-.628.784-.872.285-.205.589-.413.882-.413.118 0 .236.035.344.098.344.198.67.75.811 1.05.071.155.106.315.106.471 0 .393-.244.736-.61 1.05-.138.12-.138.256 0 .377a5.532 5.532 0 001.99 1.99c.121.138.257.138.377 0 .314-.366.657-.61 1.05-.61.156 0 .316.035.471.106.3.141.852.467 1.05.811.063.108.098.226.098.344 0 .293-.208.597-.413.882z"/>
                </svg>
                微信一键登录
            </button>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-4 h-4 rounded border-2 border-primary/50 flex items-center justify-center bg-primary">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <p className="text-[10px] text-slate-500">
                我已阅读并同意 <span className="text-primary font-bold">《用户隐私政策》</span> 与 <span className="text-primary font-bold">《系统使用规范》</span>
            </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;