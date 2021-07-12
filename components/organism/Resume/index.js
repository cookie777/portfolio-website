import { title } from './style.module.scss';

export function Resume(postData) {
  return (
    <div className={`markdown`}>
      <div className={title}>
        <h2>Summary</h2>
        <div dangerouslySetInnerHTML={{ __html: postData.description }} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  )
}