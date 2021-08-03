import Link from "next/link";
import styles from "./style.module.scss";

export default function MoreLink({ path }: { path: string }) {
  return (
    <Link href={`/${path}`}>
      <a className={styles.container}>
        <h4>{`more >`}</h4>
      </a>
    </Link>
  );
}
