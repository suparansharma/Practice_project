try {


    const express = require ('express');
    const bodyParser = require("body-parser")
    const cors = require('cors');
    const port = 5000
    const app = express()
    
    app.use(cors());
    app.use(bodyParser.json());
    
    
    const pass = "arabian arabian123 arabianpassword1234";
    // const uri = "mongodb+srv://arabian123:arabianpassword1234@cluster0.awoh24t.mongodb.net/?retryWrites=true&w=majority";
    // const bookings = client.db("burjAlArob").collection("bookings");
    
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://arabian123:arabianpassword1234@cluster0.awoh24t.mongodb.net/burjAlArob?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
        console.log("finding error",err);
        const bookings = client.db("burjAlArob").collection("bookings");
    
        app.post('/addBooking',(req,res) =>{
         
    
            try {
                const newBooking = req.body;
                bookings.insertOne(newBooking)
                .then(result =>{
                    console.log(result);
                //    res.send(result.insertedCount > 0);
                })
                console.log(newBooking);
                // adddlert("Welcome guest!");
              }
              catch(err) {
                console.log(err)
                // document.getElementById("demo").innerHTML = err.message;
              }
        })
    });
    
    
    
    
    
    
    app.get('/', (req, res) => {
      res.send('Hello World!')
    })
    
    app.listen(port)
    
  }
  catch(err) {

    console.log("last main",err)
   
  }






