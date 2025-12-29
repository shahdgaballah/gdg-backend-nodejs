import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    initTime: Date
    ,
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
    ,
    content:{
        type: String,
        required: true,
        minLength: [5, "minimum length of content is 5 characters"],
        maxLength: [100, "maximum length of content is 100 characters"],
        trim: true
    },
}, {
    timestamps: true
});

const messageModel = mongoose.models.Message || mongoose.model("Message", messageSchema);

export default messageModel;
