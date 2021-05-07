import fs from 'fs'
import path from 'path'
import styled from 'styled-components';
import ReactMarkdown from "react-markdown";


const StyledP = styled.p`
  font-size: 32px;
  color: green;
`;
// const StyledP = props => <p style={{
//   fontSize: '40px', 
//   lineHeight: 1.6,
//   color: 'red',
// }} />
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
  // MDX text - can be from a local file, database, anywhere

  const postsDirectory = path.join(process.cwd(), 'posts')
  const fullPath = path.join(postsDirectory + '/' + `works`, `project1.md`)
  const source = fs.readFileSync(fullPath, 'utf8')

  return { props: { source } }
}