
const { response } = require('express');
const express=require('express')
const axios = require('axios')
const app=express()
const HOST = 'localhost'
const PORT=4007
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
//app.use(express.json())
app.get('/disease/:name',verifytoken,function(req,res,next){
  //  res.send('hello from tourist server')
  var contents = fs.readFileSync("C:/project/disease/diseases.json");
  var jsonContent = JSON.parse(contents);
  const data1 = req.params.name
  const spl = data1.split(" ");
  var count=0;

  for(var i=0; i<=spl.length;i++)
  {
      if(spl[i] == "malaria")
      {
        
          const a = jsonContent["malaria"];
          console.log(a);
          res.send(a);
          count++;
      }
      else if(spl[i] == "Ulcer")
      {
          const a = jsonContent["Ulcer"];
          console.log(a);
          res.send(a);
          count++;
      }
      else if(spl[i] == "Jaundice")
      {
          const a = jsonContent["Jaundice"];
          console.log(a);
          res.send(a);
          count++;
      }
      else if(spl[i] == "typhoid")
      {
          const a = jsonContent["typhoid"];
          console.log(a);
          res.send(a);
          count++;
      }
      else if(spl[i] == "asthma")
      {
          const a = jsonContent["asthma"];
          console.log(a);
          res.send(a);
          count++;
      }
      else if(spl[i] == "heart disease")
      {
          const a = jsonContent["heart disease"];
          console.log(a);
          res.send(a);
          count++;
      }
      else if(spl[i] == "dengue")
      {
          const a = jsonContent["dengue"];
          console.log(a);
          res.send(a);
          count++;
      }
  }
  if(count==0){
      res.send("Sorry! disease you are searching is not in our database");
  }




})

app.listen(PORT,()=>{
    console.log('server started on port'+PORT)
})






