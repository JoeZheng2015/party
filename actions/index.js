import {GET} from '../utils/request'
import {API} from '../utils/constants'

export const fetchParties = (data) => GET(
    `${API}/parties`,
    data,
)