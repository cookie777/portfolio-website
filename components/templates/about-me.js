import PostContent from "./post-content";
import styles from '@styles/home-about-me.module.scss';

export function AboutMe({ postData }) {
  return (
    <div>
      <div className={styles.mobile}>
        <p>this is shown in mobile</p>
        <h1>About me</h1>
        <p>Description</p>
        image
      </div>
      <div className={styles.desktop}>
        <p>this is shown in desktop</p>
        <PostContent postData={postData} />
      </div>
    </div>
  )
}