const express = require ('express')
const MongoClient = require("mongodb").MongoClient;
// const { MongoClient, ServerApiVersion } = require('mongodb');
const password = 'admin';
const uri = "mongodb+srv://admin:admin@cluster0.hnwppqy.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
app.get('/',(req,res)=>{
    res.send('hello i am working')
})

client.connect(err => {
  const collection = client.db("organicdb").collection("products");
  const product = {name:"modhu",price:25, quantity:20 }
  collection.insertOne(product)
  .then(result =>{
console.log("one product added")
  })
  // perform actions on the collection object
//   client.close();
});


app.listen(3000)