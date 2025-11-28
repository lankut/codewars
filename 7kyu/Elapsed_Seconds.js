// Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

// Tips:
// The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim), datetime (Python), Time (Ruby), and Data.Time.Clock.UTCTime (Haskell) instances.
// The start time will always be before the end time.

function elapsedSeconds(startDate, endDate){

    const numbersOfDays = endDate.getDate() - startDate.getDate()

    function getSeconds(date) {
        const dateHoursInSeconds = 60 * 60 * date.getHours()
        const dateMinutesInSeconds = 60 * date.getMinutes()
        const dateSeconds = date.getSeconds()
        return dateHoursInSeconds + dateMinutesInSeconds + dateSeconds
    }

    const startDateSeconds = getSeconds(startDate)
    const endDateSeconds = getSeconds(endDate)

    if (numbersOfDays) {
        const withDay = 86400 - startDateSeconds + endDateSeconds

        return withDay
    }

    return endDateSeconds - startDateSeconds
}

