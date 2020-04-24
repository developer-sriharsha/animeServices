const animeSchema =require('../models/animeModels')
const connectAnimeDB= require('../config/animeDB')
let mongoose=require('mongoose')
const PexelsAPI = require('pexels-api-wrapper');
var pexelsClient = new PexelsAPI("563492ad6f917000010000013a7b7156d16b40fab37af54ae3236e76");


exports.getAnime= async (req,res,next)=>{
    try {
        let resuts
        pexelsClient.search("Nature",50, 1)
        .then(function(result){
            console.log(result);
            res.status(201).json({success:true,data: result})
        }).
        catch(function(e){
            console.err(e);
        });
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
