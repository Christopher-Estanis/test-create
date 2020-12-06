
import { Request, Response, NextFunction } from 'express'
import colors from 'colors'
import { format } from '../helpers'

import luxon from 'luxon'

const requests = (request: Request, response: Response, next: NextFunction) => {
  const date = luxon.DateTime.local()
  const time = colors.white(date.toFormat('HH:mm:ss') || '')
  const host = colors.blue((request && request.headers && request.headers.host) || '')
  const path = String(colors.green(request.url)).trim()
  const method = (function(meth) {
    switch(meth) {
      case 'GET': return colors.blue(meth)
      case 'POST': return colors.yellow(meth)
      case 'DELETE': return colors.red(meth)
      case 'PUT': return colors.green(meth)
      default: return colors.yellow(meth)
    }
  })(request.method.trim())

  const excludedPaths = ['/calls', '/status', '/tokens', '/notifications']

  if(excludedPaths.includes(String(request.url).trim()) ||
    ((String(request?.url).trim() == '/notifications') && (['GET'].includes(String(request?.method).trim())))) {
    return next()
  }

  console.log(`${time} ${host} ${method} ${path}`)

  if(request.body && Object.keys(request.body).length > 0) {
    console.log(request.body)
  }

  return next()
} 

export default requests
