const express = require("express");
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;


//use middleware

app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://dbuser1:W1L1HiUNVMAgK5cB@cluster0.eilfw7v.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
try{
await client.connect();
const userCollection = client.db("foodExpress").collection("user");
// const user={name:'Mahi alom Mahi',email:'mahimahi@gmail.com'};
// const result = await userCollection.insertOne(user);
// console.log(`user insert with id : ${result.insertedId}`);


app.post('/user',(req,res)=>{
    const newUser = req.body;
    console.log('adding new user',newUser);
    res.send({result:'success'});
});
}

finally{
    await client.close();
}
}
run().catch(console.dir);


app.get('/',(req,res) =>{
    res.send("Hello word ");
});

app.listen(port,()=>{
    console.log('this is surver site')
})



//user:dbuser1
//password:W1L1HiUNVMAgK5cB