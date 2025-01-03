import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
import { getRecieverSocketId } from "../socket/socket.js"

export const sendMessage=async(req,res)=>{
  console.log('Req from send message is',req.user)
  try{
     const {message}=req.body
     const {id:recieverId}=req.params
     const senderId=req.user._id
     console.log('Message is',message)
     let conversation= await Conversation.findOne({
      participants:{
        $all:[senderId,recieverId]
      }
     })

     if(!conversation){
      conversation=await Conversation.create({
        participants:[senderId,recieverId]
      })
     }

     const newMessage=new Message({
      senderId,
      recieverId,
      message
     })

     if(newMessage){
      conversation.messages.push(newMessage._id)
     }

    //  await conversation.save()
    //  await newMessage.save()

    // this will run in parallel
    await Promise.all([conversation.save(),newMessage.save()])

  //  Socket Io
    const recieverSocketId=getRecieverSocketId(recieverId)
    if(recieverSocketId){
      io.to(recieverSocketId).emit('newMessage',newMessage)
    }

     res.status(201).json(newMessage)
  }
  catch(error){
  console.log("Error in sendMessage controller",error.message)
  res.status(500).json({error:"Internal server error"})
  }
}

export const getMessages=async(req,res)=>{
  try{
    const {id:userToChatId}=req.params
    const senderId=req.user._id

    const conversation=await Conversation.findOne({
      participants:{
        $all:[senderId,userToChatId]
      }
    }).populate('messages')

    if(!conversation)return res.status(200).json([])

    res.status(200).json(conversation.messages)
  }
  catch(error){
  console.log("Error in sendMessage controller",error.message)
  res.status(500).json({error:"Internal server error"})
}
}