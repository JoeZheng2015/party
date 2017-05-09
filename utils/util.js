export function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

export function formatTime(date) {
    const year = date.getFullYear()
    const month = formatNumber(date.getMonth() + 1)
    const day = formatNumber(date.getDate())

    const hour = formatNumber(date.getHours())
    const minute = formatNumber(date.getMinutes())
    const second = formatNumber(date.getSeconds())

    return {
        year,
        month,
        day,
        hour,
        minute,
        second,
    }
}

/**
 * 返回历史记录中的指定页面
 * @param  {String} page 指定页面
 * eg: navigateBackTo('home')
 */
export const navigateBackTo = (page = 'home') => {
  if (typeof page !== 'string') {
    console.error('Expect string')
  }
  const route = `pages/${page}/index`
  const pages = getCurrentPages()
  let index = pages.findIndex(p => p.__route__ === route)
  if (index === -1) {
    wx.redirectTo({
      url: '/' + route,
    })
    return
  }
  navigateBack(index)

  function navigateBack(index) {
    const nowIndex = pages.length - 1
    const delta = nowIndex - index
    wx.navigateBack({delta})
  }
}
