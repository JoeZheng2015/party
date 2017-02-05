const {API} = require('../../utils/constants')
const {formatTime} = require('../../utils/util')
const app = getApp()

Page({
    data: {
        parties: [],
    },
    props: {
        userInfo: null,
    },
    onLoad() {
        const that = this

        wx.request({
            url: `${API}/parties`,
            success(res) {
                const parties = res.data

                that.setData({
                    parties: parties.map(party => {
                        const {year, month, day, hour, minute} = formatTime(new Date(party.time))

                        party.time = `${year}-${month}-${day} ${hour}:${minute}`
                        return party
                    }),
                })
            }
        })

        this.getUserInfo()
    },
    getUserInfo() {
        const that = this

        wx.login({
            success() {
                wx.getUserInfo({
                    success(res) {
                        that.props.userInfo = res.userInfo
                    }
                })
            }
        })
    }
})
