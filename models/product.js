import mongoose , {ObjectId} from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "http://placeimg.com/640/480"
    },
    category:{
        type:ObjectId,
        ref:'Category'
    }
},{timestamps:true})

export default mongoose.model('Product', productSchema);

