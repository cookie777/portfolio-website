import { getAllPostsMetaOf, getSinglePostDataOf } from '@lib/posts'

import styles from '@styles/index.module.scss'
import SellingPoint from '@components/molecule/selling-point'
import PostList from '@components/templates/post-list'
import Layout from '@components/templates/layout'
import { AboutMe } from '@components/templates/about-me'


export default function Home({ aboutMePostData, workPostsMeta, blogPostsMeta }) {
  return (
    <Layout>
      <div className={styles.grid}>
        <div>
          <SellingPoint />
          <AboutMe postData={aboutMePostData} />
        </div>
        <div>
          <PostList mainTitle={`Works`} allPostsMeta={workPostsMeta} subFolder={`works`} />
          <PostList mainTitle={`Blog posts`} allPostsMeta={blogPostsMeta} subFolder={`blogs`} />
        </div>
      </div>
    </Layout>
  )
}


export async function getStaticProps() {
  const aboutMePostData = await getSinglePostDataOf(`common`, `about-me`)
  const workPostsMeta = getAllPostsMetaOf(`works`)
  const blogPostsMeta = getAllPostsMetaOf(`blogs`)
  return {
    props: {
      aboutMePostData,
      workPostsMeta,
      blogPostsMeta
    }
  }
}