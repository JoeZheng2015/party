import request from '../utils/request'
import {API} from '../config'

export const fetchParty = (id) => request({
    method: 'GET',
    url: `${API}/parties/${id}`,
}).then(res => res.data)

export const joinParty = (id, data) => request({
    method: 'POST',
    url: `${API}/parties/${id}`,
    data,
}).then(res => res.data)

export const quitParty = (partyId, data) => request({
    method: 'POST',
    url: `${API}/parties/${partyId}`,
    data,
}).then(res => res.data)

export const deleteParty = (partyId) => request({
    method: 'DELETE',
    url: `${API}/parties/${partyId}`,
}).then(res => res.data)
