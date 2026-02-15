// pages/profile/profile.js
const app = getApp()

Page({
    data: {
        assets: app.globalData.assets
    },

    onShow() {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 2
            })
        }
    },

    goToProgress() {
        wx.navigateTo({
            url: '/pages/leave-progress/leave-progress'
        })
    },

    handleLogout() {
        wx.showModal({
            title: '退出登录',
            content: '确定要退出当前账号吗？',
            success: (res) => {
                if (res.confirm) {
                    app.globalData.userInfo = null
                    wx.reLaunch({
                        url: '/pages/login/login'
                    })
                }
            }
        })
    }
})
