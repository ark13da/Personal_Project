let express = require("express");
let mongoose = require("mongoose");
let DataModel= require("../db/db.js");
let bodyParser = require('body-parser');
let cors = require('cors');
const app=express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(function(req, res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.js");
});

app.post("/add", (req,res,next)=>{
    DataModel.create(req.body,(err,data)=>{
        if(err){
            return next(err);
        }else{
            res.json(data);
        }
    });
 
});


app.get("/fetch",(req,res,next)=>{
    DataModel.find((err,result)=>{
        if (err){
            return next(err);
        }else{
            res.json(result);
        }
    });

});


  app.get("/delete", (req,res,next)=>{
       DataModel.deleteMany({},(err,result)=>{
           if(err){
            return next(err);
           }else{
            res.json(result);
           }
       });
   });
  

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
   });