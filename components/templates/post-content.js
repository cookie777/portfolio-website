export default function PostContent({ postData }) {
  return (
    <div>
      {postData.title}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  )
}