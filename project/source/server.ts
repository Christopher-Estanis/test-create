import express from 'express'

import { connectToDatabase, executeProcedures, executeOperations } from './database'
import { port, environment, localIp } from './config/globals'
import { prompt } from './debug'
import { requests } from './middleware'
import router from './router'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(requests)

app.use(router)

executeProcedures()
executeOperations()
connectToDatabase()


app.listen(port, (localIp as any))

prompt.serverIsListeningTo(port, environment, localIp)