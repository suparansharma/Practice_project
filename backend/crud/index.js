const express = require ('express');
const bodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

const uri ="mongodb+srv://organicUser:organicPassword@cluster0.awoh24t.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true,useUnifiedTopology: true,});
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

client.connect(err => {
    const productCollection = client.db("organicdb").collection("products");


    
    app.post("/addProduct", (req, res) => {
        const product = req.body;
        productCollection.insertOne(product)
        .then(result=>{
          console.log("to try this")
          res.send("success");
        //   res.redirect('/');
        })
        console.log(product);
      });



    app.get("/products",(req,res)=>{
        productCollection.find({}).limit(4)
        .toArray((err,documents)=>{
            res.send(documents);
        })
    })


    app.get('/product/:id',(req,res)=>{
      productCollection.find({_id: ObjectId(req.params.id)})
      .toArray((err, documents)=>{
        res.send(documents[0]);
      })
    })

    app.delete('/delete/:id',(req,res)=>{
        productCollection.deleteOne({_id: ObjectId(req.params.id)})
        .then(result=>{
          console.log(result)
        })
        })
   
  });


app.listen(3000);