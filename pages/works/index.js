import Tail from "@components/molecule/Tail"
import Layout from "@components/templates/Layout"
import PostList from "@components/organism/PostList"
import { getAllPostsMetaOf } from "@lib/posts"
import LeftTitle from "@components/templates/LeftTitle"


const subFolder = 'works'

export default function WorksTop({ allPostsMeta }) {

  const props = {
    titleSet: {
      main: "Works",
      sub: "Experiences."
    },
    contents: <PostList
      allPostsMeta={allPostsMeta}
      subFolder={subFolder}
    />,
  }

  return (
    <Layout>
      <LeftTitle {...props} />
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
