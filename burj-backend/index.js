const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 4000


const app = express()
app.use(cors());
app.use(bodyParser.json());

const allUsPass = "burjAL  book brujal brujalPassword123"


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://brujal:brujalPassword123@cluster0.awoh24t.mongodb.net/burjAL?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("burjAL").collection("book");
  app.post('/addBooking',(req,res) =>{
    const newBooking = req.body;
    collection.insertOne(newBooking)
    .then(result =>{
        console.log(result);
    })
    console.log(newBooking);
})
  // perform actions on the collection object
//   console.log("db connected");
//   client.close();
});


// app.post('/addBooking',(req,res) =>{
//     const newBooking = req.body;
//     console.log(newBooking);
// })




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port)