const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://sashong2003:12345@cluster0.gyjje.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log('Connected to MongoDB');
    })
    .catch(()=>{
        console.log("Error")
    })

const app = express();
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Welcome");
})

app.listen(4000,()=>{
    console.log("Server Port 4000")
});