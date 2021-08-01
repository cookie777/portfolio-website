import { getAllPostIdsFrom, getSinglePostDataOf } from '@lib/posts'
import PostContent from '@components/organism/PostContent'
import Layout from '@components/templates/Layout'
import Tail from '@components/molecule/Tail'

const subFolder = 'works'

export default function Works({ postData }) {

  const headProps = {
    title: postData.title,
    description: postData.description,
    image: postData.image
  }

  return (
    <Layout {...headProps}>
      <PostContent {...postData} />
      <Tail message={`Works`} />
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

