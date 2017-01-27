const {API} = require('../../utils/constants')
const app = getApp()

Page({
    data: {
        parties: [],
    },
    onLoad() {
        const that = this

        wx.request({
            url: `${API}/parties`,
            success(res) {
                const parties = res.data

                that.setData({
                    parties: parties.map(party => {
                        party.time = new Date(party.time)
                        return party
                    }),
                })
            }
        })
    },
})
