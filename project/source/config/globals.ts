
import variables from './_variables'

const { NAME, PORT, IP } = variables

export const environment = String(NAME).toLowerCase()
export const port = String(PORT)
export const localIp = String(IP)

export const isProduction  = environment == 'production'
export const isDevelopment = environment == 'development'

export const isLocal = !isProduction && !isDevelopment

export const baseUrl = (function(env) {
  switch(env) {
    case 'production':  return ''
    case 'development': return ''
    case 'local':       return `http://${localIp}:${port}`
  }
})(environment)