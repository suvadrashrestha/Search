import { NextResponse } from "next/server";
import connectdb from "../../../../lib/Connect"
import { Post } from "../../../../lib/Models";

export const GET= async (request)=>{
  try{
    await connectdb();
    const posts= await Post.find();
    return NextResponse.json(posts)

  }
  catch(error){
    console.log(error)
  }
}