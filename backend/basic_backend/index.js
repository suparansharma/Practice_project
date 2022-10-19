const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// const username = basic_backend;
// const password = xuBF4wCyCKn69S4j;





const uri = "mongodb+srv://basic_backend:xuBF4wCyCKn69S4j@cluster0.awoh24t.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("foodExpress").collection("users");
//   console.log("db connected");
//   client.close();
// });


async function run(){
    try{
        // await client.connect();
        // const userCollection = client.db("foodExpress").collection("users");
        // const user = {name:'user 1',email:'user@gmail.com'};
        // const result = await userCollection.insertOne(user);
        // console.log(`User inserted with id: ${result.insertedId}`)


        await client.connect();
        const userCollection = client.db("foodExpress").collection("users");

        app.get('/user',async(req,res)=>{
            const query = {};
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users);
        })


        app.get('/user/:id',async(req,res)=>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await userCollection.findOne(query);

            res.send(result);
        })


       app.post('/user',async(req,res)=>{
        const newUser = req.body;
        console.log('adding new user',newUser);
        const result = await userCollection.insertOne(newUser);
        res.send({result});
       })


       app.put('/user/:id',async(req,res)=>{
        const id = req.params.id;
        const updateUser = req.body;
        const filter = {_id: ObjectId(id)};
        const options = {upsert:true};
        const updatedDoc ={
            $set:{
                name:updateUser.name,
                email:updateUser.email
            }
        }
        const result = await userCollection.updateOne(filter,updatedDoc,options);

        res.send(result);
    })


       app.delete('/user/:id',async(req,res)=>{
        const id = req.params.id;
        const query = {_id: ObjectId(id)};
        const result = await userCollection.deleteOne(query);
        res.send({result});
       })
    }
    finally{
        // await client.close();
    }
}

run().catch(console.dir);
const users = [
    {id:1,name: "Kattie Turnpike",suite: "Suite 198",city: "Lebsackbury",zipcode: "31428-2260"},
    {id:2,name: "messi md",suite: "Ruite 198",city: "Mebsackbury",zipcode: "31238-2260"},
    {id:3,name: "nyemar Turnpike",suite: "Tuite 199",city: "Nebsackbury",zipcode: "31428-2260"},
    {id:4,name: "Kattie Turnpike",suite: "Suite 196",city: "Oebsackbury",zipcode: "34568-2260"},
    {id:5,name: "Kattie Turnpike",suite: "Suite 197",city: "Pebsackbury",zipcode: "37898-2260"},
    {id:6,name: "Kattie Turnpike",suite: "Suite 193",city: "Sebsackbury",zipcode: "34568-2260"},
]

app.get('/users',(req,res)=>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }

    else{
        res.send(users);
    }
    
})

app.get('/users/:id',(req,res)=>{
    console.log(req.params);
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})


app.post('/users',(req,res)=>{
    console.log('request',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
}) 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})