export const convertData = (date: string, pattern: string = "br") => {
    let months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    let d = new Date(date);

    let day = d.getUTCDate();
    let month = d.getUTCMonth();
    let year = d.getFullYear();

    if (pattern == "en")
        return year + day + months[month];

    return `${day}/${months[month]}/${year}`;
}

export const typingDate = (date: string) => {
    date = date.replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$3-$2");
    return new Date(date);
}

export const diffToday = (date:Date) => {
    var today = new Date();

    var today = new Date();
    var timeDiff = Math.abs(date.getTime() - today.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

    return diffDays;
}

export const theme = (date: Date,closed=null) => {
    let diff = diffToday(new Date(date));

    if(closed)
        return "closed";

    if (diff > 30)
        return "open"
    else if (diff <= 30)
        return "alert"
    else
        return "closed"
}