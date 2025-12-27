import userModel from "../../DB/models/user.model.js";
import bcrypt from "bcrypt"
export const getuserProfile =  (req, res, next)=>{
    //console.log(req.user);
    try{
    const {username, email, _id}=req.user;

    return res.status(200).json({"user profile data": {username, email, _id} })

    } catch(e){
        return res.status(400).json(e.messege)

    }
}

export const updateuserProfile=async(req, res, next)=>{
    try{
        console.log(req.body);
        const user = await userModel.findByIdAndUpdate(req.user._id, req.body, {new: true, runValidators: true}) //takes the id, req.body which will be updated, options 
        if(!user){
            return res.status(404).json({
            "messege": "user not found",
        });
        }
        return res.status(200).json({
            "messege": "profile updated",
            //"user": user
        });
        
    }catch(e){
        return res.status(400).json(e.messege);
    }
}

export const updatePassword=async(req, res, next)=>{
    try{
        const {oldPassword, newPassword} = req.body;
        //console.log({oldPassword, newPassword});

        if(!newPassword || !oldPassword){
            return res.status(400).json({
                "messege": "old password and new password required"
        });
        }

        if(!bcrypt.compareSync(oldPassword, req.user.password)){
            return res.status(400).json({
                "messege": "old password is not correct"
        });
        }

        const hashedPassword = bcrypt.hashSync(newPassword, 10);
        const user = await userModel.findByIdAndUpdate(req.user._id, {password: hashedPassword}, {new: true})
        if(!user){
            return res.status(404).json({
            "messege": "user not found",
        });
        }
        return res.status(200).json({
            "messege": "password updated",
        });
        
    }catch(e){
        return res.status(400).json(e.messege);
    }
}