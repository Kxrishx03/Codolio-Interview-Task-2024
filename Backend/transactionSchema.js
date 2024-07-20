const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    title:{
        type:String,
        required :true,
    },
    note:{
        type:String,
        required:true,
    },
    currency:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    dateTime:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
    }, 
    {timestamps:true});


module.exports = mongoose.model("Transaction",transactionSchema);