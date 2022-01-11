import DateUtilsService from './DateUtilsService'
import WeeklyCountsUtilsService from './WeeklyCountsUtilsService'

const _ = require('lodash')
const NumberAbbreviate = require('number-abbreviate')

export default class UtilsService {
  static has (value) {
    const has = !_.isEmpty(value)
    return has
  }

  static size (value) {
    const size = _.size(value)
    return size
  }

  static date () {
    return DateUtilsService
  }

  static shorten (data) {
    const length = data.length
    if (length <= 30) return data
    const shorten = `${data.slice(0, 30)}...`
    return shorten
  }

  static weeklyCounts () {
    return WeeklyCountsUtilsService
  }

  static abbreviate (count) {
    if (!count) count = 0
    count = NumberAbbreviate(count, 2)
    return count
  }
}
