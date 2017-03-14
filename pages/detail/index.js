import {API} from '../../utils/constants'
import {formatTime, formatNumber} from '../../utils/util'
const app = getApp()

Page({
    data: {
        party: null,
    },
    onLoad(query) {
        const that = this
        const id = this.id = query.id

        wx.request({
            url: `${API}/parties/${id}`,
            success(res) {
                let party = res.data
                const {year, month, day, hour, minute} = formatTime(new Date(party.time))

                party.time = [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':')

                that.setData({
                    party,
                })
            }
        })
    },
    join(e) {
        const that = this
        const {id} = that

        wx.request({
            url: `${API}/parties/${id}`,
            data: app.globalData.userInfo,
            method: 'POST',
            success(res) {
                if (res && res.data && res.data.ret === 0) {
                    that.setData({
                        party: res.data.party,
                    })
                }
            }
        })
    }
})