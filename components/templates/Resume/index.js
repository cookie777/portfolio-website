import PostContent from "../PostContent";
import { mobile, desktop } from './style.module.scss';

import { useRouter } from 'next/router'

export function Resume({ postData }) {
  const currentPath = useRouter().asPath

  return currentPath == "/" ? (
    <div>
      <div className={mobile}>
        <h1>About me</h1>
        <p>Pulvinar dapibus ipsum enim, sit. Et eget sollicitudin netus ultricies tortor. Pellentesque hendrerit nulla. Quam eros, amet, arcu varius ut mauris. Leo ac lorem nunc est non.  quam eros, amet, arcu varius ut mauris. Leo ac lorem nunc est non.</p>
      </div>
      <div className={desktop}>
        <div className={`markdown`}>
          <h1>{postData.title}</h1>
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