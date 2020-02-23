const mongoose=require('mongoose')

const  animeSchema=new mongoose.Schema({
    CoreConstantId
    :
    {
        type:"string"
    },
    GroupId
    :
    {
        type:"string"
    },
    ConstantName
    :
    {
        type:"string"
    },
    CreatedDate
    :
    {
        type:"string"
    },
    CreatedBy
    :
    {
        type:"string"
    },
    TypeRefId
    :
    {
        type:"string"
    },
    Language
    :
    
    {
        type:"string"
    }
    
})

module.exports=mongoose.model("coreconstants",animeSchema) 