import Tail from "@components/molecule/Tail"
import Layout from "@components/templates/Layout"
import PostList from "@components/templates/PostList/post-list"
import { getAllPostsMetaOf } from "@lib/posts"


const subFolder = 'works'

export default function WorksTop({ allPostsMeta }) {
  return (
    <Layout>
      <PostList
        pageTitle={`Works`}
        pageSubTitle={`Experiences`}
        allPostsMeta={allPostsMeta}
        subFolder={subFolder}
      />
      <Tail message={`${allPostsMeta.length} articles posted.`} />
    </Layout>

  )
}

export async function getStaticProps() {
  const allPostsMeta = await getAllPostsMetaOf(subFolder)
  return {
    props: {
      allPostsMeta
    }
  }
}
