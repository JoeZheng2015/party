import qcloud from './libs/sdk/index'
import config from './config'

App({
    globalData: {
        userInfo: null,
        userId: 9527,
    },
    onLaunch() {
        qcloud.setLoginUrl(config.loginUrl)

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