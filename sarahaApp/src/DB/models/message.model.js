import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
    ,
    content:{
        type: String,
        required: true,
        minLength: [2, "minimum length of content is 2 characters"],
        maxLength: [50, "maximum length of content is 50 characters"]
    },
}, {
    timestamps: true
});

const messageModel = mongoose.models.Message || mongoose.model("Message", messageSchema);

export default messageModel;
