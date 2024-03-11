import Image from "next/image";
import {auth, signIn,signOut} from "@/app/auth";
import { redirect } from "next/navigation";
import Link from "next/link";


export default async function Home() {
  const session= await auth();
  // if(!session){
  //   redirect('/api/auth/signin');
  // }
  const handleSubmit= async ()=>{
    "use server"
    await signIn('github');
   
  }
  console.log(session);

  
  return (
   <>
   <form action={handleSubmit}>
   <button >signin</button>
   </form>

    
    {/* <div>protected page</div>
    <Link href={"/api/auth/signout"}>SignOut</Link> */}
   </>
    
  );
}
