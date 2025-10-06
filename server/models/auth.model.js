import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum : ['admin', 'employee'],
        required: true
    }
}, {timestamps:true})

export default mongoose.models.Auth || mongoose.model("Auth", authSchema);