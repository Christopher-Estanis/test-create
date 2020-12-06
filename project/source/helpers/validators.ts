// import BANKS from './../resources/banks'
// import STATES from './../resources/states'
import is from './is'

import moment from 'moment'
// @ts-ignore
import owasp from 'owasp-password-strength-test'

export default {

  // cnpj: (cnpj: string): boolean => {
  //     cnpj = cnpj.replace(/[^\d]+/g,'')
  //     if(cnpj == '' || cnpj.length != 14) return false
  //     if (cnpj == "00000000000000" || 
  //         cnpj == "11111111111111" || 
  //         cnpj == "22222222222222" || 
  //         cnpj == "33333333333333" || 
  //         cnpj == "44444444444444" || 
  //         cnpj == "55555555555555" || 
  //         cnpj == "66666666666666" || 
  //         cnpj == "77777777777777" || 
  //         cnpj == "88888888888888" || 
  //         cnpj == "99999999999999") return false
  //     let size = cnpj.length - 2
  //     let numbers = cnpj.substring(0, size), digits = cnpj.substring(size)
  //     let sum = 0, pos = size - 7
  //     for (i = size; i >= 1; i--) {
  //       sum += numbers.charAt(size - i) * pos--
  //       if(pos < 2) pos = 9
  //     }
  //     res = sum % 11 < 2 ? 0 : 11 - sum % 11
  //     if (res != digits.charAt(0)) return false
  //     size = size + 1, numbers = cnpj.substring(0,size)
  //     sum = 0, pos = size - 7
  //     for (i = size; i >= 1; i--) {
  //       sum += numbers.charAt(size - i) * pos--
  //       if (pos < 2) pos = 9;
  //     }
  //     res = sum % 11 < 2 ? 0 : 11 - sum % 11
  //     if (res != digits.charAt(1)) return false
  //     return true;
  // },

  cpf: (cpf: string): boolean => {
    cpf = String(cpf).replace(/\D/g, '')
    let sum = 0, remainder
    if (cpf == '00000000000') return false
    for (let i=1; i<=9; i++) sum = sum + parseInt(cpf.substring(i-1, i)) * (11 - i)
    remainder = (sum * 10) % 11
    if ((remainder == 10) || (remainder == 11))  remainder = 0
    if (remainder != parseInt(cpf.substring(9, 10)) ) return false
    sum = 0
    for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i-1, i)) * (12 - i)
    remainder = (sum * 10) % 11
    if ((remainder == 10) || (remainder == 11))  remainder = 0
    if (remainder != parseInt(cpf.substring(10, 11) )) return false
    return true
  },

  crm: (crm: string): boolean => {
    return true
  },

  cellphone: (cellphone: string): boolean => {
    cellphone = cellphone.toString().trim().replace(/^\D+/g, '')
    let ddd = cellphone[0]+cellphone[1]
    let cellphoneWithoutDDD = cellphone.substr(2)
    let cellphoneFirstDigit = cellphoneWithoutDDD[0]
    let cellphoneLength = cellphoneWithoutDDD.length
    const invalidDDDs = ['23','25','26','29','36','39','52','56','57','58','59','72','76','78']  
    if(ddd[0] == '0' || ddd[1] == '0' || invalidDDDs.includes(ddd)) return false
    const mobileLength = 9, mobileInvalidFirstDigits = ['2','3','4','5']
    if(cellphoneLength != mobileLength) return false
    if(mobileInvalidFirstDigits.includes(cellphoneFirstDigit)) return false
    return true
  },

  telephone: (telephone: string): boolean => {
    telephone = telephone.toString().trim().replace(/^\D+/g, '')
    let ddd = telephone[0]+telephone[1]
    let telephoneWithoutDDD = telephone.substr(2)
    let telephoneFirstDigit = telephoneWithoutDDD[0]
    let telephoneLength = telephoneWithoutDDD.length
    const invalidDDDs = ['23','25','26','29','36','39','52','56','57','58','59','72','76','78']  
    if(ddd[0] == '0' || ddd[1] == '0' || invalidDDDs.includes(ddd)) return false
    const landlineLength = 8, landlineInvalidFirstDigits = ['0','1','6','7','8','9']
    if(telephoneLength != landlineLength) return false
    if(telephoneLength === landlineLength && landlineInvalidFirstDigits.includes(telephoneFirstDigit)) return false
    return true
  },

  password: (password: string): boolean => {
    if(password.length < 3) return false
    let passcheck = owasp.test(password)
    if((passcheck.errors && passcheck.errors.length) || !passcheck.strong) {
      return false
    }
    return true
  },

  // bankCode: (bankCode: string | number): boolean => {
  //   let validCodes: [] = []
  //   BANKS.forEach(bank => { if(bank && bank.code) validCodes.push(bank.code) })
  //   return bankCode ? validCodes.includes(bankCode) : false
  // },

  birthdate: (birthdate: Date | string): boolean => {
    return Boolean(moment().diff(birthdate, 'years') >= 0 && moment().diff(birthdate, 'years') <= 200)
  },

  datePast: (date: Date | string): boolean => {
    return moment(date).isSameOrBefore()
  },

  dateFuture: (date: Date): boolean => {
    return moment(date).isAfter()
  },

  name: (name: string): boolean => {
    return /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(name) && name.split(' ').length > 1
  },

  email: (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }, 

  gender: (gender: string): boolean => {
    // coloca string em uppercase
    // pega primeiro caracter
    // ve se o primeiro caracter bate
    const genderFirstChar = gender.trim().toUpperCase().charAt(0)
    return ['M','F'].includes(genderFirstChar)
  },

  // state: (state: string): boolean => {
    // return STATES.includes(state)
  // },

  contactMethod: (contactMethod: string): boolean => {
    return ['whatsapp', 'email', 'cellphone'].includes(contactMethod.trim().toLowerCase())
  },

  consultType: (consultType: string): boolean => {
    return ['new', 'emergency', 'return', 'routine'].includes(String(consultType).trim().toLowerCase())
  },

  periodTime: (periodTime: string): boolean => {
    return ['morning', 'afternoon', 'night', 'full-time'].includes(periodTime.trim().toLowerCase())
  },

  systemName: (systemName: string): boolean => {
    return /^[a-zA-Z]*\.[a-zA-Z]*/.test(systemName)
  }
}





