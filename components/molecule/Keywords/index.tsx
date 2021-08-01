import styles from "./style.module.scss";

export default function Keywords({ keywords }: { keywords: string }) {
  const keyArr: Array<string> = keywords.split(",").map((w) => w.trim());
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {keyArr.map((word: string, id: number) => (
          <span key={id}>{word}</span>
        ))}
      </div>
    </div>
  );
}
