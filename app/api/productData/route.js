import Data from "@/app/models/dataModel";
import connectDB from "@/utils/connect";
import dummyData from "@/app/dummy";
import { NextResponse } from "next/server";

export async function POST(){
    try{
        await connectDB();
        await Data.create({sno: dummyData[1].serialNumber, title: dummyData[1].productName, price: dummyData[1].price, website: dummyData[1].website});
        return (NextResponse.json({message: "Data registered."}, {status: 201}))
    }
    catch(e){
        console.log("Error while adding element.", e);
        return (NextResponse.json({message: "Error occured while registering data."}, {status:500}));
    }
}