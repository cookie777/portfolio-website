import Link from "next/link";
import styles from "./style.module.scss";

interface ShareInfo {
  title: string;
  path: string;
}

export default function TwitterShareButton({ path, title }: ShareInfo) {
  const message: string = `${title}%0A${path}`;
  const twitterIntent: string = `https://twitter.com/intent/tweet?text=`;

  return (
    <div className={styles.container}>
      <Link href={`${twitterIntent}${message}`}>
        <a>
          <img
            src="/icons/social-account/twitter-share.svg"
            alt="share with twitter"
          />
          <p>Share</p>
        </a>
      </Link>
    </div>
  );
}
