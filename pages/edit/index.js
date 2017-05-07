import {formatNumber} from '../../utils/util'
import {API} from '../../config'
import {getDate} from './helper'
import {getRestTime} from '../detail/helper'

const now = new Date()
const year = formatNumber(now.getFullYear())
const month = formatNumber(now.getMonth() + 1)
import {addParty} from '../../actions/edit'

const day = formatNumber(now.getDate())
const hour = formatNumber(now.getHours())
const minute = formatNumber(now.getMinutes())

const app = getApp()

Page({
    data: {
        year,
        month,
        day,
        hour,
        minute,
        restTime: null,
    },
    onLoad() {
    },
    bindDateChange(e) {
        const {hour, minute} = this.data
        const value = e.detail.value
        const [year, month, day] = value.split('-')
        const end = +getDate({year, month, day, hour, minute})
        this.setData({
            year,
            month,
            day,
            restTime: getRestTime(end)
        })
    },
    bindTimeChange(e) {
        const {year, month, day} = this.data
        const value = e.detail.value
        const [hour, minute] = value.split(':')
        const end = +getDate({year, month, day, hour, minute})
        this.setData({
            hour,
            minute,
            restTime: getRestTime(end),
        })
    },
    formSubmit(e) {
        const value = e.detail.value
        const {title, location} = value
        const {year, month, day, hour, minute} = this.data

        const time = +getDate({year, month, day, hour, minute})

        addParty({
            title,
            location,
            time,
            player: app.globalData.userInfo,
        })
        .then(res => {
            console.log(res)
            if (res && res.ret === 0) {
                wx.redirectTo({
                    url: '../index/index',
                })
            }
        })
    },
})