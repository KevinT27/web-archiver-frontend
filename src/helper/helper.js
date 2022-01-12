export function getDatesList(startDate, endDate) {
    const datesList = [];
    const monthDiff = getMonthDiff(startDate, endDate);

    for (let i = 0; i <= monthDiff; i++) {

        datesList.push({ year: startDate.getFullYear(), month: startDate.getMonth() + 1 });

        startDate.setMonth((startDate.getMonth() + 1))
    }
    return datesList;
}

export function getMonthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}