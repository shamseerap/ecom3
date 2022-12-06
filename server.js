const express=require("express")
const app=express()
const expressLayouts= require('express-ejs-layouts')
const dotenv=require("dotenv")
const indexRouter = require('./routes/index')

dotenv.config()


app.set('view engine','ejs')
app.set('views',__dirname +'/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL,
    ).then(console.log("connected to mongo")).catch(err=>console.log(err));

app.use('/',indexRouter)

app.listen(process.env.PORT || 3000)
