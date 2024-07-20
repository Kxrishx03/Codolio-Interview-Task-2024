const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

//IMPORTING ROUTE
const  transactionRoutes = require("./routes/transactionRoutes");

//connect to db
mongoose.connect(process.env.MONGO_URI,{
    dbName: 'transactionsDB',
  })
.then(()=>{
    console.log("Connection succesfull");
    app.listen(PORT || 5000,()=>{
        console.log("Running on : " + PORT);
    })
});


const cors = require("cors");
app.use(cors());
//app
app.use(express.json());
app.use("/api/transactions",transactionRoutes);



