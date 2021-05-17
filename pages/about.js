import { AboutMe } from "@components/templates/about-me";
import { getSinglePostDataOf } from "@lib/posts";

export default function About({ postData }) {
  return (
    <AboutMe postData={postData} />
  )
}

export async function getStaticProps() {
  const postData = await getSinglePostDataOf(`common`, `about-me`)
  return {
    props: {
      postData
    },
    revalidate: 1
  }
}