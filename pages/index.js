import { getAllPostsMetaOf, getSinglePostDataOf } from '@lib/posts'

import styles from './style.module.scss'
import SellingPoint from '@components/molecule/SellingPoint'
import PostList from '@components/templates/PostList/post-list'
import Layout from '@components/templates/Layout'
import { Resume } from '@components/templates/Resume'
import Network from '@components/organism/Network'
import Message from '@components/organism/Message'


export default function Home({ aboutMePostData, workPostsMeta, blogPostsMeta }) {
  return (
    <Layout>
      <div className={styles.grid}>
        <div>
          <SellingPoint />
          <Resume postData={aboutMePostData} />
          <Network />
          <Message />
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