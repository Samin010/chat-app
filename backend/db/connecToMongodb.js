import mongoose from 'mongoose'

const connectToMongodb=async()=>{
  try{
    // console.log('URL is:',process.env.MONGO_DB_URL)
    await mongoose.connect(process.env.MONGO_DB_URL)
    console.log("Connected to Mongo Db")
  }
  catch(error){
    console.log(`Error connecting to mongodb: ${error.message}`)
  }
}
export default connectToMongodb