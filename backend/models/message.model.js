import { timeStamp } from 'console'
import mongoose from 'mongoose'

const messageSchema= new mongoose.Schema({
  senderId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },

  recieverId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },

  message:{
    type:String,
    required:true
  }
},{timeStamps:true})

const Message=mongoose.model("Message",messageSchema)
export default Message