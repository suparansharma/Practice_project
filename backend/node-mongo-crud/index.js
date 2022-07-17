const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
// const { MongoClient, ServerApiVersion } = require('mongodb');
const password = "organicPassword";
// const uri = "mongodb+srv://admin:organicPassword@cluster0.hnwppqy.mongodb.net/organicdb?retryWrites=true&w=majority";
const uri =
  "mongodb+srv://organicUser:organicPassword@cluster0.awoh24t.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  // res.send('hello i am working')
  res.sendFile(__dirname + "/index.html");
});

client.connect((err) => {
  const collection = client.db("organicdb").collection("products");

  app.post("/addProduct", (req, res) => {
    const product = req.body;
    console.log(product);
  });

  //   const product = {name:"modhu",price:25, quantity:20 }
  //   collection.insertOne(product)
  //   .then(result =>{
  // console.log("one product added")
  //   })

  // perform actions on the collection object
  //   client.close();
});

app.listen(3000);
