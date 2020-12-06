const { DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_CUSTERNAME } = require('./_variables')

const databaseName = DATABASE_NAME
const username     = DATABASE_USERNAME
const password     = DATABASE_PASSWORD
const clusterName  = DATABASE_CUSTERNAME

const connectionString = `mongodb+srv://${username}:${password}@${clusterName}.mongodb.net/${databaseName}?retryWrites=true&w=majority`

const connectionOptions= {
useCreateIndex: true,
useNewUrlParser: true,
useUnifiedTopology: true
}

export {
databaseName,
connectionString,
connectionOptions
}