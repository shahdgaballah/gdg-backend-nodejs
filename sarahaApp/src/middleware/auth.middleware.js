import jwt from "jsonwebtoken"
import userModel from "../DB/models/user.model.js";
export const authentication = async(req, res,next)=>{
    try{
        //receive token from headers (check if sent)
    //console.log(req.headers);
    
    const {authorization} = req.headers; //or authorization
    //console.log(token);
    
    //verify token
    if(!authorization){
        return res.status(401).json({'messege': 'token required'});
    }


    const decoded = jwt.verify(authorization, "secret_key") // takes token, secret key //decoded is an object
    if(!decoded?.id){
        return res.status(401).json({'messege': 'inavlid token payload'}); //payload returned which contains id
    
    }
    //console.log(decoded);
    //find the user by id
    const user = await userModel.findById(decoded.id);
    req.user = user; //req i added user as a key to it 

    //console.log(user);
    //move to the next()
    return next();

    } catch(e){
        return res.status(401).json(e.messege);

    }
}

export const authorization =(accessRoles)=>{
    return async (req, res, next)=>{
        
        try{
            //console.log(accessRoles);
            //console.log(req.user.role);

            if(!accessRoles.includes(req.user.role)){
                return res.status(401).json({
                    'messege': 'unauthorized user'
                });

            }
            return next();

        } catch(e){
            return res.status(401).json(e.messege);
        }
    }

}