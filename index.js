const express = require("express")
const path = require('path')
// const bcrypt = require("bcrypt")
// const collection = require("/config")

const app = express();

app.listen(8000, ()=> {
    console.log("successfully created server")
})

app.get('/',(req,res)=>{
    res.send("hello")
})

app.get('/',(req,res)=> {
    return res.status(200).send({message: "helo ji", status: true})
})