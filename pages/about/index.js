import { Resume } from "@components/organism/Resume";
import { getSinglePostDataOf } from "@lib/posts";
import Layout from "@components/templates/Layout";
import Tail from "@components/molecule/Tail";
import LeftTitle from "@components/templates/LeftTitle";

export default function About({ postData }) {

  const props = {
    titleSet: {
      main: "About",
      sub: "Me."
    },
    contents: <Resume {...postData} />,
  }


  return (
    <Layout>
      <LeftTitle {...props} />
      <Tail message={`Resume`} />
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