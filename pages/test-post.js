import fs from 'fs'
import path from 'path'
import ReactMarkdown from "react-markdown";
import styled from 'styled-components';

const StyledP = styled.p`
font-size: 40px;
color: green;
`;

const components = {
  p: StyledP
}

export default function TestPage({ source }) {
  return (
    <div>
      <ReactMarkdown children={source} components={components}/>
    </div>
  )
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fullPath = path.join(postsDirectory + '/' + `works`, `project1.md`)
  const source = fs.readFileSync(fullPath, 'utf8')

  return { props: { source } }
}