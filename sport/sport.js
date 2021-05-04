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








const express=require('express')
const app=express()
const PORT=4005
var fs=require('fs')

app.use(express.json())
app.get('/sport/:name',(req,res,next)=>{
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