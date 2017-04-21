import qcloud from './libs/sdk/index'
import config from './config'

App({
    globalData: {
        userInfo: null,
        userId: 9527,
    },
    onLaunch() {
        qcloud.setLoginUrl(config.loginUrl)

        qcloud.login({
            success: (result) => {
                console.log('登录成功', result);
                this.globalData.userInfo = result
            },
            fail(error) {
                console.log('登录失败', error);
            }
        })
    }
})