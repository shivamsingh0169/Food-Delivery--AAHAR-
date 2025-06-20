import mongoose from "mongoose";


export const connectDB = async () =>{
    await mongoose.connect(`mongodb+srv://SinghStack:Shivam1Kumar@cluster0.oymxptn.mongodb.net/food-del`).then(()=>console.log("DB Connected"));
}