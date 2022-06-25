const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("thank you for calling me");
})

app.listen(3000,()=> console.log("listenig port 3000"));