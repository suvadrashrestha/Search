import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
export const{auth,handlers:{GET,POST},signIn,signOut}=NextAuth(
    {
       providers:[
        GitHub({
  clientId:process.env.GITHUB_ID,
  clientSecret:process.env.GITHUB_SECRET
        }),
        // CredentialsProvider({
        //     name:"Credentials",
        //     credentials:{
        //         username:{type:String,required:true},
        //         password:{type:String,required:true},
        //         dob:{type:String,required:true}
        //     },
        //     authorize:async (credential)=>{
        //         const user={id:1,name:"jeena",password:"admin",dob:"12"};
        //         if(credential?.username===user.name && credential?.password===user.password && credential?.dob==user.dob){
        //             return user;
        //         }
        //         else {
        //             return null;
        //          }
        //         },
        //     secret:process.env.AUTH_SECRET
        // })
       ]
    }
)