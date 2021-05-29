import { getAllPostIdsFrom, getSinglePostDataOf } from '@lib/posts'
import PostContent from '@components/templates/post-content'
import Layout from '@components/templates/layout'

const subFolder = 'blogs'

export default function Blogs({ postData }) {
  return (
    <Layout>
      <PostContent postData={postData} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIdsFrom(subFolder)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getSinglePostDataOf(subFolder, params.id)
  return {
    props: {
      postData
    }
  }
}

