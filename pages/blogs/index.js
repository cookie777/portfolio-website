import Tail from "@components/molecule/Tail"
import Layout from "@components/templates/Layout"
import PostList from "@components/organism/PostList"
import { getAllPostsMetaOf } from "@lib/posts"
import LeftTitle from "@components/templates/LeftTitle"


const subFolder = 'blogs'

export default function Blogs({ allPostsMeta }) {

  const headProps = { title: "Blogs" }
  const props = {
    titleSet: {
      main: "Blogs",
      sub: "Notes."
    },
    contents: <PostList
      allPostsMeta={allPostsMeta}
      subFolder={subFolder}
    />,
  }

  return (
    <Layout {...headProps}>
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
