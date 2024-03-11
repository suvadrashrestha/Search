import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';
export default function PostCard({post}) {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
              {
               post.img && <Image  alt='image' className={styles.img} src={post.img} fill priority/>
              }
                </div>
            <span className={styles.date}>2080.12.4</span>
        </div>
        <div className={styles.buttom}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>
              {post.desc}</p>
            <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
        </div>
      
    </div>
  )
}
