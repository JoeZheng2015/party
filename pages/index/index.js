import {API} from '../../config'
import {formatTime} from '../../utils/util'
import {fetchParties} from '../../actions/index'
import {processParties} from 'helper'
const app = getApp()

Page({
    data: {
        parties: [],
    },
    onLoad() {
        wx.showLoading({
            title: '加载中...',
            mask: true,
        })
        fetchParties()
            .then(parties => {
                wx.hideLoading()
                this.setData({
                    parties: processParties(parties),
                })
            })
    },
})
