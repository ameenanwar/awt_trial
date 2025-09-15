const mongoose=require("mongoose");
const User_Schema=mongoose.Schema({
    username:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }

})

const User=mongoose.model("User",User_Schema);
module.exports=User;