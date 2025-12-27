import mongoose from "mongoose";
//or
//import { Schema, model } from "mongoose";
//schema holds the entity (user) attributes

const userSchema = new mongoose.Schema({ //schema takes two objs
    username:{
        type: String,
        required: true,
        minLength: [2, "minimum length of username is 2 characters"],
        maxLength: [50, "maximum length of username is 50 characters"]
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
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    DOB: Date //shorthand

}, {
    timestamps: true //encoded sequence of chars
})

const userModel = mongoose.models.User || mongoose.model("User", userSchema); //takes two params modelname and schema
// || so that if user exists dont destruct it

export default userModel; //to make crud operations on it