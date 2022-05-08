import Link from "next/link";
import styles from "./style.module.scss";

export default function MoreLink({ path }: { path: string }) {
  return (
    <Link href={`/${path}`}>
      <strong className={styles.container}>
        <a>{`more >`}</a>
      </strong>
    </Link>
  );
}
