const { response } = require('express');
const express=require('express')
const axios = require('axios')
const HOST = 'localhost'
const app=express()
const PORT=4003
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
app.get('/tourist/:auth/:name',verifytoken,function(req,res,next){
    const d=req.params.auth
    
  //  res.send('hello from tourist server')
  var contents = fs.readFileSync("C:/project/tourist/tourism.json");
  var jsonContent = JSON.parse(contents);
  const data1 = req.params.name
  const spli = data1.split(" ");
  var count=0;
//   const a=jsonContent["paris"];
//   console.log(a);
//   res.send(a);

  for(var i=0; i<=spli.length;i++)
  {
      if(spli[i] == "paris")
      {
        
          const a = jsonContent["paris"];
          console.log(a);
          res.send(a);
          count++;
      }
      else if(spli[i] == "switzerland")
      {
          const a = jsonContent["switzerland"];
          console.log(a);
          res.send(a);
          count++;
      }
      else if(spli[i] == "Indonesia")
      {
          const a = jsonContent["Indonesia"];
          console.log(a);
          res.send(a);
          count++;
      }
      else if(spli[i] == "Jammu and kashmir")
      {
          const a = jsonContent["Jammu and kashmir"];
          console.log(a);
          res.send(a);
          count++;
      }
      else if(spli[i] == "Himachal")
      {
          const a = jsonContent["Himachal"];
          console.log(a);
          res.send(a);
          count++;
      }
      else if(spli[i] == "uttarakhand")
      {
          const a = jsonContent["uttarakhand"];
     }
      else if(spli[i] == "jaipur")
      {
          const a = jsonContent["jaipur"];
          console.log(a);
          res.send(a);
          count++;
      }
  
  }
  if(count==0){
      res.send("Sorry! the tourism you sre searching is not in our database");
  }       
   
})

app.listen(PORT,()=>{
    console.log('server started on port'+PORT)
})



// if(k == 53302) {
//     next()
// }
// else{
//     res.send("authentication failed !.. wrong id passed")
// }
// },
// function(req,res,next) {
// var contents = fs.readFileSync("C:/Users/53394/Desktop/qa bot/routes/animal.json");
// var jsonContent = JSON.parse(contents);
// const inp2 = req.params.parameter
// //const sp = inp2.split(" ");
// //res.writeHead(200,"head")
// var count = 0;
// var arr=["leopard","kangaroo","penguin","elephant","otter","beetle","turtle","Romania"]; 
//     for(var j=0;j<=arr.length;j++)
//     {
//         if(inp2 == arr[j])
//         {
//             const a = jsonContent[arr[j]];
//             count ++;
//             res.send("<h2> Question</h2> &nbsp<h3>"+inp2+ "</h3><br><h2>Answer:</h2> <br><p>"+a+"</p>");
//             res.end();
//         }
//     }
// // }
// })

// app.listen(PORT, () => {


// console.log("app runs on 3003")
// })