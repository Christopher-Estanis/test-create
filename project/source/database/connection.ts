import connection from './../config/connection'
import mongoose from 'mongoose'
import { prompt } from './../debug'
import { to } from '../helpers'

const { connectionString, connectionOptions, databaseName } = connection

const connectToDatabase = async () => {
  const [error, _] = await to(mongoose.connect(connectionString, connectionOptions))
  prompt.connectedToDatabase(databaseName, error)
  mongoose.set('useFindAndModify', false)
}

export default connectToDatabase