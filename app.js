const express =require('express')
const dotenv = require('dotenv')
const morgan =require('morgan');
const colors =require('colors');

const connectAnimeDB= require('./config/animeDB')
//load env vars
dotenv.config({path:"./config/config.env"})

//connect to mongodb database
// connectAnimeDB()

//import route files
const animeRoutes= require('./routes/animeRoutes')

//initialise application
var app=express()
const PORT=process.env.PORT || 3000

if (process.env.NODE_ENV==='development') {
    app.use(morgan('dev'))
}
app.use(express.json())
app.use('/',animeRoutes)
app.listen(PORT,console.log(`server running on port ${PORT}`.yellow.bold))

