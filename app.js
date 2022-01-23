const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const request = require('request');
const https = require('https');
const path =require('path');

const app = express();
const PORT = process.env.PORT||3000;

app.set('view engine','ejs');
app.use(express.static('public'));

const url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

app.get("/",(req,res)=>{

    https.get(url,(response)=>{
        console.log(response.statusCode);

        response.on("data",(data)=>{
            var payLoad = JSON.parse(data);
            console.log(payLoad);
            res.render("home",{
                joke:payLoad.joke
            })
        })
    })
    
})
app.post("/",(req,res)=>{
    res.redirect("/");
})



app.listen(PORT,()=>{
    console.log("App running!!")
})