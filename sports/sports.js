// var express = require('express'); // requre the express framework
//  var app = express();
// var fs = require('fs'); 
//  app.get('/:name', function (req, res) {
//      // First retrieve existing user list
//      var contents = fs.readFileSync("sports.json");
//      var jsonContent = JSON.parse(contents);
//      const data1 =req.params.name;
//      console.log(data1);
//      const a = jsonContent[data1];
//      console.log(a);
//      res.send(a);
//   })


// var server = app.listen(8080, function(){})







const { response } = require('express');
const express=require('express')
const app=express()
const HOST = 'localhost'
const axios = require('axios')
const PORT=4005
var fs=require('fs')


var t="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiNTMzMDIiLCJwYXNzd29yZCI6IkRoYXJhbmlANTMzMDIifSwiaWF0IjoxNjE5NzY0ODUwfQ.zzG89V_2Mlmr0VxJPfZdFqkA--hHS4qNxzj6FehYbdc"

function verifytoken(req,res,next){
    if(req.headers.auth == t){
        next()
    }
    else{
        res.send("unauthorized")
        //res.sendStatus(403);
        console.log("auth unsuccessfull in microservice");
    }
}

app.use(express.json())
app.get('/sports/:name',verifytoken,function(req,res,next){
  //  res.send('hello from tourist server')
  var contents = fs.readFileSync("C:/project/sports/sports.json");
  var jsonContent = JSON.parse(contents);
  const data1 = req.params.name
  const sp = data1.split(" ");
  var count=0;
//   const a=jsonContent["paris"];
//   console.log(a);
//   res.send(a);
  
    
for(var i=0; i<=sp.length;i++)
{
    if(sp[i] == "cricket")
    {
      
        const a = jsonContent["cricket"];
        console.log(a);
        res.send(a);
        count++;
    }
    else if(sp[i] == "hockey")
    {
        const a = jsonContent["hockey"];
        console.log(a);
        res.send(a);
        count++;
    }
    else if(sp[i] == "football")
    {
        const a = jsonContent["football"];
        console.log(a);
        res.send(a);
        count++;
    }
    else if(sp[i] == "badminton")
    {
        const a = jsonContent["badminton"];
        console.log(a);
        res.send(a);
        count++;
    }
    else if(sp[i] == "chess")
    {
        const a = jsonContent["chess"];
        console.log(a);
        res.send(a);
        count++;
    }
    else if(sp[i] == "Tennis")
    {
        const a = jsonContent["Tennis"];
        console.log(a);
        res.send(a);
        count++;
    }
    else if(sp[i] == "volleyball")
    {
        const a = jsonContent["volleyball"];
        console.log(a);
        res.send(a);
        count++;
    }
    else if(sp[i] == "Ludo")
    {
        const a = jsonContent["Ludo"];
        console.log(a);
        res.send(a);
        count++;
    }
}
if(count==0){
    res.send("Sorry! the sport you sre searching is not in our database");
}
       
   
})

app.listen(PORT,()=>{
    console.log('server started on port'+PORT)
})