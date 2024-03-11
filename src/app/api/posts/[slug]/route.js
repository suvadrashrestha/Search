import { NextResponse } from "next/server";
import connectdb from "../../../../../lib/Connect";
import { Post } from "../../../../../lib/Models";

export const GET= async (request,{params})=>{
    const {slug}=params;
    console.log(slug);
    try{
     await connectdb();
     const post=await Post.findOne({slug:slug});
     return NextResponse.json(post);
    }
    catch(error){
        throw new Error(error);
    }

}