import { prompt } from './../debug'

const runDatabaseProcedures = false

/*                    
     _ __  _ __ ___   ___ ___  __| |_   _ _ __ ___  ___ 
    | '_ \| '__/ _ \ / __/ _ \/ _` | | | | '__/ _ \/ __|
    | |_) | | | (_) | (_|  __/ (_| | |_| | | |  __/\__ \
    | .__/|_|  \___/ \___\___|\__,_|\__,_|_|  \___||___/
    |_|        
            WARNING: This code runs in production!          */


const procedures = async () => {

  /* RUNS IN ALL ENVIRONMENTS */

}



export default runDatabaseProcedures ? prompt.asyncProcedures(procedures) : (() => {})
