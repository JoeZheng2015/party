import qcloud from '../libs/sdk/index'
import {request, setConfig} from '../libs/wx-promise-request'

setConfig({
    request: qcloud.request,
})

export default request
