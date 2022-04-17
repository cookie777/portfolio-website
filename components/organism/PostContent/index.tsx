import TwitterShareButton from "@components/atom/TwitterShareButton";
import Keywords from "@components/molecule/Keywords";
import { fetchCurrentURL } from "@lib/fetchDomain";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { PostData } from "types";
import styles from "./style.module.scss";

export default function PostContent(postData: PostData) {
  const currentPath: string = fetchCurrentURL();
  // postData.likes == null ? "loading" : postData.likes
  const [likes, setlikes] = useState(0);

  useEffect(() => {
    console.log(postData.likes)
    if (postData.likes != null) {
      console.log("like is set!")
      setlikes(postData.likes)
    }
  }, [postData.likes]);

  return (
    <div className={styles.container}>
      <h3>{postData.date}</h3>
      <div className={styles.content}>
        <div>{ postData.likes == null ? "loading" : likes}</div>
        <button onClick={() => setlikes(likes+1)}>
          Click me
        </button>
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
