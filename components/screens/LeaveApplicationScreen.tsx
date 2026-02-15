import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Paperclip, ChevronDown, Check, ChevronRight } from 'lucide-react';

interface LeaveApplicationScreenProps {
  onBack: () => void;
}

const LeaveApplicationScreen: React.FC<LeaveApplicationScreenProps> = ({ onBack }) => {
  const [leaveType, setLeaveType] = useState('sick');

  return (
    <div className="h-full flex flex-col bg-bg-light">
      {/* Header */}
      <div className="px-6 pt-safe pb-4 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between sticky top-0 z-20">
          <button onClick={onBack} className="w-10 h-10 -ml-2 flex items-center justify-center text-slate-800 rounded-full active:bg-slate-100">
              <ArrowLeft size={24} />
          </button>
          <h1 className="text-lg font-bold text-slate-800">请假申请</h1>
          <div className="w-10"></div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 pb-32">
          
          <div className="glass-panel p-6 rounded-[32px] space-y-6">
              
              {/* Leave Type */}
              <div>
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1 mb-2 block">请假类型</label>
                  <div className="grid grid-cols-3 gap-3">
                      {['sick', 'casual', 'public'].map((type) => (
                          <button
                            key={type}
                            onClick={() => setLeaveType(type)}
                            className={`py-3 rounded-xl text-sm font-bold border transition-all ${
                                leaveType === type 
                                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30' 
                                : 'bg-white text-slate-500 border-white hover:border-primary/30'
                            }`}
                          >
                              {type === 'sick' && '病假'}
                              {type === 'casual' && '事假'}
                              {type === 'public' && '公假'}
                          </button>
                      ))}
                  </div>
              </div>

              {/* Time Selection */}
              <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1 mb-2 block">开始时间</label>
                    <div className="flex gap-3">
                        <div className="flex-1 bg-white/60 border border-white rounded-xl p-3 flex items-center gap-2">
                            <Calendar size={18} className="text-primary" />
                            <span className="text-sm font-bold text-slate-700">2025/04/04</span>
                        </div>
                        <div className="w-1/3 bg-white/60 border border-white rounded-xl p-3 flex items-center gap-2">
                            <Clock size={18} className="text-primary" />
                            <span className="text-sm font-bold text-slate-700">09:00</span>
                        </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1 mb-2 block">结束时间</label>
                    <div className="flex gap-3">
                        <div className="flex-1 bg-white/60 border border-white rounded-xl p-3 flex items-center gap-2">
                            <Calendar size={18} className="text-slate-400" />
                            <span className="text-sm font-bold text-slate-700">2025/04/04</span>
                        </div>
                        <div className="w-1/3 bg-white/60 border border-white rounded-xl p-3 flex items-center gap-2">
                            <Clock size={18} className="text-slate-400" />
                            <span className="text-sm font-bold text-slate-700">18:00</span>
                        </div>
                    </div>
                  </div>
              </div>
              
              <div className="p-3 bg-primary/5 rounded-xl border border-primary/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-primary">共计时长</span>
                  <span className="text-lg font-bold text-primary">8.0 小时</span>
              </div>

              {/* Reason */}
              <div>
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1 mb-2 block">请假事由</label>
                  <textarea 
                    className="w-full h-32 bg-white/60 border border-white rounded-xl p-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    placeholder="请详细描述请假原因..."
                  ></textarea>
              </div>

              {/* Attachment */}
               <div>
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1 mb-2 block">附件 (选填)</label>
                  <button className="w-full h-16 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center gap-1 text-slate-400 hover:border-primary hover:text-primary transition-colors bg-white/30">
                      <Paperclip size={20} />
                      <span className="text-[10px] font-bold">点击上传图片/证明</span>
                  </button>
              </div>

              {/* Approver Selection */}
              <div>
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1 mb-2 block">审批人</label>
                  <div className="flex items-center gap-3 overflow-x-auto pb-2">
                      <div className="flex flex-col items-center gap-1 min-w-[60px]">
                           <div className="w-12 h-12 rounded-full bg-slate-200 border-2 border-white relative overflow-hidden">
                               <img src="https://i.pravatar.cc/100?img=11" className="w-full h-full object-cover" />
                           </div>
                           <span className="text-[10px] font-bold text-slate-600">王主任</span>
                           <span className="text-[9px] text-slate-400">教务处</span>
                      </div>
                      <ChevronRight size={16} className="text-slate-300" />
                       <div className="flex flex-col items-center gap-1 min-w-[60px]">
                           <div className="w-12 h-12 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-slate-400">
                               <span className="text-xs">添加</span>
                           </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 px-12 py-6 bg-white/90 backdrop-blur-xl border-t border-slate-100 z-30">
          <button onClick={onBack} className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 active:scale-95 transition-transform">
              <Check size={20} />
              提交申请
          </button>
      </div>
    </div>
  );
};

export default LeaveApplicationScreen;