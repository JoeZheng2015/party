import {formatTime, formatNumber} from '../../utils/util'

export const processParty = (party) => {
    const {year, month, day, hour, minute} = formatTime(new Date(party.time))

    party.time = [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':')

    return party
}