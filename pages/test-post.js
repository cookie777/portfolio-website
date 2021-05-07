import fs from 'fs'
import path from 'path'
import ReactMarkdown from "react-markdown";
import Markdown from "react-markdown";
import styled from 'styled-components';

const StyledP = styled.p`
font-size: 12px;
color: green;
`;

export default function TestPage({ source }) {
  return (
    <div>
      <Markdown
        components={{
          p: StyledP
      }}/>
      <ReactMarkdown children={source}/>
    </div>
  )
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere

  const postsDirectory = path.join(process.cwd(), 'posts')
  const fullPath = path.join(postsDirectory + '/' + `works`, `project1.md`)
  const source = fs.readFileSync(fullPath, 'utf8')

  return { props: { source } }
}