
import { container, desktop } from './style.module.scss';

export function ResumeHome(postData) {
  return (
    <div className={container}>
      <div>
        <h1>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.descriptionHtml }} />
      </div>
      <div className={`markdown ${desktop}`}>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </div >
  )
}