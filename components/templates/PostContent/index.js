
import { container, title } from './style.module.scss';


export default function PostContent({ postData }) {
  return (
    <div className={container}>

      <h3>{postData.date}</h3>
      <div></div>

      <div className={`markdown`}>
        <div className={title}>
          <h1>{postData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postData.description }} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </div>
  )
}