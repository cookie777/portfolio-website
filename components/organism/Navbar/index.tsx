import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.scss";
import { NavBarBottomButton } from "@components/atom/NavBarBottomButton";
import { NavBarTopButton } from "@components/atom/NavbarTopButton";

export default function NavigationBar() {
  return (
    <div>
      {/* top  */}
      <div className={styles.top}>
        <div className={styles.logo}>
          <Link href={`/`}>
            <a>
              <Image src="/logo.svg" alt="logo" width="32" height="32" />
              <span>tak8</span>
            </a>
          </Link>
        </div>

        {/* menu */}
        <div className={styles.menu}>
          {/* about, works, blogs, contact */}
          <NavBarTopButton path={"about"} menuName={"About"} />
          <NavBarTopButton path={"works"} menuName={"Works"} />
          <NavBarTopButton path={"blogs"} menuName={"Blogs"} />
          <NavBarTopButton path={"contact"} menuName={"Contact"} />
        </div>
      </div>

      {/* bottom  */}
      <div className={styles.bottom}>
        {menuItems.map(({ path, menuName }) => {
          return (
            <NavBarBottomButton path={path} menuName={menuName} key={path} />
          );
        })}
      </div>
    </div>
  );
}

const menuItems: Array<{ [key: string]: string }> = [
  {
    path: "home",
    menuName: "Home",
  },
  {
    path: "about",
    menuName: "About",
  },
  {
    path: "works",
    menuName: "Works",
  },
  {
    path: "blogs",
    menuName: "Blogs",
  },
  {
    path: "contact",
    menuName: "Contact",
  },
];
