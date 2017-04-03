import {API} from '../../utils/constants'
import {fetchParty, joinParty} from '../../actions/detail'
import {processParty} from 'helper'

const app = getApp()

Page({
    data: {
        party: null,
    },
    onLoad(query) {
        const id = this.id = query.id

        fetchParty(id)
            .then(party => {
                this.setData({
                    party: processParty(party),
                })
            })
    },
    join(e) {
        joinParty(this.id, app.globalData.userInfo)
            .then(res => {
                if (res && res.ret === 0) {
                    this.setData({
                        party: res.party
                    })
                }
            })
    }
})