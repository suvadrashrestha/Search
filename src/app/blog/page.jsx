import React from 'react'
import styles from './blog.module.css';
import PostCard from '@/components/postCard/PostCard';


const getData= async ()=>{
   const res = await fetch("http://localhost:3000/api/post",
   {
    cache:"no-store",
    next:{revalidate:300}
   }
   )
   if(!res.ok){
    throw new Error("some error occured");
   }
   return res.json();
}

export default  async function BlogPage() {
 const posts= await getData();
  return (
    <div className={styles.container}>
      {
        posts.map((post)=>(
          <div key={post.userId} className={styles.post}>
            <h1>{post.userId}</h1>
          <PostCard post={post}/>
          </div>
        ))
      }
    </div>
  )
}
