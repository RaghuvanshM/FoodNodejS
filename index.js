const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    console.log("this is first method i created ")
    res.send('<h1>this is my first route that i created</h1>')
})
app.listen(8080,()=>{
    console.log("server is running ")
})