import request from '../utils/request'
import {API} from '../config'

export const addParty = (data) => request({
    method: 'POST',
    url: `${API}/parties`,
    data,
}).then(res => res.data)
