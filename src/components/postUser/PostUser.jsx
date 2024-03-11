import React from 'react'
import styles from './postUser.module.css';
import { getUser } from '../../../lib/Data';
import Image from 'next/image';


export default async function PostUser(props) {
    const user= await getUser(props.userId);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img}  alt='image' src={user.img?user.img:"/noavatar.png"} fill/>
        </div>
        <div  className={styles.user}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
        </div>
      </div>
  
  )
}
