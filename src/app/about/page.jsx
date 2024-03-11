import Image from 'next/image'
import React from 'react'
import styles from './about.module.css';
export const metadata = {
  title: "About page",
  description: "About page description",
};
export default function AboutPage() {
  return (
    <div className={styles.container}>
     <div className={styles.textContainer}>
      <h2 className={styles.subTitle}> About Agency</h2>
       <h1 className={styles.title}> We create digital ideas that are bigger, bolder, braver and better.</h1>
       <p className={styles.description}> Commodo enim sint nisi ullamco cupidatat dolor aliqua incididunt labore exercitation. Est nulla adrehenderit laborum qui quis occaecat fugiat velit velit. Mole laboris id irure non.</p>

       <div className={styles.boxes}>
        <div className={styles.box}>
          <h1>10 K++</h1>
          <p>Year of experience</p>
        </div>
        <div className={styles.box}>
          <h1 >10 K++</h1>
          <p>Year of experience</p>
        </div>
        <div className={styles.box}>
          <h1 >10 K++</h1>
          <p>Year of experience</p>
        </div>
       </div>
     </div>
     
     <div className={styles.imgContainer}>
      <Image    className={styles.img} src={"/about.png"} alt="about" fill priority />
     </div>
    </div>
  )
}
