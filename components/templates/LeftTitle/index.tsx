import styles from "./style.module.scss";
import { ReactNode } from "react";

interface PageTitle {
  titleSet: {
    main: string;
    sub: string;
  };
  contents: ReactNode;
}

// Receive title group, content group
export default function LeftTitle({ titleSet, contents }: PageTitle) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{titleSet.main}</h1>
        <h3>{titleSet.sub}</h3>
      </div>
      <div className={styles.content}>{contents}</div>
    </div>
  );
}
