import User from "@/app/models/userModel";
import connectDB from "@/utils/connect";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req){
    try{
        await connectDB();

        const {email, password} = await req.json();
        console.log({email, password});

        const exists = await User.findOne({$or: [{email}]});
        if(exists){
            return NextResponse.json({message: "Email already exists."}, {status: 500});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({email, password: hashedPassword});
        return (NextResponse.json({message: "User registered."}, {status: 201}))
    }
    catch(error){
        console.log("Error while registering user.", error);
        return (NextResponse.json({message: "Error occured while registering user."}, {status:500}));
    }
}