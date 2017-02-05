App({
    globalData: {
        userInfo: null,
    },
    onLaunch() {
        this.getUserInfo()
    },
    getUserInfo() {
        const that = this
        wx.login({
            success() {
                wx.getUserInfo({
                    success(res) {
                        that.globalData.userInfo = res.userInfo
                    }
                })
            }
        })
    }
})