import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './configs/db'

import userRoutes from './routes/userRoutes'

dotenv.config()
connectDB()

const app = express()
const PORT = process.env.PORT || 3000

app.use( express.json() )

app.use( '/api/v1/users', userRoutes )

app.listen( PORT, () => {
  console.log( `Servidor iniciado en puerto ${ PORT }` )
} )