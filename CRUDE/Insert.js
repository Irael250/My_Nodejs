 
 const {Client}  =require('pg');
 const express = require('express');

 const app = express();
 
 const con= new Client({
    host:"localhost",
    user:"postgres",
    password:"Irael",
    port:5432,
    database:"Irael"
 });

 con.connect().then( ()=> console.log("Connected"));
app.use(express.json());

app.post("/Irael",(req,res)=>{
    const {id,names} = req.body;

    const query ='INSERT INTO users (id, names) VALUES($1,$2)';

    con.query(query,[id,names],(err,result)=>{

        if(err) {
        res.send(err);
    }
    else{
        console.log(result);
        res.send(result);
    }

    });

});
const port=3000;
app.listen(port,()=>{
    console.log(`Our server is running on ${port} `);
});

 app.get('/Fetch_data/:id',(req,res)=>{
    const id= req.params.id;
    const sel ="SELECT * FROM users WHERE id=$1";

    con.query(sel,(err,result)=>{
      
         
        if(err){
            console.log(err);
            res.send(err);
        }

        else{
            console.log(result);
            res.send(result.rows); 
        }
    });
 });