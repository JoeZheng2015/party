import {GET, POST, DELETE} from '../utils/request'
import {API} from '../utils/constants'

export const fetchParty = (id) => GET(
    `${API}/parties/${id}`,
)

export const joinParty = (id, data) => POST(
    `${API}/parties/${id}`,
    data,
)

export const quitParty = (partyId, data) => POST(
    `${API}/parties/${partyId}`,
    data,
)

export const deleteParty = (partyId) => DELETE(
    `${API}/parties/${partyId}`,
)
