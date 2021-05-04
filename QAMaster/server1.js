// const express = require('express');
// const jwt = require('jsonwebtoken');
// const bodyParser = require('body-parser');
// //const routes=require('./routes');
// //const accessTokenSecret = 'youraccesstokensecret';
// const app = express();

// // app.use(express.json())
// // app.use('/',routes)

// app.use(bodyParser.json());
// //const app = express();
// const accessTokenSecret = 'youraccesstokensecret';


// const users = [
//     {
//         username: 'dharani',
//         password: 'password123',
    
//     }
// ];

// app.post('/login', (req, res) => {
//     // Read username and password from request body
//     const { username, password } = req.body;

//     // Filter user from the users array by username and password
//     const user = users.find(u => { return u.username === username && u.password === password });

//     if (user) {
//         // Generate an access token
//         const accessToken = jwt.sign({ username: user.username}, accessTokenSecret);

//         res.json({
//             accessToken
//         });
//     } else {
//         res.send('Username or password incorrect');
//     }
// });

// app.listen(4200, () => {
//     console.log('Authentication service started on port 4200');
// });
