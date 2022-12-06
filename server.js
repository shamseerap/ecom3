const express=require("express")
const app=express()
const expressLayouts= require('express-ejs-layouts')
const bodyParser=require('body-parser')

const dotenv=require("dotenv")

const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')


dotenv.config()


app.set('view engine','ejs')
app.set('views',__dirname +'/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({limit:'10mb',extended:false}))

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL,
    ).then(console.log("connected to mongo")).catch(err=>console.log(err));

app.use('/',indexRouter)
app.use('/authors',authorRouter)


app.listen(process.env.PORT || 3000)
