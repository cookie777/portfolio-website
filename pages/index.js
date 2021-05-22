import { getAllPostsMetaOf, getSinglePostDataOf } from '@lib/posts'

// import styles from '@styles/index.module.scss'
import SellingPoint from '@components/molecule/selling-point'
import PostList from '@components/templates/post-list'
import Layout from '@components/templates/layout'
import { AboutMe } from '@components/templates/about-me'

import styled from 'styled-components'
import { device } from '@styles/device'


export const Grid = styled.div`
  display: grid;
  width: 500px;
  grid-template-columns: 1fr;
  @media ${device.desktop} {
    grid-template-columns: fit-content(100px) 1fr;
    column-gap: 160px;
  } 
`


export default function Home({ aboutMePostData, workPostsMeta, blogPostsMeta }) {
  return (
    <Layout>
      <Grid>
        <div>
          <SellingPoint />
          <AboutMe postData={aboutMePostData} />
        </div>
        <div>
          <PostList allPostsMeta={workPostsMeta} subFolder={`works`} />
          <PostList allPostsMeta={blogPostsMeta} subFolder={`blogs`} />
        </div>
      </Grid>
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