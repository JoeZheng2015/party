import qcloud from '../libs/sdk/index'
import {request, setConfig} from '../libs/wx-promise-request'

setConfig({
    request: qcloud.request,
})

export const GET = request('GET')
export const POST = request('POST')
export const DELETE = request('DELETE')
