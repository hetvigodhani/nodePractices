const mongoose=require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/loginRegistrationForm")
    .then(()=>{
        console.log("mongodb connected...");
    })
    .catch(()=>{
        console.log("failed to connect...");
    });

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const collection=new mongoose.model("LogInCollection",LogInSchema);

module.exports=collection;