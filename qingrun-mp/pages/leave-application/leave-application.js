const api = require('../../utils/api.js');

Page({
    data: {
        statusBarHeight: 20,
        leaveType: 'sick',
        startDate: '2025-04-04',
        startTime: '09:00',
        endDate: '2025-04-04',
        endTime: '18:00',
        reason: ''
    },

    onLoad() {
        const info = wx.getWindowInfo()
        this.setData({
            statusBarHeight: info.statusBarHeight
        })
    },

    onReasonInput(e) {
        this.setData({ reason: e.detail.value })
    },

    goBack() {
        wx.navigateBack()
    },

    setLeaveType(e) {
        this.setData({
            leaveType: e.currentTarget.dataset.type
        })
    },

    onStartDateChange(e) { this.setData({ startDate: e.detail.value }) },
    onStartTimeChange(e) { this.setData({ startTime: e.detail.value }) },
    onEndDateChange(e) { this.setData({ endDate: e.detail.value }) },
    onEndTimeChange(e) { this.setData({ endTime: e.detail.value }) },

    uploadFile() {
        wx.chooseImage({
            count: 1,
            success: (res) => {
                wx.showToast({ title: '已选择图片' })
            }
        })
    },

    submitForm() {
        if (!this.data.reason) {
            wx.showToast({ title: '请输入请假事由', icon: 'none' });
            return;
        }

        wx.showLoading({ title: '提交中...' })

        const startTime = `${this.data.startDate}T${this.data.startTime}:00`
        const endTime = `${this.data.endDate}T${this.data.endTime}:00`

        api.applyLeave({
            type: this.data.leaveType,
            start_time: startTime,
            end_time: endTime,
            duration: 8.0, // Should be calculated but simplified for now
            reason: this.data.reason
        }).then(res => {
            wx.hideLoading()
            wx.showToast({
                title: '提交成功',
                icon: 'success',
                success: () => {
                    setTimeout(() => {
                        wx.navigateBack()
                    }, 1500)
                }
            })
        }).catch(err => {
            wx.hideLoading()
        })
    }
})
