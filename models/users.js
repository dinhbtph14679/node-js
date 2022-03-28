import mongoose from "mongoose";
import crypto , {createHmac} from 'crypto'

const userSchema =  new mongoose.Schema({
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
})

userSchema.methods = {
    encrytPassword(password){
        if (!password) return
        try {
            return createHmac("sha256", "123456").update(password).digest("hex");
        } catch (error) {
            console.log(error);
        }
    }
}

userSchema.pre("save", function(next){
    try {
        this.password = this.encrytPassword(this.password);
        next()
    } catch (error) {
        
    }
})

export default mongoose.model('User', userSchema);