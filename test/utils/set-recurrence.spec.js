import { expect } from 'chai'
import { setRecurrence } from '../../src/utils'

describe('utils.setRecurrence', () => {

    it('creates recurence with indefinite end', () => {
        const attributes = {
            frequency: 'weekly'
        }
        expect(setRecurrence(attributes)).to.equal('RRULE:FREQ=WEEKLY\r\n')
    })

    it('creates recurrence with set end', () => {
        const attributes = {
            frequency: 'daily',
            recurrenceEnd: [2018,6,22]
        }
        expect(setRecurrence(attributes)).to.equal('RRULE:FREQ=DAILY\r\n;UNTIL=20180622T000000\r\n')

    })

    it('creates recurrence with specified count', () => {
        const attributes = {
            frequency: 'monthly',
            count: 5
        }
        expect(setRecurrence(attributes)).to.equal('RRULE:FREQ=MONTHLY\r\n;COUNT=5\r\n')
    })

    it('creates recurrence with specified interval', () => {
        const attributes = {
            frequency: 'yearly',
            interval: 2
        }
        expect(setRecurrence(attributes)).to.equal('RRULE:FREQ=YEARLY\r\n;INTERVAL=2\r\n')
    })
})