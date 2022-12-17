const express = require("express");
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

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

//for post data
app.post('/user',async(req,res)=>{
    const newUser = req.body;
    console.log('adding new user',newUser);
    const result = await userCollection.insertOne(newUser);
    res.send(result);
});


//for get data 
app.get('/user',async(req,res)=>{
    const query = {};
    const cursor = userCollection.find(query)
    const users = await cursor.toArray();
    res.send(users);
})

// for delete data
app.delete('/user/:id',async(req,res)=>{
    const id = req.params.id;
    const query ={_id:ObjectId(id)};
    const result = await userCollection.deleteOne(query);
    res.send(result);
})

// for update data
app.put('/user/:id',async(req,res)=>{
    const id = req.params.id;
    const updatedUser = req.body;
    const filter ={_id:ObjectId(id)};
    const options = {upsert:true};
    const updatedDoc = {
        $set:{
            name:updatedUser.name,
            email:updatedUser.email
        }
    };
    const result = await userCollection.updateOne(filter,updatedDoc,options);
    res.send(result);
})





app.get('/user/:id',async(req,res)=>{
    const id = req.params.id;
    const query = {_id:ObjectId(id)};
    const result = await userCollection.findOne(query);
    res.send(result);
})


}

finally{
    // await client.close();
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