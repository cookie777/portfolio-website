import Link from 'next/link'
import styles from '@styles/navigation-bar.module.scss'
import { NavigationBottomButton } from '@components/atom/navigation-bottom-button'
import { NavigationTopButton } from '@components/atom/navigation-top-button'

export default function NavigationBar() {
  return (
    //Fix me! to make link component
    <div>
      <div className={styles.top}>

        <div className={styles.left}>
          {/* logo */}
          <div className={styles.logo}>
            tak8
          </div>

          {/* about */}
          {menuItems.slice(1, 2).map(({ path, menuName }) => {
            return (
              <NavigationTopButton path={path} menuName={menuName} key={path} />
            )
          })}
        </div>

        <div className={styles.right}>
          {/* works, blogs, contact */}
          {menuItems.slice(2).map(({ path, menuName }) => {
            return (
              <NavigationTopButton path={path} menuName={menuName} key={path} />
            )
          })}
        </div>

      </div>

      {/* bottom menus */}
      <div className={styles.bottom}>
        {menuItems.map(({ path, menuName }) => {
          return <NavigationBottomButton path={path} menuName={menuName} key={path} />
        })}
      </div>

    </div>
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