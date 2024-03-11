"use server"
import { revalidatePath } from "next/cache";
import connectdb from "./Connect";
import { Post } from "./Models";

export const  addPost= async (formData)=>{
    "use server"
   
    // const title=formData.get("title");
    // const desc=formData.get("desc");
    // const slug=formData.get("slug");
    const{title,desc,slug,userId}=Object.fromEntries(formData);
     
    console.log(title,desc,slug,userId);
    try{
       await  connectdb();
        const newPost=new Post({
            title,
            desc,
            slug,
            userId,
        })
        await newPost.save();
      
        console.log("saved to db");
          revalidatePath("/blog");
    }catch(err){
        throw new Error(err);
    }
}



export const deletePost= async (formData)=>{
  
    const{id}=Object.fromEntries(formData);
     
   
    try{
         await connectdb();
        
        await Post.findByIdAndDelete(id);
      
        console.log("deleted from db");
        revalidatePath("/blog");
    }catch(err){
        throw new Error(err);
    }

}