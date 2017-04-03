export const request = (method = 'GET') => (url, data = {}, options = {}) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url,
            data,
            method,
            success(res) {
                resolve(res.data)
            },
            fail(err) {
                reject(err)
            }
        })
    })
}

export const GET = request('GET')
export const POST = request('POST')
