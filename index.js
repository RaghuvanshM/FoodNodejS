const express = require('express');
const colors = require('colors')
const cors = require('cors')
const dotevn = require('dotenv')
const morgan = require('morgan');
const  connectDb  = require('./config/db');
const app = express();
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
dotevn.config()
connectDb()
const PORT = process.env.PORT
app.use("/api/v1/test",require('./routes/testRoutes'))
app.get('/',(req,res)=>{
    console.log("this is first method i created ")
    res.send('<h1>this is my first route that i created</h1>')
})
app.listen(PORT,()=>{
    console.log(`server is running  at ${PORT}`)
})