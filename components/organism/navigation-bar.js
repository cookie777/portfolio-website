import Link from 'next/link'
import styles from '@styles/navigation-bar.module.scss'

export default function NavigationBar() {
  return (
    //Fix me! to make link component
    <div>
      <div className={styles.top}>
        <div>
          Logo
        </div>
        <div className={styles.menu}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className={styles.menu}>
          <Link href="/about">
            <a>About me</a>
          </Link>
        </div>
        <div className={styles.menu}>
          <Link href="/works">
            <a>Works</a>
          </Link>
        </div>
        <div className={styles.menu}>
          <Link href="/blogs">
            <a>Blogs</a>
          </Link>
        </div>
        <div className={styles.menu}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>This is bottom nabvar in mobile</p>
      </div>

    </div>
  )
}