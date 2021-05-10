import Layout from "@components/templates/layout"
import PostList from "@components/templates/post-list"
import { getAllPostsMetaOf } from "@lib/posts"

const subFolder = 'works'

export default function WorksTop({ allPostsMeta }) {
  return (
    <Layout>
      <PostList allPostsMeta={allPostsMeta} subFolder={subFolder} />
    </Layout>

  )
}

export async function getStaticProps() {
  const allPostsMeta = getAllPostsMetaOf(subFolder)
  return {
    props: {
      allPostsMeta
    }
  }
}