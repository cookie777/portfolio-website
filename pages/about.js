import { Resume } from "@components/templates/resume";
import { getSinglePostDataOf } from "@lib/posts";
import Layout from "@components/templates/layout";

export default function About({ postData }) {
  return (
    <Layout>
      <Resume postData={postData} />
    </Layout>
  )
}

export async function getStaticProps() {
  const postData = await getSinglePostDataOf(`common`, `about-me`)
  return {
    props: {
      postData
    }
  }
}