import Layout from "@components/templates/Layout"
import PostList from "@components/templates/PostList/post-list"
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