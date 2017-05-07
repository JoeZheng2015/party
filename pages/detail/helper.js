import {formatTime, formatNumber} from '../../utils/util'

export const processParty = (party) => {
    const {year, month, day, hour, minute} = formatTime(new Date(party.time))

    party._time = [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':')

    return party
}

export const isHasJoined = (userId, players) => players.findIndex(p => p.userId === userId) !== -1

export const getRestTime = (end = Date.now(), now = Date.now()) => {
    const ms = end - now
    const times = [
        {text: '天', unit: 1000 * 60 * 60 * 24},
        {text: '小时', unit: 1000 * 60 * 60},
        {text: '分钟', unit: 1000 * 60}
    ]
    const transformedTime = times.map(time => {
        const {text, unit} = time
        const number = ~~(ms / unit)
        return number > 0 ? {number, text}: null
    })

    return transformedTime.find(time => !!time)
}