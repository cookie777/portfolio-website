import { PostData } from "types";
import styles from "./style.module.scss";

export function Resume({ ...postData }: PostData) {
  return (
    <div className={`markdown`}>
      <div className={styles.title}>
        <h2>Summary</h2>
        <div
          dangerouslySetInnerHTML={{ __html: postData.descriptionHtml ?? "" }}
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}
