
"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navLink.module.css';
import { usePathname } from 'next/navigation';
export default function NavLink({item}) {
    const pathName=usePathname();
  return (
    <Link    className={`${styles.container} ${pathName===item.path && styles.active}`}  href={item.path}> {item.title}</Link>
  )
}
