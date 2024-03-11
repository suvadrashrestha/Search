import styles from './footer.module.css';
import React from 'react'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}> Dev</div>
      <div className={styles.text}>
        Dev creative thoughts agency  &copy; All rights reserved. {/* &cpoy;-> copyright symbol */}
      </div>
    </div>
  )
}
