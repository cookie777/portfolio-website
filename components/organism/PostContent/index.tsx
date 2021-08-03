import Keywords from "@components/molecule/Keywords";
import { PostData } from "types";
import styles from "./style.module.scss";

export default function PostContent(postData: PostData) {
  return (
    <div className={styles.container}>
      <h3>{postData.date}</h3>
      <div></div>

      <div className={`markdown`}>
        <div className={styles.title}>
          <h1>{postData.title}</h1>
          <Keywords keywords={postData.keywords ?? ""} />
          <h2>Summary</h2>
          <div
            dangerouslySetInnerHTML={{ __html: postData.descriptionHtml ?? "" }}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </div>
  );
}
