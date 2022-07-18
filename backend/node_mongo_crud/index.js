const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();


const uri =
  "mongodb+srv://organicUser:organicPassword@cluster0.awoh24t.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
    const collection = client.db("organicdb").collection("products");
    console.log("dabase connected")
    app.post("/addProduct", (req, res) => {
      const product = req.body;
      console.log(product);
    });
  
  });

app.get('/',(req,res)=>{
    res.send("hello i am working")
})

app.listen(3000);