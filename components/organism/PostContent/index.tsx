import TwitterShareButton from "@components/atom/TwitterShareButton";
import Keywords from "@components/molecule/Keywords";
import { fetchCurrentURL } from "@lib/fetchDomain";

import { PostData } from "types";
import styles from "./style.module.scss";

export default function PostContent(postData: PostData) {
  const currentPath: string = fetchCurrentURL();

  return (
    <div className={styles.container}>
      <h3>{postData.date}</h3>
      <div className={styles.content}>
        <div className={`markdown`}>
          <div className={styles.title}>
            <h1>{postData.title}</h1>
            <Keywords keywords={postData.keywords ?? ""} />
            <h2>Summary</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: postData.descriptionHtml ?? "",
              }}
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
        <TwitterShareButton {...{ title: postData.title, path: currentPath }} />
      </div>
    </div>
  );
}
