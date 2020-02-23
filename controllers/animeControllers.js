const animeSchema =require('../models/animeModels')
const connectAnimeDB= require('../config/animeDB')
let mongoose=require('mongoose')

exports.getAnime= async (req,res,next)=>{
    try {
        
        const anime= await animeSchema.find()
        res.status(201).json({success:true,data: anime})
    } catch (error) {
        res.send({success:false,data: "no data"})

    }
}
exports.postAnime=async(req,res,next)=>{
    try {
        const anime= await animeSchema.create(req.body)
        res.status(201).json({success:true,data: anime})
    } catch (error) {
        res.send({success:false,data: null})

    }
}
