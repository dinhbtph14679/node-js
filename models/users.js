import mongoose from "mongoose";

const authSchema =  new mongoose.Schema({
    name:{
        type: String,
        trim:true,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    }
},{timestamps:true})

export default mongoose.model('User', authSchema)