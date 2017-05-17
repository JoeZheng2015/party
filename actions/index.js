import request from '../utils/request'
import {API} from '../config'

export const fetchParties = (data = {}) => request({
    method: 'GET',
    url: `${API}/parties`,
    data,
}).then(res => res.data)
