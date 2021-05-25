import PostContent from "./post-content";
import styles from '@styles/about-me.module.scss';

export function AboutMe({ postData }) {
  return (
    <div className={styles.container}>
      <div className={styles.mobile}>
        <h1>About me</h1>
        <p>Pulvinar dapibus ipsum enim, sit. Et eget sollicitudin netus ultricies tortor. Pellentesque hendrerit nulla. Quam eros, amet, arcu varius ut mauris. Leo ac lorem nunc est non.  quam eros, amet, arcu varius ut mauris. Leo ac lorem nunc est non.</p>
      </div>
      <div className={styles.desktop}>
        <PostContent postData={postData} />
      </div>
    </div>
  )
}