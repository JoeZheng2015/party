import {formatTime} from '../../utils/util'

export const processParties = parties => parties.map(party => {
    const {year, month, day, hour, minute} = formatTime(new Date(party.time))

    party.time = `${year}-${month}-${day} ${hour}:${minute}`
    return party
})