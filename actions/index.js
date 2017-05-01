import {GET} from '../utils/request'
import {API} from '../config'

export const fetchParties = (data = {}) => GET(
    `${API}/parties`,
    data,
)