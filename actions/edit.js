import {POST} from '../utils/request'
import {API} from '../config'

export const addParty = (data) => POST(
    `${API}/parties`,
    data
)