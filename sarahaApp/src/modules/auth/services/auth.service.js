import userModel from "../../../DB/models/user.model.js"
import bcrypt from 'bcrypt' //to hash passwords
import jwt from "jsonwebtoken"

export const signUpService =  async (req, res, next)=>{

    try{
        const {email, username, password}=req.body
    

    if(await userModel.findOne({email})){
        console.log(req.body);
        

        return res.status(409).json({'messege' : 'user already existed'}) //409 conflict
    }else{
        const hashedPassword = bcrypt.hashSync(password, 10) //hashsync supports non blocking no need for await, takes two pos arguments (plain text which i need to hash, salt round)
        //console.log(hashedPassword);
        //console.log(password);
        await userModel.create({
            email,
            username,
            password:hashedPassword //key value
        }) //takes user data
        console.log(req.body);
        return res.status(201).json({
            'messege' : 'user created successfully'
        }); //created
    }
    }
    catch(e){
        return res.status(400).json(e.messege)
    }
}
export const logInService = async (req, res, next)=>{
    try{
         //email exists
    const {email, password}=req.body
    const user = await userModel.findOne({email}); //returns obj {_id, username, password,...}
    //console.log(email);
    //console.log(password);
    
    if(!user){
        return res.status(404).json({"messege": "invalid email or password"})

    }
    // console.log(user.password);
    // console.log(password);
    
    //password correct
    if(!bcrypt.compareSync(password, user.password) //takes plain text, hashedpass
    ){
        return res.status(404).json({"messege": "invalid email or password"})
    }

    const token = jwt.sign({id: user._id, islogged: true}, "secret_key", {expiresIn: "1h"}) //.sign() creates token and takes 3 arguments: payload, secret key, options
    return res.json({
        'messege' : 'user logged in successfully',
        'token': token
    })
    }
    catch(e){
        return res.status(400).json(e.messege)
    }

}
