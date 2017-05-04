import qcloud from '../libs/sdk/index'
import {request, setRequestFunc} from './wx-promise-request'

setRequestFunc(qcloud.request)

export const GET = request('GET')
export const POST = request('POST')
export const DELETE = request('DELETE')
