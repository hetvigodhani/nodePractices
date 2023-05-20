const mongoose=require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/loginRegistrationForm")
    .then(()=>{
        console.log("mongodb connected...");
    })
    .catch(()=>{
        console.log("failed to connect...");
    });

const empSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
});

const Register=new mongoose.model("Register",empSchema);

module.exports=Register;