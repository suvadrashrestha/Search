import { NextResponse } from "next/server";
import connectdb from "../../../../lib/Connect";
import {  User } from "../../../../lib/Models";

export const GET= async (res)=>{
 try{
      await connectdb();
      const users= await User.find();
      return NextResponse.json(users);
 }
 catch(error){
    console.log(error);
 }
}