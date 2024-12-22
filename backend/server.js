import express from 'express'
import dotenv from 'dotenv'


import authRoutes from './routes/auth.routes.js'
import connectToMongodb from './db/connecToMongodb.js'

const app=express()
dotenv.config()

app.use(express.json())

const port=process.env.PORT || 5000

// app.get('/',(req,res)=>{
//   res.send('Hello world')
// })

app.use('/api/auth',authRoutes)

app.listen(port,()=>{
  connectToMongodb()
  console.log(`Server running at port:${port}`)
})