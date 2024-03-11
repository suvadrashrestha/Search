import { NextResponse } from "next/server";
import connectdb from "../../../../../lib/Connect";
import { User } from "../../../../../lib/Models";

export const  GET= async ({request},{params})=>{
    console.log(request);
    console.log("jsbc")
//     const {slug}=params;
//     try{
//    await connectdb();
//    const user= await User.findById(slug);
//    return NextResponse.json(user);
//     }
//     catch(error){
//         console.log(error);
//     }

}