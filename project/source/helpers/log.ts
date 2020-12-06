import { Request, Response } from 'express'
// import { Log } from './../models'
import { isLocal } from './../config/globals'
import colors from 'colors'

const log = async (file: string, request: any, exception?: Error | null, message?: string) => {
  if(!exception) exception = Error('no-exception')
  if(!message) message = ''
  if(isLocal) console.warn(message, ':', colors.red(String(exception)))
}

export default log