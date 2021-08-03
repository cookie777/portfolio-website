import Link from "next/link";
import { PostMeta } from "types";
import styles from "./style.module.scss";

interface ListData {
  allPostsMeta: Array<PostMeta>;
  subFolder: string;
}

export default function PostList({ allPostsMeta, subFolder }: ListData) {
  return (
    <div className={styles.container}>
      {allPostsMeta.map(({ id, title, date, descriptionHtml, image }) => (
        <Link href={`/${subFolder}/${id}`} key={id}>
          <a className={styles.post}>
            <div>
              <em>{date}</em>
              <h3>{title}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: descriptionHtml ?? "" }}
              />
            </div>
            <img src={image ?? ""} alt={title} />
          </a>
        </Link>
      ))}
    </div>
  );
}
