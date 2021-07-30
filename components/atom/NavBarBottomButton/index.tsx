import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

interface Menu {
  path: string;
  menuName: string;
}

export function NavBarBottomButton(menu: Menu) {
  const path = menu.path;
  const name = menu.menuName;

  return (
    <Link href={`/${path == "home" ? "" : path}`}>
      <a className={styles.container}>
        <Image
          src={`/icons/navbar/${path}.svg`}
          alt={name}
          width={24}
          height={24}
        />
        <p>{name}</p>
      </a>
    </Link>
  );
}
