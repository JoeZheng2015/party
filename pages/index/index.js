import {API} from '../../utils/constants'
import {formatTime} from '../../utils/util'
const app = getApp()

Page({
    data: {
        parties: [],
    },
    onLoad() {
        const that = this

        wx.request({
            url: `${API}/parties`,
            data: {
                userId: app.globalData.userId,
            },
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
    },
})
