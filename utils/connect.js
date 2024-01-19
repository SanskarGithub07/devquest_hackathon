import mongoose from "mongoose";

export default async function connectDB(){
    try{
        await mongoose.connect("mongodb+srv://id996:test123@devquest.joprr8m.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser : true});
        console.log("Connected to DB");
    }
    catch(error){
        console.log("Error while connecting.", error);
    }

}