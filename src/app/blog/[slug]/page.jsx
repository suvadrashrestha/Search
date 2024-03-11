
import React from 'react'
import Image from 'next/image';
import styles from './sinlglePagePost.module.css';
import PostUser from '@/components/postUser/postUser';
 
// export const generateMetadata= async ({params})=>{
//   const {slug}=params;
//   const post= await getPost(slug);
//   return {
//    title:post.title,
//    description:post.desc,
//     };
// }
export const getPost= async (id)=>{
  console.log(id);
  
  try{
  const res=  await fetch(`http://localhost:3000/api/posts/${id}`);
  const post= await res.json();
 return post
}
  catch(error){
    console.log(error);
  }
}

export default async  function SinglePagePost({params}) {
  const {slug}= params;
  // await generateMetadata(slug); 
  const post = await getPost(slug);
  
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {
        post.img && <Image  alt='image' className={styles.img} src={post.img} fill priority/>
        }
      </div>

      <div className={styles.textContainer}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.detail}>
       
      <PostUser userId={post.userId}/>
      <div className={styles.detailText}>
        <span className={styles.detailTitle}>Publishes</span>
        <span className={styles.detailValue}>2080.6.7</span>
      </div>
      </div>
      <div className={styles.content}>
        {post.desc}
      </div>
      </div>
    </div>
  )
}
