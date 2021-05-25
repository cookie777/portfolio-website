import Layout from "@components/templates/layout"
import PostList from "@components/templates/post-list"
import { getAllPostsMetaOf } from "@lib/posts"

const subFolder = 'blogs'

export default function BlogsTop({ allPostsMeta }) {
  return (
    <Layout>
      <PostList mainTitle={`Blogs`} allPostsMeta={allPostsMeta} subFolder={subFolder} />
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