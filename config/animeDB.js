const mongoose=require('mongoose')

const connectAnimeDB=async()=>{
    try {
        const con=await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology: true
    })
    console.log(`database connected to  ${con.connection.name}`)  
    } catch (error) {
        
    }
  
}
module.exports=connectAnimeDB