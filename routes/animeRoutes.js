const express =require('express');

const router = express.Router();

//get the controller methods
const {getAnime,postAnime}=require('../controllers/animeControllers')
router.route('/').get(getAnime)
router.route('/').post(postAnime)

module.exports=router