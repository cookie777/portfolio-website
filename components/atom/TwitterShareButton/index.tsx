import Link from "next/link";
import styles from "./style.module.scss";

export default function TwitterShareButton({ path }: { path: string }) {
  const message: string = `Share%20this%20article%0A%0A${path}`;
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
