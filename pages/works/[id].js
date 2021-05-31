import { getAllPostIdsFrom, getSinglePostDataOf } from '@lib/posts'
import PostContent from '@components/templates/PostContent'
import Layout from '@components/templates/Layout'

const subFolder = 'works'

export default function Works({ postData }) {
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

