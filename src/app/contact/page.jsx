import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'

export const metadata = {
  title: " Contact Page",
  description: "Contact Description",
};
export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
       <Image className={styles.img}  src={"/contact.png"} alt='image' fill/>
      </div>
      <div className={styles.formContainer}>
      <form action={""} className={styles.form} >

     <input type='text' placeholder='Name and Surname'/>
     <input type='text' placeholder='Email Address'/>
     <input type='text' placeholder='Phone Number(Optional)'/>
    <textarea
     name='' 
     id=''
      cols={"30"}
       rows={"8"}
        placeholder='Message'/>
     <button>send</button>
      </form>
      </div>
      
    </div>
  )
}
