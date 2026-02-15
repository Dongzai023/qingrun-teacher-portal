import React from 'react';
import { ArrowLeft, CheckCircle, Clock, FileText, MoreHorizontal } from 'lucide-react';
import { ASSETS } from '../../constants';

interface LeaveProgressScreenProps {
  onBack: () => void;
}

const LeaveProgressScreen: React.FC<LeaveProgressScreenProps> = ({ onBack }) => {
  return (
    <div className="h-full flex flex-col bg-bg-light">
      {/* Header */}
      <div className="px-6 pt-safe pb-4 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between sticky top-0 z-20">
          <button onClick={onBack} className="w-10 h-10 -ml-2 flex items-center justify-center text-slate-800 rounded-full active:bg-slate-100">
              <ArrowLeft size={24} />
          </button>
          <h1 className="text-lg font-bold text-slate-800">审批进度</h1>
          <button className="w-10 h-10 -mr-2 flex items-center justify-center text-slate-800 rounded-full active:bg-slate-100">
              <MoreHorizontal size={24} />
          </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 pb-20">
        
        {/* Status Card */}
        <div className="bg-orange-500 rounded-[32px] p-6 text-white shadow-xl shadow-orange-200 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <Clock size={28} className="text-orange-100" />
                    <h2 className="text-2xl font-bold">审批中</h2>
                </div>
                <p className="text-orange-100 text-sm mb-6">您的病假申请正在等待 [教务处] 审批，预计将在 24 小时内完成。</p>
                <div className="w-full h-1.5 bg-black/10 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-white/90 rounded-full"></div>
                </div>
            </div>
        </div>

        {/* Details */}
        <div className="glass-panel p-6 rounded-[24px] mb-8">
            <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                <FileText size={16} className="text-primary"/> 申请详情
            </h3>
            <div className="space-y-4">
                <div className="flex justify-between">
                    <span className="text-xs text-slate-400">请假类型</span>
                    <span className="text-xs font-bold text-slate-700">病假</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-xs text-slate-400">开始时间</span>
                    <span className="text-xs font-bold text-slate-700">2025/04/05 09:00</span>
                </div>
                 <div className="flex justify-between">
                    <span className="text-xs text-slate-400">结束时间</span>
                    <span className="text-xs font-bold text-slate-700">2025/04/05 18:00</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-xs text-slate-400">共计时长</span>
                    <span className="text-xs font-bold text-slate-700">8小时</span>
                </div>
                <div className="border-t border-slate-100 pt-3 mt-2">
                    <span className="text-xs text-slate-400 block mb-2">请假事由</span>
                    <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl">
                        因重感冒发烧需去医院挂水，特申请病假一天。工作已交接给李老师。
                    </p>
                </div>
            </div>
        </div>

        {/* Timeline */}
        <div className="px-2">
            <h3 className="text-sm font-bold text-slate-800 mb-6">审批流程</h3>
            
            <div className="relative pl-8 space-y-8 before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200">
                
                {/* Step 1 */}
                <div className="relative">
                    <div className="absolute -left-[30px] top-0 w-7 h-7 bg-primary rounded-full border-4 border-bg-light flex items-center justify-center z-10">
                        <CheckCircle size={12} className="text-white" />
                    </div>
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm font-bold text-slate-800">发起申请</p>
                            <p className="text-xs text-slate-500 mt-1">树苗哥哥 (本人)</p>
                        </div>
                        <span className="text-[10px] text-slate-400">04/03 14:20</span>
                    </div>
                </div>

                {/* Step 2 (Active) */}
                <div className="relative">
                    <div className="absolute -left-[30px] top-0 w-7 h-7 bg-orange-500 rounded-full border-4 border-bg-light flex items-center justify-center z-10 shadow-lg shadow-orange-200">
                        <Clock size={12} className="text-white" />
                    </div>
                     <div className="glass-card p-4 rounded-xl -mt-2">
                        <div className="flex items-center gap-3 mb-2">
                            <img src="https://i.pravatar.cc/100?img=11" className="w-8 h-8 rounded-full" />
                            <div>
                                <p className="text-sm font-bold text-slate-800">王主任</p>
                                <p className="text-[10px] text-slate-500">教务处审批</p>
                            </div>
                        </div>
                        <div className="text-[10px] text-orange-500 font-bold bg-orange-50 inline-block px-2 py-1 rounded">审批中</div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="relative opacity-50">
                    <div className="absolute -left-[30px] top-0 w-7 h-7 bg-slate-200 rounded-full border-4 border-bg-light z-10"></div>
                     <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm font-bold text-slate-800">抄送</p>
                            <p className="text-xs text-slate-500 mt-1">人事部</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <button className="w-full mt-12 py-3 text-sm font-bold text-slate-400 hover:text-red-500 transition-colors">
            撤销申请
        </button>

      </div>
    </div>
  );
};

export default LeaveProgressScreen;