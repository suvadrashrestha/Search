 import styles from "./navbar.module.css";
import React from 'react'
import Links from './links/Links'
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
    <Link href={"/"} className={styles.logo}>
        logo
    </Link>
    <div>
      <Links/>
    </div>
    </div>
  )
}
