import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const {auth,handlers:{GET,POST},signIn,signOut}=NextAuth({
    providers:[
       GitHub({
        clientId:"ff2d8a4d243adca8e1b6",
        clientSecret:"084ebf2354d555490f8ebb8d9fe990cd75b0df7f"
       })
    ]
})