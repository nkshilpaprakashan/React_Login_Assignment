const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
mongoose.connect("mongodb://127.0.0.1:27017/ReactAppnew").then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log("no connected");
    console.log(error);
})