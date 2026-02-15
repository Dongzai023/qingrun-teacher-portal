const api = require('../../utils/api.js');
const app = getApp()

Page({
    data: {
        assets: app.globalData.assets,
        statusBarHeight: 20,
        todayAttendance: null
    },

    onLoad() {
        const info = wx.getWindowInfo()
        this.setData({
            statusBarHeight: info.statusBarHeight
        })
        this.fetchAttendance()
    },

    onShow() {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            })
        }
    },

    fetchAttendance() {
        api.getTodayAttendance().then(res => {
            if (res) {
                this.setData({ todayAttendance: res })
            } else {
                this.setData({ todayAttendance: null })
            }
        }).catch(err => {
            // Unexpected errors
        })
    },

    onCheckIn() {
        wx.showLoading({ title: '签到中...' })

        api.checkIn({
            slot: 'morning', // In future, determine based on current time
            location: '校本部'
        }).then(res => {
            wx.hideLoading()
            wx.showToast({
                title: '签到成功',
                icon: 'success'
            })
            this.fetchAttendance()
        }).catch(err => {
            wx.hideLoading()
        })
    },

    goToStats() {
        wx.switchTab({
            url: '/pages/stats/stats'
        })
    }
})
