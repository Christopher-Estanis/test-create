import moment from 'moment'
import is from './is'

const capitalize = (str: string): string | undefined => {
  return is.string(str) ? str.charAt(0).toUpperCase() + str.substring(1) : undefined
}

const titleCase = (str: string): string | undefined => {
  return is.string(str) ? str.toLowerCase().split(' ').map(
    word => word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') : undefined
} 

const firstAndLastWords = (str: string): string | undefined => {
  if(!is.string(str)) return undefined
  let words = str.split(' ').filter(word => word != '')
  if(!words.length) return ''
  if(words.length == 1) return words[0]
  return `${words[0]} ${words[words.length-1]}`
}

const removeAccents = (str: string): string | undefined => {
  let map = {"â":"a","Â":"A","à":"a","À":"A","á":"a","Á":"A","ã":"a","Ã":"A","ê":"e","Ê":"E","è":"e","È":"E","é":"e","É":"E","î":"i","Î":"I","ì":"i","Ì":"I","í":"i","Í":"I","õ":"o","Õ":"O","ô":"o","Ô":"O","ò":"o","Ò":"O","ó":"o","Ó":"O","ü":"u","Ü":"U","û":"u","Û":"U","ú":"u","Ú":"U","ù":"u","Ù":"U","ç":"c","Ç":"C"}
  return is.string(str) ? str.replace(/[\W\[\] ]/g, (a) => map[a]||a) : undefined
}

const removeNonLetters = (str: string): string | undefined => {
  return is.string(str) ? str.replace(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, '') : undefined
}

const lowerLetters = (str: string): string | undefined => {
  return is.string(str) ? removeNonLetters(removeAccents(str.toLowerCase()) || '') : undefined
}

const msToTime = (duration: number) => {
  var milliseconds = (duration % 1000) / 100,
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)));

  const hoursString   = (hours < 10)    ? `0${hours}`   : hours;
  const minutesString = (minutes < 10)  ? `0${minutes}` : minutes;
  const secondsString = (seconds < 10)  ? `0${seconds}` : seconds;

  return `${hoursString}:${minutesString}:${secondsString}`;
}

// secondsToTimer(90) >>> 00:01:30
const secondsToTimer = (seconds: number) => {
  let hours, minutes, secs
  seconds = Math.floor(seconds)
  hours = Math.floor(seconds/3600)
  seconds -= hours*3600
  minutes = Math.floor(seconds/60)
  seconds -= minutes*60
  if (hours < 10) hours = `0${hours}`
  if (minutes < 10) minutes = `0${minutes}`
  if (seconds < 10) secs = `0${seconds}`
  return `${hours}:${minutes}:${secs}`
} 

// secondsToMinuteTimer(90) >>> 00:01:30
const secondsToMinuteTimer = (seconds: number) => {
  let hours, minutes, secs
  seconds = Math.floor(seconds)
  hours = Math.floor(seconds/3600)
  seconds -= hours*3600
  minutes = Math.floor(seconds/60)
  seconds -= minutes*60
  if (hours < 10) hours = `0${hours}`
  if (minutes < 10) minutes = `0${minutes}`
  if (seconds < 10) secs = `0${seconds}`
  return `${hours}:${minutes}`
} 

// numToBRL(4.3) >>> R$ 4.30
const numToBRL = (number: number): string | undefined => {
  return isNaN(number) ? undefined : 
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
  }).format(number)
} 

const removeLastSlashes = (url: string): string | undefined => {
  if(!is.string(url)) return undefined 
  while(url.substring(url.length-1) == '/') url = url.substring(0, url.length-1)
  return url
}

const date = (date: Date | moment.Moment | string): string | undefined => {
  return is.date(date) ? moment(date).format('DD/MM/YYYY') : undefined 
}

const hour = (date: Date | moment.Moment | string | moment.Moment): string | undefined => {
  return is.date(date) ? moment(date).format('HH:mm') : undefined
}

const dateHour = (date:  Date | moment.Moment | string): string | undefined => {
  return is.date(date) ? moment(date).format('DD/MM/YYYY à\\s HH:mm') : undefined 
}

const dateWrittenInFull = (date: Date): string | undefined => {
  if(!is.date(date)) return undefined; else date = new Date(date)
  let monthNames = ['Janeiro', 'Fevereiro', 'Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
  return date.getDay() + ' de ' + monthNames[date.getMonth()] + ' de ' + date.getFullYear()
}

const cpf = (cpf: string): string | undefined => {
  return is.string(cpf) ? cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3-\$4") : undefined
}

const gender = (char: string) => {
  return is.string(char) ? String(char)[0].toUpperCase() === 'M' ? 'Masculino' : 'Feminino' : undefined
}

const age = (date: Date | moment.Moment | string): string | undefined => {
  return is.date(date) ? (
    moment().diff(moment(date), 'years')  + ' anos'  ||
    moment().diff(moment(date), 'months') + ' meses' ||
    moment().diff(moment(date), 'days')   + ' dias') : undefined
}

const addZeroes = (number: string | number): string => {
  let parts = String(number).split('.')[1]
  return Number(number).toFixed(parts && parts.length > 2 ? parts.length : 2)
}

const decimal = (number: string | number): string | undefined => {
  if(!number || isNaN(Number(number))) return undefined
  let decimal = String(number).match(/^-?\d+(?:\.\d{0,2})?/)
  return addZeroes(decimal && decimal.length ? decimal[0] : 0)
}

const csv = (csv: string): string | undefined => {
  return is.string(csv) ? String(csv).split(',').join(';').split('.').join(',') : undefined
}

export default {
  capitalize,
  titleCase,
  firstAndLastWords,
  removeAccents,
  removeNonLetters,
  lowerLetters,
  secondsToTimer,
  secondsToMinuteTimer,
  numToBRL,
  removeLastSlashes,
  date,
  hour,
  dateHour,
  dateWrittenInFull,
  cpf,
  gender,
  age,
  addZeroes,
  decimal,
  csv,
  msToTime,
}
