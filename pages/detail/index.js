import {API} from '../../utils/constants'
import {fetchParty, joinParty, quitParty, deleteParty} from '../../actions/detail'
import {processParty} from 'helper'
import Session from '../../libs/sdk/lib/session'

const app = getApp()

Page({
    data: {
        party: null,
        hasJoined: false,
    },
    onLoad(query) {
        const partyId = this.partyId = query.id
        const {id: userId} = Session.get()

        fetchParty(partyId)
            .then(party => {
                const hasJoined = party.players.findIndex(p => p.userId === userId) !== -1

                this.setData({
                    party: processParty(party),
                    hasJoined,
                })
            })
    },
    submit(e) {
        const {hasJoined} = this.data
        if (hasJoined) {
            this.quitParty()
        }
        else {
            this.joinParty()
        }
    },
    joinParty() {
        joinParty(this.partyId, app.globalData.userInfo)
            .then(res => {
                if (res && res.ret === 0) {
                    this.setData({
                        party: res.party
                    })
                }
            })
    },
    quitParty() {
        quitParty(this.partyId, {quit: true})
            .then(res => {
                if (res && res.ret === 0) {
                    this.setData({
                        party: res.party,
                    })
                }
            })
    },
    deleteParty() {
        deleteParty(this.partyId)
            .then(res => {
                if (res && res.ret === 0) {
                    wx.navigateTo({
                        url: '/pages/index/index'
                    })
                }
            })
    },
})