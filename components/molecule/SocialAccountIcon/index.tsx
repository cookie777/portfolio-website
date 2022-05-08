import styles from "./style.module.scss";
import Link from "next/link";
import { SocialMedia } from "types";

const SocialAccount = ({ path, name, account, link, prompt }: SocialMedia) => {
  const iconSize = 48;
  return (
    <div className={styles.container}>
      <Link href={link}>
        <a target="_blank">
          <div className={styles.title}>
            <h3>{name}</h3>
            <img
              src={`/icons/social-account/${path}.svg`}
              alt={name}
              width={iconSize}
              height={iconSize}
            />
          </div>
          <small>{account}</small>
        </a>
      </Link>

      <p>{prompt}</p>
    </div>
  );
};

export default SocialAccount;
