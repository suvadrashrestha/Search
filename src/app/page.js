
"use client"
import styles from './home.module.css';
import Image from 'next/image';

export default function Home() {

  return (


    <div className={styles.container} >
      <div className={styles.textContainer}>
        <h1 className={styles.title}> Create Thoughts Agency</h1>
        <p className={styles.description}> Enim do aute aliquip veniam dolore.s Dolor amet aliquip id cillum sit labore consectetur pariatur duis dolor.unt dolore consectetur consectetur id labo </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src={"/brands.png"} alt='brand' fill />
        </div>

      </div>
      <div className={styles.imgContainer}>

        <Image src={"/hero.gif"} alt='brand' fill />
      </div>

    </div>
  )
}