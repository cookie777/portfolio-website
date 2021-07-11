import { Resume } from "@components/templates/Resume";
import { getSinglePostDataOf } from "@lib/posts";
import Layout from "@components/templates/Layout";
import Tail from "@components/molecule/Tail";

export default function About({ postData }) {
  return (
    <Layout>
      <Resume postData={postData} />
      <Tail message={`About me`} />
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