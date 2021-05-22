import { AboutMe } from "@components/templates/about-me";
import { getSinglePostDataOf } from "@lib/posts";

import styled from 'styled-components'
// export const W = styled.div`
//   /* overflow: auto; */
//   overflow-wrap: normal;
// `


export default function About({ postData }) {
  return (
    // <W>
    <AboutMe postData={postData} />
    // </W>

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