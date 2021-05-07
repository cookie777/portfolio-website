import { getSinglePostDataOf } from '../lib/posts'
import styles from '../styles/works.module.scss'

export default function TestPage({ contentHtml }) {

  return (
    <div className={styles.test}>
      <div dangerouslySetInnerHTML={{ __html: contentHtml}} />
    </div>
      
  )
}

export async function getStaticProps() {
  const {contentHtml} =  await getSinglePostDataOf('works', `project1`)
  return {
    props: {
      contentHtml
    }
  }
}

// import fs from 'fs'
// import path from 'path'
// import { serialize } from 'next-mdx-remote/serialize'
// import { MDXRemote } from 'next-mdx-remote'
// import { renderToString } from 'react-dom/server'
// import styled from 'styled-components'

// const StyledP = styled.p`
// font-size: 40px;
// color: green;
// `;

// const components = {
//   p: StyledP
// }

// export default function TestPage({ rhtml }) {

//   return (
//     <div>
//       <div dangerouslySetInnerHTML={{ __html: rhtml}} />
//     </div>
      
//   )
// }

// export async function getStaticProps() {
//   // MDX text - can be from a local file, database, anywhere
//   const postsDirectory = path.join(process.cwd(), 'posts')
//   const fullPath = path.join(postsDirectory + '/' + `works`, `project1.md`)
//   const source = fs.readFileSync(fullPath, 'utf8')
//   // const source = 'Some **mdx** text, with a component <Heading />'
//   const mdxSource = await serialize(source)
//   const rhtml = renderToString(
//     <MDXRemote {...mdxSource} components={components} />
//   )
  
//   return { props: { rhtml } }
// }

// import fs from 'fs'
// import path from 'path'
// import { serialize } from 'next-mdx-remote/serialize'
// import { MDXRemote } from 'next-mdx-remote'

// import styled from 'styled-components'

// const StyledP = styled.p`
// font-size: 40px;
// color: green;
// `;

// const components = {
//   p: StyledP
// }

// export default function TestPost({ source }) {
//   return(
//   <div className="wrapper">
//     <MDXRemote {...source} components={components} />
//   </div>
//   )
// }

// export async function getStaticProps() {
//   // MDX text - can be from a local file, database, anywhere
//   const postsDirectory = path.join(process.cwd(), 'posts')
//   const fullPath = path.join(postsDirectory + '/' + `works`, `project1.md`)
//   const source = fs.readFileSync(fullPath, 'utf8')
//   // const source = 'Some **mdx** text, with a component <Heading />'
//   const mdxSource = await serialize(source)
//   return { props: { source: mdxSource } }
// }


// import fs from 'fs'
// import path from 'path'

// import ReactMarkdown from "react-markdown";
// import styled from 'styled-components';

// const StyledP = styled.p`
// font-size: 40px;
// color: green;
// `;

// const components = {
//   p: StyledP
// }

// export default function TestPage({ source }) {

//   return (
//     <div>
//       <ReactMarkdown children={source} components={components}/>
//     </div>
      
//   )
// }

// export async function getStaticProps() {
//   const postsDirectory = path.join(process.cwd(), 'posts')
//   const fullPath = path.join(postsDirectory + '/' + `works`, `project1.md`)
//   const source = fs.readFileSync(fullPath, 'utf8')

//   return { props: { source } }
// }



// import fs from 'fs'
// import path from 'path'
// import { MDXProvider } from '@mdx-js/react'
// import { renderToString } from 'react-dom/server'

// import styled from 'styled-components';

// const StyledP = styled.p`
// font-size: 40px;
// color: green;
// `;
// const components = {
//   p: StyledP
// }

// export default function TestPage({ rhtml }) {

//   return (
//     <div>
//       <div dangerouslySetInnerHTML={{ __html: rhtml}} />
//     </div>
      
//   )
// }

// export async function getStaticProps() {
//   const postsDirectory = path.join(process.cwd(), 'posts')
//   const fullPath = path.join(postsDirectory + '/' + `works`, `project1.md`)
//   const source = fs.readFileSync(fullPath, 'utf8')

//   const rhtml = renderToString(
//     <MDXProvider components={components}>
//       {source}
//     </MDXProvider>
//   )


//   return { props: { rhtml } }
// }
