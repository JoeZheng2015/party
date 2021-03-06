import {API} from '../../config'
import {fetchParty, joinParty, quitParty, deleteParty} from '../../actions/detail'
import {processParty, isHasJoined, getRestTime} from 'helper'
import Session from '../../libs/sdk/lib/session'
import {navigateBackTo} from '../../utils/util'

const app = getApp()

Page({
    data: {
        party: null,
        hasJoined: false,
        restTime: '',
    },
    onLoad(query) {
        const partyId = this.partyId = query.id
        const {id: userId} = Session.get()

        fetchParty(partyId)
            .then(party => {
                this.setData({
                    party: processParty(party),
                    hasJoined: isHasJoined(userId, party.players),
                    restTime: getRestTime(party.time),
                })
            })
    },
    onShareAppMessage() {
        return {
            title: `${app.globalData.userInfo.nickName}邀请你参加聚会`,
            path: `/pages/detail/index?id=${this.partyId}`,
        }
    },
    updateParty() {
        const {hasJoined} = this.data
        if (hasJoined) {
            wx.showModal({
                title: '确认退出聚会？',
                showCancel: true,
                success: ({confirm}) => {
                    if (confirm) {
                        this.quitParty()
                    }
                }
            })
        }
        else {
            this.joinParty()
        }
    },
    joinParty() {
        joinParty(this.partyId, app.globalData.userInfo)
            .then(res => {
                const {id: userId} = Session.get()
                if (res && res.ret === 0) {
                    this.setData({
                        party: processParty(res.party),
                        hasJoined: isHasJoined(userId, res.party.players),
                    })
                }
            })
    },
    quitParty() {
        const {id: userId} = Session.get()
        quitParty(this.partyId)
            .then(res => {
                if (res && res.ret === 0) {
                    this.setData({
                        party: processParty(res.party),
                        hasJoined: isHasJoined(userId, res.party.players),
                    })
                }
            })
    },
    deleteParty() {
        wx.showModal({
            title: '确认删除聚会？',
            content: '请谨慎操作，删除后无法恢复',
            showCancel: true,
            success: ({confirm}) => {
                if (confirm) {
                    deleteParty(this.partyId)
                        .then(res => {
                            if (res && res.ret === 0) {
                                navigateBackTo('index')
                            }
                        })
                }
            }
        })
    },
})