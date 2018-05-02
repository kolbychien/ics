import moment from 'moment'

function formatDate (dateArray) {
    const [year, month, date, hours = 0, minutes = 0, seconds = 0] = dateArray
    const formattedDate = moment([year, month - 1, date, hours, minutes, seconds]).format('YYYYMMDDTHHmm00')
    return formattedDate
}

function normalizeString (myString) {
    return myString.trim().toUpperCase();
}

export default function setRecurrence(attributes = {}) {
    const {
        frequency,
        interval,
        count,
        recurrenceEnd
    } = attributes

    if(frequency && typeof frequency === 'string') {
        let formattedString = `FREQ=${normalizeString(frequency)}\r\n`
        formattedString += interval ? `;INTERVAL=${interval}\r\n` : ''
        formattedString += recurrenceEnd ? `;UNTIL=${formatDate(recurrenceEnd)}\r\n` : ''
        formattedString += count ? `;COUNT=${count}\r\n` : ''

        return formattedString
    }

    return ''
}