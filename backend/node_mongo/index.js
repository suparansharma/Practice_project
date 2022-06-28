// const express = require('express');
// const cors = require('cors');

// const app = express();

// app.use(cors());


// const users = ["Asad","Moin","Saheb","Susmita","Rohan","Rahim"];

// app.get('/users/:id',(req,res) =>{
//     const id =req.params.id;
//     const name = users[id];
//     res.send({id,name});
// })

// app.get('/',(req,res)=>{
//     const fruit ={
//         product:"ada",
//         price:220
//     }
//     res.send(fruit);
// })

// app.get('/fruit/banana',(req,res)=>{
//     const banana ={
//         name:'banana',
//         product:"ada",
//         price:220,
//         quantity:100
//     }
//     res.send(banana);
// })

// app.listen(3000,()=> console.log("listenig port 3000"));

const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.post('/appUser',(req,res) =>{
    // res.end(JSON.stringify(req.body))  
    // res.send(req.body) 
    console.log("data received",req.body)
    const user = req.body;
    user.id =55;
    res.send(user);
})


const users = ["Asad","Moin","Saheb","Susmita","Rohan","Rahim"];

app.get('/users/:id',(req,res) =>{
    const id =req.params.id;
    const name = users[id];
    res.send({id,name});
})
app.listen(3000,()=> console.log("listenig port 3000"));



