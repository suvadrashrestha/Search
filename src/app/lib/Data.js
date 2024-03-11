import connectdb from "./Connect";
import { User } from "./Models";
import { unstable_noStore as noStore }  from "next/cache";

export const getUser= async (id)=>{
    noStore();
    try{
         await connectdb();
       const user= await User.findById(id);
       return user;
    }
    catch(error){
        throw new Error(error);
    }
}