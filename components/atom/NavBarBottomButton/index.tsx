import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

interface Menu {
  path: string;
  menuName: string;
}

export function NavBarBottomButton({ path, menuName }: Menu) {
  return (
    <Link href={`/${path == "home" ? "" : path}`}>
      <a className={styles.container}>
        <Image
          src={`/icons/navbar/${path}.svg`}
          alt={menuName}
          width={24}
          height={24}
        />
        <p>{menuName}</p>
      </a>
    </Link>
  );
}
