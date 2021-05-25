import Link from 'next/link'
import styles from '@styles/navigation-bar.module.scss'
import { NavigationBottomButton } from '@components/atom/navigation-bottom-button'
import { NavigationTopButton } from '@components/atom/navigation-top-button'

export default function NavigationBar() {
  return (
    //Fix me! to make link component
    <div>
      <div className={styles.top}>

        {/* logo */}
        <div className={styles.logo}>
          <Link href={`/`}>
            tak8
          </Link>
        </div>

        {/* menu */}
        <div className={styles.menu}>
          {/* about, works, blogs, contact */}
          <NavigationTopButton path={"about"} menuName={"About"} />
          <div className={styles.space}></div>
          <NavigationTopButton path={"works"} menuName={"Works"} />
          <NavigationTopButton path={"blogs"} menuName={"Blogs"} />
          <NavigationTopButton path={"contact"} menuName={"Contact"} />
        </div>
      </div>

      {/* bottom menus */}
      <div className={styles.bottom}>
        {menuItems.map(({ path, menuName }) => {
          return <NavigationBottomButton path={path} menuName={menuName} key={path} />
        })}
      </div>

    </div >
  )
}

const menuItems = [
  {
    path: "home",
    menuName: "Home"
  },
  {
    path: "about",
    menuName: "About"
  },
  {
    path: "works",
    menuName: "Works"
  },
  {
    path: "blogs",
    menuName: "Blogs"
  },
  {
    path: "contact",
    menuName: "Contact"
  },
]