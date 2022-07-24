import { createHmac } from "crypto";
import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    name:{
        type: String,
        minlength: 4,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        required: true
    },
    // avatar:{
    //     type: String
    // },
    // status:{
    //     type: Number
    // },
    salt:{
        type: String
    },
    role:{
        type: Number,
        default: 0
    }
},{timestamps: true});

userSchema.methods = {
    authenticate(password){
        return this.password = this.encrytPassword(password)
    },
    encrytPassword(password){
        if(!password) return
        try{
            return createHmac("sha256","abc").update(password).digest("hex");
        }catch(error){
            console.log(error);
        }
    }
}

//? 
userSchema.pre("save", function(next){
    userSchema.password = this.encrytPassword(this.password);
    next();
})

export default mongoose.model('User', userSchema);