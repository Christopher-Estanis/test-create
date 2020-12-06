import colors from 'colors'

const prompt = {

  serverIsListeningTo: (port: string, environment: string, ip?: string): void => {
    const envText = (function (env) {
      switch (env) {
        case 'production': return colors.red(env)
        case 'development': return colors.yellow(env)
        case 'local': return colors.blue(env)
        default: return colors.red(env)
      }
    })(environment)
    String(ip).trim() != '' && String(ip).trim() != 'undefined' ? 
      console.log(colors.green(
      `SERVER: Listening to port ${ip}:${colors.blue(String(port))} (${envText})`
    )) : console.log(colors.green(
      `SERVER: Listening to port ${colors.blue(String(port))} (${envText})`
    ))
  },
  

  connectedToDatabase: (databaseName: string | undefined, error?: Error | null) => {
    if(!databaseName) { console.log(colors.red('DATABASE: No database selected!')); return }
    databaseName = (databaseName.includes('prod')) ? colors.red(String(databaseName).toUpperCase()) : colors.green(databaseName)
    error ? console.log(colors.red(`DATABASE: Failed to connect to database ${databaseName}! (${String(error)})`)) : 
    console.log(colors.blue(`DATABASE: Connected ${colors.green('successfully')} to the database ${databaseName}!`))
  },

  asyncProcedures: (asyncFunction: () => any) => {
    return async function() {
      await asyncFunction()
      console.log(colors.blue('PROCEDURES: Successfully run database procedures.'))
    }
  },
  
  asyncOperation: (asyncFunction: () => any) => {
    return async function() {
      console.log(colors.blue('OPERATIONS: Running your custom code...'))
      await asyncFunction()
      console.log(colors.blue('OPERATIONS: Done.'))
    }
  },
  
  doNotRunInProduction: (): void => {
    console.log(colors.yellow('WARNING:') + '' + colors.red('Do not run this in production'))
  }

}

export default prompt