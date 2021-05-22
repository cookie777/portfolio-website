import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { components } from "../atom/common"


export default function PostContent({ postData }) {
  return (
    <div>
      {postData.title}
      <br />
      {postData.date}
      <br />
      <ReactMarkdown children={postData.fileContents} components={components} ></ReactMarkdown>

    </div>
  )
}