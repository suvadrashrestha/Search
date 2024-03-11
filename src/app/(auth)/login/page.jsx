import React from 'react'
import {signIn} from '@/app/lib/Auth'
export default async function page() {
    const handleSubmit=async ()=>{
        "use server"
        await signIn('github');
    }
  return (
    <div>
      <form action={handleSubmit}>
        <button>signin</button>
      </form>
    </div>
  )
}
