// const express = require('express');
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
// const accessTokenSecret = 'youraccesstokensecret1';
// const fs=require('fs');

// const app = express();

// app.use(bodyParser.json());

// var contents = fs.readFileSync("C:/project/tourist/tourism.json");
// //var contents1 = fs.readFileSync("C:/project/disease/diseases.json");
//   var jsonContent = JSON.parse(contents);
//   //var jsonContent1=JSON.parse(contents1);




// const authenticateJWT = (req, res, next) => {
//     const authHeader = req.headers.authorization;
//     const username = req.body.username;
//     const user = { name: username }
  
//     if (authHeader) {
//         const token = authHeader.split(' ')[1];
//         console.log(token)
//         console.log(user)
//         jwt.verify(token, accessTokenSecret, (err, user) => {
//             console.log(accessTokenSecret)
//             console.log("*********")
//             if (err) {
//                 return res.sendStatus(403);
//             }

//             req.user = user;
//             console.log(req.user)
//             next();
//         });
//     } else {
//         res.sendStatus(401);
//     }
// };

// app.get('/tourism',authenticateJWT, (req, res) => {
//     res.json(jsonContent);
// });

// // app.get('/disease',authenticateJWT, (req, res) => {
// //     res.json(jsonContent1);
// // });




// app.listen(4000, () => {
//     console.log('tourism service started on port 4000');
// });

