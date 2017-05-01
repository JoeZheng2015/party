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
        fetchParties()
            .then(parties => {
                this.setData({
                    parties: processParties(parties),
                })
            })
    },
})
