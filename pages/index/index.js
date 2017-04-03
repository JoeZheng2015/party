import {API} from '../../utils/constants'
import {formatTime} from '../../utils/util'
import {fetchParties} from '../../actions/index'
import {processParties} from 'helper'
const app = getApp()

Page({
    data: {
        parties: [],
    },
    onLoad() {
        fetchParties({userId: app.globalData.userId})
            .then(parties => {
                this.setData({
                    parties: processParties(parties),
                })
            })
    },
})
