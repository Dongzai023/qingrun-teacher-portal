const BASE_URL = 'http://118.89.167.57:8000'; // 开发环境下使用

const request = (options) => {
    return new Promise((resolve, reject) => {
        const token = wx.getStorageSync('token');

        wx.request({
            url: BASE_URL + options.url,
            method: options.method || 'GET',
            data: options.data,
            header: {
                'Content-Type': options.method === 'POST' && options.url.includes('login') ? 'application/x-www-form-urlencoded' : 'application/json',
                'Authorization': token ? `Bearer ${token}` : '',
                ...options.header
            },
            success: (res) => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data);
                } else if (res.statusCode === 401) {
                    wx.removeStorageSync('token');
                    wx.reLaunch({ url: '/pages/login/login' });
                    reject(res);
                } else {
                    if (!options.silent) {
                        wx.showToast({
                            title: res.data.detail || '请求失败',
                            icon: 'none'
                        });
                    }
                    reject(res);
                }
            },
            fail: (err) => {
                wx.showToast({
                    title: '网络连接失败',
                    icon: 'none'
                });
                reject(err);
            }
        });
    });
};

module.exports = {
    request,
    login: (data) => request({ url: '/api/auth/login', method: 'POST', data }),
    getTodayAttendance: () => request({ url: '/api/attendance/today', silent: true }),
    checkIn: (data) => request({ url: '/api/attendance/check-in', method: 'POST', data }),
    getMonthlyStats: () => request({ url: '/api/stats/monthly' }),
    applyLeave: (data) => request({ url: '/api/leave/apply', method: 'POST', data }),
    getLeaveHistory: () => request({ url: '/api/leave/history' })
};
