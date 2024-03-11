"use client"
import React, { useState } from 'react'
import styles from "./links.module.css";
import NavLink from './navLink/navLink';
import Image from 'next/image';
export default function Links() {
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        },
    ]
   const [isOpen,setIsOpen]=useState(false);
    // we gonna change this 
    const session = true;
    const isAdmin = true;
    return (
        <div className={styles.container}>
        <div className={styles.links}>
            {
                links.map((link,index) => (
                    <NavLink key={index} item={link}  />
                ))
            }

            {
                session ? (<>
                    {isAdmin && <NavLink item={{ path: "/admin", title: "Admin" }} />
            }
            <button className={styles.logout}>Logout</button>        
                </>) : (
                    <NavLink  item={{ path: "/login", title: "Login" }} />
                )
            }
            </div>
            <Image className={styles.menuButton} src={"/menu.png"} alt=''  onClick={()=>setIsOpen((prev)=>!prev)} height={30} width={30} />

            {
                isOpen && 
                <div className={styles.mobileLinks}>
                 {
                    links.map((link,index)=>(
                        <NavLink item={link} key={link.path} />
                    ))
                 }
                </div>
            }
        </div>
    )
}
