import MoreLink from "@components/atom/MoreLink";
import { PostData } from "types";
import styles from "./style.module.scss";

export function ResumeHome({ ...postData }: PostData) {
  return (
    <div className={styles.container}>
      <div>
        <h1>{postData.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: postData.descriptionHtml ?? "" }}
        />
        <div className={styles.desktopOff}>
          <MoreLink path={"about"} />
        </div>
      </div>
      <div className={`markdown ${styles.desktopOn}`}>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </div>
  );
}
