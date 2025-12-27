export const sendMessage = async(req,res,next)=>{
    try{
        return res.status(200).json({"message": "message sent"})
    } catch(e){
        return res.status(400).json({"error": e.message})
    }
}