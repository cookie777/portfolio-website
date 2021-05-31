import { container } from './style.module.scss';

export default function PostContent({ postData }) {
  return (
    <div className={container}>
      <div>
        <span>{postData.date}</span>
      </div>
      <div></div>
      <div className={`markdown`}>
        <h1>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>

    </div>
  )
}