const mongoose = require('mongoose');

const FORMSCHEMA= new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true,
        unique: false
    },
   
},
{ timestamps: true }
)

const FormSchema = new mongoose.model("FormSchema",FORMSCHEMA)

module.exports=FormSchema