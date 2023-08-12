import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { connectDB } from './configs/db'

import userRoutes from './routes/userRoutes'
import cronRoutes from './routes/cronRoutes'
import { cronDailyNewsletter, cronReactivateUser } from './services/cronService'

connectDB()

const app = express()
const PORT = process.env.PORT || 3000

app.use( express.json() )

app.use( '/api/v1/users', userRoutes )
app.use( '/api/v1/cron', cronRoutes )

cronDailyNewsletter
cronReactivateUser

app.listen( PORT, () => {
  console.log( `Servidor iniciado en puerto ${ PORT }` )
} )