//instead of typing node --watch main.js in console, add "dev" or "start": "node --watch main.js" in scripts in package.json =>npm run dev
//es6 => add "type": "module" in package.json
import express from "express";
import bootstrap from "./src/app.controller.js";

//                   app
//src
//   app.controller
//   modules
// ---------auth    for /auth
//             auth.controller.js /register => subrouting
//              services => any logic (functions like signup or login)
//                     auth.services.js
// ---------user
//              user.controller.js
//          services
//                 user.services.js
// ----------messeges
//                  messeges.controller.js
//           services
//                  meseeges.services.js
//es5
///creating my first nodejs project
//1.create main.js
//2.create npm package.json file
//3.npm init -y
//4.npm i express (express is a third-party module)


//creating a server running on port 3000
// const { log } = require('console');
//const express = require('express'); //importing express
const app = express(); //using it in my app
const port = 3001;


//calling bootstrap func
bootstrap(app, express);
 //data naturally are buffered so app.use help to convert it to json which is readable

app.listen(port, ()=>{ //listen takes 2 params (port and callback function)
    console.log(`server is running on port ${port}`)
});















// //middleware req ... res //it's a function created once then called when needed
// //auth, valid, authorize

// function middleware1(req, res, next){
//     if(port==3001){
//         console.log("done");
//         next(); //if this function is ok hoop to the next which is the callback func in (get) endpoint
//     }else{
//         res.json({messege: 'not done'});
//     }

// }

// const users = [];

// //routing is how the server responds to the request

// //GET  retrieve data from server
// //GET HomePage
// app.get('/', middleware1, (req, res, next)=>{ //3 positional params=> req, res, next =>their positions matter
//     //res.send('hello from gdg backend'); //returns (html) to userrrrr or can send a json if you wrote it as an object
//     res.json({'messege':'hello from json '}); //returns array of objects //more secure than send

// });
// //POST send data to server => sign up 
// // app.post('/signup', (req, res, next)=>{
// //     const {email, password}=req.body;
// //     //console.log(req.body);
// //     const user = users.find((user)=>user.email == email && user.password == password); //check if user exists
// //     if(user){
// //         return res.json({'messege': 'user already exists'});
// //     }else{
// //         users.push(req.body);
// //         console.log(users);
// //         return res.json({'messege': 'sign up successful'});
// //     }
// // });

// app.post('/signup', (req,res,next)=>{
//     const {email, password} = req.body;
//     const user = users.find((user)=>user.email == email && user.password == password);
//     if(user){ //truthy value
//         return res.json({'messege': 'user already exists'})
//     } else{
//         users.push(req.body);
//         console.log(users);
//         return res.json({'messege': 'sign up successful'})
//     }
//     // console.log(req.body);
//     // return res.json({'messege': 'signup successful'})
// });
// //PATCH => update partial data
// //PUT => update
// //DELETE 



