const api = require('../../utils/api.js');

Page({
    data: {
        stats: {
            attendance_rate: 0,
            attended_days: 0,
            total_days: 0,
            exceptions: 0
        },
        weeklyData: [
            { day: '一', height: '80%', isWeekend: false },
            { day: '二', height: '95%', isWeekend: false },
            { day: '三', height: '100%', isWeekend: false },
            { day: '四', height: '90%', isWeekend: false },
            { day: '五', height: '85%', isWeekend: false },
            { day: '六', height: '20%', isWeekend: true },
            { day: '日', height: '20%', isWeekend: true }
        ],
        historyData: []
    },

    onLoad() {
        this.fetchStats()
        this.fetchHistory()
    },

    onShow() {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 1
            })
        }
    },

    fetchStats() {
        api.getMonthlyStats().then(res => {
            this.setData({ stats: res })
        })
    },

    fetchHistory() {
        // Since we don't have a dedicated history endpoint but leave history is available
        // and attendance record for today is available, we'll just mock or use leave history for now
        // to demonstrate integration.
        api.getLeaveHistory().then(res => {
            // Transform leave history to historyData if needed, 
            // but for now let's just show we are calling it.
        })
    },

    goToLeaveApplication() {
        wx.navigateTo({
            url: '/pages/leave-application/leave-application'
        })
    }
})
