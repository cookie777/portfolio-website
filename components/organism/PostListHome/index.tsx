import Link from "next/link";
import MoreLink from "@components/atom/MoreLink";
import styles from "./style.module.scss";
import { PostMeta } from "types";

interface ListData {
  pageTitle: string;
  pageSubTitle: string;
  allPostsMeta: PostMeta[];
  subFolder: string;
}

export default function PostListHome({
  pageTitle,
  pageSubTitle,
  allPostsMeta,
  subFolder,
}: ListData) {
  const maxPosts = 3;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>{pageTitle}</h3>
        <small>{pageSubTitle}</small>
      </div>
      <div className={styles.postContainer}>
        {allPostsMeta
          .slice(0, maxPosts)
          .map(({ id, title, descriptionHtml, image }) => (
            <Link href={`/${subFolder}/${id}`} key={id}>
              <a className={styles.post}>
                <div>
                  <h4>{title}</h4>
                  <div
                    dangerouslySetInnerHTML={{ __html: descriptionHtml ?? "" }}
                  />
                </div>
                <img src={image ?? ""} alt={title} />
              </a>
            </Link>
          ))}
      </div>
      <MoreLink path={subFolder} />
    </div>
  );
}
