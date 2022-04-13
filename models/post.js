import mongoose from "mongoose";

const Postschame = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    descriptionlow: {
        type: String,
        required: true
    }
},{timestamps:true});

export default mongoose.model('Post',Postschame);