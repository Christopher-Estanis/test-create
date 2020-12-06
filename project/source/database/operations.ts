import { isProduction } from './../config/globals'
import { prompt } from './../debug'

const execute = true

const run = async () => {

////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////
  
}

export default isProduction ? execute ? () => prompt.doNotRunInProduction() : (() => {}) : execute && prompt.asyncOperation(run) || (() => {})