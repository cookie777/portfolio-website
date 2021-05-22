import PostContent from "./post-content";
// import styles from '@styles/about-me.module.scss';
import { H1, H2 } from "../atom/common";

export function AboutMe({ postData }) {
  return (
    <div>
      <div >
        <p>this is shown in mobile</p>
        <h1>About me</h1>
        <p>Description</p>
        image
      </div>
      <div>
        <H1>This is h1</H1>
        <H2>This is h2</H2>
        <p>this is shown in desktop</p>
        <PostContent postData={postData} />
      </div>
    </div>
  )
}