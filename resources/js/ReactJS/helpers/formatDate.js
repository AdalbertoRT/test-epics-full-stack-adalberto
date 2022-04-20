function formatDate(date, format) {
    const map = {
        mm: ((date.getMonth() + 1) < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
        dd: date.getDate(),
        aa: date.getFullYear().toString().slice(-2),
        yyyy: date.getFullYear()
    }

    return format.replace(/mm|dd|aa|yyyy/gi, matched => map[matched])
}

export default formatDate;