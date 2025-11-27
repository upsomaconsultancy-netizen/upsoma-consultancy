import mongoose from "mongoose";


 const UserSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        default: undefined  // This prevents empty strings from being saved as email
    },
    contact:{
        type: String,
        required: true,
    },
    service:{
        type:String,
        required:true
    },
    message:{
        type:String,
    },
    created_AT:{
        type:Date,
        default:Date.now
    }
   
    
})

export default mongoose.model("User",UserSchema);