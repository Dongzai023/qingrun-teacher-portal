Component({
    data: {
        selected: 0,
        list: [
            {
                pagePath: "/pages/home/home",
                text: "首页"
            },
            {
                pagePath: "/pages/stats/stats",
                text: "统计"
            },
            {
                pagePath: "/pages/profile/profile",
                text: "个人中心"
            }
        ]
    },
    methods: {
        switchTab(e) {
            const data = e.currentTarget.dataset
            const url = data.path
            wx.switchTab({ url })
        },
        handleCenterBtn() {
            wx.navigateTo({
                url: '/pages/leave-application/leave-application'
            })
        }
    }
})
