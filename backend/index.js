require("dotenv").config()
const mongoose=require("mongoose")
const express=require('express')

// import Here All Router and Express
const formdata= require("./routers/form")

// here core and other node connectivity and ports
const cors=require("cors")
const app = express()
const port = process.env.PORT || 8080


// connect to MongoDb server 

const ConnectDB=async()=>{
    try {
        const conn= await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongo db is connected :`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

//  Home route 

app.get('/',async (req, res) =>{
    res.send("backend Created By Sudhir Nandane ")
})

// here we connet all routers to main app 

app.use(cors(),express.json())
app.use("/formdata",formdata)


// start this application when user start the server
ConnectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`listening on port ${port}`);
    })
})