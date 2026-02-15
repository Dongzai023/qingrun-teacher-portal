// pages/leave-progress/leave-progress.js
Page({
    data: {
        statusBarHeight: 20
    },

    onLoad() {
        const info = wx.getWindowInfo()
        this.setData({
            statusBarHeight: info.statusBarHeight
        })
    },

    goBack() {
        wx.navigateBack()
    },

    revokeApplication() {
        wx.showActionSheet({
            itemList: ['确定撤销申请'],
            itemColor: '#ef4444',
            success: (res) => {
                if (res.tapIndex === 0) {
                    wx.showToast({ title: '已撤销' })
                    setTimeout(() => {
                        wx.navigateBack()
                    }, 1500)
                }
            }
        })
    }
})
