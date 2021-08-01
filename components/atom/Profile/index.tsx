import styles from "./style.module.scss";

export default function Profile({ size }: { size: number }) {
  return (
    <div className={styles.container}>
      <img src="/profile.webp" alt="profile" width={size} />
    </div>
  );
}
