const express =require('express');

const router = express.Router();

//get the controller methods
const {getAnime,countryStateCity}=require('../controllers/animeControllers')
router.route('/').get(getAnime)
router.route('/countryStateCity').get(countryStateCity)

module.exports=router