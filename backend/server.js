import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import connectToMongodb from './db/connecToMongodb.js'
import {app, server} from './socket/socket.js'
dotenv.config()

// app.use(cors({
//    origin:process.env.CLIENT_URL,
//    credentials:true
// }))
app.use(express.json())
app.use(cookieParser())
const port=process.env.PORT || 5000

// app.get('/',(req,res)=>{
//   res.send('Hello world')
// })

app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)


server.listen(port,()=>{
  connectToMongodb()
  console.log(`Server running at port:${port}`)
})