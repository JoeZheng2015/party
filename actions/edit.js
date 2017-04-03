import {POST} from '../utils/request'
import {API} from '../utils/constants'

export const addParty = (data) => POST(
    `${API}/parties`,
    data
)