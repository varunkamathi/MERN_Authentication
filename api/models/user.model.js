import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required : ture ,
        unique : ture ,
    },
    email:{
        type: String,
        required : ture ,
        unique : ture ,
    },
    password:{
        type: String,
        required : ture ,
    }
}, {timestamps : ture});

const User = mongoose.model('User', userSchema);

export default User;