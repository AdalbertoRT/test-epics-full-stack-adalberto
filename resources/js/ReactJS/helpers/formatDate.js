export function formatDate(date, format) {
    const newDate = new Date(date);
    const map = {
        mm:
            newDate.getMonth() + 1 < 10
                ? "0" + (newDate.getMonth() + 1)
                : newDate.getMonth() + 1,
        dd:
            newDate.getDate() + 1 < 10
                ? "0" + (newDate.getDate() + 1)
                : newDate.getDate() + 1,
        aa: newDate.getFullYear().toString().slice(-2),
        yyyy: newDate.getFullYear(),
    };

    return format.replace(/mm|dd|aa|yyyy/gi, (matched) => map[matched]);
}

export function formatDateString(date) {
    const newDate = new Date(date);
    const string = newDate.toDateString();
    const array = string.toString().split(" ");
    array.shift();
    const text = array.join(" ");
    return text;
}
