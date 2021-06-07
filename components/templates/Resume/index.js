import PostContent from "../PostContent";
import { mobile, desktop, title } from './style.module.scss';

import { useRouter } from 'next/router'

export function Resume({ postData }) {
  const currentPath = useRouter().asPath

  return currentPath == "/" ? (
    <div>
      <div className={mobile}>
        <h1>{postData.title}</h1>
        <p>{postData.description}</p>
      </div>
      <div className={desktop}>
        <div className={title}>
          <h1>{postData.title}</h1>
          <p>{postData.description}</p>
        </div>
        <div className={`markdown`}>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </div>
    </div>
  ) : (
    <div>
      <PostContent postData={postData} />
    </div>
  )
}