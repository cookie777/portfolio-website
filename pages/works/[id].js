// import { getAllPostIdsFrom, getSinglePostDataOf } from '../../lib/posts'

// import styles from '../../styles/works.module.scss'

// export default function Works({postData}) {

//   return (
//     <div className={styles.test}>
//       {postData.title}
//       <br />
//       {postData.id}
//       <br />
//       {postData.date}
//       <br />
//       <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
//       <p>test</p>
//     </div>
//   )
// }

// export async function getStaticPaths() {
//   const paths = getAllPostIdsFrom('works')
//   return {
//     paths,
//     fallback: false
//   }
// }

// export async function getStaticProps({ params }) {
//   const postData =  await getSinglePostDataOf('works', params.id)
//   return {
//     props: {
//       postData
//     }
//   }
// }



import fs from 'fs'
import path from 'path'
import { getAllPostIdsFrom } from '../../lib/posts'

import ReactMarkdown from "react-markdown";
import styled from 'styled-components';

const StyledP = styled.p`
font-size: 40px;
color: green;
`;

const components = {
  p: StyledP
}

export default function Works({postData}) {

  return (
    <div>
      <ReactMarkdown children={postData} components={components}/>
      <p>test</p>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIdsFrom('works')
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fullPath = path.join(postsDirectory + '/' + `works`, `${params.id}.md`)
  const postData = fs.readFileSync(fullPath, 'utf8')
  return {
    props: {
      postData
    }
  }
}