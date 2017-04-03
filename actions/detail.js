import {GET, POST} from '../utils/request'
import {API} from '../utils/constants'

export const fetchParty = (id) => GET(
    `${API}/parties/${id}`,
)

export const joinParty = (id, data) => POST(
    `${API}/parties/${id}`,
    data,
)
