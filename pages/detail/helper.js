import {formatTime, formatNumber} from '../../utils/util'

export const processParty = (party) => {
    const {year, month, day, hour, minute} = formatTime(new Date(party.time))

    party.time = [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':')

    return party
}

export const isHasJoined = (userId, players) => players.findIndex(p => p.userId === userId) !== -1
