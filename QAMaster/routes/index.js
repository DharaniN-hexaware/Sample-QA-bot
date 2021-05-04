// const express = require('express')
// const router=express.Router()

// router.all('/:apiName',(req,res)=>{
//     console.log(req.params.apiName)
//     axios.get('http://localhost:3002/'+req.params.apiName).then((response)=>{

//     })
//     res.send(req.params.apiName + '\n')
// })

// module.exports=router

// const express = require('express')
// const router = express.Router()
// const axios = require('axios')


// // router.all('/:apiName/:path/:name', (req,res)=>{
// //     console.log(req.params.apiName)
// //     if(registery.services[req.params.apiName]){
// //         axios({
// //             method: req.method,
// //             url: registery.services[req.params.apiName].url + req.params.path+req.params.name,
// //             headers: req.headers,
// //             data: req.body
// //         }).then((response)=>{
// //             res.send(response.data)
// //         })  
// //     }
// //     else{
// //         res.send("Api doest exist")
// //     }

// // })
// router.all('/:apiName/:name', (req,res)=>{
//     console.log(req.params.apiName)
//     var ab=req.params.apiName;
//     var cd = req.params.name
//     if(ab==53302){
//     if(cd == "malaria" || cd == "Ulcer"){
//         axios.get('http://localhost:4007/disease/'+req.params.name).then((response)=>{
//             res.send(response.data)
//         })  
//     }
//     else if(cd=="cricket" || cd=="hockey"){
//         axios.get('http://localhost:4005/sports/'+req.params.name).then((response)=>{
//             res.send(response.data)
//         })
//     }
//     else if(cd=="Indonesia"|| cd=="paris"){
//         axios.get('http://localhost:4003/tourist/'+req.params.apiName+'/'+req.params.name).then((response)=>{
//             res.send(response.data)
//         })
//     }
//     else{
//         res.send("the data you are searching for doesnt exists")
//     }
// }else{
//     res.send("authentication failed");
// }

// })
// module.exports = router








const express = require('express')
//const decodee = require("jwt-decode")
//import jwt_decode from "jwt-decode";
const router = express.Router()
const axios = require('axios')

const jwt = require('jsonwebtoken')
//const registery = require('./registery.json')
//var t = " "
var o = " "
const h ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
const p = "eyJ1c2VyIjp7InVzZXJuYW1lIjoiNTMzMDIiLCJwYXNzd29yZC"
var abc = " "

// router.all('/:apiName/:path/:parameter', (req,res)=>{
//     console.log(req.params.apiName)
//     if(registery.services[req.params.apiName]){
//         axios({
//             method: req.method,
//             url: registery.services[req.params.apiName].url + req.params.path+req.params.parameter,
//             headers: req.headers,
//             data: req.body
//         }).then((response)=>{
//             res.send(response.data)
//         })  
//     }
//     else{
//         res.send("Api doest exist")
//     }

// })
// router.use('/peo',(req,res)=>{

// // });
// var h1 = " "
//         var p1 = " "
router.all('/:auth/:name', function (req, res, next) {
    var un = req.params.auth;
    var ab = req.params.name
    const sp = ab.split(" ");
    var oo = sp.length;
    console.log(oo)
    var arr = ["describe", "what", "tell", "is", "about", "what", "are", "where", "me"]

    for (let i = 0; i < oo; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (sp[i] === arr[j]) {
                console.log(sp[i])
                sp.splice(i, 1)
            }
        }
    }
    console.log(sp)
    abc = sp[0];
    console.log(abc)


    const user = {
        username: un,
        password: 'Dharani@53302'
    }

    jwt.sign({ user }, 'secretkey', (error, token) => {
        o = token
        console.log(token)
        var [header, payload, signature] = token.split(".")
        //res.json({
       // var decoded = decodee(token);
        //console.log(decoded)
        var res = payload.substring(0, 50);

        console.log(res)
        // console.log(header)
        // console.log(payload)
        // console.log(signature)
        // console.log(h)
        // console.log(p)
        let count = 0;
        if (res !== p) {
            count++
        }
        console.log(count)
        if (count === 1) {
            console.log("if condition *******")
            res.sendStatus(403)
        }
        else {
            console.log("else **************")
            next();
        }
        //     token
        // });
    });
 

},
    function (req, res, next) {
        var un = req.params.auth;
      
        console.log("hello")
    
        if (abc == "malaria" || abc == "Ulcer") {
            axios.get('http://localhost:4007/disease/' + abc,{
                headers:{
                    Auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiNTMzMDIiLCJwYXNzd29yZCI6IkRoYXJhbmlANTMzMDIifSwiaWF0IjoxNjE5NzY0ODUwfQ.zzG89V_2Mlmr0VxJPfZdFqkA--hHS4qNxzj6FehYbdc"
                }

            }).then((response) => {
                res.send(response.data)
            })
        }
        else if (abc == "cricket" || abc == "hockey") {
            axios.get('http://localhost:4005/sports/' + abc,{
                headers:{
                    Auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiNTMzMDIiLCJwYXNzd29yZCI6IkRoYXJhbmlANTMzMDIifSwiaWF0IjoxNjE5NzY0ODUwfQ.zzG89V_2Mlmr0VxJPfZdFqkA--hHS4qNxzj6FehYbdc"
                } 
            }).then((response) => {
                res.send(response.data)
            })
        }
        else if (abc == "Indonesia" || abc == "paris") {
            axios.get('http://localhost:4003/tourist/' +  abc,{
                headers:{
                    Auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiNTMzMDIiLCJwYXNzd29yZCI6IkRoYXJhbmlANTMzMDIifSwiaWF0IjoxNjE5NzY0ODUwfQ.zzG89V_2Mlmr0VxJPfZdFqkA--hHS4qNxzj6FehYbdc"
                } 

            }).then((response) => {
                res.send(response.data)
            })
        }
        else {
            res.send("the data you are searching for doesnt exists")
        }
 // }})
    
    
})
module.exports = router