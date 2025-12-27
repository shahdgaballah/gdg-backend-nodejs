import mongoose from "mongoose";    

const dbConnect=async()=>{
    await mongoose.connect("mongodb://localhost:27017/sarahaApp").then(res=>{
        console.log("db connected");
        
    }).catch((e)=>{
        console.log(`failed to connect to db ${e}`);
        
    }); //takes db link
}
export default dbConnect;