 
 const {client}  =require('pg');
 const app = require('express');

 const conn= new client = {
    host:'localhost',
    port:5243,
    database:"Irael"
 }

app.use(express.json()).then(()=> console.log("Connection already done"));
 