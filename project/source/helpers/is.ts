
/* IS it what you expect ? true/false */

const moment = require('moment')
const mongoose = require('mongoose') 

const objectId = variable => mongoose.Types.ObjectId.isValid(variable)

const number = variable => !isNaN(variable)

const string = variable => typeof variable === 'string' || variable instanceof String

const array = variable => Array.isArray(variable)

const date = variable => !isNaN(new Date(variable).getDate())

const undef = variable => typeof variable === 'undefined'

const positive = variable => Boolean(Math.sign(variable))

const boolean = variable => Boolean( variable == true || variable == false ) 

const before = variable => moment(variable).isBefore(moment())

const today = (date: Date) => moment(date).isSame(moment(), 'day')

const anHourAgo = (date: Date) => moment(moment()).diff(moment(date), 'hour') > 1

const cellphone = variable => {
  if(!variable) return false
  let phone = String(variable).trim().replace(/^\D+/g, '')
  let ddd = phone[0]+phone[1]
  let phoneWithoutDDD = phone.substr(2)
  const invalidDDDs = ['23','25','26','29','36','39','52','56','57','58','59','72','76','78']  
  if(ddd[0] == '0' || ddd[1] == '0' || invalidDDDs.includes(ddd)) return false
  const mobileLength = 9, mobileInvalidFirstDigits = ['2','3','4','5']
  if(phoneWithoutDDD.length != mobileLength) return false
  if(mobileInvalidFirstDigits.includes(phoneWithoutDDD[0])) return false
  return true
}

const object = variable => variable.constructor === Object

const the = {
  object: {
    empty: variable => Object.entries(variable).length === 0
  }
}

export default { objectId, number, string, array, object, date, undef, positive, before, cellphone, the, boolean, today, anHourAgo }