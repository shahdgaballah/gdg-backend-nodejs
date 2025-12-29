import messageModel from '../../../DB/models/message.model.js';
import userModel from '../../../DB/models/user.model.js'
export const sendMessage = async(req,res,next)=>{
    try{
        const {receiverId, content} = req.body;
        if(!receiverId || !content){
            return res.status(400).json({message: "receiverId and content are required"});
        }
        if(!await userModel.findById(receiverId)){
            return res.status(400).json({message: "this user is not found"});
        }
        const newMessage = await messageModel.create({
            receiverId,
            content,
            initTime: Date.now()
        });
        return res.status(200).json({message: "message sent", newMessage});
        
    
    } catch(e){
        return res.status(400).json({"error": e.message})
    }
}