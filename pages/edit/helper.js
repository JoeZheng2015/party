exports.getDate = function({year, month, day, hour, minute}) {
    return new Date(+year, month - 1, +day, +hour, +minute)
}